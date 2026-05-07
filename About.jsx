import React from 'react';
import { Target, Shield, Cpu, Zap, BarChart2, Lock, Check, X } from 'lucide-react';

const OBJECTIVES = [
  { icon: Lock, text: 'Eliminate biometric data collection while preserving identity verification.' },
  { icon: Shield, text: 'Stop proxy attendance via multi-layer OTP + dynamic QR + geo-fence checks.' },
  { icon: Zap, text: 'Reduce per-class marking time from ~8 minutes to under 1 minute.' },
  { icon: Cpu, text: 'Use lightweight ML to flag suspicious patterns without heavy infrastructure.' },
  { icon: BarChart2, text: 'Provide actionable analytics for faculty and administration dashboards.' },
];

const CMP = [
  { feature:'Privacy of student data', existing:'Stores biometric or facial data', ours:'Zero biometric data, session-only signals' },
  { feature:'Marking speed', existing:'~6–8 min (paper / roll-call)', ours:'~45 seconds end-to-end' },
  { feature:'Proxy resistance', existing:'Easy to spoof (peers, signatures)', ours:'Multi-layer, dynamic QR + geo-fence' },
  { feature:'Setup cost', existing:'High (biometric scanners, RFID readers)', ours:'Software-first, optional RFID' },
  { feature:'Hardware dependency', existing:'Dedicated devices required', ours:'Existing smartphones / displays' },
  { feature:'Anomaly detection', existing:'Manual or none', ours:'ML pipeline, behavior clustering' },
];

export const About = () => (
  <section id="about" style={{ padding:'80px 0', background:'#F4F7FC' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px' }}>
      <div className="reveal" style={{ maxWidth:560, marginBottom:56 }}>
        <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#028090', marginBottom:12 }}>About the project</div>
        <h2 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'#0D1B4E', letterSpacing:'-0.02em' }}>
          A privacy-first answer to the proxy-attendance problem.
        </h2>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:32, alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
          <div className="reveal" style={{ background:'#fff', border:'1px solid rgba(13,27,78,.08)', borderRadius:16, padding:28 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <Target size={17} color="#2D9CDB" />
              <span style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#0D1B4E' }}>Problem Statement</span>
            </div>
            <p style={{ fontSize:14, color:'#4A5568', lineHeight:1.8 }}>
              Manual attendance wastes class time and is trivially gamed via proxies. Modern alternatives lean on facial or fingerprint recognition — raising privacy, consent, and data-retention concerns. There is a gap for a system that is <strong style={{ color:'#0D1B4E' }}>fast, fraud-resistant, and respectful of student data</strong> at the same time.
            </p>
          </div>

          <div className="reveal" style={{ background:'#fff', border:'1px solid rgba(13,27,78,.08)', borderRadius:16, padding:28 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
              <Check size={17} color="#028090" />
              <span style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#0D1B4E' }}>Project Objectives</span>
            </div>
            <ul style={{ display:'flex', flexDirection:'column', gap:16, listStyle:'none' }}>
              {OBJECTIVES.map((o,i) => (
                <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                  <div style={{ width:28, height:28, borderRadius:6, background:'#F4F7FC', color:'#0D1B4E', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <o.icon size={13} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize:13, color:'#4A5568', lineHeight:1.7 }}>{o.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal" style={{ background:'#fff', border:'1px solid rgba(13,27,78,.08)', borderRadius:16, overflow:'hidden' }}>
          <div style={{ padding:'24px 28px', borderBottom:'1px solid rgba(13,27,78,.08)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
            <div>
              <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#0D1B4E' }}>Research Gap</div>
              <div className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:18, color:'#0D1B4E', marginTop:4 }}>Existing systems vs Our system</div>
            </div>
            <div style={{ display:'flex', gap:16, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'#4A5568' }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><span style={{ width:8, height:8, borderRadius:'50%', background:'#94A3B8' }} /> Existing</span>
              <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}><span style={{ width:8, height:8, borderRadius:'50%', background:'#028090' }} /> Ours</span>
            </div>
          </div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead>
                <tr style={{ background:'#F4F7FC', textAlign:'left' }}>
                  {['Dimension','Existing','Our System'].map((h,i) => (
                    <th key={h} style={{ padding:'12px 16px', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600, color:i===2?'#028090':i===1?'#4A5568':'#0D1B4E' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CMP.map((row,i) => (
                  <tr key={i} style={{ borderTop:'1px solid rgba(13,27,78,.05)' }}
                    onMouseEnter={e=>e.currentTarget.style.background='rgba(244,247,252,.6)'}
                    onMouseLeave={e=>e.currentTarget.style.background=''}>
                    <td style={{ padding:'12px 16px', fontSize:13, fontWeight:500, color:'#0D1B4E' }}>{row.feature}</td>
                    <td style={{ padding:'12px 16px', fontSize:13, color:'#4A5568' }}>
                      <div style={{ display:'flex', alignItems:'flex-start', gap:6 }}><X size={13} color="#94A3B8" style={{ flexShrink:0, marginTop:2 }} />{row.existing}</div>
                    </td>
                    <td style={{ padding:'12px 16px', fontSize:13, color:'#0D1B4E' }}>
                      <div style={{ display:'flex', alignItems:'flex-start', gap:6 }}><Check size={13} color="#028090" style={{ flexShrink:0, marginTop:2 }} />{row.ours}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);
