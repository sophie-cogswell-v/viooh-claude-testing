// Generated from Figma get_design_context (node 367:165325)
// on 2026-09-18T14:41Z — do NOT hand-edit.
// Regenerate with: python3 scripts/import-frame.py <json> NgMapScheduleStep 367:165325
//
// Local rewrites: asset prefix → /figma-assets, Inter font classes,
// duplicated default export stripped, top component renamed.

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
const imgE22 = `${assetPathPrefix}/22f0a.png`;
const imgSvg6 = `${assetPathPrefix}/a3010.svg`;
const imgIcon = `${assetPathPrefix}/5f636.svg`;
const imgIcon1 = `${assetPathPrefix}/cad21.svg`;
const imgIcon2 = `${assetPathPrefix}/1b06a.svg`;
const imgIcon3 = `${assetPathPrefix}/5268f.svg`;
const imgIcon4 = `${assetPathPrefix}/457c2.svg`;
const imgIcon5 = `${assetPathPrefix}/5eb0d.svg`;
const imgIcon6 = `${assetPathPrefix}/c3bea.svg`;
const imgIcon7 = `${assetPathPrefix}/1b1ad.svg`;
const imgIcon8 = `${assetPathPrefix}/37666.svg`;
const imgLocationIcon = `${assetPathPrefix}/ad8fd.svg`;
const imgMenu = `${assetPathPrefix}/c10a1.svg`;
const imgEnvironementChannel = `${assetPathPrefix}/21f40.svg`;
const imgBriefcase = `${assetPathPrefix}/0b538.svg`;
const imgPound = `${assetPathPrefix}/fad8b.svg`;
const imgIcon9 = `${assetPathPrefix}/5c98d.svg`;
const imgCaretLeft = `${assetPathPrefix}/55c8e.svg`;
const imgCaretRight = `${assetPathPrefix}/68bdb.svg`;

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

type Toggle1Props = {
  className?: string;
  active?: boolean;
  size?: "medium";
  state?: "default";
};

function Toggle1({ className, active = false, size = "medium", state = "default" }: Toggle1Props) {
  return (
    <div className={className || "bg-[var(--\\(new\\)-neutral\\/solid\\/800,#52515e)] content-stretch flex h-[var(--toggle\\/size\\/medium,16px)] items-center overflow-clip p-[var(--toggle\\/padding\\/medium,2px)] relative rounded-[var(--toggle\\/radius\\/medium,999px)] w-[28px]"} data-node-id="1:173">
      <div className="pointer-events-none relative rounded-[var(--toggle\/radius\/medium,999px)] shadow-[0px_3px_4px_0px_rgba(16,16,52,0.06)] shrink-0 size-[12px]" data-node-id="1:174" data-name="handle">
        <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 rounded-[var(--toggle\/radius\/medium,999px)]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
      </div>
    </div>
  );
}

type CalDayProps = {
  className?: string;
  day?: string;
  size?: "medium";
  state?: "default" | "disabled";
  style?: "default";
};

function CalDay({ className, day = "1", size = "medium", state = "default", style = "default" }: CalDayProps) {
  const isDisabled = state === "disabled";
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center relative size-[40px]"} id={isDisabled ? "node-1_195" : "node-1_189"}>
      {state === "default" && (
        <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="1:190">
          {day}
        </p>
      )}
      {isDisabled && (
        <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="1:196">
          {day}
        </p>
      )}
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

export default function NgMapScheduleStep() {
  return (
    <div className="bg-[#efeff0] border border-[#e6e5e9] border-solid content-stretch flex items-center overflow-clip relative rounded-[8px] size-full" data-node-id="367:165325" data-name="PRG -> Deal Creation flow">
      <div className="absolute bg-[var(--\(new\)-primary\/solid\/950,#090642)] content-stretch flex flex-col gap-[43.59px] h-[982px] items-center left-0 pb-[672px] pt-[16px] top-[-1px] w-[60px]" data-node-id="367:165326" data-name="side nav bar">
        <Logo className="h-[32px] relative shrink-0 w-[24.633px]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="I367:165326;7803:21375" data-name="Nav → List">
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="creative" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="data" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="admin" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="availability" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="settings" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="user" />
        </div>
        <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-[18px] right-0" data-node-id="I367:165326;7803:21382" data-name="div.absolute">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I367:165326;7803:21383" data-name="div.tooltip__2gGuw">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="I367:165326;7803:21670">
              <Nav className="h-[30px] relative shrink-0 w-[60px]" type="record" />
              <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[13px] relative shrink-0 w-[60px]" data-node-id="I367:165326;7803:21698" data-name="Nav">
                <div className="content-stretch flex h-[34px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I367:165326;7803:21698;7803:21305" data-name="Button">
                  <div className="content-stretch flex items-center overflow-clip p-[2px] relative rounded-[12px] shrink-0 size-[24px]" data-node-id="I367:165326;7803:21698;7803:21306" data-name="Button">
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="I367:165326;7803:21698;7803:21307">
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
      <div className="absolute h-[979px] left-[60px] top-[-1px] w-[1559px]" data-node-id="367:165327" data-name="e2 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.07%] left-[-0.01%] max-w-none top-[-6.67%] w-full" src={imgE22} />
        </div>
      </div>
      <div className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] content-stretch flex items-center justify-between left-[60px] p-[var(--0\,5-rem,8px)] top-[-1px] w-[1559px]" data-node-id="367:165328" data-name="top bav bar header">
        <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:165329">
          <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-r border-solid content-stretch flex gap-[var(--0\,5-rem,8px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0,0px)] relative shrink-0 w-[385px]" data-node-id="367:165330" data-name="top bav bar header">
            <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:165331" data-name="icon button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I367:165331;743:13207" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative" data-node-id="367:165332" data-name="Campaign title + Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] h-[24px] items-center min-w-px relative" data-node-id="367:165333" data-name="Campaign name + Logo" />
            </div>
            <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:165336" data-name="icon button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I367:165336;743:13207" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:165337">
            <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="367:165338" data-name="Deal lines - Tabs">
              <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:165339" data-name="tab button">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:165339;1616:22665" data-name="padding-text">
                  <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:165339;1616:22667">
                    Deal line 1
                  </p>
                </div>
              </div>
              <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:165342" data-name="tab button">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:165342;769:15148" data-name="padding-text">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:165342;769:15135" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:165342;769:15103">
                    New deal line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-l border-solid content-stretch flex items-center justify-between pl-[5px] relative shrink-0 w-[377px]" data-node-id="367:165343" data-name="Header / right panel">
          <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:165344" data-name="icon button">
            <div className="relative shrink-0 size-[16px]" data-node-id="I367:165344;743:13207" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:165345">
            <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:165346" data-name="tab button">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:165346;769:15148" data-name="padding-text">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:165346;769:15135" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                </div>
                <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:165346;769:15103">
                  Overview
                </p>
              </div>
            </div>
            <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:165347" data-name="tab button">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:165347;1616:22665" data-name="padding-text">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:165347;1616:22666" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
                </div>
                <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:165347;1616:22667">
                  Map
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_1px_rgba(15,23,41,0.06),0px_4px_20px_rgba(15,23,41,0.06)] flex flex-col h-[930px] items-start left-[65px] px-[16px] rounded-[14px] top-[44px] w-[386px]" data-node-id="367:165349" data-name="deal strip (full)">
        <div className="content-stretch flex flex-col gap-[10px] h-[892px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:6804" data-name="Panel">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:165349;9245:24813" data-name="Header">
            <div className="content-stretch flex flex-col items-start pr-[8px] py-[16px] relative shrink-0 w-full" data-node-id="I367:165349;9245:18575" data-name="deal strip header">
              <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="I367:165349;9245:18575;7651:12833" data-name="Header">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] min-w-px not-italic relative text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)]" data-node-id="I367:165349;9245:18575;7651:12834">
                  <p className="leading-[20px]">Deal line 1</p>
                </div>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="I367:165349;9245:18575;7828:69615">
                  <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I367:165349;9245:18575;7828:69543" data-name="Header">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:165349;9245:18575;7828:69544" data-name="Actions">
                      <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;9245:18575;7828:69545" data-name="icon button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;9245:18575;7828:69545;743:13432" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I367:165349;9245:18575;7828:69507" data-name="Header">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:165349;9245:18575;7828:69508" data-name="Actions">
                      <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;9245:18575;7828:69509" data-name="icon button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;9245:18575;7828:69509;743:13432" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:165349;9245:18575;9408:800409" data-name="Actions">
                    <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I367:165349;9245:18575;9408:800410" data-name="Header">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:165349;9245:18575;9408:800411" data-name="Actions">
                        <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;9245:18575;9408:800412" data-name="icon button">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;9245:18575;9408:800412;743:13432" data-name="icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[5px] items-start pb-[10px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18105" data-name="Section 1">
            <div className="border-0 border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-col h-[25px] items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:45779" data-name="Section title">
              <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:45779;7543:2379" data-name="Section title">
                <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:45779;7543:2380" data-name="Heading">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-semibold font-semibold h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:165349;7651:18105;7547:45779;7543:2381">
                    <p className="leading-[20px]">Deal line info</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;7651:18105;7547:45779;7543:2382" data-name="icon button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:45779;7543:2382;743:13207" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;10546:67816">
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3477" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3477;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3477;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3477;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:165349;7651:18105;7547:3477;7534:10434" data-name="tile-type">
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:165349;7651:18105;7547:3477;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:165349;7651:18105;7547:3477;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">{`Deal line 1 `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex flex-col h-[32px] items-start justify-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-primary\/solid\/50,#f4f5ff)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713;7534:10485" data-name="TEXT BOX">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713;8951:75274" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713;8951:75275" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713;8951:75276" data-name="Item list">
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713;8951:75277" data-name="Main heading">
                          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:3713;8951:75278" data-name="tile-heading">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I367:165349;7651:18105;7547:3713;8951:75279" data-name="tile-type">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:3713;8951:75280" data-name="Location Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocationIcon} />
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[4px] relative" data-node-id="I367:165349;7651:18105;7547:3713;8951:75281" data-name="Heading">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:165349;7651:18105;7547:3713;8951:75282">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">Schedule</p>
                                </div>
                              </div>
                              <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:165349;7651:18105;7547:3713;8951:75283" data-name="Required">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left whitespace-nowrap" data-node-id="I367:165349;7651:18105;7547:3713;8951:75284">
                                  <p className="leading-[20px]">Required</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:165349;7651:18105;7547:3713;10185:174906" data-name="right-icon">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:3713;10185:174907" data-name="menu">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43523" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43523;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43523;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43523;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:165349;7651:18105;7547:43523;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:43523;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEnvironementChannel} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:165349;7651:18105;7547:43523;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:165349;7651:18105;7547:43523;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">{`Environment `}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[53px]" data-node-id="I367:165349;7651:18105;7547:43523;7534:10438" data-name="Heading">
                          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:165349;7651:18105;7547:43523;10193:181171" data-name="Required">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left w-[56px]" data-node-id="I367:165349;7651:18105;7547:43523;10193:181172">
                              <p className="leading-[20px]">Required</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:165349;7651:18105;7547:43523;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:43523;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43066" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43066;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43066;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43066;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:165349;7651:18105;7547:43066;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:43066;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:165349;7651:18105;7547:43066;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:165349;7651:18105;7547:43066;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">DSP</p>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[53px]" data-node-id="I367:165349;7651:18105;7547:43066;7534:10438" data-name="Heading">
                          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:165349;7651:18105;7547:43066;10193:181171" data-name="Required">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left w-[56px]" data-node-id="I367:165349;7651:18105;7547:43066;10193:181172">
                              <p className="leading-[20px]">Required</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:165349;7651:18105;7547:43066;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:43066;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43980" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43980;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43980;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:165349;7651:18105;7547:43980;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:165349;7651:18105;7547:43980;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:43980;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPound} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:165349;7651:18105;7547:43980;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:165349;7651:18105;7547:43980;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">CPM</p>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[53px]" data-node-id="I367:165349;7651:18105;7547:43980;7534:10438" data-name="Heading">
                          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:165349;7651:18105;7547:43980;10193:181171" data-name="Required">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left w-[56px]" data-node-id="I367:165349;7651:18105;7547:43980;10193:181172">
                              <p className="leading-[20px]">Required</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:165349;7651:18105;7547:43980;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18105;7547:43980;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18294" data-name="Section 3">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18294;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18294;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:165349;7651:18294;7543:2381">
                  <p className="leading-[20px]">Filters</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;7651:18294;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18294;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18360" data-name="Section 4">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18360;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18360;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:165349;7651:18360;7543:2381">
                  <p className="leading-[20px]">Data targeting</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;7651:18360;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18360;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18426" data-name="Section 5">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:165349;7651:18426;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:165349;7651:18426;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:165349;7651:18426;7543:2381">
                  <p className="leading-[20px]">Apply services</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:165349;7651:18426;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:165349;7651:18426;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute contents left-[456px] top-[176px]" data-node-id="367:165350">
        <div className="absolute bg-[#fdfdfd] content-stretch flex flex-col h-[647px] items-center left-[457px] rounded-[8px] top-[177px] w-[427px]" data-node-id="367:165351" data-name="secondary panel (base)">
          <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-b border-solid content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full" data-node-id="I367:165351;3552:23172" data-name="secondary panel (base)">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[156px]" data-node-id="I367:165351;3552:23172;3563:11111">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I367:165351;3552:23172;3552:23070">
                <p className="leading-[20px]">Schedule</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I367:165351;3552:23172;3552:23080">
              <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#7c7b87] text-right whitespace-nowrap" data-node-id="I367:165351;3552:23172;3552:23074">
                Deal line 1
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-[427px]" data-node-id="I367:165351;3552:23231" data-name="Component 1/.elements/Secondary Panel/Content" />
          <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-solid border-t content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full" data-node-id="I367:165351;3552:23179" data-name="secondary panel (base)">
            <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/medium,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0" data-node-id="I367:165351;3552:23179;3552:23123" data-name="button (main)">
              <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-node-id="I367:165351;3552:23179;3552:23123;737:12172" data-name="padding-label">
                <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:165351;3552:23179;3552:23123;737:12173">
                  Cancel
                </p>
              </div>
            </div>
            <div className="bg-[var(--\(new\)-neutral\/solid\/300,#eaeaef)] content-stretch flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/medium,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0" data-node-id="I367:165351;3552:23179;3552:23110" data-name="Button">
              <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-node-id="I367:165351;3552:23179;3552:23110;737:12237" data-name="padding-label">
                <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-neutral\/solid\/400,#bab9c3)] whitespace-nowrap" data-node-id="I367:165351;3552:23179;3552:23110;737:12238">
                  Next
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[478.525px] items-start left-[472px] top-[216.43px] w-[407px]" data-node-id="367:165352">
          <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0 w-[387px]" data-node-id="367:165353" data-name="Content">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="367:165354">
              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-node-id="367:165355">
                <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0 w-full" data-node-id="367:165360" data-name="Title">
                  <div className="content-stretch flex gap-[5px] items-center justify-end relative shrink-0 w-[360px]" data-node-id="367:165361">
                    <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:165362" data-name="Tabs">
                      <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-node-id="I367:165362;769:15148" data-name="padding-text">
                        <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:165362;769:15103">
                          End of year
                        </p>
                      </div>
                    </div>
                    <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:165363" data-name="Tabs">
                      <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-node-id="I367:165363;769:15148" data-name="padding-text">
                        <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:165363;769:15103">
                          End of month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[363px]" data-node-id="367:165364" data-name="Content">
                <div className="content-stretch flex gap-[8px] h-[60px] items-center relative shrink-0 w-[363px]" data-node-id="367:165365">
                  <div className="bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] h-[36px] relative rounded-[2px] shrink-0 w-[4px]" data-node-id="367:165366" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[60px] items-start min-w-px relative rounded-[12px]" data-node-id="367:165367" data-name="Calendar">
                    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-node-id="I367:165367;794:12877" data-name="Inputs">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0\,5-rem,8px)] h-[60px] items-start justify-center min-w-px relative" data-node-id="I367:165367;804:13089" data-name="_TimeframeInput">
                        <div className="border border-[rgba(5,5,38,0.12)] border-solid content-stretch flex flex-col items-center overflow-clip p-[var(--form\/padding\/large,12px)] relative rounded-bl-[var(--form\/radius\/large,6px)] rounded-tl-[var(--form\/radius\/large,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165367;804:13089;804:13061" data-name="input">
                          <div aria-hidden className="absolute bg-[white] inset-0 pointer-events-none rounded-bl-[var(--form\/radius\/large,6px)] rounded-tl-[var(--form\/radius\/large,6px)]" />
                          <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-full" data-node-id="I367:165367;804:13089;804:13062" data-name="padding-content">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-medium font-medium leading-[16px] min-w-px not-italic overflow-hidden relative text-[11px] text-[color:#131221] text-ellipsis whitespace-nowrap" data-node-id="I367:165367;804:13089;804:13063">
                              Start
                            </p>
                          </div>
                          <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-full" data-node-id="I367:165367;804:13089;804:13064" data-name="label">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[13px] text-[color:#7c7b87] text-ellipsis whitespace-nowrap" data-node-id="I367:165367;804:13089;804:13065">
                              01/01/2026
                            </p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0\,5-rem,8px)] h-[60px] items-start justify-center min-w-px relative" data-node-id="I367:165367;804:13109" data-name="_TimeframeInput">
                        <div className="border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-b border-r border-solid border-t content-stretch flex flex-col items-center overflow-clip p-[var(--form\/padding\/large,12px)] relative rounded-br-[var(--form\/radius\/large,6px)] rounded-tr-[var(--form\/radius\/large,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I367:165367;804:13109;810:13230" data-name="input">
                          <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-br-[var(--form\/radius\/large,6px)] rounded-tr-[var(--form\/radius\/large,6px)]" />
                          <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-full" data-node-id="I367:165367;804:13109;810:13231" data-name="padding-content">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-medium font-medium leading-[16px] min-w-px not-italic overflow-hidden relative text-[11px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis whitespace-nowrap" data-node-id="I367:165367;804:13109;810:13232">
                              End
                            </p>
                          </div>
                          <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-full" data-node-id="I367:165367;804:13109;810:13233" data-name="label">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[13px] text-[color:#7c7b87] text-ellipsis whitespace-nowrap" data-node-id="I367:165367;804:13109;810:13234">
                              e.g, 2f, +2d, +2m, fri
                            </p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-node-id="367:166218">
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="367:166219">
                    <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:166220" data-name="iconButton">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I367:166220;743:13207" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretLeft} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[var(--form\/gap\/medium,4px)] items-center justify-center min-w-px overflow-clip px-[var(--form\/padding\/medium,12px)] relative rounded-[var(--form\/radius\/medium,6px)]" data-node-id="367:166221" data-name="month selection">
                      <div className="content-stretch flex items-center px-[var(--form\/gap\/medium,4px)] relative shrink-0 w-[108px]" data-node-id="367:166222" data-name="padding-content">
                        <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[24px] not-italic overflow-hidden relative shrink-0 text-[15px] text-[color:#131221] text-center text-ellipsis whitespace-nowrap" data-node-id="367:166223">
                          January 2026
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:166226" data-name="iconButton">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I367:166226;743:13207" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="367:166227">
                    <div className="content-stretch flex flex-col gap-[4px] h-[276px] items-end px-[8px] relative shrink-0 w-full" data-node-id="367:166245" data-name="Dates">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full" data-node-id="367:166246" data-name="Week">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166248" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166249">
                            Mo
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166250" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166251">
                            Tu
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166252" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166253">
                            We
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166254" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166255">
                            Th
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166256" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166257">
                            Fr
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166258" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166259">
                            Sa
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166260" data-name="_Weekday">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[12px] not-italic relative shrink-0 text-[9px] text-[color:#1c2024] tracking-[0.9px] uppercase whitespace-nowrap" data-node-id="367:166261">
                            Su
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-node-id="367:166262" data-name="Week1">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166264" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166264;794:8376">
                            1
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166265" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166265;794:8376">
                            2
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166266" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166266;794:8376">
                            3
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative rounded-bl-[8px] rounded-tl-[8px]" data-node-id="367:166267" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166267;794:8371">
                            4
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166268" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166268;794:8371">
                            5
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166269" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166269;794:8371">
                            6
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166270" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166270;794:8371">
                            7
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-node-id="367:166271" data-name="Week2">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166273" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166273;794:8371">
                            8
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166274" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166274;794:8371">
                            9
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166275" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166275;794:8371">
                            10
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166276" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166276;794:8371">
                            11
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166277" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166277;794:8371">
                            12
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166278" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166278;794:8371">
                            13
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative rounded-[4px]" data-node-id="367:166279" data-name="cal-day">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--\(new\)-neutral\/solid\/100,#f8f8f9)] left-1/2 rounded-[48px] size-[36px] top-1/2" data-node-id="I367:166279;794:8373" />
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166279;794:8374">
                            14
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-node-id="367:166280" data-name="Week3">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166282" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166282;794:8371">
                            15
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166283" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166283;794:8371">
                            16
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166284" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166284;794:8371">
                            17
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166285" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166285;794:8371">
                            18
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166286" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166286;794:8371">
                            19
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166287" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166287;794:8371">
                            20
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166288" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166288;794:8371">
                            21
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-node-id="367:166289" data-name="Week4">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166291" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166291;794:8371">
                            22
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166292" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166292;794:8371">
                            23
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166293" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166293;794:8371">
                            24
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166294" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166294;794:8371">
                            25
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166295" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166295;794:8371">
                            26
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166296" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166296;794:8371">
                            27
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166297" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166297;794:8371">
                            28
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-node-id="367:166298" data-name="Week5">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166300" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166300;794:8371">
                            29
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-node-id="367:166301" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166301;794:8371">
                            30
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-node-id="367:166302" data-name="cal-day">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I367:166302;794:8371">
                            31
                          </p>
                        </div>
                        <CalDay className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" state="disabled" />
                        <CalDay className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" day="2" state="disabled" />
                        <CalDay className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" day="3" state="disabled" />
                        <CalDay className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" day="4" state="disabled" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="367:166369">
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-node-id="367:166370">
                    <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-b border-solid content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-node-id="367:166371" data-name="Title">
                      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:#131221] whitespace-nowrap" data-node-id="367:166372">{`Pattern `}</p>
                      <Toggle1 className="bg-[var(--\(new\)-neutral\/solid\/800,#52515e)] content-stretch flex h-[16px] items-center overflow-clip p-[var(--toggle\/padding\/medium,2px)] relative rounded-[var(--toggle\/radius\/medium,999px)] shrink-0 w-[28px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[937px] items-start left-[1241px] top-[44px] w-[373px]" data-node-id="367:166788" data-name="Summary panel">
        <LegacyTogglePill className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[999px] shrink-0 w-full" />
      </div>
    </div>
  );
}
