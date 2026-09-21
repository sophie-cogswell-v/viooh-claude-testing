import { useEffect } from 'react'
import type { Action } from './types'

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

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null

      // Pass 1: text match on the clicked element's own text, then walking
      // up to a wrapper whose aggregated text is a registered label
      // (labels wrapped inside padding-text inside a tab button, etc.)
      let n: HTMLElement | null = target
      let walked = 0
      while (n && n !== container && walked < 6) {
        const own = ownText(n)
        if (own && textLabels.includes(own)) {
          e.preventDefault(); e.stopPropagation()
          onHit(textMap[own]); return
        }
        const agg = n.textContent?.trim() ?? ''
        if (textLabels.includes(agg)) {
          e.preventDefault(); e.stopPropagation()
          onHit(textMap[agg]); return
        }
        n = n.parentElement
        walked++
      }

      // Pass 2: data-name match. Lets us bind actions to whole classes of
      // Figma elements — every calendar day (data-name="cal-day"), every
      // checkbox row, every status chip — without listing per-frame ids.
      n = target
      while (n && n !== container) {
        const name = n.getAttribute?.('data-name')
        if (name && nameLabels.includes(name)) {
          e.preventDefault(); e.stopPropagation()
          onHit(nameMap[name]); return
        }
        n = n.parentElement
      }

      // Pass 3: node id match walking full ancestors
      n = target
      while (n && n !== container) {
        const nid = n.getAttribute?.('data-node-id')
        if (nid) {
          const segments = nid.startsWith('I') ? nid.slice(1).split(';') : [nid]
          for (const seg of segments) {
            if (ids.includes(seg)) {
              e.preventDefault(); e.stopPropagation()
              onHit(actions[seg]); return
            }
          }
        }
        n = n.parentElement
      }
    }

    container.addEventListener('click', handler, true)
    return () => container.removeEventListener('click', handler, true)
  }, [container, actions, onHit])
}
