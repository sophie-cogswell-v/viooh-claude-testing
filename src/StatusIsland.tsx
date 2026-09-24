// Generated from Figma get_design_context (node 13261:99888 — Master component ▸ status-island)
// on 2026-09-24T00:00Z — do NOT hand-edit the markup below without re-checking against Figma.
//
// Local rewrites: asset URLs → /figma-assets/<short-id>.svg, Inter font classes fixed.
//
// This is the current (redesigned) status control: chip + always-visible action
// buttons, no click-to-open dropdown. Replaces the old *Dropdown frame pattern.
// Used for BOTH the campaign-level status card and the per-deal-line status —
// same component, same states — per the Sep 2026 design decision that these are
// two distinct controls a user should have independent control over, not one
// pill that tries to represent both.

const imgIcon = "/figma-assets/40dd1.svg";
const imgIcon1 = "/figma-assets/71232.svg";
const imgIcon2 = "/figma-assets/b3654.svg";
const imgIcon3 = "/figma-assets/c1679.svg";
const imgStartIcon = "/figma-assets/ed39d.svg";
const imgIcon4 = "/figma-assets/32a85.svg";
const imgIcon5 = "/figma-assets/e2b8a.svg";
const imgStartIcon1 = "/figma-assets/56694.svg";
const imgStartIcon2 = "/figma-assets/58e92.svg";
const imgIcon6 = "/figma-assets/15ca3.svg";
const imgIcon7 = "/figma-assets/d2491.svg";
const imgStartIcon3 = "/figma-assets/63997.svg";
const imgIcon8 = "/figma-assets/2c992.svg";

export type StatusIslandType =
  | "new"
  | "pending"
  | "pending - update"
  | "approved"
  | "rejected"
  | "live"
  | "terminated"
  | "cancelled"
  | "ended";

export type StatusIslandProps = {
  className?: string;
  type?: StatusIslandType;
  /** Called when the primary/secondary text action is clicked (Confirm, Reject, Update, Send for approval…). */
  onAction?: (action: string) => void;
  /** Called when the icon-only destructive action (Terminate) is clicked. Only rendered for Live/Approved. */
  onTerminate?: () => void;
};

export default function StatusIsland({ className, type = "new", onAction, onTerminate }: StatusIslandProps) {
  const isApproved = type === "approved";
  const isCancelled = type === "cancelled";
  const isLive = type === "live";
  const isLiveOrApproved = ["live", "approved"].includes(type);
  const isNew = type === "new";
  const isPending = type === "pending";
  const isPendingUpdate = type === "pending - update";
  const isPendingUpdateOrPending = ["pending - update", "pending"].includes(type);
  const isRejected = type === "rejected";
  const isRejectedOrPending = ["rejected", "pending"].includes(type);
  const isTerminated = type === "terminated";
  const isTerminatedOrRejected = ["terminated", "rejected"].includes(type);

  return (
    <div
      className={
        className ||
        "bg-white border border-[#e5e5eb] border-solid content-stretch flex h-[40px] items-center justify-between overflow-clip px-[16px] py-[14px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(13,13,20,0.06)] w-[365px]"
      }
      data-name="status-island"
      data-status={type}
    >
      {["ended", "cancelled", "terminated", "live", "rejected", "approved", "pending - update", "pending"].includes(type) && (
        <div
          className={`content-stretch flex items-center relative shrink-0 ${
            ["cancelled", "terminated", "rejected", "approved", "pending - update", "pending"].includes(type)
              ? "overflow-clip"
              : "gap-[5px]"
          }`}
          data-name="chips"
        >
          <div
            className={`content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-full shrink-0 ${
              isPendingUpdateOrPending
                ? "bg-[rgba(248,188,26,0.05)]"
                : isLiveOrApproved
                ? "bg-[rgba(18,190,121,0.1)]"
                : isTerminatedOrRejected
                ? "bg-[rgba(228,46,79,0.1)]"
                : "bg-[rgba(19,18,33,0.05)]"
            }`}
            data-name="chip"
          >
            <div className="content-stretch flex items-center px-[6px] relative shrink-0" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-name="icon">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={
                    isPendingUpdateOrPending
                      ? imgIcon7
                      : isApproved
                      ? imgIcon6
                      : isRejected
                      ? imgIcon5
                      : isLive
                      ? imgIcon3
                      : isTerminated
                      ? imgIcon2
                      : isCancelled
                      ? imgIcon1
                      : imgIcon
                  }
                />
              </div>
              <div className="content-stretch flex items-center pb-px px-[2px] relative shrink-0" data-name="padding-text">
                <p
                  className={`[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] whitespace-nowrap ${
                    isPendingUpdateOrPending
                      ? "text-[#e4b02e]"
                      : isLiveOrApproved
                      ? "text-[#138859]"
                      : isTerminatedOrRejected
                      ? "text-[#be1235]"
                      : "text-[#605f6b]"
                  }`}
                >
                  {isPendingUpdateOrPending
                    ? "Pending"
                    : isApproved
                    ? "Approved"
                    : isRejected
                    ? "Rejected"
                    : isLive
                    ? "Live"
                    : isTerminated
                    ? "Terminated"
                    : isCancelled
                    ? "Cancelled"
                    : type === "ended"
                    ? "Ended"
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {["live", "rejected", "approved", "pending"].includes(type) && (
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="buttons">
          <button
            type="button"
            onClick={() => onAction?.(isPending ? "Reject" : isRejected ? "Update" : "Update")}
            className={`content-stretch flex gap-0 h-[24px] items-center justify-center min-w-[36px] px-[8px] relative rounded-[4px] shrink-0 ${
              isRejectedOrPending
                ? "border border-[rgba(19,18,33,0.1)] border-solid bg-white shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)]"
                : "bg-[#15115e] drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)]"
            }`}
            data-name="button (main)"
          >
            {isLiveOrApproved && (
              <>
                <span className="relative shrink-0 size-[16px]" data-name="start-icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon} />
                </span>
                <span className="content-stretch flex items-start px-[4px] relative shrink-0">
                  <span className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[#f4f5ff] whitespace-nowrap">
                    Update
                  </span>
                </span>
              </>
            )}
            {isRejectedOrPending && (
              <>
                <span className="relative shrink-0 size-[16px]" data-name="start-icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={isPending ? imgStartIcon3 : imgStartIcon1} />
                </span>
                <span className="content-stretch flex items-start px-[4px] relative shrink-0">
                  <span className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[#2c24c3] whitespace-nowrap">
                    {isPending ? "Reject" : isRejected ? "Update" : ""}
                  </span>
                </span>
              </>
            )}
          </button>

          {isLiveOrApproved && (
            <button
              type="button"
              onClick={() => onTerminate?.()}
              aria-label="Terminate"
              title="Terminate"
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[24px] hover:bg-[rgba(228,46,79,0.08)]"
              data-name="icon button"
            >
              <span className="relative shrink-0 size-[16px]" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
              </span>
            </button>
          )}

          {isRejectedOrPending && (
            <button
              type="button"
              onClick={() => onAction?.(isPending ? "Confirm" : isRejected ? "Send for approval" : "")}
              className="bg-[#15115e] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-0 h-[24px] items-center justify-center min-w-[36px] px-[8px] relative rounded-[4px] shrink-0"
              data-name="button (main)"
            >
              <span className="relative shrink-0 size-[16px]" data-name="start-icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon2} />
              </span>
              <span className="content-stretch flex items-start px-[4px] relative shrink-0">
                <span className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[#f4f5ff] whitespace-nowrap">
                  {isPending ? "Confirm" : isRejected ? "Send for approval" : ""}
                </span>
              </span>
            </button>
          )}
        </div>
      )}

      {isPendingUpdate && (
        <button
          type="button"
          onClick={() => onAction?.("Update")}
          className="bg-[#15115e] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-0 h-[24px] items-center justify-center min-w-[36px] px-[8px] relative rounded-[4px] shrink-0"
          data-name="button (main)"
        >
          <span className="relative shrink-0 size-[16px]" data-name="start-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon} />
          </span>
          <span className="content-stretch flex items-start px-[4px] relative shrink-0">
            <span className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[#f4f5ff] whitespace-nowrap">
              Update
            </span>
          </span>
        </button>
      )}

      {isNew && (
        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative" data-name="Frame">
          <div className="bg-[rgba(19,18,33,0.05)] content-stretch flex h-[24px] items-center justify-center min-w-[24px] overflow-clip relative rounded-full shrink-0" data-name="chip">
            <div className="content-stretch flex items-center px-[6px] relative shrink-0" data-name="parent-content">
              <div className="relative shrink-0 size-[16px]" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
              </div>
              <div className="content-stretch flex items-center pb-px px-[2px] relative shrink-0" data-name="padding-text">
                <p className="[word-break:break-word] font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[#605f6b] whitespace-nowrap">
                  New
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="buttons">
            <button
              type="button"
              onClick={() => onAction?.("Send for approval")}
              className="border border-[rgba(19,18,33,0.1)] border-solid bg-white content-stretch flex gap-0 h-[24px] items-center justify-center min-w-[36px] overflow-clip px-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0"
              data-name="button (main)"
            >
              <span className="relative shrink-0 size-[16px]" data-name="start-icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon3} />
              </span>
              <span className="content-stretch flex items-start px-[4px] relative shrink-0">
                <span className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[#2c24c3] whitespace-nowrap">
                  Send for approval
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => onAction?.("Confirm")}
              className="bg-[#15115e] content-stretch drop-shadow-[0px_2px_1.5px_rgba(0,0,0,0.08)] flex gap-0 h-[24px] items-center justify-center min-w-[36px] px-[8px] relative rounded-[4px] shrink-0"
              data-name="button (main)"
            >
              <span className="relative shrink-0 size-[16px]" data-name="start-icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStartIcon2} />
              </span>
              <span className="content-stretch flex items-start px-[4px] relative shrink-0">
                <span className="[word-break:break-word] font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-[#f4f5ff] whitespace-nowrap">
                  Confirm
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
