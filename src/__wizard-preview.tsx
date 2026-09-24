import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Stage from './Stage'
import DealLineWizard from './frames/DealLineWizard'

function Harness() {
  const [w, setW] = useState<'ng' | 'pg'>('ng')
  const [done, setDone] = useState(false)
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 8, font: '13px Inter, sans-serif' }}>
        <button onClick={() => setW('ng')}>NG 1512</button>
        <button onClick={() => setW('pg')}>PG 1620</button>
        <span id="done"> complete={String(done)}</span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Stage designWidth={w === 'ng' ? 1512 : 1620} designHeight={982}>
          <DealLineWizard key={w} width={w} onComplete={() => setDone(true)} />
        </Stage>
      </div>
    </div>
  )
}
createRoot(document.getElementById('root')!).render(<StrictMode><Harness /></StrictMode>)
