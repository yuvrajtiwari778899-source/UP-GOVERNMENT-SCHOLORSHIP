import {useNavigate} from 'react-router-dom'
import '../styles/status.css'
import {getSession} from '../auth'

const p2=n=>(n<10?'0':'')+n

export default function Status(){
  const nav=useNavigate()
  const reg=getSession()?.reg||'272390502403860'
  const d=new Date()
  const printDate=p2(d.getDate())+'/'+p2(d.getMonth()+1)+'/'+d.getFullYear()
  return (
<div className="statpage">
<span className="bk" onClick={()=>nav("/dashboard")}>&larr; Back to Dashboard</span>
<div className="pt"><a onClick={()=>window.print()}>PRINT THIS PAGE</a></div>
<div className="wrap"><div className="doc">
  <img className="banimg" alt="Scholarship and Fee Reimbursement Online System" src="/img/banner.png"/>
  <div className="hd">Postmatric Scholarship Form Status for 2025-26 (RENEW OTHER THAN INTER)<br/>OTR Number :-UP25-0907697077<br/>(Print Date:-{printDate})</div>
  <table className="info">
    <tr><td className="b">Institute &amp; District :</td><td colSpan="3">BABU BANARSI DAS UNIVERSITY FAIZABAD ROAD LKO, Lucknow</td></tr>
    <tr><td className="b">Registration/Refference Number:</td><td>{reg}</td><td className="b">Category/Caste:</td><td>GENERAL</td></tr>
    <tr><td className="b">Student Name:</td><td>Yuvraj Tiwari</td><td className="b">Father/Guardian/Husband Name:</td><td>C/O: Anjani Kumar</td></tr>
    <tr><td className="b" style={{height:'52px'}}>Date of Birth:</td><td>23/04/2007</td><td className="b">Course Name &amp; Year :</td><td>B.tech. in computer science and engineering (artificial intelligence)2Year</td></tr>
  </table>
  <div className="in"><table className="md">
    <tr><th>Master Data</th><th>Status</th><th>Fee amount in the course to which student belong</th><th>Date</th></tr>
    <tr><td>i- College/Uni.(As an Institute)</td><td>Lock</td><td>125000</td><td>16/10/2025</td></tr>
    <tr><td>ii- Uni./Affi. Agency</td><td>Lock</td><td>125000</td><td>07/11/2025</td></tr>
    <tr><td>iii- Welfare Officer</td><td>Lock</td><td>125000</td><td>07/12/2025</td></tr>
    <tr><td>iv- Student</td><td className="b">Claim Fees : -</td><td>125000</td><td>03/12/2025</td></tr>
    <tr><td colSpan="4" className="nt">1- If Fees is not Decide or Institute to authorized to decide the fees then Lock &amp; Calculated Fees by University according to Rule No-5 of Niyamawali. Name of University &amp; Lock Fees in course will be show in Point(ii).<br/>2- Master fees is the minimum fees in between Point No- (i),(ii) &amp; (iii) locked fees. The master fees &amp; fee fill by the student in the application is the minimum fee payable to the student.</td></tr>
  </table></div>
  <div className="ph">Application Form Status</div>
  <table className="as">
    <tr><th>Phases</th><th>Status</th><th>Date</th></tr>
    <tr><td className="p">1.One Time Registration (OTR)</td><td className="s">Completed</td><td className="d">14/11/2025</td></tr>
    <tr><td className="p">2.Registration/Refference Number</td><td className="s">Completed</td><td className="d"></td></tr>
    <tr><td className="p">3.Final Submission</td><td className="s">Completed</td><td className="d">19/11/2025</td></tr>
    <tr><td className="p">4.Status At Institution Level</td><td className="s">Verified &amp; Forwarded</td><td className="d">03/12/2025</td></tr>
    <tr><td className="p">5.Uni./Affi. Agency/DIOS Level</td><td className="s">Verified</td><td className="d">29/01/2026</td></tr>
    <tr><td className="p" style={{height:'37px'}}>6.Data level after Scrutiny with reason</td><td className="s">Correct</td><td className="d">-</td></tr>
    <tr><td className="p">7.PFMS Verification Status</td><td className="s">Verified</td><td className="d">27/12/2025</td></tr>
    <tr><td className="p" style={{height:'37px'}}>8.Verification by District Scholarship Sanction Committee</td><td className="s">Verified</td><td className="d">21/09/2026</td></tr>
    <tr><td className="p">9.Blocked by Directorate</td><td className="s"></td><td className="d"></td></tr>
    <tr><td className="p">10.Payment Status</td><td className="s"></td><td className="d"></td></tr>
  </table>
  <div className="in"><table className="rs">
    <tr><td colSpan="4" className="b" style={{textAlign:'center'}}>Result (Maximum &amp; Minimum Marks)/Attendance fill by College (2025-26)</td></tr>
    <tr><td className="b" style={{width:'25%'}}>Maximum Marks(2024-25)-</td><td style={{width:'25%'}}>2200.00</td><td className="b" style={{width:'25%'}}>Obtained Marks(2024-25)-</td><td>1719.00</td></tr>
    <tr><td className="b">Result(2024-25)-</td><td>PASS</td><td className="b">Attendance Percentage(2025-26)-</td><td>85.00%</td></tr>
  </table></div>
  <div className="in" style={{borderWidth:'1px'}}><div className="fn"><i>*Note :</i> Status Message has been displayed as per Direction of Concerned Department. Scrutiny of UP High School roll number and result has been done as per provided data from 2003 onwards wheras as scrutiny of ICSE roll number and result has been done as per provided data from 2014 and scrutiny of CBSE roll number and result has been done using API<br/><i>*Disclaimer:</i> Every effort has been made to ensure accuracy of data on this website.However these need to be verified by the concerned departments. NIC will not responsible for any decision or claim that is based on displayed data.</div></div>
</div></div>
</div>
  )
}
