import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { CREDENTIALS, setSession } from '../auth.js'

const CH = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const listIcon = <svg viewBox="0 0 16 16"><path d="M1 2h2v2H1zM5 2h10v2H5zM1 7h2v2H1zM5 7h10v2H5zM1 12h2v2H1zM5 12h10v2H5z" /></svg>
const userIcon = <svg viewBox="0 0 16 16"><circle cx="8" cy="4.5" r="3.2" /><path d="M1.5 15c0-4 3-6 6.5-6s6.5 2 6.5 6z" /></svg>
const lockIcon = <svg viewBox="0 0 16 16"><path d="M4 7V5a4 4 0 018 0v2h1v8H3V7zm2 0h4V5a2 2 0 00-4 0z" /></svg>
const checkIcon = <svg viewBox="0 0 16 16"><path d="M13 9v4H3V3h6V1H3L1 3v10l2 2h10l2-2V9zM6 7l-1.5 1.5L7.5 12 15 4.5 13.5 3 7.5 9z" /></svg>

function Row({ label, top, children, big }) {
  return (
    <div className="row" style={{ marginTop: top }}>
      <label style={{ paddingTop: 2 }}>{label}</label>
      {children}
    </div>
  )
}

export default function Login() {
  const nav = useNavigate()
  const cv = useRef(null)
  const mq = useRef(null)
  const [code, setCode] = useState('')
  const [f, setF] = useState({ reg: '', otr: '', pwd: '', cap: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const gen = () => {
    let c = ''
    for (let i = 0; i < 5; i++) c += CH[Math.floor(Math.random() * CH.length)]
    setCode(c)
    const x = cv.current.getContext('2d')
    x.fillStyle = '#e4e4e4'; x.fillRect(0, 0, 336, 84)
    for (let i = 0; i < 14; i++) {
      x.strokeStyle = `rgba(${100 + Math.random() * 80 | 0},100,100,.55)`; x.lineWidth = 1 + Math.random()
      x.beginPath(); x.moveTo(Math.random() * 336, Math.random() * 84); x.lineTo(Math.random() * 336, Math.random() * 84); x.stroke()
    }
    x.font = 'italic 46px Georgia,serif'; x.fillStyle = '#666'; x.textBaseline = 'middle'
    for (let i = 0; i < 5; i++) {
      x.save(); x.translate(34 + i * 52, 44); x.rotate((Math.random() - .5) * .35); x.fillText(c[i], 0, 0); x.restore()
    }
  }
  useEffect(gen, [])

  // bouncing subtitle (88px/s), starts in the middle and moves left first
  useEffect(() => {
    const c = mq.current, s = c.firstElementChild
    let dir = -1, last = null, x = Math.max(0, (c.clientWidth - s.offsetWidth) / 2), raf
    const step = (t) => {
      if (last === null) last = t
      const dt = Math.min((t - last) / 1000, .1); last = t
      const max = Math.max(0, c.clientWidth - s.offsetWidth)
      if (x > max) x = max
      x += dir * 88 * dt
      if (x <= 0) { x = 0; dir = 1 } else if (x >= max) { x = max; dir = -1 }
      s.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const submit = () => {
    if (!f.reg.trim()) return alert('रजिस्ट्रेशन संख्या भरें')
    if (!f.pwd) return alert('पासवर्ड / वेरिफिकेशन कोड डालें')
    if (f.reg.trim() !== CREDENTIALS.reg) return alert('रजिस्ट्रेशन संख्या गलत है')
    if (f.otr.trim().toUpperCase() !== CREDENTIALS.otr) return alert('ओटीआर नंबर गलत है')
    if (f.pwd !== CREDENTIALS.pwd) return alert('पासवर्ड गलत है')
    if (f.cap !== code) { alert('कैप्चा कोड गलत है'); setF({ ...f, cap: '' }); return gen() }
    setSession({ reg: f.reg.trim(), otr: f.otr.trim() })
    nav('/dashboard')
  }

  return (
    <div className="lg">
      <div className="topline" />
      <div className="header">
        <img className="emblem" alt="UP Sarkar" src="/img/emblem.png" />
        <h1>छात्रवृत्ति एवं शुल्क प्रतिपूर्ति ऑनलाइन प्रणाली</h1>
        <h2>उत्तर प्रदेश</h2>
        <p className="mq" ref={mq}><span>Scholarship and Fee Reimbursement Online System</span></p>
        <img className="swachh" alt="Swachh Bharat" src="/img/swachh.png" />
      </div>
      <div className="nav"><Link to="/">HOME</Link><a href="#back" onClick={(e) => { e.preventDefault(); nav(-1) }}>BACK</a></div>

      <div className="box">
        <div className="pill">उ0प्र0/अन्य प्रदेश में अध्ययनरत छात्र/छात्राओं के लिए छात्रवृति एवं शुल्क प्रतिपूर्ति (सत्र : 2026-27)</div>
        <div className="row" style={{ marginTop: 2 }}>
          <label>1: आवेदन का प्रकार <span className="req">*</span> :</label>
          <div className="ig big"><div className="ic">{listIcon}</div><div className="rd"><input type="radio" checked readOnly /> नवीनीकरण (Renewal)</div></div>
        </div>
        <div className="row" style={{ marginTop: 1 }}>
          <label style={{ paddingTop: 2 }}>2: पाठ्यक्रम का प्रकार<span className="req">*</span> :</label>
          <div className="ig big"><div className="ic">{listIcon}</div><div className="rd"><input type="radio" checked readOnly /> दशमोत्तर (Postmatric OtherThan Inter)</div></div>
        </div>
        <Row top={8} label={<>3: रजिस्ट्रेशन संख्या भरें (सत्र 2025-26) <span className="req">*</span> :</>}>
          <div className="ig"><div className="ic">{userIcon}</div><input type="text" value={f.reg} onChange={set('reg')} /></div>
        </Row>
        <Row top={12} label="4: ओ०टी०आर० नंबर :">
          <div className="ig"><div className="ic">{userIcon}</div><input type="text" value={f.otr} onChange={set('otr')} /></div>
        </Row>
        <Row top={19} label={<>5: अपना पासवर्ड / वेरिफिकेशन कोड डाले <span className="req">*</span> :</>}>
          <div className="ig"><div className="ic">{lockIcon}</div><input type="password" value={f.pwd} onChange={set('pwd')} /></div>
        </Row>
        <Row top={12} label={<>6: कैप्चा कोड :<span className="req">*</span> :</>}>
          <div>
            <div className="cap">
              <canvas ref={cv} width="336" height="84" />
              <svg viewBox="0 0 48 48" onClick={gen}><path d="M24 8c-6 0-11 3-14 8l-4-2 2 12 11-4-4-2c2-3 5-5 9-5 4 0 7 2 9 5l7-3c-3-6-9-9-16-9zM42 22l-11 4 4 2c-2 3-5 5-9 5-4 0-7-2-9-5l-7 3c3 6 9 9 16 9 6 0 11-3 14-8l4 2z" fill="#000" /></svg>
            </div>
            <div className="ig" style={{ marginTop: 3, width: 562 }}><div className="ic">{checkIcon}</div><input type="text" value={f.cap} onChange={set('cap')} /></div>
            <p className="hint">ऊपर दिया गया केप्चा कोड डालें (केस सेंसिटिव)</p>
          </div>
        </Row>
        <button className="submit" onClick={submit}>Submit</button>
        <div className="links">
          <div><span>Forgot OTR?</span> <a href="#otr">Click Here</a></div>
          <div><span>Forgot Password for Postmatric Student?</span> <a href="#pw">Click Here</a></div>
        </div>
      </div>

      <div className="footer">
        This web site is designed and developed by : <b>National Informatics Centre (NIC) U.P. State Unit,Lucknow</b> and jointly maintained by Social Welfare Department,Backward Class Welfare Department,<br />
        Minorities Welfare Department and Tribal Development Department, UP.<br />
        <span className="u">Last Reviewed and Updated :</span>
      </div>
    </div>
  )
}
