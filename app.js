// Deal Creation Flow — status prototype (single NG deal line, Overview view only)
//
// This models exactly the transition table product signed off:
//   status -> { actions offered, where each action lands, whether it's user- or
//   time-triggered, and whether the line is still editable }
// Edit STATUS_CONFIG below to try different copy/labels/transitions with the team —
// nothing else in this file needs to change for that.

const STATUS_CONFIG = {
  "New": {
    editable: true,
    actions: [
      { label: "Send for approval", to: "Pending approval", kind: "primary" },
      { label: "Confirm", to: "Approved", kind: "" },
    ],
  },
  "Pending approval": {
    editable: true,
    actions: [
      { label: "Confirm", to: "Approved", kind: "primary" },
      { label: "Save changes", to: "Pending approval", kind: "" },
      { label: "Reject", to: "Rejected", kind: "danger" },
    ],
  },
  "Rejected": {
    editable: true,
    actions: [
      { label: "Send for approval", to: "Pending approval", kind: "primary" },
      { label: "Save changes", to: "Rejected", kind: "" },
    ],
  },
  "Approved": {
    editable: true,
    actions: [
      { label: "Save changes", to: "Approved", kind: "" },
      { label: "Cancel", to: "Cancelled", kind: "danger" },
    ],
    auto: { label: "Start date reached", to: "Live" },
  },
  "Live": {
    editable: true,
    actions: [
      { label: "Save changes", to: "Live", kind: "" },
      { label: "Terminate", to: "Terminated", kind: "danger" },
    ],
    auto: { label: "End date reached", to: "Ended" },
  },
  "Cancelled": { editable: false, actions: [] },
  "Terminated": { editable: false, actions: [] },
  "Ended": { editable: false, actions: [] },
};

const state = {
  status: "New",
  filters: ["Country: ES"],
  history: [{ status: "New", ts: "just now" }],
};

const els = {
  statusChip: document.getElementById("statusChip"),
  ovStatus: document.getElementById("ovStatus"),
  actionsTrigger: document.getElementById("actionsTrigger"),
  actionsList: document.getElementById("actionsList"),
  lockedBanner: document.getElementById("lockedBanner"),
  lockedStatusWord: document.getElementById("lockedStatusWord"),
  simStart: document.getElementById("simStart"),
  simEnd: document.getElementById("simEnd"),
  filterList: document.getElementById("filterList"),
  newFilter: document.getElementById("newFilter"),
  addFilterBtn: document.getElementById("addFilterBtn"),
  timeline: document.getElementById("timeline"),
  dealName: document.getElementById("dealName"),
  ovName: document.getElementById("ovName"),
  startDate: document.getElementById("startDate"),
  endDate: document.getElementById("endDate"),
  environment: document.getElementById("environment"),
  dsp: document.getElementById("dsp"),
  cpm: document.getElementById("cpm"),
  ovSchedule: document.getElementById("ovSchedule"),
  ovEnv: document.getElementById("ovEnv"),
  ovCpm: document.getElementById("ovCpm"),
};

const editableFieldEls = [
  els.dealName, els.startDate, els.endDate, els.environment, els.dsp, els.cpm,
];

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function transitionTo(newStatus) {
  state.status = newStatus;
  state.history.push({ status: newStatus, ts: "just now" });
  render();
}

function render() {
  const config = STATUS_CONFIG[state.status];

  // Status chip (drawer + overview row)
  els.statusChip.textContent = state.status;
  els.statusChip.dataset.status = state.status;
  els.ovStatus.textContent = state.status;
  els.ovStatus.dataset.status = state.status;

  // Actions menu
  els.actionsList.innerHTML = "";
  if (config.actions.length === 0) {
    els.actionsTrigger.disabled = true;
    els.actionsTrigger.textContent = "Actions ▾";
  } else {
    els.actionsTrigger.disabled = false;
    config.actions.forEach((action) => {
      const btn = document.createElement("button");
      btn.className = "actions-menu__item" + (action.kind ? ` actions-menu__item--${action.kind}` : "");
      btn.textContent = action.label;
      btn.addEventListener("click", () => {
        els.actionsList.hidden = true;
        transitionTo(action.to);
      });
      els.actionsList.appendChild(btn);
    });
  }

  // Locked banner + field disabling
  els.lockedBanner.hidden = config.editable;
  if (!config.editable) els.lockedStatusWord.textContent = state.status.toLowerCase();
  editableFieldEls.forEach((el) => { el.disabled = !config.editable; });
  els.addFilterBtn.disabled = !config.editable;
  els.newFilter.disabled = !config.editable;

  // Automatic (time-based) transitions — only offered where the table defines one
  els.simStart.disabled = !(config.auto && config.auto.to === "Live");
  els.simEnd.disabled = !(config.auto && config.auto.to === "Ended");

  // Filter chips
  els.filterList.innerHTML = "";
  state.filters.forEach((filter, i) => {
    const chip = document.createElement("span");
    chip.className = "filter-chip" + (config.editable ? "" : " is-locked");
    chip.innerHTML = `${filter} `;
    if (config.editable) {
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "✕";
      removeBtn.addEventListener("click", () => {
        state.filters.splice(i, 1);
        render();
      });
      chip.appendChild(removeBtn);
    }
    els.filterList.appendChild(chip);
  });

  // Overview row mirrors the drawer fields
  els.ovName.textContent = els.dealName.value;
  els.ovSchedule.textContent = `${formatDate(els.startDate.value)} – ${formatDate(els.endDate.value)}`;
  els.ovEnv.textContent = els.environment.value;
  els.ovCpm.textContent = `£${Number(els.cpm.value).toFixed(2)}`;

  // History timeline
  els.timeline.innerHTML = "";
  state.history.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `${entry.status} <span class="ts">${entry.ts}</span>`;
    els.timeline.appendChild(li);
  });
}

// Wire up static controls once
els.actionsTrigger.addEventListener("click", () => {
  if (els.actionsTrigger.disabled) return;
  els.actionsList.hidden = !els.actionsList.hidden;
});
document.addEventListener("click", (e) => {
  if (!document.getElementById("actionsMenu").contains(e.target)) {
    els.actionsList.hidden = true;
  }
});

els.simStart.addEventListener("click", () => transitionTo("Live"));
els.simEnd.addEventListener("click", () => transitionTo("Ended"));

els.addFilterBtn.addEventListener("click", () => {
  const value = els.newFilter.value.trim();
  if (!value) return;
  state.filters.push(value);
  els.newFilter.value = "";
  render();
});
els.newFilter.addEventListener("keydown", (e) => {
  if (e.key === "Enter") els.addFilterBtn.click();
});

[els.dealName, els.startDate, els.endDate, els.environment, els.dsp, els.cpm].forEach((el) => {
  el.addEventListener("input", render);
});

render();
