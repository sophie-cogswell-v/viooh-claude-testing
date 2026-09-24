// Generated from Figma get_design_context (node 392:16859)
// on 2026-09-22T08:24Z — do NOT hand-edit.
// Regenerate with: python3 scripts/import-frame.py <json> PgNewMap 392:16859
//
// Local rewrites: asset prefix → /figma-assets, Inter font classes,
// duplicated default export stripped, top component renamed.

const assetPathPrefix = "/figma-assets";
const imgStatusChip_b07b2 = `${assetPathPrefix}/b07b2.svg`;
const imgUpdatedPill_0d493 = `${assetPathPrefix}/0d493.svg`;
const imgStartIconTerminate = `${assetPathPrefix}/34e57.svg`;
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
const imgTreeStructure = `${assetPathPrefix}/0ebb0.svg`;
const imgE22 = `${assetPathPrefix}/22f0a.png`;
const imgGuideMediaBd5Ccd85Dcae4E60A1DbE7E941Ad08Ae = `${assetPathPrefix}/e1686.svg`;
const imgIcon = `${assetPathPrefix}/d6070.svg`;
const imgIcon1 = `${assetPathPrefix}/c283b.svg`;
const imgStartIcon = `${assetPathPrefix}/39b25.svg`;
const imgStartIcon1 = `${assetPathPrefix}/8558d.svg`;
const imgStartIcon2 = `${assetPathPrefix}/13de3.svg`;
const imgStartIcon3 = `${assetPathPrefix}/60c99.svg`;
const imgIcon2 = `${assetPathPrefix}/03caf.svg`;
const imgVector = `${assetPathPrefix}/7099a.svg`;
const imgIcon3 = `${assetPathPrefix}/8b713.svg`;
const imgIcon4 = `${assetPathPrefix}/08f23.svg`;
const imgIcon5 = `${assetPathPrefix}/cee61.svg`;
const imgIcon6 = `${assetPathPrefix}/96589.svg`;
const imgIcon7 = `${assetPathPrefix}/ebfcc.svg`;
const imgIcon8 = `${assetPathPrefix}/37666.svg`;
const imgCalendar = `${assetPathPrefix}/313e5.svg`;
const imgMenu = `${assetPathPrefix}/c10a1.svg`;
const imgEnvironementChannel = `${assetPathPrefix}/21f40.svg`;
const imgBriefcase = `${assetPathPrefix}/0b538.svg`;
const imgPound = `${assetPathPrefix}/fad8b.svg`;
const imgIcon9 = `${assetPathPrefix}/c213c.svg`;
const imgLeftIcoon = `${assetPathPrefix}/29a98.svg`;
const imgLeftIcoon1 = `${assetPathPrefix}/a1e90.svg`;
const imgLeftIcoon2 = `${assetPathPrefix}/ead09.svg`;
const imgLocationIcon = `${assetPathPrefix}/ca24c.svg`;
const imgIcon10 = `${assetPathPrefix}/5c98d.svg`;
const imgStartIcon4 = `${assetPathPrefix}/901c2.svg`;
const imgStartIcon5 = `${assetPathPrefix}/b95c8.svg`;
const imgIcon11 = `${assetPathPrefix}/65f76.svg`;
const imgIcon12 = `${assetPathPrefix}/86c98.svg`;
const imgIcon13 = `${assetPathPrefix}/cad21.svg`;
const imgIcon14 = `${assetPathPrefix}/1b06a.svg`;
const imgIcon15 = `${assetPathPrefix}/76b52.svg`;
const imgIcon16 = `${assetPathPrefix}/5268f.svg`;
const imgIcon17 = `${assetPathPrefix}/457c2.svg`;
const imgSvg6 = `${assetPathPrefix}/a3010.svg`;
const imgPointer = `${assetPathPrefix}/2c72f.svg`;

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

export default function PgPending() {
  return (
    <div className="bg-[#efeff0] border border-[#e6e5e9] border-solid content-stretch flex items-center overflow-clip relative rounded-[8px] size-full" data-node-id="392:16859" data-name="PRG -> Deal Creation flow">
      <div className="absolute h-[979px] left-[60px] top-[-1px] w-[1559px]" data-node-id="392:16860" data-name="e2 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.07%] left-[-0.53%] max-w-none top-[-6.67%] w-full" src={imgE22} />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[1542px] rounded-[25px] shadow-[2px_0px_6px_0px_rgba(0,0,0,0.15)] size-[50px] top-[912px]" data-node-id="392:16861" data-name="Pendo">
        <div className="content-stretch flex flex-col items-start max-w-[50px] overflow-clip relative rounded-[999px] shrink-0 size-[50px]" data-node-id="I392:16861;9595:93819" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[50px]" data-node-id="I392:16861;9595:93820" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae fill">
            <div className="overflow-clip relative shrink-0 size-[50px]" data-node-id="I392:16861;9595:93821" data-name="guide-media-bd5ccd85-dcae-4e60-a1db-e7e941ad08ae">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGuideMediaBd5Ccd85Dcae4E60A1DbE7E941Ad08Ae} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[26px] items-start left-[32px] pt-[12px] px-[10px] rounded-[20px] top-[-3px] w-[38.71px]" data-node-id="I392:16861;9595:93828" data-name="div.pendo-resource-center-badge-notification-bubble">
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[32.36px]" data-node-id="I392:16861;9595:93829" data-name="::before" />
          <div className="absolute bg-[var(--\(new\)-primary\/solid\/600,#2c24c3)] inset-0 rounded-[20px]" data-node-id="I392:16861;9595:93830" data-name="div.pendo-resource-center-badge-notification-bubble paints" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px pb-[27px] pl-[0.311px] relative w-full" data-node-id="I392:16861;9595:93831" data-name="div.pendo-notification-bubble-unread-count">
            <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--\(new\)-neutral\/solid\/50,white)] text-center whitespace-nowrap" data-node-id="I392:16861;9595:93832">
              <p className="leading-[0px]">30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[5px] h-[937px] items-start left-[1239px] top-[47px] w-[373px]" data-node-id="392:16862" data-name="Summary panel">
        <LegacyTogglePill className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border border-[#e5e5eb] border-solid content-stretch drop-shadow-[0px_2px_4px_rgba(18,18,33,0.06)] flex h-[40px] items-center justify-between px-[14px] py-[8px] relative rounded-[12px] shrink-0 w-full" />
        <div className="bg-white border border-[#e5e5eb] border-solid content-stretch flex h-[40px] items-center justify-between overflow-clip px-[16px] py-[14px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(13,13,20,0.06)] shrink-0 w-[373px]" data-node-id="392:16864" data-name="status-island">
          <div className="bg-[var(--\(new\)-yellow\/opacity\/5,rgba(248,188,26,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="392:16866" data-name="chip">
            <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusChip_b07b2} />
              </div>
              <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-name="padding-text">
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-yellow\/solid\/600,#e4b02e)] whitespace-nowrap" data-node-id="I392:16866;814:3324">
                  Pending
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          <div className="bg-[#edecfc] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[8px] pr-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="update-pill">
            <div className="relative shrink-0 size-[12px]" data-name="pill-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUpdatedPill_0d493} />
            </div>
            <p className="[word-break:break-word] font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#2c24c3] text-[12px] whitespace-nowrap">
              Updated 2 mins ago
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="392:16872" data-name="Summary Panel — MASTER">
          <div className="bg-white border border-[#e5e5eb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="392:16873" data-name="panel">
            <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] pt-[12px] px-[10px] relative shrink-0 w-full" data-node-id="392:16874" data-name="header">
              <div className="bg-[var(--\(new\)-neutral\/opacity-dark\/5,rgba(19,18,33,0.05))] content-stretch flex items-center justify-center p-[2px] relative rounded-[var(--radius\/lg,8px)] shrink-0 w-full" data-node-id="392:16875" data-name="multi-switcher">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,125-rem,2px)] h-[32px] items-center justify-center min-w-px overflow-clip px-[var(--1-rem,16px)] relative rounded-[var(--radius\/md,6px)]" data-node-id="I392:16875;7486:256" data-name="multi_button-switch">
                  <div className="content-stretch flex items-center justify-center pb-px px-[var(--0\,125-rem,2px)] relative shrink-0" data-node-id="I392:16875;7486:256;7486:384" data-name="padding-text">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/900,#15115e)] text-center whitespace-nowrap" data-node-id="I392:16875;7486:256;7486:385">
                      Campaign
                    </p>
                  </div>
                </div>
                <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-[1_0_0] gap-[var(--0\,125-rem,2px)] h-[32px] items-center justify-center min-w-px overflow-clip px-[var(--1-rem,16px)] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)]" data-node-id="I392:16875;7486:257" data-name="multi_button-switch">
                  <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                  <div className="content-stretch flex items-center justify-center pb-px px-[var(--0\,125-rem,2px)] relative shrink-0" data-node-id="I392:16875;7486:257;7486:368" data-name="padding-text">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/900,#15115e)] text-center whitespace-nowrap" data-node-id="I392:16875;7486:257;7486:369">
                      Deal line
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[16px] px-[10px] relative shrink-0 w-full" data-node-id="392:16876" data-name="sections">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="392:16877" data-name="Availability">
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[343px]" data-node-id="392:16905" data-name="Summary cards">
                  <div className="content-stretch drop-shadow-[0px_3px_5px_rgba(44,36,195,0.1)] flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-full" data-node-id="I392:16905;13261:99722" data-name="availability">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I392:16905;13261:99724" data-name="Campaign settings">
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="I392:16905;13261:99725" data-name="heading">
                        <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I392:16905;13261:99726">
                          <p className="leading-[20px]">Availability</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16905;13261:99727" data-name="iconButton">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16905;13261:99727;743:13207" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="I392:16905;13261:99967" data-name="Row 1">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I392:16905;13261:99728" data-name="row-Total cost">
                        <div className="[word-break:break-word] content-stretch flex font-['Inter'] font-semibold font-semibold items-center justify-between not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="I392:16905;13261:99729" data-name="top">
                          <p className="leading-[20px] relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/primary,#131221)]" data-node-id="I392:16905;13261:99730">
                            Frames
                          </p>
                          <p className="leading-[normal] relative shrink-0 text-[#121726] text-[17px]" data-node-id="I392:16905;13261:99731">
                            2,665
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I392:16905;13261:99779" data-name="row-Total cost">
                        <div className="[word-break:break-word] content-stretch flex font-['Inter'] font-normal font-normal items-center justify-between not-italic overflow-clip relative shrink-0 text-[color:var(--\(new\)-text\/secondary,#42414e)] w-full whitespace-nowrap" data-node-id="I392:16905;13261:99780" data-name="top">
                          <p className="leading-[20px] relative shrink-0 text-[11px]" data-node-id="I392:16905;13261:99781">
                            Available
                          </p>
                          <p className="leading-[normal] relative shrink-0 text-[14px]" data-node-id="I392:16905;13261:99782">
                            2,665
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#edf0f5] h-px relative shrink-0 w-full" data-node-id="I392:16905;13261:99756" data-name="divider" />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="392:16944" data-name="NG buttons">
                <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--button\/gap\/large,4px)] h-[36px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/large,12px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/large,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0" data-node-id="392:16945" data-name="Button">
                  <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--button\/radius\/large,6px)]" />
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16945;735:11329" data-name="start-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon1} />
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                </div>
                <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--button\/gap\/large,4px)] h-[36px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/large,12px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/large,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0" data-node-id="392:16946" data-name="Button">
                  <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--button\/radius\/large,6px)]" />
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16946;735:11329" data-name="start-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon2} />
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                </div>
                <div className="content-stretch drop-shadow-[0px_1px_1px_rgba(16,16,52,0.08)] flex flex-[1_0_0] gap-[var(--button\/gap\/large,4px)] h-[36px] items-center justify-center min-w-[36px] px-[var(--button\/padding\/large,12px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/large,6px)]" data-node-id="392:16947" data-name="Button">
                  <div aria-hidden className="absolute bg-[var(--\(new\)-primary\/solid\/900,#15115e)] inset-0 pointer-events-none rounded-[var(--button\/radius\/large,6px)]" />
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16947;735:4520" data-name="start-icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon3} />
                  </div>
                  <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-node-id="I392:16947;735:4521" data-name="padding-label">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/50,#f4f5ff)] whitespace-nowrap" data-node-id="I392:16947;735:4522">
                      Check Allocation
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip py-[10px] relative shrink-0 w-[343px]" data-node-id="392:16948" data-name="pricing">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I392:16948;13261:100659" data-name="Campaign settings">
                  <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="I392:16948;13261:100660" data-name="heading">
                    <div className="[word-break:break-word] flex flex-col font-['Inter'] font-semibold font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I392:16948;13261:100661">
                      <p className="leading-[20px]">Pricing</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16948;13261:100662" data-name="iconButton">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I392:16948;13261:100662;743:13207" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] bg-white content-stretch flex items-center justify-between not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="I392:16948;13261:100663" data-name="Row 1">
                  <p className="font-['Inter'] font-normal font-normal leading-[20px] relative shrink-0 text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)]" data-node-id="I392:16948;13261:100664">
                    CPM entered
                  </p>
                  <p className="font-['Inter'] font-semibold font-semibold leading-[normal] relative shrink-0 text-[#121726] text-[22px]" data-node-id="I392:16948;13261:100665">
                    £10
                  </p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f6fa] content-stretch flex items-start leading-[normal] not-italic overflow-clip px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full whitespace-nowrap" data-node-id="I392:16948;13261:100666" data-name="cpm-stats">
                  <div className="bg-[#f6f6fa] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip relative" data-node-id="I392:16948;13261:100667" data-name="stat-Min">
                    <p className="font-['Inter'] font-medium font-medium relative shrink-0 text-[#9499a8] text-[11px]" data-node-id="I392:16948;13261:100668">
                      Min
                    </p>
                    <p className="font-['Inter'] font-semibold font-semibold relative shrink-0 text-[#121726] text-[14px]" data-node-id="I392:16948;13261:100669">
                      £10
                    </p>
                  </div>
                  <div className="bg-[#f6f6fa] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip relative" data-node-id="I392:16948;13261:100670" data-name="stat-Max">
                    <p className="font-['Inter'] font-medium font-medium relative shrink-0 text-[#9499a8] text-[11px]" data-node-id="I392:16948;13261:100671">
                      Max
                    </p>
                    <p className="font-['Inter'] font-semibold font-semibold relative shrink-0 text-[#121726] text-[14px]" data-node-id="I392:16948;13261:100672">
                      £11
                    </p>
                  </div>
                  <div className="bg-[#f6f6fa] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip relative" data-node-id="I392:16948;13261:100673" data-name="stat-Avg">
                    <p className="font-['Inter'] font-medium font-medium relative shrink-0 text-[#9499a8] text-[11px]" data-node-id="I392:16948;13261:100674">
                      Avg
                    </p>
                    <p className="font-['Inter'] font-semibold font-semibold relative shrink-0 text-[#121726] text-[14px]" data-node-id="I392:16948;13261:100675">
                      £9
                    </p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I392:16948;13261:100676" data-name="hint">
                  <div className="relative shrink-0 size-[13px]" data-node-id="I392:16948;13261:100677" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] font-normal font-normal leading-[normal] min-w-px not-italic relative text-[12px] text-[color:var(--\(new\)-text\/secondary,#42414e)]" data-node-id="I392:16948;13261:100678">
                    Your CPM is 34% below the average for these frames.
                  </p>
                </div>
                <div className="bg-[#edf0f5] h-px relative shrink-0 w-full" data-node-id="I392:16948;13261:100679" data-name="divider" />
              </div>
              <div className="bg-white content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-[345px]" data-node-id="392:16949" data-name="Distribution">
                <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-node-id="I392:16949;13261:100572" data-name="Distribution">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I392:16949;13261:100574" data-name="Campaign settings">
                    <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="I392:16949;13261:100575" data-name="heading">
                      <div className="[word-break:break-word] flex flex-col font-['Inter'] font-semibold font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] whitespace-nowrap" data-node-id="I392:16949;13261:100576">
                        <p className="leading-[20px]">Distribution</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[82px]" data-node-id="I392:16949;13261:100577">
                      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-node-id="I392:16949;13261:100578">
                        <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16949;13261:100579" data-name="iconButton">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I392:16949;13261:100579;743:13207" data-name="icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16949;13261:100580" data-name="iconButton">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I392:16949;13261:100580;743:13207" data-name="icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16949;13261:100581" data-name="iconButton">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16949;13261:100581;743:13207" data-name="icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
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
      <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_1px_rgba(15,23,41,0.06),0px_4px_20px_rgba(15,23,41,0.06)] flex flex-col h-[870px] items-start left-[64px] px-[16px] rounded-[14px] top-[48px] w-[386px]" data-node-id="392:16950" data-name="deal strip (full)">
        <div className="content-stretch flex flex-col gap-[10px] h-[892px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:6804" data-name="Panel">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I392:16950;9245:24813" data-name="Header">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I392:16950;9245:18575" data-name="deal strip header">
              <div className="content-stretch flex flex-col items-start pr-[8px] py-[16px] relative shrink-0 w-[348px]" data-node-id="I392:16950;9245:18575;7651:18558" data-name="deal strip header">
                <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-node-id="I392:16950;9245:18575;7651:18558;7651:12833" data-name="Header">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] min-w-px not-italic relative text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)]" data-node-id="I392:16950;9245:18575;7651:18558;7651:12834">
                    <p className="leading-[20px]">Deal line</p>
                  </div>
                  <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;7828:69615">
                    <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;7828:69543" data-name="Header">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;7828:69544" data-name="Actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;9245:18575;7651:18558;7828:69545" data-name="icon button">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;9245:18575;7651:18558;7828:69545;743:13207" data-name="icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;7828:69507" data-name="Header">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;7828:69508" data-name="Actions">
                        <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;9245:18575;7651:18558;7828:69509" data-name="icon button">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;9245:18575;7651:18558;7828:69509;743:13207" data-name="icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;9408:800409" data-name="Actions">
                      <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;9408:800410" data-name="Header">
                        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I392:16950;9245:18575;7651:18558;9408:800411" data-name="Actions">
                          <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;9245:18575;7651:18558;9408:800412" data-name="icon button">
                            <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;9245:18575;7651:18558;9408:800412;743:13207" data-name="icon">
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
          </div>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[5px] items-start pb-[10px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18105" data-name="Section 1">
            <div className="border-0 border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-col h-[25px] items-start pb-[5px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:45779" data-name="Section title">
              <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:45779;7543:2379" data-name="Section title">
                <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:45779;7543:2380" data-name="Heading">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-semibold font-semibold h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I392:16950;7651:18105;7547:45779;7543:2381">
                    <p className="leading-[20px]">Deal line info</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;7651:18105;7547:45779;7543:2382" data-name="icon button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:45779;7543:2382;743:13207" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;10546:67816">
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3477" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3477;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3477;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3477;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I392:16950;7651:18105;7547:3477;7534:10434" data-name="tile-type">
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I392:16950;7651:18105;7547:3477;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:3477;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">{`Deal line 1 `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3713" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3713;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3713;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:3713;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I392:16950;7651:18105;7547:3713;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:3713;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendar} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I392:16950;7651:18105;7547:3713;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:3713;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Schedule</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I392:16950;7651:18105;7547:3713;7534:10440" data-name="1ST Chip">
                        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:3713;7534:10440;749:2194" data-name="parent-content">
                          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:3713;7534:10440;749:2196" data-name="padding-text">
                            <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/700,#272199)] text-left whitespace-pre" data-node-id="I392:16950;7651:18105;7547:3713;7534:10440;749:2197">{`01/01/2026  - 07/01/2026 `}</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18105;7547:3713;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:3713;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43523" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43523;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43523;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43523;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I392:16950;7651:18105;7547:43523;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:43523;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEnvironementChannel} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I392:16950;7651:18105;7547:43523;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:43523;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">{`Environment `}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I392:16950;7651:18105;7547:43523;7534:10440" data-name="1ST Chip">
                        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:43523;7534:10440;749:2194" data-name="parent-content">
                          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:43523;7534:10440;749:2196" data-name="padding-text">
                            <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/700,#272199)] text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:43523;7534:10440;749:2197">
                              Airports
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18105;7547:43523;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:43523;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43066" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43066;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43066;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43066;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I392:16950;7651:18105;7547:43066;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:43066;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I392:16950;7651:18105;7547:43066;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:43066;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">DSP</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I392:16950;7651:18105;7547:43066;7534:10440" data-name="1ST Chip">
                        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:43066;7534:10440;749:2194" data-name="parent-content">
                          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:43066;7534:10440;749:2196" data-name="padding-text">
                            <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/700,#272199)] text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:43066;7534:10440;749:2197">
                              Adform
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18105;7547:43066;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:43066;10185:171208" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
              </div>
              <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col h-[32px] items-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[348px]" data-node-id="I392:16950;7651:18105;7547:43980" data-name="deal card (Global)">
                <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--radius\/md,6px)]" />
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43980;7534:10431" data-name="Item list">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43980;7534:10432" data-name="Main heading">
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I392:16950;7651:18105;7547:43980;7534:10433" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-node-id="I392:16950;7651:18105;7547:43980;7534:10434" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:43980;7961:348923" data-name="location">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPound} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px overflow-clip px-[4px] relative" data-node-id="I392:16950;7651:18105;7547:43980;7534:10436" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:43980;7534:10437">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">CPM</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="I392:16950;7651:18105;7547:43980;7534:10440" data-name="1ST Chip">
                        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:43980;7534:10440;749:2194" data-name="parent-content">
                          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I392:16950;7651:18105;7547:43980;7534:10440;749:2196" data-name="padding-text">
                            <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/700,#272199)] text-left whitespace-nowrap" data-node-id="I392:16950;7651:18105;7547:43980;7534:10440;749:2197">
                              £10
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18105;7547:43980;10185:171207" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18105;7547:43980;10185:171208" data-name="menu">
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
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[5px] items-start pb-[10px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18228" data-name="Section 2">
            <div className="border-0 border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-col h-[25px] items-start pb-[5px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:45779" data-name="Section title">
              <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:45779;7543:2379" data-name="Section title">
                <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:45779;7543:2380" data-name="Heading">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I392:16950;7651:18228;7547:45779;7543:2381">
                    <p className="leading-[20px]">Targets</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;7651:18228;7547:45779;7543:2382" data-name="iconButton">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;7547:45779;7543:2382;743:13207" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--\(new\)-neutral\/solid\/50,white)] border border-[var(--\(new\)-neutral\/opacity-dark\/20,rgba(19,18,33,0.2))] border-solid content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329" data-name="Target Card">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;7686:30013">
                <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;7686:30014" data-name="Item list">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;7686:30015" data-name="Main heading">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;7686:30016" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I392:16950;7651:18228;8950:59329;7686:30017" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;8950:59329;7686:30018" data-name="Left Icoon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcoon} />
                        </div>
                        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-node-id="I392:16950;7651:18228;8950:59329;7686:30019" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;8950:59329;7686:30020">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Budget</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start px-[2px] relative shrink-0" data-node-id="I392:16950;7651:18228;8950:59329;9174:17952" data-name="Required">
                        <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;8950:59329;9174:17953">
                          Required
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18228;8950:59329;10195:255896" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;8950:59329;10195:255897" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;7686:30027" data-name="Item list">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;8621:114475" data-name="Main heading">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;8621:114476" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I392:16950;7651:18228;8950:59329;8621:114477" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;8950:59329;8621:115100" data-name="Left Icoon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcoon1} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[4px] relative" data-node-id="I392:16950;7651:18228;8950:59329;8621:114479" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;8950:59329;8621:114480">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Frame</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start px-[2px] relative shrink-0" data-node-id="I392:16950;7651:18228;8950:59329;9174:18115" data-name="Required">
                          <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[rgba(39,33,153,0)] text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;8950:59329;9174:18116">
                            Required
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18228;8950:59329;10195:256212" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;8950:59329;10195:256213" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;7686:30040" data-name="Item list">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;8621:114770" data-name="Main heading">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;8950:59329;8621:114771" data-name="tile-heading">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I392:16950;7651:18228;8950:59329;8621:114772" data-name="tile-type">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;8950:59329;8621:115269" data-name="Left Icoon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcoon2} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[4px] relative" data-node-id="I392:16950;7651:18228;8950:59329;8621:114774" data-name="Heading">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/primary,#131221)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;8950:59329;8621:114775">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Impressions</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start px-[2px] relative shrink-0" data-node-id="I392:16950;7651:18228;8950:59329;9174:18182" data-name="Required">
                          <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;8950:59329;9174:18183">
                            Required
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I392:16950;7651:18228;8950:59329;10195:256528" data-name="menu">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;8950:59329;10195:256529" data-name="menu">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;10546:67816">
              <div className="bg-[var(--\(new\)-neutral\/solid\/200,#f3f3f5)] border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex flex-col h-[32px] items-start justify-center overflow-clip p-[4px] relative rounded-[var(--radius\/md,6px)] shrink-0 w-[348px]" data-node-id="I392:16950;7651:18228;7547:3477" data-name="deal card (Global)">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:3477;8952:91112" data-name="Frame">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:3477;8952:91113" data-name="Frame">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:3477;8952:91114" data-name="Item list">
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:3477;8952:91115" data-name="Main heading">
                        <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I392:16950;7651:18228;7547:3477;8952:91116" data-name="tile-heading">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I392:16950;7651:18228;7547:3477;8952:91117" data-name="tile-type">
                            <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18228;7547:3477;8952:91118" data-name="Location Icon">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocationIcon} />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px px-[4px] relative" data-node-id="I392:16950;7651:18228;7547:3477;8952:91119" data-name="Heading">
                              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium font-medium justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] text-ellipsis text-left whitespace-nowrap" data-node-id="I392:16950;7651:18228;7547:3477;8952:91120">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">Share of time</p>
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
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18294" data-name="Section 3">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18294;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18294;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I392:16950;7651:18294;7543:2381">
                  <p className="leading-[20px]">Filters</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;7651:18294;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18294;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18360" data-name="Section 4">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18360;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18360;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I392:16950;7651:18360;7543:2381">
                  <p className="leading-[20px]">Data targeting</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;7651:18360;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18360;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-b border-solid content-stretch cursor-pointer flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18426" data-name="Section 5">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-node-id="I392:16950;7651:18426;7543:2379" data-name="Section title">
              <div className="content-stretch flex items-start justify-between px-[4px] relative shrink-0 w-full" data-node-id="I392:16950;7651:18426;7543:2380">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-normal font-normal h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[color:var(--\(new\)-text\/secondary,#42414e)] text-left" data-node-id="I392:16950;7651:18426;7543:2381">
                  <p className="leading-[20px]">Apply services</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="I392:16950;7651:18426;7543:2382" data-name="iconButton">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16950;7651:18426;7543:2382;743:13207" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bg-white border border-[#e5e5eb] border-solid content-stretch flex h-[54px] items-center justify-between left-[65px] overflow-clip px-[16px] py-[14px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(13,13,20,0.06)] top-[923px] w-[386px]" data-node-id="392:16951" data-name="status-island">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="392:16952" data-name="Frame">
          <div className="bg-[var(--\(new\)-yellow\/opacity\/5,rgba(248,188,26,0.05))] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-[var(--chip\/radius\/medium,999px)] shrink-0" data-node-id="392:16953" data-name="chip">
            <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusChip_b07b2} />
              </div>
              <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-name="padding-text">
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-yellow\/solid\/600,#e4b02e)] whitespace-nowrap" data-node-id="I392:16953;814:3324">
                  Pending
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-node-id="392:16954">
          <div className="border border-[var(--\(new\)-neutral\/opacity-dark\/10,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[var(--button\/gap\/small,0px)] h-[24px] items-center justify-center min-w-[36px] overflow-clip px-[var(--button\/padding\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/small,4px)] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-[139px]" data-name="Button">
            <div aria-hidden className="absolute bg-[var(--\(new\)-neutral\/solid\/50,white)] inset-0 pointer-events-none rounded-[var(--button\/radius\/small,4px)]" />
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon4} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap">
                Send for approval
              </p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(16,16,52,0.08)]" />
          </div>
          <div className="bg-[var(--\(new\)-primary\/solid\/900,#15115e)] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-[var(--button\/gap\/small,0px)] h-[24px] items-center justify-center min-w-[36px] px-[var(--button\/padding\/small,8px)] py-[var(--none,0px)] relative rounded-[var(--button\/radius\/small,4px)] shrink-0 w-[90px]" data-name="Button">
            <div className="relative shrink-0 size-[16px]" data-name="start-icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon5} />
            </div>
            <div className="content-stretch flex items-start px-[var(--button\/gap\/medium,4px)] relative shrink-0" data-name="padding-label">
              <p className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/50,#f4f5ff)] whitespace-nowrap">
                Confirm
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--\(new\)-purple\/opacity\/5,rgba(110,46,228,0.05))] content-stretch flex h-[var(--chip\/size\/medium,24px)] items-center justify-center left-[81px] min-w-[24px] overflow-clip rounded-[var(--chip\/radius\/medium,999px)] top-[88px]" data-node-id="392:16961" data-name="chip">
        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I392:16961;789:14511" data-name="parent-content">
          <div className="content-stretch flex items-center pb-px px-[var(--chip\/gap\/medium,2px)] relative shrink-0" data-node-id="I392:16961;789:14513" data-name="padding-text">
            <p className="[word-break:break-word] font-['Inter'] font-normal font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-purple\/solid\/700,#5117be)] whitespace-nowrap" data-node-id="I392:16961;789:14514">
              123456789
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center px-[var(--chip\/padding\/medium,6px)] relative shrink-0" data-node-id="I392:16961;789:14518" data-name="remove">
          <div className="relative shrink-0 size-[16px]" data-node-id="I392:16961;789:14519" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon11} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f8f8f9] content-stretch flex flex-col gap-[20px] h-[44px] items-start left-[-1px] px-[56px] py-[16px] top-[-1px] w-[1620px]" data-node-id="392:16962" data-name="div.py-4">
        <div className="absolute content-stretch flex h-[47px] items-center justify-between left-[62px] p-[var(--0\,5-rem,8px)] top-0 w-[1558px]" data-node-id="392:16964" data-name="top bav bar header">
          <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="392:16965">
            <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-r border-solid content-stretch flex gap-[var(--0\,5-rem,8px)] items-center pr-[var(--0\,5-rem,8px)] py-[var(--0,0px)] relative shrink-0 w-[600px]" data-node-id="392:16966" data-name="top bav bar header">
              <div className="bg-[rgba(19,18,33,0.1)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="392:16967" data-name="icon button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I392:16967;743:13357" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon12} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative" data-node-id="392:16968" data-name="Campaign title + Status">
                <div className="bg-white content-stretch flex flex-[1_0_0] gap-[var(--0\,5-rem,8px)] items-center min-w-px relative rounded-[12px]" data-node-id="392:16969" data-name="Campaign name + Logo">
                  <div className="content-stretch flex items-start relative shrink-0" data-node-id="392:16970" data-name="title edit">
                    <div className="content-stretch flex gap-[4px] h-[28px] items-center min-w-[184px] pl-[var(--0\,5-rem,8px)] relative rounded-[4px] shrink-0" data-node-id="I392:16970;7504:2167" data-name=".base/Title Edit">
                      <div className="content-stretch flex items-center relative shrink-0 w-[158px]" data-node-id="I392:16970;7504:2167;2402:192486">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I392:16970;7504:2167;2402:193217">
                          <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal font-normal justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[10px] text-[color:var(--\(new\)-text\/tertiary,#7c7b87)] whitespace-nowrap" data-node-id="I392:16970;7504:2167;2402:192460">
                            <p className="leading-[24px]">Search deal line</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="392:16972" data-name="icon button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I392:16972;743:13207" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon13} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="392:16973">
              <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0" data-node-id="392:16974" data-name="Deal lines - Tabs">
                <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="392:16975" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I392:16975;1616:22665" data-name="padding-text">
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I392:16975;1616:22667">
                      Deal line 1
                    </p>
                  </div>
                </div>
                <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="392:16977" data-name="tab button">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I392:16977;769:15148" data-name="padding-text">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I392:16977;769:15135" data-name="icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon14} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I392:16977;769:15103">
                      New deal line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-l border-solid content-stretch flex items-center justify-between pl-[5px] relative shrink-0 w-[370px]" data-node-id="392:16978" data-name="Header / right panel">
            <div className="bg-[rgba(19,18,33,0.1)] content-stretch flex items-center justify-center overflow-clip py-[var(--none,0px)] relative rounded-[var(--iconbutton\/radius\/small,4px)] shrink-0 size-[24px]" data-node-id="392:16979" data-name="icon button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I392:16979;743:13357" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon15} />
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--0\,5-rem,8px)] items-center relative shrink-0" data-node-id="392:16980">
              <div className="border border-[var(--\(new\)-borders\/divider,rgba(19,18,33,0.1))] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="392:16981" data-name="tab button">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I392:16981;769:15148" data-name="padding-text">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16981;769:15135" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon16} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-text\/secondary,#42414e)] whitespace-nowrap" data-node-id="I392:16981;769:15103">
                    Overview
                  </p>
                </div>
              </div>
              <div className="bg-[var(--\(new\)-primary\/opacity\/5,rgba(44,36,195,0.05))] border border-[var(--\(new\)-primary\/solid\/600,#2c24c3)] border-solid content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative rounded-[var(--radius\/sm,4px)] shrink-0" data-node-id="392:16982" data-name="tab button">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I392:16982;1616:22665" data-name="padding-text">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I392:16982;1616:22666" data-name="icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon17} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter'] font-medium font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--\(new\)-primary\/solid\/600,#2c24c3)] whitespace-nowrap" data-node-id="I392:16982;1616:22667">
                    Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--\(new\)-primary\/solid\/950,#090642)] content-stretch flex flex-col gap-[43.59px] h-[982px] items-center left-[-1px] pb-[672px] pt-[16px] top-[-1px] w-[60px]" data-node-id="392:16984" data-name="side nav bar">
        <Logo className="h-[32px] relative shrink-0 w-[24.633px]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="I392:16984;7803:21375" data-name="Nav → List">
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="creative" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="data" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="admin" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="availability" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="settings" />
          <Nav className="content-stretch flex flex-col items-center px-[13px] relative shrink-0 w-[60px]" type="user" />
        </div>
        <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center left-0 px-[18px] right-0" data-name="div.absolute">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="div.tooltip__2gGuw">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
              <Nav className="h-[30px] relative shrink-0 w-[60px]" type="record" />
              <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[13px] relative shrink-0 w-[60px]" data-name="Nav">
                <div className="content-stretch flex h-[34px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
                  <div className="content-stretch flex items-center overflow-clip p-[2px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
                    <div className="flex items-center justify-center relative shrink-0">
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
    </div>
  );
}
