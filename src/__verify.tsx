// TEMPORARY visual-QA harness — renders one new status frame at natural size
// so it can be screenshotted and compared 1:1 against its Figma source.
// Delete this file and verify-frames.html once verification is done.
import { createRoot } from 'react-dom/client'
import './index.css'

import NgGopPending from './frames/NgGopPending'
import NgGopApproved from './frames/NgGopApproved'
import NgGopLive from './frames/NgGopLive'
import NgGopTerminated from './frames/NgGopTerminated'
import NgGopEnded from './frames/NgGopEnded'
import NgRejected from './frames/NgRejected'
import PgAvailPending from './frames/PgAvailPending'
import PgAvailLive from './frames/PgAvailLive'
import PgAvailTerminated from './frames/PgAvailTerminated'
import PgAvailEnded from './frames/PgAvailEnded'
import PgGopApproved from './frames/PgGopApproved'
import PgGopLive from './frames/PgGopLive'
import PgRejected from './frames/PgRejected'

const FRAMES: Record<string, { C: React.ComponentType; w: number }> = {
  NgGopPending: { C: NgGopPending, w: 1512 },
  NgGopApproved: { C: NgGopApproved, w: 1512 },
  NgGopLive: { C: NgGopLive, w: 1512 },
  NgGopTerminated: { C: NgGopTerminated, w: 1512 },
  NgGopEnded: { C: NgGopEnded, w: 1512 },
  NgRejected: { C: NgRejected, w: 1512 },
  PgAvailPending: { C: PgAvailPending, w: 1620 },
  PgAvailLive: { C: PgAvailLive, w: 1620 },
  PgAvailTerminated: { C: PgAvailTerminated, w: 1620 },
  PgAvailEnded: { C: PgAvailEnded, w: 1620 },
  PgGopApproved: { C: PgGopApproved, w: 1620 },
  PgGopLive: { C: PgGopLive, w: 1620 },
  PgRejected: { C: PgRejected, w: 1620 },
}

const name = new URLSearchParams(location.search).get('f') ?? 'NgGopPending'
const entry = FRAMES[name]

createRoot(document.getElementById('verify-root')!).render(
  entry ? (
    <div style={{ width: entry.w, height: 982, position: 'relative', overflow: 'hidden' }}>
      <entry.C />
    </div>
  ) : (
    <pre>unknown frame {name}; try: {Object.keys(FRAMES).join(', ')}</pre>
  ),
)
