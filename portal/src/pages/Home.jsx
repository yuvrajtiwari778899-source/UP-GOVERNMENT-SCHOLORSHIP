import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/home.css'

const SUB = ['Prematric Students', 'Postmetric Students', 'Postmetric Other Than Inter Students', 'Postmetric Other State Students']
const NAV = ['Institutes', 'Departments', 'Reports', 'Status']
const NAV2 = ['Grievance Redressal System', 'Feedback', 'Contact Us', 'Help']
const TILES = [['students', '/login'], ['institutes'], ['universities'], ['dios'], ['hmo'], ['directorate'], ['deputy'], ['dwo']]
const SLIDE2 = [
  ['otr', 'OTR', '(ओटीआर)'],
  ['bio', 'Biometric Authentication, Verification & Forwarding from Institute', '(संस्था से बायोमेट्रिक प्रमाणीकरण, सत्यापन और अग्रेषण)'],
  ['scrutiny', 'Computerized Scrutiny', '(कम्प्यूटरीकृत जांच)'],
  ['verify', 'Verification from District Scholarship Committee', '(जिला छात्रवृत्ति समिति से सत्यापन)'],
  ['aadhar', 'Aadhar Based Fund Disbursement', '(आधार आधारित भुगतान)'],
]
const NOTICES = ['अपनी भुगतान की स्थिति जाने के लिए क्लिक करें', 'General Instruction for Institutions', 'General Instruction for Students', 'General Instruction for DSWO']
const SCHEMES = ['Pre Matric Class 9-10', 'Post Matric Inter Class 11-12', 'Post Matric Other than Inter', 'Post Matric Out Side State']
const BLACK = [
  ['Hathras', 'CHAUDHARY BABULAL INSTITUTE OF TECHNOLOGY AND MANAGEMENT', '30-09-2015'],
  ['Meerut', 'EXCELLENCE COLLEGE OF PROFESSIONAL STUDIES SHASTRI NAGAR MEERUT', '30-07-2015'],
  ['मथुरा', 'राजवीर सिंह सिकरवार प्राइवेट आई.टी.आई.', '03-05-2015'],
]
const DOWNLOADS = [
  ['1', 'General Instruction for DSWO', 1], ['1', 'General Instruction for Institutions', 1], ['1', 'General Instruction for Students'],
  ['2', 'General Instructions for Outside State Institutions/Students'], ['3', 'OUTSIDE STATE INSTITUTIONS REGISTRATION FORM--हिंदी'], ['4', 'Advertisement Session 2026-2027'],
]
const TOP_STATS = [['Total OTR', '89,89,714', '#007bff'], ['Final Submitted Applications', '84,88,216', '#28a745'], ['Forwarded from Institutions', '77,08,644', '#066a85'], ['Total Beneficiaries', '18,64,427', '#6c757d']]
const DIST = [
  ['No. of Registered Prematric Institutions', '34,858', '#007bff'], ['No. of Registered Postmatric Institutions', '22,174', '#28a745'],
  ['No. of Registered Postmatric Other-than Inter Institutions', '17,170', '#ffc107'], ['No. of Benefited Students (Prematric)', '15,32,410', '#dc3545'],
  ['No. of Benefited Students (Postmatric)', '43,35,007', '#17a2b8'], ['Prematric Scholarship Disbursed', '₹3,17,53,71,475', '#6c757d'],
  ['Postmatric Scholarship Disbursed', '₹14,21,36,99,560', '#a0125c'], ['Postmatric Fee Reimbursement', '₹29,40,79,71,404', '#066a85'],
]
const DATES = [
  ['शिक्षण संस्था द्वारा मास्टर डाटा तैयार करना', 'July 22, 2026', 'September 14, 2026'],
  ['विश्वविद्यालय /एफिलियेटिंग एजेंसी द्वारा फीस आदि का सत्यापन', 'July 23, 2026', 'September 15, 2026'],
  ['मास्टर डाटा का सत्यापन', 'July 25, 2026', 'September 20, 2026'],
  ['अल्पसंख्यक वर्ग हेतु एन.एस.पी. पोर्टल पर पंजीकृत निजी क्षेत्र के शिक्षण संस्थानों की मार्किंग किया जाना', 'July 25, 2026', 'September 21, 2026'],
]
const IMPORTANT = [['Swachh Bharat Mission', 'Digital India'], ['My GOV', "India's official website"], ["UP Govt's official website.", 'Ministy of Electronis & IT'], ['UP Gov Shasanadesh', 'CM Helpline no.']]
const FOOT = ['Feedback', 'Website Policies', 'Contact Us', 'Help', 'FAQs', 'Disclaimer', 'Copyright', 'Privacy', 'Terms & Conditions', 'Accessibility', 'Hyperlinking']

const New = () => <span className="new">New</span>
const Dl = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="#0b3a6e"><path d="M7 1h2v7l2.5-2.5L13 7l-5 5-5-5 1.5-1.5L7 8zM2 13h12v2H2z" /></svg>
const Card = ({ title, children, style }) => (
  <div className="card" style={style}><div className="ch">{title}</div>{children}</div>
)

function Nav() {
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(-1)
  const timer = useRef(null)
  const show = () => { clearTimeout(timer.current); setOpen(true) }
  const hide = () => { clearTimeout(timer.current); timer.current = setTimeout(() => { setOpen(false); setSub(-1) }, 250) }
  const go = (s) => { setOpen(false); if (s === SUB[2]) nav('/login') }
  return (
    <div className="nav">
      <Link to="/" className="pill">Home</Link>
      <div className="nw" onMouseEnter={show} onMouseLeave={hide}>
        <div className="pill">Students <i /></div>
        {open && (
          <div className="dd">
            <div className="di">New Registration</div>
            {['Login Fresh', 'Login Renewal'].map((t, k) => (
              <div key={t} className="dw" onMouseEnter={() => setSub(k)}>
                <div className="di">{t}<b /></div>
                {sub === k && (
                  <div className="dd sd2">
                    {SUB.map((s) => <div key={s} className="di" onClick={() => go(s)}>{s}</div>)}
                  </div>
                )}
              </div>
            ))}
            <div className="di" onMouseEnter={() => setSub(-1)}>Income Correction for General/SC Category (2025-26)<b /></div>
          </div>
        )}
      </div>
      {NAV.map((n) => <div key={n} className="pill">{n} <i /></div>)}
      {NAV2.map((n) => <div key={n} className="pill">{n}</div>)}
    </div>
  )
}

function Slider() {
  const [i, setI] = useState(0)
  const [play, setPlay] = useState(true)
  useEffect(() => {
    if (!play) return
    const t = setInterval(() => setI((v) => (v + 1) % 2), 5000)
    return () => clearInterval(t)
  }, [play])
  return (
    <div className="slider">
      <div className={'slide s1' + (i === 0 ? ' on' : '')}>
        <svg className="hills" viewBox="0 0 1900 200" preserveAspectRatio="none"><defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8fbf5a" /><stop offset="1" stopColor="#0f5963" /></linearGradient></defs><path d="M0 110C300 40 620 90 900 105S1500 60 1900 100V200H0z" fill="url(#g)" /><path d="M0 160C400 110 900 190 1900 120V200H0z" fill="#0f5963" opacity=".85" /></svg>
        <img className="stamp" src="/img/saksham.png" alt="" />
        <div className="hi">छात्रवृत्ति एवं शुल्क प्रतिपूर्ति ऑनलाइन</div>
        <div className="en">Scholarship and Fee Reimbursement</div>
        <div className="it">An initiative by Government of Uttar Pradesh</div>
      </div>
      <div className={'slide s2' + (i === 1 ? ' on' : '')}>
        <div className="en2">Scholarship &amp; Fee Reimbursement</div>
        <div className="flow">
          {SLIDE2.map(([k, t, h], x) => (
            <div className="st" key={k}>
              <img src={`/img/s-${k}.png`} alt="" />
              {x < SLIDE2.length - 1 && <span className="arr">▮▮▶</span>}
              <div className="t">{t}</div><div className="h">{h}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="ctl"><b onClick={() => setI((i + 1) % 2)}>❮</b><b onClick={() => setPlay(!play)}>{play ? '❚❚' : '▶'}</b><b onClick={() => setI((i + 1) % 2)}>❯</b></div>
    </div>
  )
}

function Popup({ show, onClose }) {
  return (
    <div className={'pop' + (show ? ' show' : '')}>
      <div className="ph"><span>⚠ महत्वपूर्ण तिथियाँ</span><a>पूर्वदशम(9 &amp; 10) एवं दशमोत्तर(11 &amp; 12) के लिए यहाँ क्लिक करें</a><button onClick={onClose}>−</button></div>
      <div className="pb">
        <h3>दशमोत्तर <small>(11 &amp; 12 के अतिरिक्त) (सत्र 2026-27)</small></h3>
        <div className="pt"><table><thead><tr><th>प्रक्रिया</th><th>प्रारंभ तिथि</th><th>अंतिम तिथि</th></tr></thead>
          <tbody>{DATES.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
        <a className="pl">दशमोत्तर (11 &amp; 12 के अतिरिक्त) सत्र 2025-26 के लिए यहाँ क्लिक करें</a>
        <a className="pl">पूर्वदशम(9 &amp; 10) एवं दशमोत्तर(11 &amp; 12) सत्र 2025-26 के लिए यहाँ क्लिक करें</a>
      </div>
    </div>
  )
}

export default function Home() {
  const nav = useNavigate()
  const [pop, setPop] = useState(false)
  const [tab, setTab] = useState(0)
  const [acc, setAcc] = useState(-1)
  // popup apne aap khulta hai jab page load ho
  useEffect(() => {
    const t = setTimeout(() => setPop(true), 700)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="hm">
      <div className="top">
        <span>उत्तर प्रदेश सरकार</span><i className="sep" /><span className="sm">Government of Uttar Pradesh</span>
        <div className="r">
          <span className="dot" style={{ background: '#ff5a26' }} /><span className="dot" style={{ background: '#9e9e9e' }} /><span className="dot" style={{ background: '#0b2f52' }} />
          <span>Skip to main content</span>
          <span className="ib">💬</span><span className="ib">⛓</span><span className="ib">♿</span>
          <u className="ib en">English</u>
        </div>
      </div>
      <div className="head">
        <img src="/img/emblem-home.png" alt="" className="em" />
        <div><div className="t1">छात्रवृत्ति एवं शुल्क प्रतिपूर्ति ऑनलाइन प्रणाली</div><div className="t2">Scholarship and Fee Reimbursement Online System</div></div>
        <div className="hr"><img src="/img/pm.png" alt="" /><img src="/img/cm.png" alt="" /><img src="/img/digital-india.png" alt="" className="di" /></div>
      </div>
      <Nav />
      <Slider />
      <div className="info">
        <div className="it">महत्वपूर्ण जानकारी</div>
        <div className="mqw"><div className="mqt">{[...NOTICES, ...NOTICES].map((n, k) => <span key={k}>☞ {n}</span>)}</div></div>
        <div className="ia">❮ ❚❚ ❯</div>
      </div>

      <div className="main">
        <div className="col">
          <Card title="OTR (One Time Registration)">
            <div className="otr">
              <img src="/img/otr.png" alt="" />
              <div><p>शैक्षिक सत्र 2025-26 से उत्तर प्रदेश छात्रवृत्ति पोर्टल पर OTR (वन टाइम रजिस्ट्रेशन) अनिवार्य कर दिया गया है। कृपया सभी छात्र - छात्राएं पहले OTR (वन टाइम रजिस्ट्रेशन) करें, उसके पश्चात ही छात्रवृत्ति के लिए आवेदन कर सकेंगे।</p></div>
            </div>
            <a className="btn">OTR पंजीकरण करें →</a>
          </Card>
          <Card title="Sanskrit Scholarship (संस्कृत छात्रवृत्ति)" style={{ marginTop: 8 }}>
            <p className="sk">संस्कृत विद्यालयों, महाविद्यालयों, सम्पूर्णान्द संस्कृत विश्वविद्यालय तथा उसमें अध्ययनरत छात्र-छात्राओं के लॉगिन हेतु</p>
            <a className="btn">यहाँ क्लिक करें →</a>
          </Card>
          <div className="tabs">{['Schemes', 'Prematric GO', 'Postmatric GO'].map((t, k) => <span key={t} className={k === tab ? 'on' : ''} onClick={() => setTab(k)}>{t}</span>)}</div>
          <div className="schemes">
            {tab === 0 ? SCHEMES.map((s, k) => (
              <div key={s}><div className="sr"><span>{s}</span><button onClick={() => setAcc(acc === k ? -1 : k)}>{acc === k ? '−' : '+'}</button></div>
                {acc === k && <div className="sx">Details are available on the official portal.</div>}</div>
            )) : <div className="sx">No documents available.</div>}
          </div>
        </div>

        <div className="col">
          <Card title="Logins" style={{ height: 423 }}>
            <div className="tiles">{TILES.map(([k, to]) => <img key={k} src={`/img/t-${k}.png`} alt={k} className={to ? 'cl' : ''} onClick={() => to && nav(to)} />)}</div>
          </Card>
          <Card title="List of Blacklisted Institutes" style={{ marginTop: 54 }}>
            <div className="scr" style={{ height: 297 }}>
              <table className="tb"><thead><tr><th>DISTRICT</th><th>INSTITUTE</th><th>ORDER DATE</th></tr></thead>
                <tbody>{BLACK.map((r) => <tr key={r[1]}>{r.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody></table>
            </div>
          </Card>
        </div>

        <div className="col">
          <Card title="Timetables" style={{ height: 423 }}>
            <table className="tb t3"><thead><tr><th>Sl No.</th><th>Scheme</th><th>Category</th><th>Issue Date</th><th /></tr></thead>
              <tbody>{[['1', 'Postmatric (2026-27)'], ['2', 'Prematric (2026-27)']].map((r) => (
                <tr key={r[0]}><td className="c">{r[0]}</td><td><b>{r[1]}</b><br /><New /></td><td>SC, ST, General, Minority, OBC</td><td>20-07-2026</td><td><Dl /></td></tr>))}</tbody></table>
          </Card>
          <Card title="Download Links (2026-27)" style={{ marginTop: 54 }}>
            <div className="scr" style={{ height: 410 }}>
              <table className="tb dl"><thead><tr><th>Sl.No.</th><th>Title</th><th /></tr></thead>
                <tbody>{DOWNLOADS.map((r) => <tr key={r[1]}><td className="c">{r[0]}</td><td><b>{r[1]}</b> {r[2] && <New />}</td><td><Dl /></td></tr>)}</tbody></table>
            </div>
          </Card>
        </div>
      </div>

      <div className="wide">
        <Card title="Real Time Statistics (Session: 2025-26)">
          <div className="g4">{TOP_STATS.map(([t, v, c]) => <div className="sc" key={t}><div style={{ background: c }}>{t}</div><p>{v}</p></div>)}</div>
        </Card>
      </div>

      <div className="main two">
        <Card title="Map of Uttar Pradesh"><div className="map"><img src="/img/up-map.png" alt="Uttar Pradesh" /></div></Card>
        <Card title="District Wise Information (Session:2024-25)">
          <div className="ds"><h4>State Summary</h4>
            <div className="g4 d8">{DIST.map(([t, v, c]) => <div className="sc" key={t}><div style={{ background: c }}>{t}</div><p>{v}</p></div>)}</div></div>
        </Card>
      </div>

      <div className="fb">
        <div className="th">{['minority', 'backward', 'tribal', 'social'].map((k) => <img key={k} src={`/img/w-${k}.png`} alt={k} />)}</div>
        <div className="il"><h3>IMPORTANT LINKS</h3><div>{IMPORTANT.map((r) => <div key={r[0]} className="ir"><span>{r[0]}</span><span>{r[1]}</span></div>)}</div></div>
      </div>
      <div className="fl">{FOOT.map((f, k) => <span key={f}>{f}{k < FOOT.length - 1 && <em> / </em>}</span>)}</div>
      <div className="fk">
        <p>Designed and Developed by <a>National Informatics Centre State Unit, Lucknow U.P.</a></p>
        <p>, hosted at UP SDC and jointly maintained by <a>Social Welfare Department</a>, <a>Backward Class Welfare Department</a>, <a>Minorities Welfare Department</a> and <a>Tribal Development Department</a></p>
        <p>Last Updated:</p>
      </div>

      <Popup show={pop} onClose={() => setPop(false)} />
      <button className="bell" onClick={() => setPop(!pop)} aria-label="Notifications">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff"><path d="M12 22a2.4 2.4 0 002.4-2.4H9.6A2.4 2.4 0 0012 22zm7-6.4V10c0-3.4-1.8-6.2-5-7V2.5a2 2 0 00-4 0V3C6.800 3.800 5 6.600 5 10v5.600L3 17.600V19h18v-1.400z" /></svg>
      </button>
    </div>
  )
}