// Generated from Figma get_design_context (node 367:177542)
// on 2026-09-21T09:35Z — do NOT hand-edit.
// Regenerate with: python3 scripts/import-frame.py <json> PgOverviewCampaignExpanded 367:177542
//
// Local rewrites: asset prefix → /figma-assets, Inter font classes,
// duplicated default export stripped, top component renamed.

const assetPathPrefix = "/figma-assets";
const imgTreeStructure = `${assetPathPrefix}/0ebb0.svg`;
const imgEs = `${assetPathPrefix}/9092b.svg`;
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
const imgEs1 = `${assetPathPrefix}/45be4.svg`;
const imgIcon = `${assetPathPrefix}/cad21.svg`;
const imgIcon1 = `${assetPathPrefix}/0749d.svg`;
const imgIcon2 = `${assetPathPrefix}/965ce.svg`;
const imgIcon3 = `${assetPathPrefix}/21538.svg`;
const imgSvg6 = `${assetPathPrefix}/a3010.svg`;
const imgCheveronDown = `${assetPathPrefix}/4edb7.svg`;
const imgIcon4 = `${assetPathPrefix}/7d8bb.svg`;
const imgEdit = `${assetPathPrefix}/eb131.svg`;
const imgIcon5 = `${assetPathPrefix}/65f76.svg`;
const imgIcon6 = `${assetPathPrefix}/9b246.svg`;
const imgIcon7 = `${assetPathPrefix}/ccf6f.svg`;
const imgIcon8 = `${assetPathPrefix}/1b918.svg`;
const imgIcon9 = `${assetPathPrefix}/03caf.svg`;
const imgEndIcon = `${assetPathPrefix}/a844f.svg`;
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
    <div className={className || "bg-[var(--\\(new\\)-neutral\\/solid\\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[999px] w-[365px]"} data-node-id="367:71276">
      <TreeStructure className="relative shrink-0 size-[18px]" />
      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="367:71278">
        Switch back to legacy deal form
      </p>
      <Toggle className="bg-[var(--\(new\)-primary\/solid\/700,#272199)] content-stretch flex h-[16px] items-center justify-end overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]" />
    </div>
  );
}

function Es({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="367:71177" data-name="ES">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEs} />
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

export default function PgOverviewCampaignExpanded() {
  return (
    <div className="bg-[#efeff0] border border-[#e6e5e9] border-solid content-stretch flex items-center overflow-clip relative rounded-[8px] size-full" data-node-id="367:177542" data-name="PRG -> Deal Creation flow">
      <div className="bg-[#f8f8f9] content-stretch flex flex-[1_0_0] flex-col h-[982px] isolate items-start min-w-px relative" data-node-id="367:177543" data-name="div.min-w-300">
        <div className="content-stretch flex flex-col gap-[20px] h-[37px] items-start px-[56px] py-[16px] relative shrink-0 w-full z-[1]" data-node-id="367:177544" data-name="div.py-4">
          <div className="absolute content-stretch flex h-[47px] items-center justify-between left-[77px] p-[var(--0\,5-rem,8px)] top-px w-[1435px]" data-node-id="367:177546" data-name="top bav bar header">
            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:177547">
              <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-r border-solid content-stretch flex gap-[var(--0\,5-rem,8px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0,0px)] relative shrink-0 w-[370px]" data-node-id="367:177548" data-name="top bav bar header">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative" data-node-id="367:177549" data-name="Campaign title + Status">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative" data-node-id="367:177550" data-name="Campaign name + Logo">
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="367:177551" data-name="programmatic">
                      <div className="bg-[var(--\(new\)-purple\/solid\/200,#e8dbff)] content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:177551;7828:94989" data-name="iconButton">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:177551;7828:94989;3452:30160" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEs1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:177554" data-name="icon button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177554;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:177555">
                <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="367:177556" data-name="Deal lines - Tabs">
                  <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:177559" data-name="tab button">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:177559;3702:466" data-name="padding-text">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I367:177559;3702:467" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-neutral\/solid\/400,#bab9c3)] whitespace-nowrap" data-node-id="I367:177559;3702:468">
                        New deal line
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-l border-solid content-stretch flex items-center justify-between pl-[5px] relative shrink-0 w-[370px]" data-node-id="367:177560" data-name="Header / right panel">
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:177561" data-name="icon button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:177561;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:177562">
                <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:177563" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:177563;1616:22665" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177563;1616:22666" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:177563;1616:22667">
                      Overview
                    </p>
                  </div>
                </div>
                <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:177564" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:177564;769:15148" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177564;769:15135" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#42414e] whitespace-nowrap" data-node-id="I367:177564;769:15103">
                      Map
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--\(new\)-primary\/solid\/950,#090642)] content-stretch flex flex-col gap-[43.59px] h-[982px] items-center left-0 pb-[672px] pt-[16px] top-[-1px] w-[60px]" data-node-id="367:177566" data-name="side nav bar">
        <Logo className="h-[32px] relative shrink-0 w-[24.633px]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="I367:177566;7803:21375" data-name="Nav → List">
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="creative" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="data" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="admin" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="availability" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="settings" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="user" />
        </div>
        <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-[18px] right-0" data-node-id="I367:177566;7803:21382" data-name="div.absolute">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I367:177566;7803:21383" data-name="div.tooltip__2gGuw">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="I367:177566;7803:21670">
              <Nav className="h-[30px] relative shrink-0 w-[60px]" type="record" />
              <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[13px] relative shrink-0 w-[60px]" data-node-id="I367:177566;7803:21698" data-name="Nav">
                <div className="content-stretch flex h-[34px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I367:177566;7803:21698;7803:21305" data-name="Button">
                  <div className="content-stretch flex items-center overflow-clip p-[2px] relative rounded-[12px] shrink-0 size-[24px]" data-node-id="I367:177566;7803:21698;7803:21306" data-name="Button">
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="I367:177566;7803:21698;7803:21307">
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
      <div className="absolute bg-[#efeff0] content-stretch flex flex-col items-start left-[64px] overflow-clip rounded-[16px] top-[4px] w-[380px]" data-node-id="367:177567" data-name="Campaign Info Drawer — v4 EVEN MORE POLISHED">
        <div className="bg-[#efeff0] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative shrink-0 w-full" data-node-id="367:177568" data-name="content">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="367:177569" data-name="header card">
            <div className="content-stretch flex gap-[var(--no-value,0px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0\,25-rem,4px)] relative rounded-[var(--radius\/md,6px)] shrink-0" data-node-id="367:177570" data-name="In-text dropdown">
              <div className="content-stretch flex gap-[8px] items-center p-[var(--no-value,0px)] relative rounded-[var(--radius\/md,6px)] shrink-0" data-node-id="367:177571" data-name="Title + icon">
                <Es className="relative shrink-0 size-[24px]" />
                <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="367:177573" data-name="Title">
                  <div className="h-[20px] relative shrink-0 w-[26px]" data-node-id="367:177574" data-name="Title">
                    <p className="[word-break:break-word] absolute font-['Inter'] font-medium font-medium leading-[20px] left-0 not-italic text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] top-0 whitespace-nowrap" data-node-id="367:177575">
                      ES
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="367:177576" data-name="cheveron down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheveronDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="367:177577" data-name="Campaign level actions">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="367:177579">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="367:177588" data-name="Header">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="367:177589" data-name="Actions">
                    <div className="bg-[rgba(19,18,33,0)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:177590" data-name="icon button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I367:177590;743:13357" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--\(new\)-neutral\/solid\/50,white)] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-[356px]" data-node-id="367:177591" data-name="Ownership and sales card">
            <div className="content-stretch flex flex-col gap-[var(--0\,5-rem,8px)] items-start relative shrink-0 w-full" data-node-id="I367:177591;13068:102038" data-name="status id">
              <div className="content-stretch flex gap-[var(--no-value,0px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0\,25-rem,4px)] relative rounded-[var(--radius\/md,6px)] shrink-0 w-full" data-node-id="I367:177591;13235:151315" data-name="In-text dropdown">
                <div className="content-stretch flex items-center p-[var(--no-value,0px)] relative rounded-[var(--radius\/md,6px)] shrink-0 w-[332px]" data-node-id="I367:177591;13235:151316" data-name="Title + icon">
                  <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0 w-[153px]" data-node-id="I367:177591;13235:151318" data-name="Title">
                    <div className="h-[20px] relative shrink-0 w-[126px]" data-node-id="I367:177591;13235:151319" data-name="Title">
                      <p className="[word-break:break-word] absolute font-['Inter'] font-medium font-medium leading-[20px] left-0 not-italic text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] top-0 whitespace-nowrap" data-node-id="I367:177591;13235:151320">
                        Campaign name
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177591;13235:151577" data-name="edit">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I367:177591;13235:150872" data-name="Campaign name + ID">
                <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177591;13235:150873">
                  Campaign ID
                </p>
                <div className="bg-[var(--\(new\)-purple\/opacity\/5,rgba(110,46,228,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I367:177591;13235:150874" data-name="chip">
                  <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I367:177591;13235:150874;789:14511" data-name="parent-content">
                    <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I367:177591;13235:150874;789:14513" data-name="padding-text">
                      <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-purple\/solid\/700,#5117be)] whitespace-nowrap" data-node-id="I367:177591;13235:150874;789:14514">
                        123456789
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I367:177591;13235:150874;789:14518" data-name="remove">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177591;13235:150874;789:14519" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I367:177591;13068:102064" data-name="Campaign name + ID">
                <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177591;13068:102065">
                  Created by
                </p>
                <div className="bg-[var(--\(new\)-purple\/opacity\/5,rgba(110,46,228,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I367:177591;13068:102066" data-name="chip">
                  <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I367:177591;13068:102066;789:14511" data-name="parent-content">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177591;13068:102066;789:14512" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
                    </div>
                    <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I367:177591;13068:102066;789:14513" data-name="padding-text">
                      <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-purple\/solid\/700,#5117be)] whitespace-nowrap" data-node-id="I367:177591;13068:102066;789:14514">
                        Sophie.C
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:177591;13068:102067" data-name="status-inline">
                <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177591;13068:102068">
                  Status
                </p>
                <div className="bg-[var(--\(new\)-purple\/opacity\/5,rgba(110,46,228,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I367:177591;13068:102069" data-name="chip">
                  <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I367:177591;13068:102069;789:14511" data-name="parent-content">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177591;13068:102069;789:14512" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                    </div>
                    <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I367:177591;13068:102069;789:14513" data-name="padding-text">
                      <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-purple\/solid\/700,#5117be)] whitespace-nowrap" data-node-id="I367:177591;13068:102069;789:14514">
                        New
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I367:177591;13068:102069;789:14518" data-name="remove">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:177591;13068:102069;789:14519" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--\(new\)-neutral\/solid\/50,white)] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-[356px]" data-node-id="367:177592" data-name="Ownership and sales card">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-node-id="I367:177592;13052:82580" data-name="Deal type row">
              <div className="bg-[var(--\(new\)-neutral\/opacity-dark\/5,rgba(19,18,33,0.05))] content-stretch flex items-center justify-center relative rounded-[var(--radius\/md,6px)] shrink-0" data-node-id="I367:177592;13052:82581" data-name="multi-switcher">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] h-[28px] items-center justify-center overflow-clip px-[var(--0\,625-rem,10px)] relative rounded-[var(--radius\/md,6px)] shrink-0" data-node-id="I367:177592;13052:82581;7486:251" data-name="multi_button-switch">
                  <div className="content-stretch flex items-center justify-center pb-px px-[var(--0\,125-rem,2px)] relative shrink-0" data-node-id="I367:177592;13052:82581;7486:251;7486:380" data-name="padding-text">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/900,#15115e)] text-center whitespace-nowrap" data-node-id="I367:177592;13052:82581;7486:251;7486:381">
                      NG Floor
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] h-[28px] items-center justify-center overflow-clip px-[var(--0\,625-rem,10px)] relative rounded-[var(--radius\/md,6px)] shrink-0" data-node-id="I367:177592;13052:82581;7486:252" data-name="multi_button-switch">
                  <div className="content-stretch flex items-center justify-center pb-px px-[var(--0\,125-rem,2px)] relative shrink-0" data-node-id="I367:177592;13052:82581;7486:252;7486:380" data-name="padding-text">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/900,#15115e)] text-center whitespace-nowrap" data-node-id="I367:177592;13052:82581;7486:252;7486:381">
                      NG Fixed
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch" data-node-id="I367:177592;13052:82581;7486:253">
                  <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--0\,125-rem,2px)] h-full items-center justify-center overflow-clip px-[var(--0\,625-rem,10px)] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0" data-name="_item_button-switch">
                    <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                    <div className="content-stretch flex items-center justify-center pb-px px-[var(--0\,125-rem,2px)] relative shrink-0" data-node-id="I367:177592;13052:82581;7486:253;759:9292" data-name="padding-text">
                      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/900,#15115e)] text-center whitespace-nowrap" data-node-id="I367:177592;13052:82581;7486:253;759:9293">
                        PG
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I367:177592;13067:99908" data-name="Campaign settings">
              <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="I367:177592;13067:99909" data-name="heading">
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I367:177592;13067:99910">
                  <p className="leading-[20px]">Campaign details</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:177592;13067:99911" data-name="iconButton">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:177592;13067:99911;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I367:177592;13052:82485" data-name="fields">
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177592;13052:82486" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177592;13052:82486;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177592;13052:82486;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177592;13052:82486;3962:4701">{`Advertiser `}</p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177592;13052:82486;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177592;13052:82486;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[11px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis whitespace-nowrap" data-node-id="I367:177592;13052:82486;3962:4710">
                      Coca Cola
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177592;13052:82486;9245:11890" data-name="end-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEndIcon} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177592;13052:82487" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177592;13052:82487;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177592;13052:82487;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177592;13052:82487;3962:4701">
                      Brand
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177592;13052:82487;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177592;13052:82487;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[11px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis whitespace-nowrap" data-node-id="I367:177592;13052:82487;3962:4710">
                      Coca Cola
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177592;13052:82487;9245:11890" data-name="end-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEndIcon} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177592;13052:82488" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177592;13052:82488;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177592;13052:82488;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177592;13052:82488;3962:4701">
                      Product categoy
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177592;13052:82488;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177592;13052:82488;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[11px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis whitespace-nowrap" data-node-id="I367:177592;13052:82488;3962:4710">
                      Soft drinks
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177592;13052:82488;9245:11890" data-name="end-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEndIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--\(new\)-neutral\/solid\/50,white)] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-[356px]" data-node-id="367:177593" data-name="Ownership and sales card">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I367:177593;13067:99908" data-name="Campaign settings">
              <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="I367:177593;13067:99909" data-name="heading">
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I367:177593;13067:99910">
                  <p className="leading-[20px]">{`Ownership & sales`}</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:177593;13067:99911" data-name="iconButton">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:177593;13067:99911;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I367:177593;13052:82485" data-name="fields">
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177593;13052:82486" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177593;13052:82486;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177593;13052:82486;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177593;13052:82486;3962:4701">
                      Agency
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177593;13052:82486;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177593;13052:82486;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8c8b99] text-[11px] text-ellipsis whitespace-nowrap" data-node-id="I367:177593;13052:82486;3962:4710">{`Optional `}</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177593;13052:82486;9245:11890" data-name="end-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEndIcon} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177593;13052:82487" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177593;13052:82487;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177593;13052:82487;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177593;13052:82487;3962:4701">
                      Specialist
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177593;13052:82487;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177593;13052:82487;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8c8b99] text-[11px] text-ellipsis whitespace-nowrap" data-node-id="I367:177593;13052:82487;3962:4710">{`Optional `}</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177593;13052:82487;9245:11890" data-name="end-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEndIcon} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177593;13052:82488" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177593;13052:82488;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177593;13052:82488;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177593;13052:82488;3962:4701">
                      Ext.reference
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177593;13052:82488;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177593;13052:82488;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8c8b99] text-[11px] text-ellipsis whitespace-nowrap" data-node-id="I367:177593;13052:82488;3962:4710">{`Optional `}</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:177593;13052:82488;9245:11890" data-name="end-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEndIcon} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177593;13052:82490" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177593;13052:82490;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177593;13052:82490;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177593;13052:82490;3962:4701">{`Sales person `}</p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177593;13052:82490;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177593;13052:82490;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8c8b99] text-[11px] text-ellipsis whitespace-nowrap" data-node-id="I367:177593;13052:82490;3962:4710">{`Optional `}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177593;13052:82491" data-name="text input (label)">
                <div className="content-stretch flex gap-[var(--0\,125-rem,2px)] items-center relative shrink-0" data-node-id="I367:177593;13052:82491;3962:4699">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177593;13052:82491;3962:4700" data-name="label">
                    <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:177593;13052:82491;3962:4701">
                      Sales team
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(19,18,33,0.03)] content-stretch flex gap-[var(--form\/gap\/small,2px)] h-[24px] items-center justify-end overflow-clip px-[var(--form\/padding\/small,8px)] relative rounded-[6px] shrink-0 w-[179px]" data-node-id="I367:177593;13052:82491;3962:4707" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[var(--no-value,0px)] relative" data-node-id="I367:177593;13052:82491;3962:4709" data-name="padding-content">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8c8b99] text-[11px] text-ellipsis whitespace-nowrap" data-node-id="I367:177593;13052:82491;3962:4710">{`Optional `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--\(new\)-neutral\/solid\/50,white)] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-[356px]" data-node-id="367:177594" data-name="Ownership and sales card">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I367:177594;13067:99908" data-name="Campaign settings">
              <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="I367:177594;13067:99909" data-name="heading">
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I367:177594;13067:99910">
                  <p className="leading-[20px]">Settings</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:177594;13067:99911" data-name="iconButton">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:177594;13067:99911;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--0\,5-rem,8px)] items-start relative shrink-0 w-full" data-node-id="I367:177594;13067:99920">
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177594;13067:99921" data-name="Input">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177594;13067:99922" data-name="label">
                  <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] w-[119px]" data-node-id="I367:177594;13067:99923">
                    Sync deal to DSP
                  </p>
                </div>
                <div className="bg-[var(--\(new\)-primary\/solid\/700,#272199)] content-stretch flex h-[16px] items-center justify-end overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]" data-node-id="I367:177594;13067:99928" data-name="toggle">
                  <div className="pointer-events-none relative rounded-[999px] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[12px]" data-node-id="I367:177594;13067:99928;241:6833" data-name="handle">
                    <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 rounded-[999px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177594;13067:99932" data-name="Input">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177594;13067:99933" data-name="label">
                  <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] w-[141px]" data-node-id="I367:177594;13067:99934">
                    Allow creative submission
                  </p>
                </div>
                <div className="bg-[var(--\(new\)-neutral\/solid\/800,#52515e)] content-stretch flex h-[16px] items-center overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]" data-node-id="I367:177594;13067:99939" data-name="toggle">
                  <div className="pointer-events-none relative rounded-[var(--toggle\/radius\/medium,999px)] shadow-[0px_3px_4px_0px_rgba(16,16,52,0.06)] shrink-0 size-[12px]" data-node-id="I367:177594;13067:99939;935:16058" data-name="handle">
                    <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 rounded-[var(--toggle\/radius\/medium,999px)]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="I367:177594;13067:99943" data-name="Input">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I367:177594;13067:99944" data-name="label">
                  <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] w-[119px]" data-node-id="I367:177594;13067:99945">
                    Apply CPM at deal line
                  </p>
                </div>
                <div className="bg-[var(--\(new\)-primary\/solid\/700,#272199)] content-stretch flex h-[16px] items-center justify-end overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]" data-node-id="I367:177594;13067:99950" data-name="toggle">
                  <div className="pointer-events-none relative rounded-[999px] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[12px]" data-node-id="I367:177594;13067:99950;241:6833" data-name="handle">
                    <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 rounded-[999px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#efeff0] content-stretch flex flex-col items-start overflow-clip px-[8px] py-[12px] relative shrink-0 w-[380px]" data-node-id="367:177595" data-name="footer">
          <div className="content-stretch drop-shadow-[0px_1px_1px_rgba(16,16,52,0.08)] flex gap-[var(--button\/gap\/large,4px)] h-[36px] items-center justify-center min-w-[36px] px-[var(--button\/padding\/large,12px)] relative rounded-[var(--button\/radius\/large,6px)] shrink-0 w-full" data-node-id="367:177596" data-name="button (main)">
            <div aria-hidden className="absolute bg-[var(--\(new\)-primary\/solid\/900,#15115e)] inset-0 pointer-events-none rounded-[var(--button\/radius\/large,6px)]" />
            <div className="content-stretch flex items-start px-[var(--button\/gap\/large,4px)] relative shrink-0" data-node-id="I367:177596;735:4521" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/50,#f4f5ff)] whitespace-nowrap" data-node-id="I367:177596;735:4522">
                Continue
              </p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[937px] items-start left-[1134px] top-[46px] w-[373px]" data-node-id="367:177597" data-name="Summary panel">
        <LegacyTogglePill className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[999px] shrink-0 w-full" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[1438px] rounded-[25px] shadow-[2px_0px_6px_0px_rgba(0,0,0,0.15)] size-[50px] top-[909px]" data-node-id="367:177600" data-name="Pendo">
        <div className="content-stretch flex flex-col items-start max-w-[50px] overflow-clip relative rounded-[999px] shrink-0 size-[50px]" data-node-id="I367:177600;9595:93819" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[50px]" data-node-id="I367:177600;9595:93820" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae fill">
            <div className="overflow-clip relative shrink-0 size-[50px]" data-node-id="I367:177600;9595:93821" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGuideMediaBd5Ccd85Dcae4E60A1DbE7E941Ad08Ae} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[26px] items-start left-[32px] pt-[12px] px-[10px] rounded-[20px] top-[-3px] w-[38.71px]" data-node-id="I367:177600;9595:93828" data-name="div.pendo-resource-center-badge-notification-bubble">
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[32.36px]" data-node-id="I367:177600;9595:93829" data-name="::before" />
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[20px]" data-node-id="I367:177600;9595:93830" data-name="div.pendo-resource-center-badge-notification-bubble paints" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px pb-[27px] pl-[0.311px] relative w-full" data-node-id="I367:177600;9595:93831" data-name="div.pendo-notification-bubble-unread-count">
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--\(new\)-neutral\/solid\/50,white)] text-center whitespace-nowrap" data-node-id="I367:177600;9595:93832">
              <p className="leading-[0px]">30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
