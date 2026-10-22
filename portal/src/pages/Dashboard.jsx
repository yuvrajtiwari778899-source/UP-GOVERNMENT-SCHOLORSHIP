import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/dash.css'
import {getSession,clearSession} from '../auth'

const STEPS=['Registration', 'Application Form', 'Upload Documents', 'Income/Caste Auth.', 'Aadhar Auth.', 'Application Lock', 'Receive Hard Copy at Institutions']

export default function Dashboard(){
  const nav=useNavigate()
  const [side,setSide]=useState(true)
  const [menu,setMenu]=useState(false)
  const reg=getSession()?.reg||'272390502403860'
  const logout=()=>{clearSession();nav('/')}
  return (
<div className="dashpage">
  <div className="dh">
    <div className="bars" onClick={()=>setSide(v=>!v)}><i></i><i></i><i></i></div>
    <h1>छात्रवृत्ति एवं शुल्क प्रतिपूर्ति ऑनलाइन प्रणाली ,उत्तर प्रदेश</h1>
    <div className="set"><button onClick={()=>setMenu(v=>!v)}>⚙ &nbsp;Settings &nbsp;▾</button><div className="menu" style={{display:menu?'block':'none'}}><a onClick={logout}>Logout</a></div></div>
  </div>
  <div className="dgrid">
    <div className="side" style={{display:side?'':'none'}}>
      <div className="status">Status</div>
      <ul>
        <li><span className="ar">▶</span>रजिस्टर करें <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>प्रमाणीकरण हेतु आधार नंबर डालें <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>मोबाइल नंबर सत्यापन हेतु <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>&nbsp;आय प्रमाणीकरण हेतु</li>
        <li><span className="ar">▶</span>एनसीपीआई सत्यापन हेतु <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>नवीनीकरण आवेदन पत्र को संशोधित करें <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>फोटो अपलोड करें <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>जाँच हेतु आवेदन प्रिंट करें <span className="ok">✔</span></li>
        <li><span className="ar">▶</span>जाँच के उपरांत आवेदन पत्र सबमिट करे (संस्था मे जमा करने हेतु आवेदन पत्र का प्रिंट 3 कार्यदिवस बाद अवश्य करे) <span className="ok">✔</span></li>
        <li className="pl"><span className="ar">▶</span>संस्था हेतु आवेदन प्रिंट करें <span className="ok">✔</span></li>
      </ul>
      <div style={{height:'68px'}}></div>
      <div className="sbox"><button onClick={()=>nav("/status")}>Check Current Status</button></div>
      <div className="sbox" style={{marginBottom:'0'}}><button>Request for Update in OTR</button></div>
    </div>
    <div className="mainc">
      <div className="ttl"><div className="cap"><svg width="54" height="40" viewBox="0 0 54 40"><path d="M27 2L1 14l26 12 26-12z" fill="#111"/><path d="M12 21v10c0 4 7 8 15 8s15-4 15-8V21l-15 7z" fill="#111"/><path d="M49 16v14" stroke="#111" strokeWidth="3"/></svg></div><h2>उ0प्र0/अन्य प्रदेश में अध्ययनरत छात्र/छात्राओं के लिए ऑनइलाइन छात्रवृति प्रबन्धन प्रणाली सत्र : (2026-27) - नवीनीकरण</h2></div>
      <div className="stl"><svg viewBox="0 0 18 22"><path d="M1 0h11l6 6v16H1zM4 11h10v2H4zM4 15h10v2H4z"/></svg>Step to Filling Application Form</div>
      <div className="steps">{STEPS.map((n,i)=><div className="stp" key={i}><span className="el">Step {i+1}<span className="ck">✔</span></span><p>{n}</p></div>)}</div>
      <div className="sd">
        <h3>Student Details</h3>
        <table>
          <tr><td style={{width:'262px'}}>रजिस्ट्रेशन संख्या:</td><td className="v b" style={{width:'249px'}} >{reg}</td><td style={{width:'263px'}}>रजिस्ट्रेशन संख्या सत्र -2024-25:</td><td></td></tr>
          <tr><td>जिला (जहाँ छात्र/छात्रा अध्ययनरत है):</td><td className="v">Lucknow</td><td>शिक्षण संस्थान:</td><td className="v">BABU BANARSI DAS UNIVERSITY FAIZABAD ROAD LKO</td></tr>
          <tr><td>छात्र/छात्रा का नाम:</td><td className="v">Yuvraj Tiwari</td><td>पिता का नाम:</td><td className="v">C/O: Anjani Kumar</td></tr>
          <tr><td style={{height:'50px'}}>जन्मतिथि:</td><td className="v">23/04/2007</td><td></td><td></td></tr>
        </table>
      </div>
      <div className="emp"></div><div className="emp"></div>
    </div>
  </div>
  <div className="gear">⚙</div>
</div>
  )
}
