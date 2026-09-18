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
    const ids = Object.keys(actions).filter((k) => !k.startsWith('__text:'))
    const textMap: Record<string, Action> = {}
    for (const [k, v] of Object.entries(actions)) {
      if (k.startsWith('__text:')) textMap[k.slice(7)] = v
    }
    const textLabels = Object.keys(textMap)
    // Uncomment for click debugging:
    // console.debug('[useFrameClicks] listening', ids.length, 'ids +', textLabels.length, 'text labels')

    /** Own text content of an element — excludes deep descendants */
    const ownText = (el: Element): string =>
      Array.from(el.childNodes)
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent?.trim())
        .filter(Boolean)
        .join(' ')

    const handler = (e: MouseEvent) => {
      let node = e.target as HTMLElement | null

      // First pass — text match on the clicked element's own text,
      // then walk up looking for a button-like wrapper whose aggregated
      // text is one of our labels (chip-with-icon patterns wrap the text
      // in a <p> inside padding-text inside a tab button).
      let n: HTMLElement | null = node
      let walked = 0
      while (n && n !== container && walked < 6) {
        const own = ownText(n)
        if (own && textLabels.includes(own)) {
          e.preventDefault()
          e.stopPropagation()
          onHit(textMap[own])
          return
        }
        // For tab buttons: aggregated textContent equals label (icon has no text)
        const agg = n.textContent?.trim() ?? ''
        if (textLabels.includes(agg)) {
          e.preventDefault()
          e.stopPropagation()
          onHit(textMap[agg])
          return
        }
        n = n.parentElement
        walked++
      }

      // Second pass — id match walking full ancestors
      n = node
      while (n && n !== container) {
        const nid = n.getAttribute?.('data-node-id')
        if (nid) {
          const segments = nid.startsWith('I') ? nid.slice(1).split(';') : [nid]
          for (const seg of segments) {
            if (ids.includes(seg)) {
              e.preventDefault()
              e.stopPropagation()
              onHit(actions[seg])
              return
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
