// Generated from Figma get_design_context (node 367:170870)
// on 2026-09-18T13:27Z — do NOT hand-edit.
// Regenerate with: python3 scripts/import-frame.py <json> NgOverviewFrame06 367:170870
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
const imgIcon = `${assetPathPrefix}/5ade4.svg`;
const imgIcon1 = `${assetPathPrefix}/26edc.svg`;
const imgIcon2 = `${assetPathPrefix}/5f636.svg`;
const imgIcon3 = `${assetPathPrefix}/cad21.svg`;
const imgIcon4 = `${assetPathPrefix}/1b06a.svg`;
const imgIcon5 = `${assetPathPrefix}/965ce.svg`;
const imgIcon6 = `${assetPathPrefix}/21538.svg`;
const imgSvg6 = `${assetPathPrefix}/a3010.svg`;
const imgIcon7 = `${assetPathPrefix}/5eb0d.svg`;
const imgIcon8 = `${assetPathPrefix}/c3bea.svg`;
const imgIcon9 = `${assetPathPrefix}/1b1ad.svg`;
const imgIcon10 = `${assetPathPrefix}/37666.svg`;
const imgCalendar = `${assetPathPrefix}/313e5.svg`;
const imgMenu = `${assetPathPrefix}/c10a1.svg`;
const imgLocationIcon = `${assetPathPrefix}/cb090.svg`;
const imgBriefcase = `${assetPathPrefix}/0b538.svg`;
const imgPound = `${assetPathPrefix}/fad8b.svg`;
const imgIcon11 = `${assetPathPrefix}/5c98d.svg`;
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

type CheckboxProps = {
  className?: string;
  active?: boolean;
  partialSelect?: boolean;
  size?: "medium";
  state?: "default";
};

function Checkbox({ className, active = true, partialSelect = false, size = "medium", state = "default" }: CheckboxProps) {
  const isActive = active;
  const isNotActive = !active;
  return (
    <div className={className || `${String.raw`content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] size-[var(--checkbox\/size\/medium,16px)] `}${isNotActive ? String.raw`border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid` : ""}`} id={isNotActive ? "node-1_283" : "node-1_281"}>
      <div aria-hidden className={`${String.raw`absolute inset-0 pointer-events-none rounded-[var(--checkbox\/radius\/medium,2px)] `}${isNotActive ? String.raw`bg-[var(--\(new\)-neutral\/solid\/50,white)]` : String.raw`bg-[var(--\(new\)-primary\/solid\/700,#272199)]`}`} />
      {isActive && (
        <>
          <div className="relative shrink-0 size-[12px]" data-node-id="1:282" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
        </>
      )}
      {isNotActive && partialSelect && (
        <div className="relative shrink-0 size-[12px]" data-node-id="1:284" data-name="icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
        </div>
      )}
      {isNotActive && <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />}
    </div>
  );
}

type ListProps = {
  className?: string;
  list?: "default";
  text?: string;
};

function List({ className, list = "default", text = "Hivestack" }: ListProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative w-[363px]"} data-node-id="367:71444">
      <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-node-id="367:71445" data-name="Parent 4">
        <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center py-[var(--0\,75-rem,12px)] relative shrink-0 w-full" data-node-id="367:71446">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] relative rounded-[4px]" data-node-id="367:71447" data-name="Environ1">
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="367:71448">
              <div className="flex flex-row items-center self-stretch" data-node-id="367:71449">
                <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                  <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0" data-node-id="367:71450">
                    <Checkbox active={false} className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex items-center justify-center overflow-clip pointer-events-none relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="367:71456">
                    {text}
                  </p>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-[32px]" data-node-id="367:71457" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NgOverviewFrame06() {
  return (
    <div className="bg-[#efeff0] border border-[#e6e5e9] border-solid content-stretch flex items-center overflow-clip relative rounded-[8px] size-full" data-node-id="367:170870" data-name="PRG -> Deal Creation flow">
      <div className="bg-[#f8f8f9] content-stretch flex flex-[1_0_0] flex-col h-[982px] isolate items-start min-w-px relative" data-node-id="367:170871" data-name="div.min-w-300">
        <div className="content-stretch flex flex-col gap-[20px] h-[37px] items-start px-[56px] py-[16px] relative shrink-0 w-full z-[2]" data-node-id="367:170872" data-name="div.py-4">
          <div className="absolute content-stretch flex h-[47px] items-center justify-between left-[62px] p-[var(--0\,5-rem,8px)] top-0 w-[1435px]" data-node-id="367:170874" data-name="top bav bar header">
            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:170875">
              <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-r border-solid content-stretch flex gap-[var(--0\,5-rem,8px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0,0px)] relative shrink-0 w-[600px]" data-node-id="367:170876" data-name="top bav bar header">
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:170877" data-name="icon button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:170877;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative" data-node-id="367:170878" data-name="Campaign title + Status">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] h-[24px] items-center min-w-px relative" data-node-id="367:170879" data-name="Campaign name + Logo" />
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:170882" data-name="icon button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:170882;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:170883">
                <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="367:170884" data-name="Deal lines - Tabs">
                  <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:170885" data-name="tab button">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:170885;1616:22665" data-name="padding-text">
                      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:170885;1616:22667">
                        Deal line 1
                      </p>
                    </div>
                  </div>
                  <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:170887" data-name="tab button">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:170887;769:15148" data-name="padding-text">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I367:170887;769:15135" data-name="icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:170887;769:15103">
                        New deal line
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-l border-solid content-stretch flex items-center justify-between pl-[5px] relative shrink-0 w-[370px]" data-node-id="367:170888" data-name="Header / right panel">
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="367:170889" data-name="icon button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I367:170889;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="367:170890">
                <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:170891" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:170891;1616:22665" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:170891;1616:22666" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:170891;1616:22667">
                      Overview
                    </p>
                  </div>
                </div>
                <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="367:170892" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I367:170892;769:15148" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:170892;769:15135" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--text.secondary,#42414e)] whitespace-nowrap" data-node-id="I367:170892;769:15103">
                      Map
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[671px] top-[216px] z-[1]" data-node-id="367:170894">
          <div className="absolute bg-[var(--background.body,#fdfdfd)] content-stretch flex flex-col h-[478px] items-center left-[671px] rounded-[8px] top-[216px] w-[427px]" data-node-id="367:170895" data-name="secondary panel (base)">
            <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-b border-solid content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full" data-node-id="I367:170895;3552:23172" data-name="secondary panel (base)">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[156px]" data-node-id="I367:170895;3552:23172;3563:11111">
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I367:170895;3552:23172;3552:23070">
                  <p className="leading-[20px]">Environment</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I367:170895;3552:23172;3552:23080">
                <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--text.tiertiary,#7c7b87)] text-right whitespace-nowrap" data-node-id="I367:170895;3552:23172;3552:23074">
                  Deal line 1
                </p>
              </div>
            </div>
            <div className="flex-[1_0_0] min-h-px relative w-[427px]" data-node-id="I367:170895;3552:23231" data-name="Component 1/.elements/Secondary Panel/Content" />
            <div className="border-[var(--divider,rgba(66,65,78,0.1))] border-solid border-t content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full" data-node-id="I367:170895;3552:23179" data-name="secondary panel (base)">
              <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/medium,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0" data-node-id="I367:170895;3552:23179;3552:23123" data-name="Button">
                <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-node-id="I367:170895;3552:23179;3552:23123;737:12172" data-name="padding-label">
                  <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I367:170895;3552:23179;3552:23123;737:12173">
                    Cancel
                  </p>
                </div>
              </div>
              <div className="bg-[var(--\(new\)-primary\/solid\/900,#15115e)] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-[var(--button\/gap\/medium,1px)] h-[28px] items-center justify-center min-w-[36px] px-[var(--button\/padding\/medium,8px)] relative rounded-[var(--button\/radius\/medium,6px)] shrink-0" data-node-id="I367:170895;3552:23179;3552:23110" data-name="Button">
                <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-node-id="I367:170895;3552:23179;3552:23110;737:12162" data-name="padding-label">
                  <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/50,#f4f5ff)] whitespace-nowrap" data-node-id="I367:170895;3552:23179;3552:23110;737:12163">
                    Next
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[4px] h-[382px] items-start left-[671px] px-[12px] py-[8px] top-[260px] w-[427px]" data-node-id="367:170896" data-name="Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="367:170898">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="367:170899">
                <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-[363px]" data-node-id="367:170900" data-name="List">
                  <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-node-id="I367:170900;8252:70389" data-name="Parent 4">
                    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center py-[var(--0\,75-rem,12px)] relative shrink-0 w-full" data-node-id="I367:170900;8252:70390">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] relative rounded-[4px]" data-node-id="I367:170900;8252:70391" data-name="Environ1">
                        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="I367:170900;8252:70392">
                          <div className="flex flex-row items-center self-stretch" data-node-id="I367:170900;8252:70393">
                            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0" data-node-id="I367:170900;8252:70394">
                                <Checkbox active={false} className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex items-center justify-center overflow-clip pointer-events-none relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]" />
                              </div>
                              <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:170900;8252:70400">
                                Select all
                              </p>
                            </div>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-[32px]" data-node-id="I367:170900;8252:70401" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-[363px]" data-node-id="367:170901" data-name="List">
                  <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-node-id="I367:170901;8252:70389" data-name="Parent 4">
                    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center py-[var(--0\,75-rem,12px)] relative shrink-0 w-full" data-node-id="I367:170901;8252:70390">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] relative rounded-[4px]" data-node-id="I367:170901;8252:70391" data-name="Environ1">
                        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="I367:170901;8252:70392">
                          <div className="flex flex-row items-center self-stretch" data-node-id="I367:170901;8252:70393">
                            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0" data-node-id="I367:170901;8252:70394">
                                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]" data-node-id="I367:170901;8252:70395" data-name="checkbox">
                                  <div aria-hidden className="absolute bg-[var(--\(new\)-primary\/solid\/700,#272199)] inset-0 pointer-events-none rounded-[var(--checkbox\/radius\/medium,2px)]" />
                                  <div className="relative shrink-0 size-[12px]" data-node-id="I367:170901;8252:70395;114:1578" data-name="icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                                  </div>
                                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:170901;8252:70400">
                                Airports
                              </p>
                            </div>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-[32px]" data-node-id="I367:170901;8252:70401" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-[363px]" data-node-id="367:170902" data-name="List">
                  <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-node-id="I367:170902;8252:70389" data-name="Parent 4">
                    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center py-[var(--0\,75-rem,12px)] relative shrink-0 w-full" data-node-id="I367:170902;8252:70390">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] relative rounded-[4px]" data-node-id="I367:170902;8252:70391" data-name="Environ1">
                        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="I367:170902;8252:70392">
                          <div className="flex flex-row items-center self-stretch" data-node-id="I367:170902;8252:70393">
                            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0" data-node-id="I367:170902;8252:70394">
                                <Checkbox active={false} className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex items-center justify-center overflow-clip pointer-events-none relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]" />
                              </div>
                              <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:170902;8252:70400">
                                Billboard
                              </p>
                            </div>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-[32px]" data-node-id="I367:170902;8252:70401" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <List className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-[363px]" text="Transport" />
                <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-[363px]" data-node-id="367:170904" data-name="List">
                  <div className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-full" data-node-id="I367:170904;8252:70389" data-name="Parent 4">
                    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center py-[var(--0\,75-rem,12px)] relative shrink-0 w-full" data-node-id="I367:170904;8252:70390">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] relative rounded-[4px]" data-node-id="I367:170904;8252:70391" data-name="Environ1">
                        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="I367:170904;8252:70392">
                          <div className="flex flex-row items-center self-stretch" data-node-id="I367:170904;8252:70393">
                            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0">
                              <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] h-full items-center relative shrink-0" data-node-id="I367:170904;8252:70394">
                                <Checkbox active={false} className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex items-center justify-center overflow-clip pointer-events-none relative rounded-[var(--checkbox\/radius\/medium,2px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 size-[16px]" />
                              </div>
                              <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I367:170904;8252:70400">
                                Street Furniture
                              </p>
                            </div>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-[32px]" data-node-id="I367:170904;8252:70401" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <List className="content-stretch flex flex-col gap-[var(--no-value,0px)] items-start relative shrink-0 w-[363px]" text="Shopping Mall " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--\(new\)-primary\/solid\/950,#090642)] content-stretch flex flex-col gap-[43.59px] h-[982px] items-center left-0 pb-[672px] pt-[16px] top-[-1px] w-[60px]" data-node-id="367:170906" data-name="side nav bar">
        <Logo className="h-[32px] relative shrink-0 w-[24.633px]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="I367:170906;7803:21375" data-name="Nav → List">
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="creative" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="data" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="admin" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="availability" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="settings" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="user" />
        </div>
        <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-[18px] right-0" data-node-id="I367:170906;7803:21382" data-name="div.absolute">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I367:170906;7803:21383" data-name="div.tooltip__2gGuw">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="I367:170906;7803:21670">
              <Nav className="h-[30px] relative shrink-0 w-[60px]" type="record" />
              <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[13px] relative shrink-0 w-[60px]" data-node-id="I367:170906;7803:21698" data-name="Nav">
                <div className="content-stretch flex h-[34px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I367:170906;7803:21698;7803:21305" data-name="Button">
                  <div className="content-stretch flex items-center overflow-clip p-[2px] relative rounded-[12px] shrink-0 size-[24px]" data-node-id="I367:170906;7803:21698;7803:21306" data-name="Button">
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="I367:170906;7803:21698;7803:21307">
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
      <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_1px_rgba(15,23,41,0.06),0px_4px_20px_rgba(15,23,41,0.06)] flex flex-col h-[930px] items-start left-[65px] px-[16px] rounded-[14px] top-[46px] w-[600px]" data-node-id="367:170907" data-name="deal strip (full)">
        <div className="content-stretch flex flex-col gap-[10px] h-[892px] items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:6804" data-name="Panel">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:170907;9245:24813" data-name="Header">
            <div className="content-stretch flex flex-col items-start pr-[8px] py-[16px] relative shrink-0 w-full" data-node-id="I367:170907;9245:18575" data-name="deal strip header">
              <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="I367:170907;9245:18575;7651:12833" data-name="Header">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] min-w-px not-italic relative text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)]" data-node-id="I367:170907;9245:18575;7651:12834">
                  <p className="leading-[20px]">Deal line 1</p>
                </div>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="I367:170907;9245:18575;7828:69615">
                  <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I367:170907;9245:18575;7828:69543" data-name="Header">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:170907;9245:18575;7828:69544" data-name="Actions">
                      <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;9245:18575;7828:69545" data-name="icon button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;9245:18575;7828:69545;743:13432" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I367:170907;9245:18575;7828:69507" data-name="Header">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:170907;9245:18575;7828:69508" data-name="Actions">
                      <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;9245:18575;7828:69509" data-name="icon button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;9245:18575;7828:69509;743:13432" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:170907;9245:18575;9408:800409" data-name="Actions">
                    <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I367:170907;9245:18575;9408:800410" data-name="Header">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I367:170907;9245:18575;9408:800411" data-name="Actions">
                        <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;9245:18575;9408:800412" data-name="icon button">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;9245:18575;9408:800412;743:13432" data-name="icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[5px] items-end pb-[10px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18105" data-name="Section 1">
            <div className="border-0 border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-col h-[25px] items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:45779" data-name="Section title">
              <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:45779;7543:2379" data-name="Section title">
                <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:45779;7543:2380" data-name="Heading">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold'] font-semibold h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:170907;7651:18105;7547:45779;7543:2381">
                    <p className="leading-[20px]">Deal line info</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;7651:18105;7547:45779;7543:2382" data-name="icon button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:45779;7543:2382;743:13207" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-node-id="I367:170907;7651:18105;10546:67816">
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[348px]" data-node-id="I367:170907;7651:18105;7547:3477" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:3477;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:3477;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:3477;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:170907;7651:18105;7547:3477;7534:10434" data-name="tile-type">
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:170907;7651:18105;7547:3477;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:170907;7651:18105;7547:3477;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">{`Deal line 1 `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[348px]" data-node-id="I367:170907;7651:18105;7547:3713" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:3713;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:3713;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:3713;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:170907;7651:18105;7547:3713;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:3713;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendar} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:170907;7651:18105;7547:3713;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:170907;7651:18105;7547:3713;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Schedule</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I367:170907;7651:18105;7547:3713;7534:10440" data-name="1ST Chip">
                        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I367:170907;7651:18105;7547:3713;7534:10440;749:2194" data-name="parent-content">
                          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I367:170907;7651:18105;7547:3713;7534:10440;749:2196" data-name="padding-text">
                            <p className="[word-break:break-word] font-['Inter'] font-regular font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/700,#272199)] text-left whitespace-pre" data-node-id="I367:170907;7651:18105;7547:3713;7534:10440;749:2197">{`01/01/2026  - 07/01/2026 `}</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:170907;7651:18105;7547:3713;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:3713;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex flex-col h-[32px] items-start justify-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[348px]" data-node-id="I367:170907;7651:18105;7547:43523" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-primary\/solid\/50,#f4f5ff)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43523;7534:10485" data-name="TEXT BOX">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43523;8951:75274" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43523;8951:75275" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43523;8951:75276" data-name="Item list">
                        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43523;8951:75277" data-name="Main heading">
                          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43523;8951:75278" data-name="tile-heading">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I367:170907;7651:18105;7547:43523;8951:75279" data-name="tile-type">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:43523;8951:75280" data-name="Location Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocationIcon} />
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[4px] relative" data-node-id="I367:170907;7651:18105;7547:43523;8951:75281" data-name="Heading">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:170907;7651:18105;7547:43523;8951:75282">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">{`Environment `}</p>
                                </div>
                              </div>
                              <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:170907;7651:18105;7547:43523;8951:75283" data-name="Required">
                                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left whitespace-nowrap" data-node-id="I367:170907;7651:18105;7547:43523;8951:75284">
                                  <p className="leading-[20px]">Required</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:170907;7651:18105;7547:43523;10185:174906" data-name="right-icon">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:43523;10185:174907" data-name="menu">
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
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[348px]" data-node-id="I367:170907;7651:18105;7547:43066" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43066;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43066;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43066;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:170907;7651:18105;7547:43066;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:43066;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:170907;7651:18105;7547:43066;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:170907;7651:18105;7547:43066;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">DSP</p>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[53px]" data-node-id="I367:170907;7651:18105;7547:43066;7534:10438" data-name="Heading">
                          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:170907;7651:18105;7547:43066;10193:181171" data-name="Required">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left w-[56px]" data-node-id="I367:170907;7651:18105;7547:43066;10193:181172">
                              <p className="leading-[20px]">Required</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:170907;7651:18105;7547:43066;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:43066;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[348px]" data-node-id="I367:170907;7651:18105;7547:43980" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43980;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43980;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I367:170907;7651:18105;7547:43980;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I367:170907;7651:18105;7547:43980;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:43980;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPound} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I367:170907;7651:18105;7547:43980;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I367:170907;7651:18105;7547:43980;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">CPM</p>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-[53px]" data-node-id="I367:170907;7651:18105;7547:43980;7534:10438" data-name="Heading">
                          <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[54px]" data-node-id="I367:170907;7651:18105;7547:43980;10193:181171" data-name="Required">
                            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left w-[56px]" data-node-id="I367:170907;7651:18105;7547:43980;10193:181172">
                              <p className="leading-[20px]">Required</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I367:170907;7651:18105;7547:43980;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18105;7547:43980;10185:171208" data-name="menu">
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
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18294" data-name="Section 3">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18294;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18294;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-regular font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:170907;7651:18294;7543:2381">
                  <p className="leading-[20px]">Filters</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;7651:18294;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18294;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon11} />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18360" data-name="Section 4">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18360;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18360;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-regular font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:170907;7651:18360;7543:2381">
                  <p className="leading-[20px]">Data targeting</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;7651:18360;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18360;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon11} />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18426" data-name="Section 5">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I367:170907;7651:18426;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I367:170907;7651:18426;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-regular font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I367:170907;7651:18426;7543:2381">
                  <p className="leading-[20px]">Apply services</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I367:170907;7651:18426;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I367:170907;7651:18426;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon11} />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] h-[937px] items-start left-[1134px] top-[46px] w-[373px]" data-node-id="367:170908" data-name="Summary panel">
        <LegacyTogglePill className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[999px] shrink-0 w-full" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[1438px] rounded-[25px] shadow-[2px_0px_6px_0px_rgba(0,0,0,0.15)] size-[50px] top-[909px]" data-node-id="367:170911" data-name="Pendo">
        <div className="content-stretch flex flex-col items-start max-w-[50px] overflow-clip relative rounded-[999px] shrink-0 size-[50px]" data-node-id="I367:170911;9595:93819" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[50px]" data-node-id="I367:170911;9595:93820" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae fill">
            <div className="overflow-clip relative shrink-0 size-[50px]" data-node-id="I367:170911;9595:93821" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGuideMediaBd5Ccd85Dcae4E60A1DbE7E941Ad08Ae} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[26px] items-start left-[32px] pt-[12px] px-[10px] rounded-[20px] top-[-3px] w-[38.71px]" data-node-id="I367:170911;9595:93828" data-name="div.pendo-resource-center-badge-notification-bubble">
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[32.36px]" data-node-id="I367:170911;9595:93829" data-name="::before" />
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[20px]" data-node-id="I367:170911;9595:93830" data-name="div.pendo-resource-center-badge-notification-bubble paints" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px pb-[27px] pl-[0.311px] relative w-full" data-node-id="I367:170911;9595:93831" data-name="div.pendo-notification-bubble-unread-count">
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-regular font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--\(new\)-neutral\/solid\/50,white)] text-center whitespace-nowrap" data-node-id="I367:170911;9595:93832">
              <p className="leading-[0px]">30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
