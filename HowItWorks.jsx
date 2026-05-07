import React from 'react';
import { Smartphone, QrCode, ClipboardCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  { n:'01', icon: Smartphone, title:'Login with OTP', desc:'Student enters their unique ID and receives a one-time password via Twilio SMS — fast, no biometric data collected.' },
  { n:'02', icon: QrCode, title:'Scan Dynamic QR', desc:'A short-lived QR is displayed on the classroom screen and rotates every few seconds, paired with a geo-fence check.' },
  { n:'03', icon: ClipboardCheck, title:'Attendance Recorded', desc:'Server logs the entry, ML pipeline checks for anomalies, and the dashboard updates in near real-time.' },
];

export const HowItWorks = () => (
  <section id="how-it-works" style={{ padding:'80px 0', background:'#fff', overflow:'hidden' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px' }}>
      <div className="reveal" style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24, marginBottom:56 }}>
        <div style={{ maxWidth:480 }}>
          <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#028090', marginBottom:12 }}>How it works</div>
          <h2 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'#0D1B4E', letterSpacing:'-0.02em' }}>
            Three steps, less than a minute, fully verifiable.
          </h2>
        </div>
        <p style={{ fontSize:14, color:'#4A5568', maxWidth:320, lineHeight:1.7 }}>
          Quicker than passing a paper sheet across rows — without sacrificing audit-ability.
        </p>
      </div>

      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:24 }}>
        {STEPS.map((s,i) => (
          <div key={s.n} className="reveal" data-testid={`how-step-${i+1}`}
            style={{ position:'relative', background:'#fff', border:'1px solid rgba(13,27,78,.1)', borderRadius:16, padding:28, transition:'box-shadow .3s', transitionDelay:`${i*100}ms` }}
            onMouseEnter={e=>e.currentTarget.style.boxShadow='0 6px 24px rgba(13,27,78,.1)'}
            onMouseLeave={e=>e.currentTarget.style.boxShadow=''}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
              <span className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:48, color:'#F4F7FC', lineHeight:1 }}>{s.n}</span>
              <div style={{ width:44, height:44, borderRadius:10, background:'#0D1B4E', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(13,27,78,.2)' }}>
                <s.icon size={20} strokeWidth={1.7} />
              </div>
            </div>
            <h3 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:18, color:'#0D1B4E', marginBottom:8 }}>{s.title}</h3>
            <p style={{ fontSize:14, color:'#4A5568', lineHeight:1.7 }}>{s.desc}</p>
            {i < STEPS.length-1 && (
              <div style={{ position:'absolute', right:-14, top:48, zIndex:2, background:'#fff' }}>
                <ArrowRight size={18} color="rgba(13,27,78,.25)" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
