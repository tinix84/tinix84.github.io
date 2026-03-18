import { useState } from 'react'
import PageTransition from './PageTransition'

function useCalcState(defaults) {
  const [vals, setVals] = useState(defaults)
  const set = (key, v) => setVals(prev => ({ ...prev, [key]: v }))
  return [vals, set]
}

function CalcCard({ title, formula, children }) {
  return (
    <div className="calc-card">
      <h4>{title}</h4>
      <div className="calc-formula">{formula}</div>
      {children}
    </div>
  )
}

function OhmCalc() {
  const [v, set] = useCalcState({ V: '', I: '', R: '' })
  const [result, setResult] = useState('')

  const calc = () => {
    const V = parseFloat(v.V), I = parseFloat(v.I), R = parseFloat(v.R)
    if (V && I && !R) setResult(`R = ${(V / I).toFixed(4)} \u03A9 \u00A0\u00A0 P = ${(V * I).toFixed(4)} W`)
    else if (V && R && !I) { const ci = V / R; setResult(`I = ${ci.toFixed(4)} A \u00A0\u00A0 P = ${(V * ci).toFixed(4)} W`) }
    else if (I && R && !V) { const cv = I * R; setResult(`V = ${cv.toFixed(4)} V \u00A0\u00A0 P = ${(cv * I).toFixed(4)} W`) }
    else setResult('Enter exactly 2 values.')
  }

  return (
    <CalcCard title="Ohm's Law" formula="V = I \u00D7 R">
      <input className="calc-input" type="number" placeholder="Voltage (V)" value={v.V} onChange={e => set('V', e.target.value)} />
      <input className="calc-input" type="number" placeholder="Current (A)" value={v.I} onChange={e => set('I', e.target.value)} />
      <input className="calc-input" type="number" placeholder="Resistance (\u03A9)" value={v.R} onChange={e => set('R', e.target.value)} />
      <button className="calc-btn" onClick={calc}>Calculate</button>
      {result && <div className="calc-result">{result}</div>}
    </CalcCard>
  )
}

function PowerCalc() {
  const [v, set] = useCalcState({ V: '', I: '', R: '' })
  const [result, setResult] = useState('')

  const calc = () => {
    const V = parseFloat(v.V), I = parseFloat(v.I), R = parseFloat(v.R)
    if (V && I) setResult(`P = ${(V * I).toFixed(4)} W (V\u00D7I)`)
    else if (I && R) setResult(`P = ${(I * I * R).toFixed(4)} W (I\u00B2\u00D7R)`)
    else if (V && R) setResult(`P = ${(V * V / R).toFixed(4)} W (V\u00B2/R)`)
    else setResult('Enter any 2 values.')
  }

  return (
    <CalcCard title="Power" formula="P = V \u00D7 I = I\u00B2 \u00D7 R = V\u00B2 / R">
      <input className="calc-input" type="number" placeholder="Voltage (V)" value={v.V} onChange={e => set('V', e.target.value)} />
      <input className="calc-input" type="number" placeholder="Current (A)" value={v.I} onChange={e => set('I', e.target.value)} />
      <input className="calc-input" type="number" placeholder="Resistance (\u03A9)" value={v.R} onChange={e => set('R', e.target.value)} />
      <button className="calc-btn" onClick={calc}>Calculate</button>
      {result && <div className="calc-result">{result}</div>}
    </CalcCard>
  )
}

function LCCalc() {
  const [v, set] = useCalcState({ L: '', C: '' })
  const [result, setResult] = useState('')

  const calc = () => {
    const L = parseFloat(v.L), C = parseFloat(v.C)
    if (L && C) {
      const f = 1 / (2 * Math.PI * Math.sqrt(L * C))
      const w = 2 * Math.PI * f
      const fStr = f >= 1e6 ? (f / 1e6).toFixed(3) + ' MHz' : f >= 1e3 ? (f / 1e3).toFixed(3) + ' kHz' : f.toFixed(3) + ' Hz'
      setResult(`f = ${fStr} \u00A0\u00A0 \u03C9 = ${w.toFixed(2)} rad/s \u00A0\u00A0 T = ${(1 / f * 1e3).toFixed(4)} ms`)
    } else setResult('Enter both L and C.')
  }

  return (
    <CalcCard title="LC Resonance" formula="f = 1 / (2\u03C0\u221ALC)">
      <input className="calc-input" type="number" placeholder="Inductance (H)" value={v.L} onChange={e => set('L', e.target.value)} />
      <input className="calc-input" type="number" placeholder="Capacitance (F)" value={v.C} onChange={e => set('C', e.target.value)} />
      <button className="calc-btn" onClick={calc}>Calculate</button>
      {result && <div className="calc-result">{result}</div>}
    </CalcCard>
  )
}

export default function Calculators() {
  return (
    <PageTransition>
      <section className="section">
        <div className="section-header">
          <div className="section-overline">04 / Tools</div>
          <h2 className="section-title">Engineering <em>calculators</em></h2>
        </div>
        <div className="calc-grid">
          <OhmCalc />
          <PowerCalc />
          <LCCalc />
        </div>
      </section>
    </PageTransition>
  )
}
