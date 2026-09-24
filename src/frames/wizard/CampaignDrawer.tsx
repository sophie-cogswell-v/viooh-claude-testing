// The "Campaign Info Drawer" — the real first screen of the Concept 1 flow
// (Figma node 396:137602, IBSiGNVDHcgtYtewgjXI5j), collapsed/expanded states
// 1-2 of the 17-step "5 click set-up" sequence. Replaces the old flat
// NG-Floor/NG-Fixed/PG picker screen: the deal-type switcher now lives
// inside this floating card, alongside campaign metadata and Confirm/Send
// for approval (both disabled here — nothing is fillable yet at the
// campaign level, per every captured frame).
//
// "Skip" (footer) and the chrome's "New deal line" tab both hand off to the
// deal-line wizard — see App.tsx.

import { useState } from 'react'
import type { DealType } from '../../types'

const assetPathPrefix = '/figma-assets'
const imgEs1 = `${assetPathPrefix}/45be4.svg`
const imgEdit = `${assetPathPrefix}/1f313.svg`
const imgIcon5 = `${assetPathPrefix}/65f76.svg`
const imgIcon6 = `${assetPathPrefix}/9b246.svg`
const imgIcon7 = `${assetPathPrefix}/ccf6f.svg`
const imgIcon8 = `${assetPathPrefix}/03caf.svg`
const imgEndIcon = `${assetPathPrefix}/a844f.svg`
const imgStartIcon = `${assetPathPrefix}/34e57.svg`
const imgStartIcon1 = `${assetPathPrefix}/bd3fa.svg`

type DealSubtype = 'floor' | 'fixed' | 'pg'

const SWITCH_OPTIONS: { key: DealSubtype; label: string; dealType: DealType }[] = [
  { key: 'floor', label: 'NG Floor', dealType: 'ng' },
  { key: 'fixed', label: 'NG Fixed', dealType: 'ng' },
  { key: 'pg', label: 'PG', dealType: 'pg' },
]

type CollapsibleCardProps = { title: string; children?: React.ReactNode; defaultOpen?: boolean }

function CollapsibleCard({ title, children, defaultOpen = false }: CollapsibleCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white border border-[#e5e5eb] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer"
      >
        <span className="font-medium text-[13px] text-[#131221]">{title}</span>
        <span
          className="flex items-center justify-center size-[24px] rounded-[4px] transition-transform"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <img alt="" className="size-[16px]" src={imgIcon8} />
        </span>
      </button>
      {open && children}
    </div>
  )
}

function OptionalField({ label }: { label: string }) {
  return (
    <div className="flex h-[24px] items-center justify-between relative shrink-0 w-full">
      <span className="text-[11px] text-[#42414e]">{label}</span>
      <div className="bg-[rgba(19,18,33,0.03)] flex gap-[2px] h-[24px] items-center justify-end overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[179px]">
        <span className="flex-1 text-[11px] text-[#8c8b99] text-ellipsis overflow-hidden whitespace-nowrap">Optional</span>
        <img alt="" className="size-[16px]" src={imgEndIcon} />
      </div>
    </div>
  )
}

export type CampaignDrawerProps = {
  dealType: DealType
  onDealTypeChange: (t: DealType) => void
  onProceed: () => void
}

export default function CampaignDrawer({ dealType, onDealTypeChange, onProceed }: CampaignDrawerProps) {
  const [subtype, setSubtype] = useState<DealSubtype>(dealType === 'pg' ? 'pg' : 'floor')

  const pick = (opt: (typeof SWITCH_OPTIONS)[number]) => {
    setSubtype(opt.key)
    onDealTypeChange(opt.dealType)
  }

  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[64px] overflow-clip rounded-[16px] top-[4px] w-[380px] panel-pop-in"
      data-name="Campaign Info Drawer"
    >
      <div className="bg-[#efeff0] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEs1} />
            </div>
            <span className="text-[13px] font-medium text-[#131221]">ES</span>
          </div>
          <button className="flex items-center justify-center size-[24px] rounded-[4px] hover:bg-black/5">
            <img alt="" className="size-[16px]" src={imgIcon6} />
          </button>
        </div>

        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-full">
          <div className="content-stretch flex gap-[var(--0\,25-rem,4px)] items-center relative shrink-0 w-full">
            <span className="text-[13px] font-medium text-[#131221]">Campaign name</span>
            <img alt="" className="size-[16px]" src={imgEdit} />
          </div>
          <div className="flex items-center justify-between relative shrink-0 w-full">
            <span className="text-[11px] text-[#42414e]">Campaign ID</span>
            <div className="bg-[rgba(110,46,228,0.05)] flex h-[24px] items-center justify-center rounded-[999px] px-[6px]">
              <span className="text-[13px] text-[#5117be]">123456789</span>
            </div>
          </div>
          <div className="flex items-center justify-between relative shrink-0 w-full">
            <span className="text-[11px] text-[#42414e]">Created by</span>
            <div className="bg-[rgba(110,46,228,0.05)] flex h-[24px] items-center justify-center gap-[4px] rounded-[999px] px-[6px]">
              <img alt="" className="size-[16px]" src={imgIcon6} />
              <span className="text-[13px] text-[#5117be]">Sophie.C</span>
            </div>
          </div>
          <div className="flex items-center justify-between relative shrink-0 w-full">
            <span className="text-[11px] text-[#42414e]">Status</span>
            <div className="bg-[rgba(110,46,228,0.05)] flex h-[24px] items-center gap-[4px] rounded-[999px] px-[6px]">
              <img alt="" className="size-[16px]" src={imgIcon7} />
              <span className="text-[13px] text-[#5117be]">New</span>
            </div>
          </div>
          <div className="flex gap-[5px] items-start relative shrink-0 w-full">
            <button
              disabled
              title="Fill in the deal line to unlock Confirm"
              className="flex flex-1 gap-[1px] h-[24px] items-center justify-center overflow-clip px-[8px] rounded-[4px] bg-[#f3f3f5] cursor-not-allowed"
            >
              <img alt="" className="size-[16px] opacity-40" src={imgStartIcon} />
              <span className="text-[13px] font-medium text-[#bab9c3] px-[4px]">Confirm</span>
            </button>
            <button
              disabled
              title="Fill in the deal line to unlock Send for approval"
              className="flex flex-1 gap-[1px] h-[24px] items-center justify-center overflow-clip px-[8px] rounded-[4px] bg-[#f3f3f5] cursor-not-allowed"
            >
              <img alt="" className="size-[16px] opacity-40" src={imgStartIcon1} />
              <span className="text-[13px] font-medium text-[#bab9c3] px-[4px]">Send for approval</span>
            </button>
          </div>
        </div>

        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[14px] shadow-[0px_0px_5px_0px_rgba(19,18,33,0.04),0px_1px_2px_0px_rgba(19,18,33,0.05)] shrink-0 w-full">
          <div className="bg-[rgba(19,18,33,0.05)] flex items-center justify-center rounded-[6px] p-[2px] w-full">
            {SWITCH_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => pick(opt)}
                className="flex-1 h-[28px] flex items-center justify-center rounded-[6px] px-[10px] text-[13px] font-medium text-[#15115e] transition-all"
                style={
                  subtype === opt.key
                    ? { background: 'white', boxShadow: '0px 1px 2px 0px rgba(16,16,52,0.08)', border: '1px solid rgba(19,18,33,0.1)' }
                    : undefined
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between relative shrink-0 w-full pt-[4px]">
            <span className="text-[13px] font-medium text-[#131221]">Campaign details</span>
            <img alt="" className="size-[16px]" src={imgIcon8} />
          </div>
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <OptionalField label="Advertiser" />
            <OptionalField label="Brand" />
            <OptionalField label="Product category" />
          </div>
        </div>

        <CollapsibleCard title="Ownership & sales" />
        <CollapsibleCard title="Settings" />
      </div>

      <div className="bg-[#efeff0] content-stretch flex flex-col items-start overflow-clip px-[8px] py-[12px] relative shrink-0 w-full">
        <button
          onClick={onProceed}
          className="border border-[rgba(19,18,33,0.1)] border-solid flex gap-[4px] h-[36px] items-center justify-center px-[12px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,16,52,0.08)] shrink-0 w-full bg-white text-[13px] font-medium text-[#2c24c3] hover:bg-[#f4f5ff] transition-colors cursor-pointer"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
