// ============================================================
// Deal Creation — Overview Mode prototype (plain JS, no build)
// Models the sign-off table Miguel shared: what each deal line
// status offers, where each action lands, and which actions
// happen off the line's own schedule (not from the dropdown).
// ============================================================

// -------------------- Status model --------------------
// key = internal status; label = shown to user; actions run
// from the deal line status chip dropdown.
const STATUS = {
  new:        { label: 'New',              editable: true  },
  pending:    { label: 'Pending approval', editable: true  },
  rejected:   { label: 'Rejected',         editable: true  },
  approved:   { label: 'Approved',         editable: true  },
  live:       { label: 'Live',             editable: true  },
  cancelled:  { label: 'Cancelled',        editable: false },
  terminated: { label: 'Terminated',       editable: false },
  ended:      { label: 'Ended',            editable: false },
};

// Straight from the signed-off table. `reaches` = 'this' | 'all'.
// 'all' means the action would apply to every deal line in the campaign.
const ACTIONS = {
  new: [
    { label: 'Send for approval', to: 'pending',  kind: 'primary', reaches: 'this' },
    { label: 'Confirm',           to: 'approved', kind: 'brand',   reaches: 'all'  },
  ],
  pending: [
    { label: 'Save changes',      to: 'pending',  kind: 'primary', reaches: 'this' },
    { label: 'Confirm',           to: 'approved', kind: 'brand',   reaches: 'all'  },
    { label: 'Reject',            to: 'rejected', kind: 'danger',  reaches: 'all'  },
  ],
  rejected: [
    { label: 'Save changes',      to: 'rejected', kind: 'primary', reaches: 'this' },
    { label: 'Send for approval', to: 'pending',  kind: 'primary', reaches: 'this' },
  ],
  approved: [
    { label: 'Save changes',      to: 'approved',  kind: 'primary', reaches: 'this' },
    { label: 'Cancel',            to: 'cancelled', kind: 'danger',  reaches: 'all'  },
  ],
  live: [
    { label: 'Save changes',      to: 'live',       kind: 'primary', reaches: 'this' },
    { label: 'Terminate',         to: 'terminated', kind: 'danger',  reaches: 'this' },
  ],
  cancelled:  [],
  terminated: [],
  ended:      [],
};

// -------------------- State --------------------
let state = {
  view: 'overview',            // 'overview' | 'map'
  dealType: 'ng-floor',        // 'ng-floor' | 'ng-fixed' | 'pg'
  leftOpen: true,
  rightOpen: false,
  drawerMode: 'campaign',      // 'campaign' | 'dealline'
  activeStep: null,            // null | 'schedule' | 'environment' | ...
  activeDealId: null,
  campaign: {
    name: 'Campaign name',
    id: '123456789',
  },
  dealLines: [],               // { id, name, status, type, schedule:{start,end}, environment, dsp, cpm, filters:[] }
};

// -------------------- Helpers --------------------
const el = (sel, root) => (root || document).querySelector(sel);
const els = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const app = el('#app');

let dealCounter = 0;
function makeDeal(name) {
  dealCounter += 1;
  return {
    id: 'dl-' + dealCounter,
    name: name || ('Deal line ' + dealCounter),
    status: 'new',
    type: state.dealType,
    schedule: { start: '', end: '' },
    environment: [],
    dsp: '',
    cpm: '',
    budget: '',
    frames: '',
    impressions: '',
    filters: ['Country: ES'],
  };
}

function getActive() {
  return state.dealLines.find(d => d.id === state.activeDealId) || null;
}

function toast(msg) {
  const t = el('#toast');
  t.textContent = msg;
  t.hidden = false;
  t.classList.add('is-visible');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    t.classList.remove('is-visible');
    setTimeout(() => { t.hidden = true; }, 200);
  }, 1800);
}

function fmtDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

// -------------------- Rendering --------------------
function render() {
  app.dataset.view = state.view;
  app.dataset.dealType = state.dealType;
  app.dataset.leftOpen = String(state.leftOpen);
  app.dataset.rightOpen = String(state.rightOpen);
  app.dataset.drawerMode = state.drawerMode;

  // View toggle
  els('.view-toggle__btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.view === state.view);
    b.setAttribute('aria-selected', String(b.dataset.view === state.view));
  });

  // Deal type pill tabs
  els('.pill-tabs__btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.type === state.dealType);
  });

  // Sections that depend on deal type (PG only shows Targets in the line drawer)
  els('[data-only-type]').forEach(node => {
    const types = node.dataset.onlyType.split(',').map(s => s.trim());
    node.hidden = !types.includes(state.dealType);
  });

  // Optional/Required copy on campaign selects (PG makes Advertiser/Brand/etc required)
  els('.select[data-required-if]').forEach(sel => {
    const wantsPg = sel.dataset.requiredIf === 'pg';
    const isRequired = wantsPg && state.dealType === 'pg';
    sel.querySelector('.select__value').textContent = isRequired ? 'Required' : 'Optional';
  });

  // Campaign CTA copy — PG requires filling required fields to Continue,
  // NG can Skip straight to a line.
  const campaignCta = el('#campaignCta');
  if (campaignCta) {
    if (state.dealType === 'pg') {
      campaignCta.textContent = 'Continue';
      campaignCta.classList.remove('btn--ghost');
      campaignCta.classList.add('btn--primary');
    } else {
      campaignCta.textContent = 'Skip';
      campaignCta.classList.add('btn--ghost');
      campaignCta.classList.remove('btn--primary');
    }
  }

  // Left drawer mode (campaign vs deal line)
  els('.drawer__inner').forEach(inner => {
    inner.hidden = inner.dataset.drawerMode !== state.drawerMode;
  });

  // Top deal tabs
  renderDealTabs();

  // Deal line drawer content (based on active line)
  const active = getActive();
  if (active && state.drawerMode === 'dealline') {
    el('#dlName').value = active.name;
    el('#dealLineName').value = active.name;
    const setValue = (id, value, filled) => {
      const node = el(id);
      node.textContent = value || 'Required';
      node.classList.toggle('is-filled', !!filled);
    };
    setValue('#fldSchedule',
      active.schedule.start ? `${fmtDate(active.schedule.start)} - ${fmtDate(active.schedule.end)}` : '',
      !!active.schedule.start);
    setValue('#fldEnvironment',
      active.environment.length ? active.environment.join(', ') : '',
      active.environment.length > 0);
    setValue('#fldDsp', active.dsp, !!active.dsp);
    setValue('#fldCpm', active.cpm ? '£' + active.cpm : '', !!active.cpm);
    if (state.dealType === 'pg') {
      setValue('#fldBudget', active.budget ? '£' + active.budget : '', !!active.budget);
      setValue('#fldFrames', active.frames || 'Optional', !!active.frames);
      setValue('#fldImpressions', active.impressions, !!active.impressions);
    }
    // Active field row highlight
    els('.field-row').forEach(row => {
      row.classList.toggle('is-active', row.dataset.step === state.activeStep);
    });
    // Filters
    renderFilters(active);
  }

  // Right panel open state — only makes sense once a line exists
  const rightPanel = el('#rightPanel');
  const shouldShowRight = state.dealLines.length > 0 && state.drawerMode === 'dealline';
  rightPanel.hidden = !shouldShowRight || !state.rightOpen;
  if (shouldShowRight && state.rightOpen) {
    renderRightPanel(active);
  }

  // Canvas empty state
  const empty = el('#canvasEmpty');
  if (empty) {
    empty.style.display = state.dealLines.length === 0 && !state.activeStep ? '' : 'none';
    if (state.view === 'map') empty.style.display = 'none';
  }

  // Step panel
  const step = el('#stepPanel');
  step.hidden = !state.activeStep;
  if (state.activeStep) renderStepPanel();
}

function renderDealTabs() {
  const wrap = el('#dealTabs');
  wrap.innerHTML = '';
  state.dealLines.forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'deal-tabs__tab' + (d.id === state.activeDealId ? ' is-active' : '');
    btn.innerHTML = `${d.name}
      <span class="deal-tabs__close" data-id="${d.id}" title="Close">×</span>`;
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('deal-tabs__close')) {
        removeDeal(d.id);
        return;
      }
      state.activeDealId = d.id;
      state.drawerMode = 'dealline';
      state.rightOpen = true;
      state.activeStep = null;
      render();
    });
    wrap.appendChild(btn);
  });
}

function renderFilters(active) {
  const wrap = el('#filterChips');
  wrap.innerHTML = '';
  active.filters.forEach((f, i) => {
    const chip = document.createElement('span');
    chip.className = 'chip chip--filter';
    chip.innerHTML = `${f} <button data-idx="${i}" aria-label="Remove filter">×</button>`;
    chip.querySelector('button').addEventListener('click', () => {
      active.filters.splice(i, 1);
      render();
    });
    wrap.appendChild(chip);
  });
}

// -------------------- Right panel --------------------
function renderRightPanel(active) {
  // status chip in right panel
  const chip = el('#lineStatusChip');
  chip.dataset.status = active.status;
  chip.querySelector('.chip__label').textContent = STATUS[active.status].label;

  // Availability group is shown only before Approved.
  // Delivery group only when Live.
  const beforeApproved = ['new','pending','rejected'].includes(active.status);
  const isLive = active.status === 'live';
  const isAllocated = ['approved','live','terminated','ended'].includes(active.status);

  el('[data-group="availability"]').hidden = false; // always visible; label swaps below
  const availHead = el('[data-group="availability"] .stat-section__head span');
  availHead.textContent = isAllocated ? 'Allocation' : 'Availability';

  // Show/hide delivery
  el('[data-group="delivery"]').hidden = !isLive && active.status !== 'ended' && active.status !== 'terminated';

  // Type-scoped rows
  els('.stat-row[data-only-type], .stat-section__group[data-only-type]').forEach(node => {
    if (!node.hasAttribute('data-only-type')) return;
    const types = node.dataset.onlyType.split(',').map(s => s.trim());
    node.hidden = !types.includes(state.dealType);
  });

  // Copy tweaks per type
  els('[data-type-copy]').forEach(n => {
    n.textContent = state.dealType === 'ng-floor' ? 'Check availability' : 'Check allocation';
  });
  els('[data-type-copy-pricing]').forEach(n => {
    n.textContent = state.dealType === 'ng-floor' ? 'Floor CPM' : 'CPM entered';
  });
  const cpmVal = el('#pricingCpm');
  if (active.cpm) cpmVal.textContent = '£' + active.cpm;

  // Wire the status chip dropdown
  chip.onclick = (e) => {
    e.stopPropagation();
    openStatusMenu(active, chip);
  };
}

function openStatusMenu(active, anchor) {
  closeStatusMenu();
  const actions = ACTIONS[active.status] || [];
  if (actions.length === 0) {
    toast(`This line is ${STATUS[active.status].label.toLowerCase()} and can’t change status.`);
    return;
  }
  const menu = document.createElement('div');
  menu.className = 'status-menu';
  menu.id = 'statusMenu';
  actions.forEach(a => {
    const item = document.createElement('button');
    item.className = 'status-menu__item status-menu__item--' + a.kind;
    item.innerHTML = `
      <span class="status-menu__label">${a.label}</span>
      <span class="status-menu__reach">${a.reaches === 'all' ? 'All lines ◆' : 'This line'}</span>
    `;
    item.addEventListener('click', () => {
      applyAction(active, a);
      closeStatusMenu();
    });
    menu.appendChild(item);
  });
  document.body.appendChild(menu);
  const rect = anchor.getBoundingClientRect();
  menu.style.top = (rect.bottom + 6) + 'px';
  menu.style.right = (window.innerWidth - rect.right) + 'px';
  setTimeout(() => document.addEventListener('click', closeStatusMenu, { once: true }), 0);
}
function closeStatusMenu() {
  const m = document.getElementById('statusMenu');
  if (m) m.remove();
}

function applyAction(active, a) {
  if (a.reaches === 'all') {
    state.dealLines.forEach(d => { d.status = a.to; });
  } else {
    active.status = a.to;
  }
  toast(`${a.label} → ${STATUS[a.to].label} (${a.reaches === 'all' ? 'all lines' : 'this line'})`);
  render();
}

// -------------------- Step panel --------------------
const STEPS = {
  schedule: {
    title: 'Schedule',
    render: (active) => `
      <div class="date-cols">
        <div class="date-cell is-active"><span>Start</span><input type="date" data-k="start" value="${active.schedule.start || ''}" /></div>
        <div class="date-cell"><span>End</span><input type="date" data-k="end" value="${active.schedule.end || ''}" /></div>
      </div>
      <p class="empty-hint">Live and Ended happen automatically off this schedule — no one clicks a button for them.</p>
    `,
    save: (active, body) => {
      body.querySelectorAll('input[type="date"]').forEach(input => {
        active.schedule[input.dataset.k] = input.value;
      });
    },
  },
  environment: {
    title: 'Environment',
    render: (active) => {
      const opts = ['Airports','Billboard','Transport','Street Furniture','Shopping Mall'];
      return `<div class="check-list">
        ${opts.map(o => `
          <label class="check-list__row ${active.environment.includes(o) ? 'is-checked' : ''}">
            <span class="check-list__box"></span>
            <input type="checkbox" value="${o}" ${active.environment.includes(o) ? 'checked' : ''} hidden />
            <span>${o}</span>
          </label>`).join('')}
      </div>`;
    },
    save: (active, body) => {
      active.environment = Array.from(body.querySelectorAll('input[type="checkbox"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    },
    live: true,   // update chips as user clicks
  },
  dsp: {
    title: 'DSP',
    render: (active) => {
      const opts = ['DV360','The Trade Desk','Xandr','Adform','Amazon'];
      return `<div class="check-list">
        ${opts.map(o => `
          <label class="check-list__row ${active.dsp === o ? 'is-checked' : ''}">
            <span class="check-list__box"></span>
            <input type="radio" name="dsp" value="${o}" ${active.dsp === o ? 'checked' : ''} hidden />
            <span>${o}</span>
          </label>`).join('')}
      </div>`;
    },
    save: (active, body) => {
      const picked = body.querySelector('input[name="dsp"]:checked');
      if (picked) active.dsp = picked.value;
    },
    live: true,
  },
  cpm: {
    title: 'CPM',
    render: (active) => `
      <div class="step-input">
        <span class="step-input__prefix">£</span>
        <input type="number" step="0.10" value="${active.cpm || ''}" data-k="cpm" autofocus />
      </div>
      <label class="check-list__row" style="margin-top:14px">
        <span class="check-list__box"></span>
        <input type="checkbox" hidden />
        <span>Apply across all lines</span>
      </label>
    `,
    save: (active, body) => {
      active.cpm = body.querySelector('input[type="number"]').value;
    },
  },
  budget: {
    title: 'Budget',
    render: (active) => `
      <div class="step-input">
        <span class="step-input__prefix">£</span>
        <input type="number" step="1000" value="${active.budget || ''}" data-k="budget" autofocus />
      </div>`,
    save: (active, body) => { active.budget = body.querySelector('input[type="number"]').value; },
  },
  frames: {
    title: 'Frame',
    render: (active) => `
      <div class="step-input">
        <input type="number" placeholder="Optional" value="${active.frames || ''}" data-k="frames" autofocus />
      </div>`,
    save: (active, body) => { active.frames = body.querySelector('input[type="number"]').value; },
  },
  impressions: {
    title: 'Impressions',
    render: (active) => `
      <div class="step-input">
        <input type="number" step="1000" placeholder="e.g. 1000000" value="${active.impressions || ''}" data-k="imp" autofocus />
      </div>`,
    save: (active, body) => { active.impressions = body.querySelector('input[type="number"]').value; },
  },
};

function renderStepPanel() {
  const active = getActive();
  if (!active) return;
  const step = STEPS[state.activeStep];
  if (!step) return;
  el('#stepTitle').textContent = step.title;
  el('#stepMeta').textContent = active.name;
  const body = el('#stepBody');
  body.innerHTML = step.render(active);

  // Live-update: chip lists tick as you click
  if (step.live) {
    body.addEventListener('click', (e) => {
      const row = e.target.closest('.check-list__row');
      if (!row) return;
      const input = row.querySelector('input');
      if (input.type === 'checkbox') input.checked = !input.checked;
      if (input.type === 'radio') input.checked = true;
      body.querySelectorAll('.check-list__row').forEach(r => {
        const i = r.querySelector('input');
        r.classList.toggle('is-checked', i.checked);
      });
    });
  }

  el('#stepNext').onclick = () => {
    step.save(active, body);
    state.activeStep = null;
    render();
  };
  el('#stepCancel').onclick = () => {
    state.activeStep = null;
    render();
  };
}

// -------------------- Deal line CRUD --------------------
function addDeal() {
  const d = makeDeal();
  state.dealLines.push(d);
  state.activeDealId = d.id;
  state.drawerMode = 'dealline';
  state.rightOpen = true;
  state.activeStep = null;
  render();
}
function removeDeal(id) {
  const i = state.dealLines.findIndex(d => d.id === id);
  if (i === -1) return;
  state.dealLines.splice(i, 1);
  if (state.activeDealId === id) {
    state.activeDealId = state.dealLines[0]?.id || null;
    if (!state.activeDealId) {
      state.drawerMode = 'campaign';
      state.rightOpen = false;
    }
  }
  render();
}

// -------------------- Wire-up --------------------
document.addEventListener('DOMContentLoaded', () => {
  // View toggle
  els('.view-toggle__btn').forEach(b => {
    b.addEventListener('click', () => {
      state.view = b.dataset.view;
      render();
    });
  });

  // Deal type
  els('.pill-tabs__btn').forEach(b => {
    b.addEventListener('click', () => {
      state.dealType = b.dataset.type;
      // apply new type to any new lines; existing lines keep theirs
      render();
    });
  });

  // Drawer toggles
  el('#leftDrawerToggle').addEventListener('click', () => {
    state.leftOpen = !state.leftOpen;
    render();
  });
  el('#rightPanelToggle').addEventListener('click', () => {
    if (state.dealLines.length === 0) {
      toast('Add a deal line first.');
      return;
    }
    state.rightOpen = !state.rightOpen;
    render();
  });

  // Legacy switch (decorative — just toggles UI state)
  el('#legacyToggle').addEventListener('click', function () {
    this.classList.toggle('is-on');
    this.setAttribute('aria-pressed', String(this.classList.contains('is-on')));
  });

  // Accordions
  els('.accordion__head, .stat-section__head').forEach(head => {
    head.addEventListener('click', () => {
      const expanded = head.getAttribute('aria-expanded') !== 'false';
      head.setAttribute('aria-expanded', String(!expanded));
      const target = head.dataset.target
        ? el('#' + head.dataset.target)
        : head.nextElementSibling;
      if (target) target.hidden = expanded;
    });
  });

  // Campaign CTA
  el('#campaignCta').addEventListener('click', addDeal);

  // Add deal line
  el('#newDealBtn').addEventListener('click', addDeal);

  // Field row → open step panel
  el('#leftDrawer').addEventListener('click', (e) => {
    const row = e.target.closest('.field-row[data-step]');
    if (!row) return;
    state.activeStep = row.dataset.step;
    render();
  });

  // Filter add
  el('#addFilterBtn').addEventListener('click', () => {
    const value = el('#newFilter').value.trim();
    if (!value) return;
    const active = getActive();
    if (!active) return;
    active.filters.push(value);
    el('#newFilter').value = '';
    render();
  });
  el('#newFilter').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') el('#addFilterBtn').click();
  });

  // Campaign / deal line name inputs sync
  el('#campaignName').addEventListener('input', (e) => {
    state.campaign.name = e.target.value;
  });
  el('#dlName').addEventListener('input', (e) => {
    const active = getActive();
    if (active) {
      active.name = e.target.value;
      el('#dealLineName').value = e.target.value;
      renderDealTabs();
    }
  });
  el('#dealLineName').addEventListener('input', (e) => {
    const active = getActive();
    if (active) {
      active.name = e.target.value;
      el('#dlName').value = e.target.value;
      renderDealTabs();
    }
  });

  render();
});

// Menu styling injected at runtime so index.html stays terse.
const style = document.createElement('style');
style.textContent = `
.status-menu {
  position: fixed;
  min-width: 240px;
  background: #fff;
  border: 1px solid var(--hairline);
  border-radius: 12px;
  box-shadow: var(--sh-3);
  padding: 4px;
  z-index: 100;
}
.status-menu__item {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%;
  padding: 9px 12px;
  border: 0; background: transparent;
  border-radius: 8px;
  text-align: left;
  font-size: 13px;
}
.status-menu__item:hover { background: var(--ink-100); }
.status-menu__item--primary .status-menu__label { color: var(--brand-600); font-weight: 600; }
.status-menu__item--brand .status-menu__label   { color: #B87700; font-weight: 600; }
.status-menu__item--danger .status-menu__label  { color: var(--st-rejected); font-weight: 600; }
.status-menu__reach { color: var(--ink-500); font-size: 11px; font-weight: 500; }
`;
document.head.appendChild(style);
