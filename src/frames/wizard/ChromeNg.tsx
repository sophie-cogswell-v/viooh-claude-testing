// Chrome shell for the deal-line creation wizard, transcribed verbatim from
// Figma get_design_context (node 393:31641) via scripts/import-frame.py, then
// hand-edited in exactly one place: the static `deal strip (full)` block was
// replaced with `{children}` so DealLineWizard can render the live,
// stateful strip + its floating field-editor panels in that slot.
//
// Local rewrites from the raw Figma export: asset prefix -> /figma-assets,
// Inter font classes, duplicated default export stripped.

import type { ReactNode } from 'react'

const assetPathPrefix = "/figma-assets";
const imgTreeStructure = `${assetPathPrefix}/0ebb0.svg`;
const imgStateDefaultTypeRecord = `${assetPathPrefix}/c54a8.svg`;
const imgSvg = `${assetPathPrefix}/e85e2.svg`;
const imgAvailability1 = `${assetPathPrefix}/d987e.svg`;
const imgSvg1 = `${assetPathPrefix}/4c932.svg`;
const imgSvg2 = `${assetPathPrefix}/caf5c.svg`;
const imgSvg3 = `${assetPathPrefix}/96bf1.svg`;
const imgSvg4 = `${assetPathPrefix}/96a68.svg`;
const imgSvg5 = `${assetPathPrefix}/b2921.svg`;
const imgGroup = `${assetPathPrefix}/0387e.svg`;
const imgGroup1 = `${assetPathPrefix}/a0a5b.svg`;
const imgIcon = `${assetPathPrefix}/5f636.svg`;
const imgIcon1 = `${assetPathPrefix}/cad21.svg`;
const imgIcon2 = `${assetPathPrefix}/1b06a.svg`;
const imgIcon3 = `${assetPathPrefix}/965ce.svg`;
const imgIcon4 = `${assetPathPrefix}/21538.svg`;
const imgSvg6 = `${assetPathPrefix}/a3010.svg`;
const imgIcon5 = `${assetPathPrefix}/5eb0d.svg`;
const imgIcon6 = `${assetPathPrefix}/c3bea.svg`;
const imgIcon7 = `${assetPathPrefix}/1b1ad.svg`;
const imgIcon8 = `${assetPathPrefix}/37666.svg`;
const imgCalendar = `${assetPathPrefix}/313e5.svg`;
const imgMenu = `${assetPathPrefix}/c10a1.svg`;
const imgEnvironementChannel = `${assetPathPrefix}/21f40.svg`;
const imgBriefcase = `${assetPathPrefix}/0b538.svg`;
const imgPound = `${assetPathPrefix}/fad8b.svg`;
const imgIcon9 = `${assetPathPrefix}/5c98d.svg`;
const imgGuideMediaBd5Ccd85Dcae4E60A1DbE7E941Ad08Ae = `${assetPathPrefix}/e1686.svg`;

type ToggleProps = {
  className?: string;
  active?: "true";
  size?: "medium";
  state?: "default";
};

function Toggle({ className, active = "true", size = "medium", state = "default" }: ToggleProps) {
  return (
    <div className={className || "bg-[var(--\\(new\\)-primary\\/solid\\/700,#272199)] content-stretch flex h-[var(--toggle\\/size\\/medium,16px)] items-center justify-end overflow-clip p-[var(--toggle\\/padding\\/medium,2px)] relative rounded-[var(--toggle\\/radius\\/medium,999px)] w-[28px]"} data-node-id="256:105921">
      <div className="pointer-events-none relative rounded-[999px] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[12px]" data-node-id="256:105922" data-name="handle">
        <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
      </div>
    </div>
  );
}

function TreeStructure({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[22px]"} data-node-id="256:105915" data-name="tree structure">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTreeStructure} />
    </div>
  );
}

type LegacyTogglePillProps = {
  className?: string;
  state?: "On";
};

function LegacyTogglePill({ className, state = "On" }: LegacyTogglePillProps) {
  return (
    <div className={className || "bg-[var(--\\(new\\)-neutral\\/solid\\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex h-[40px] items-center justify-between px-[14px] py-[8px] relative rounded-[12px] w-[365px]"} data-node-id="392:5259">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="392:5260">
        <TreeStructure className="relative shrink-0 size-[18px]" />
        <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="392:5262">
          Switch back to legacy deal form
        </p>
      </div>
      <Toggle className="bg-[var(--\(new\)-primary\/solid\/700,#272199)] content-stretch flex h-[16px] items-center justify-end overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]" />
    </div>
  );
}

type NavProps = {
  className?: string;
  state?: "default";
  type?: "admin" | "campaigns" | "creative" | "data" | "settings" | "user" | "record" | "availability";
};

function Nav({ className, state = "default", type = "campaigns" }: NavProps) {
  const isDefaultAndAdmin = state === "default" && type === "admin";
  const isDefaultAndAvailability = state === "default" && type === "availability";
  const isDefaultAndCampaigns = state === "default" && type === "campaigns";
  const isDefaultAndCreative = state === "default" && type === "creative";
  const isDefaultAndData = state === "default" && type === "data";
  const isDefaultAndIsUserOrAvailabilityOrSettingsOrAdminOrCreativeOr = state === "default" && ["user", "availability", "settings", "admin", "creative", "data", "campaigns"].includes(type);
  const isDefaultAndSettings = state === "default" && type === "settings";
  return (
    <div className={className || `relative w-[60px] ${isDefaultAndIsUserOrAvailabilityOrSettingsOrAdminOrCreativeOr ? "content-stretch flex flex-col items-center px-[13px]" : "h-[34px]"}`} id={isDefaultAndCampaigns ? "node-1_8073" : isDefaultAndData ? "node-1_8047" : isDefaultAndCreative ? "node-1_8043" : isDefaultAndAdmin ? "node-1_8024" : isDefaultAndSettings ? "node-1_8010" : isDefaultAndAvailability ? "node-1_7991" : state === "default" && type === "user" ? "node-1_7987" : "node-1_7970"}>
      {isDefaultAndIsUserOrAvailabilityOrSettingsOrAdminOrCreativeOr && (
        <div className="content-stretch flex items-start p-[8px] relative rounded-[6px] shrink-0" id={isDefaultAndCampaigns ? "node-1_8074" : isDefaultAndData ? "node-1_8048" : isDefaultAndCreative ? "node-1_8044" : isDefaultAndAdmin ? "node-1_8025" : isDefaultAndSettings ? "node-1_8011" : isDefaultAndAvailability ? "node-1_7992" : "node-1_7988"} data-name="Button">
          {state === "default" && ["user", "settings", "admin", "creative", "data", "campaigns"].includes(type) && (
            <div className="relative shrink-0 size-[18px]" id={isDefaultAndCampaigns ? "node-1_8075" : isDefaultAndData ? "node-1_8049" : isDefaultAndCreative ? "node-1_8045" : isDefaultAndAdmin ? "node-1_8026" : isDefaultAndSettings ? "node-1_8012" : "node-1_7989"} data-name="SVG">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isDefaultAndCampaigns ? imgSvg5 : isDefaultAndData ? imgSvg4 : isDefaultAndCreative ? imgSvg3 : isDefaultAndAdmin ? imgSvg2 : isDefaultAndSettings ? imgSvg1 : imgSvg} />
            </div>
          )}
          {isDefaultAndAvailability && (
            <div className="relative shrink-0 size-[17.515px]" data-node-id="1:7993" data-name="availability 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvailability1} />
            </div>
          )}
        </div>
      )}
      {state === "default" && type === "record" && <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStateDefaultTypeRecord} />}
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32px] relative w-[24.633px]"} data-node-id="1:7755" data-name="logo">
      <div className="absolute inset-[22.81%_0_0_0]" data-node-id="1:7756" data-name="Group">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
      </div>
      <div className="absolute inset-[0_39.28%_78.01%_39.29%]" data-node-id="1:7758" data-name="Group">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
      </div>
    </div>
  );
}

type ChromeNgProps = {
  children?: ReactNode
  rightPanel?: ReactNode
  onNewDealLineClick?: () => void
  /** Falsy hides the active "Deal line N" tab — there's nothing to show it
   * before the wizard has been started at least once. */
  dealLineTabLabel?: string | null
}

export default function ChromeNg({ children, rightPanel, onNewDealLineClick, dealLineTabLabel = 'Deal line 1' }: ChromeNgProps) {
  return (
    <div className="bg-[#efeff0] border border-[#e6e5e9] border-solid content-stretch flex items-center overflow-clip relative rounded-[8px] size-full" data-node-id="393:31641" data-name="PRG -> Deal Creation flow">
      <div className="bg-[#f8f8f9] content-stretch flex flex-[1_0_0] flex-col h-[982px] isolate items-start min-w-px relative" data-node-id="393:31642" data-name="div.min-w-300">
        <div className="content-stretch flex flex-col gap-[20px] h-[37px] items-start px-[56px] py-[16px] relative shrink-0 w-full z-[1]" data-node-id="393:31643" data-name="div.py-4">
          <div className="absolute content-stretch flex h-[47px] items-center justify-between left-[62px] p-[var(--0\,5-rem,8px)] top-0 w-[1435px]" data-node-id="393:31645" data-name="top bav bar header">
            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="393:31646">
              <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-r border-solid content-stretch flex gap-[var(--0\,5-rem,8px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0,0px)] relative shrink-0 w-[600px]" data-node-id="393:31647" data-name="top bav bar header">
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="393:31648" data-name="icon button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I393:31648;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative" data-node-id="393:31649" data-name="Campaign title + Status">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] h-[24px] items-center min-w-px relative" data-node-id="393:31650" data-name="Campaign name + Logo" />
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="393:31653" data-name="icon button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I393:31653;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="393:31654">
                <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="393:31655" data-name="Deal lines - Tabs">
                  {dealLineTabLabel && (
                    <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="393:31656" data-name="tab button">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I393:31656;1616:22665" data-name="padding-text">
                        <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I393:31656;1616:22667">
                          {dealLineTabLabel}
                        </p>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={onNewDealLineClick}
                    className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0 cursor-pointer hover:bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] transition-colors"
                    data-node-id="393:31658" data-name="tab button">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I393:31658;769:15148" data-name="padding-text">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I393:31658;769:15135" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I393:31658;769:15103">
                        New deal line
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-l border-solid content-stretch flex items-center justify-between pl-[5px] relative shrink-0 w-[370px]" data-node-id="393:31659" data-name="Header / right panel">
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="393:31660" data-name="icon button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I393:31660;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="393:31661">
                <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="393:31662" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I393:31662;1616:22665" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I393:31662;1616:22666" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I393:31662;1616:22667">
                      Overview
                    </p>
                  </div>
                </div>
                <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="393:31663" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I393:31663;769:15148" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I393:31663;769:15135" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--text.secondary,#42414e)] whitespace-nowrap" data-node-id="I393:31663;769:15103">
                      Map
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--\(new\)-primary\/solid\/950,#090642)] content-stretch flex flex-col gap-[43.59px] h-[982px] items-center left-0 pb-[672px] pt-[16px] top-[-1px] w-[60px]" data-node-id="393:31665" data-name="side nav bar">
        <Logo className="h-[32px] relative shrink-0 w-[24.633px]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="I393:31665;7803:21375" data-name="Nav → List">
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="creative" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="data" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="admin" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="availability" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="settings" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="user" />
        </div>
        <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-[18px] right-0" data-node-id="I393:31665;7803:21382" data-name="div.absolute">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I393:31665;7803:21383" data-name="div.tooltip__2gGuw">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="I393:31665;7803:21670">
              <Nav className="h-[30px] relative shrink-0 w-[60px]" type="record" />
              <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[13px] relative shrink-0 w-[60px]" data-node-id="I393:31665;7803:21698" data-name="Nav">
                <div className="content-stretch flex h-[34px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I393:31665;7803:21698;7803:21305" data-name="Button">
                  <div className="content-stretch flex items-center overflow-clip p-[2px] relative rounded-[12px] shrink-0 size-[24px]" data-node-id="I393:31665;7803:21698;7803:21306" data-name="Button">
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="I393:31665;7803:21698;7803:21307">
                      <div className="flex-none rotate-180">
                        <div className="relative size-[20px]" data-name="SVG">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[937px] items-start left-[1133px] top-[46px] w-[373px] overflow-y-auto" data-node-id="393:31667" data-name="Summary panel">
        <LegacyTogglePill className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex h-[38px] items-center justify-between px-[14px] py-[8px] relative rounded-[12px] shrink-0 w-full" />
        {rightPanel}
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[1438px] rounded-[25px] shadow-[2px_0px_6px_0px_rgba(0,0,0,0.15)] size-[50px] top-[909px]" data-node-id="393:31670" data-name="Pendo">
        <div className="content-stretch flex flex-col items-start max-w-[50px] overflow-clip relative rounded-[999px] shrink-0 size-[50px]" data-node-id="I393:31670;9595:93819" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[50px]" data-node-id="I393:31670;9595:93820" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae fill">
            <div className="overflow-clip relative shrink-0 size-[50px]" data-node-id="I393:31670;9595:93821" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGuideMediaBd5Ccd85Dcae4E60A1DbE7E941Ad08Ae} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[26px] items-start left-[32px] pt-[12px] px-[10px] rounded-[20px] top-[-3px] w-[38.71px]" data-node-id="I393:31670;9595:93828" data-name="div.pendo-resource-center-badge-notification-bubble">
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[32.36px]" data-node-id="I393:31670;9595:93829" data-name="::before" />
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[20px]" data-node-id="I393:31670;9595:93830" data-name="div.pendo-resource-center-badge-notification-bubble paints" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px pb-[27px] pl-[0.311px] relative w-full" data-node-id="I393:31670;9595:93831" data-name="div.pendo-notification-bubble-unread-count">
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--\(new\)-neutral\/solid\/50,white)] text-center whitespace-nowrap" data-node-id="I393:31670;9595:93832">
              <p className="leading-[0px]">30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
