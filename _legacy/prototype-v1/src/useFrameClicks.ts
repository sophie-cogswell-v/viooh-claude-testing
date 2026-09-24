import { useEffect } from 'react'
import type { Action } from './types'

const HOVER_CLASS = 'proto-hotspot'

/**
 * Event delegation for a Figma frame. Two matching strategies:
 *
 *  1. by node id  — actions keyed on a Figma `data-node-id` segment
 *     (works for elements with distinctive per-instance ids like Schedule,
 *     Location, Check availability)
 *  2. by text     — actions keyed as `__text:LABEL` for CTAs whose Figma
 *     `data-node-id` is a shared component instance segment and therefore
 *     ambiguous (Skip / Continue / Next / Cancel / Overview / Map /
 *     NG Floor / NG Fixed / PG). We walk ancestors and check own text
 *     content or the button wrapper's aggregated text.
 *
 * The frame JSX itself stays verbatim — no onClick handlers grafted in.
 * Hovering a hotspot toggles a shared `.proto-hotspot` class (cursor +
 * subtle highlight, see index.css) — same matching logic as the click
 * handler, so the affordance never lies about what's actually clickable.
 */
export function useFrameClicks(
  container: HTMLElement | null,
  actions: Record<string, Action>,
  onHit: (action: Action) => void,
) {
  useEffect(() => {
    if (!container) return
    const ids: string[] = []
    const textMap: Record<string, Action> = {}
    const nameMap: Record<string, Action> = {}
    for (const [k, v] of Object.entries(actions)) {
      if (k.startsWith('__text:')) textMap[k.slice(7)] = v
      else if (k.startsWith('__name:')) nameMap[k.slice(7)] = v
      else ids.push(k)
    }
    const textLabels = Object.keys(textMap)
    const nameLabels = Object.keys(nameMap)

    /** Own text content of an element — excludes deep descendants */
    const ownText = (el: Element): string =>
      Array.from(el.childNodes)
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent?.trim())
        .filter(Boolean)
        .join(' ')

    /** Walks up from `target` and returns the matched hotspot element + its action, if any. */
    const findHotspot = (target: HTMLElement | null): { el: HTMLElement; action: Action } | null => {
      // Pass 1: text match on the element's own text, then walking up to a
      // wrapper whose aggregated text is a registered label (labels wrapped
      // inside padding-text inside a tab button, etc.)
      // Figma consistently wraps button/tab/chip labels as
      // `padding-label|padding-text > p`, so the p's own parent is just a
      // spacer, not the visual control — widen the highlight to the actual
      // pill/button one level up when we land on that pattern.
      const widenToControl = (n: HTMLElement): HTMLElement => {
        const parent = n.parentElement
        const parentName = parent?.getAttribute?.('data-name')
        if (parent && (parentName === 'padding-label' || parentName === 'padding-text') && parent.parentElement) {
          return parent.parentElement
        }
        return n
      }

      let n: HTMLElement | null = target
      let walked = 0
      while (n && n !== container && walked < 6) {
        const own = ownText(n)
        if (own && textLabels.includes(own)) return { el: widenToControl(n), action: textMap[own] }
        const agg = n.textContent?.trim() ?? ''
        if (textLabels.includes(agg)) return { el: widenToControl(n), action: textMap[agg] }
        n = n.parentElement
        walked++
      }

      // Pass 2: data-name match. Lets us bind actions to whole classes of
      // Figma elements — every calendar day (data-name="cal-day"), every
      // checkbox row, every status chip — without listing per-frame ids.
      n = target
      while (n && n !== container) {
        const name = n.getAttribute?.('data-name')
        if (name && nameLabels.includes(name)) return { el: n, action: nameMap[name] }
        n = n.parentElement
      }

      // Pass 3: node id match walking full ancestors
      n = target
      while (n && n !== container) {
        const nid = n.getAttribute?.('data-node-id')
        if (nid) {
          const segments = nid.startsWith('I') ? nid.slice(1).split(';') : [nid]
          for (const seg of segments) {
            if (ids.includes(seg)) return { el: n, action: actions[seg] }
          }
        }
        n = n.parentElement
      }
      return null
    }

    const clickHandler = (e: MouseEvent) => {
      const hit = findHotspot(e.target as HTMLElement | null)
      if (!hit) return
      e.preventDefault(); e.stopPropagation()
      onHit(hit.action)
    }

    let hovered: HTMLElement | null = null
    const moveHandler = (e: MouseEvent) => {
      const hit = findHotspot(e.target as HTMLElement | null)
      const next = hit?.el ?? null
      if (next === hovered) return
      hovered?.classList.remove(HOVER_CLASS)
      hovered = next
      hovered?.classList.add(HOVER_CLASS)
    }
    const leaveHandler = () => {
      hovered?.classList.remove(HOVER_CLASS)
      hovered = null
    }

    container.addEventListener('click', clickHandler, true)
    container.addEventListener('mousemove', moveHandler)
    container.addEventListener('mouseleave', leaveHandler)
    return () => {
      container.removeEventListener('click', clickHandler, true)
      container.removeEventListener('mousemove', moveHandler)
      container.removeEventListener('mouseleave', leaveHandler)
      hovered?.classList.remove(HOVER_CLASS)
    }
  }, [container, actions, onHit])
}
