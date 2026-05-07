import React from 'react';
import { ArrowRight, ArrowDown, KeySquare, QrCode, MapPin, CheckCircle2 } from 'lucide-react';

const C = { navy:'#0D1B4E', blue:'#2D9CDB', teal:'#028090', light:'#F4F7FC', gray:'#4A5568' };

export const Hero = () => {
  const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section id="hero" style={{ position:'relative', paddingTop:160, paddingBottom:96, background:'#fff', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(13,27,78,.07) 1px, transparent 1px)', backgroundSize:'20px 20px', opacity:0.6, pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:-160, right:-160, width:600, height:600, background:'rgba(45,156,219,.05)', borderRadius:'50%', filter:'blur(60px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px', display:'grid', gridTemplateColumns:'1fr', gap:48, alignItems:'center' }}>
        <div style={{ maxWidth:640 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 12px', borderRadius:999, border:'1px solid rgba(13,27,78,.1)', background:'#fff', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:C.navy, marginBottom:24 }} className="animate-fade-in">
            <span style={{ width:6, height:6, borderRadius:'50%', background:C.teal }} />
            CSE Capstone Project · 2025
          </div>

          <h1 className="font-display animate-fade-up" style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(2.2rem,5vw,3.5rem)', lineHeight:1.05, letterSpacing:'-0.03em', color:C.navy, marginBottom:0 }}>
            Smart Attendance<br />
            <span style={{ position:'relative', display:'inline-block' }}>
              <span style={{ position:'relative', zIndex:1 }}>Management System</span>
              <span style={{ position:'absolute', left:0, right:0, bottom:4, height:12, background:'rgba(45,156,219,.18)', zIndex:0 }} />
            </span>
          </h1>

          <p style={{ marginTop:24, fontSize:18, color:C.gray, lineHeight:1.7, maxWidth:520 }} className="animate-fade-up">
            <strong style={{ color:C.navy }}>Automated. Private. Accurate</strong> — No Face Recognition Required.
          </p>
          <p style={{ marginTop:12, fontSize:15, color:C.gray, lineHeight:1.7, maxWidth:520 }} className="animate-fade-up">
            Traditional attendance systems are slow and prone to proxy fraud. Biometric alternatives raise serious privacy concerns. We built a multi-layer, ML-augmented solution that respects privacy while staying tamper-resistant.
          </p>

          <div style={{ marginTop:32, display:'flex', gap:12, flexWrap:'wrap' }} className="animate-fade-up">
            <button onClick={() => go('system')} onMouseEnter={e=>e.currentTarget.style.background=C.blue} onMouseLeave={e=>e.currentTarget.style.background=C.navy}
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', background:C.navy, color:'#fff', fontSize:14, fontWeight:500, borderRadius:6, border:'none', cursor:'pointer', transition:'background .2s' }}>
              Explore the System <ArrowRight size={16} />
            </button>
            <button onClick={() => go('results')} onMouseEnter={e=>e.currentTarget.style.background=C.light} onMouseLeave={e=>e.currentTarget.style.background='transparent'}
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', background:'transparent', color:C.navy, fontSize:14, fontWeight:500, borderRadius:6, border:'1px solid rgba(13,27,78,.2)', cursor:'pointer', transition:'background .2s' }}>
              View Results
            </button>
          </div>

          <div style={{ marginTop:48, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, maxWidth:380 }} className="animate-fade-up">
            {[['45s','Marking Time'],['94.2%','Proxy Detection'],['99.4%','Uptime']].map(([v,l]) => (
              <div key={l}>
                <div className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:28, color:C.navy }}>{v}</div>
                <div style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.14em', color:C.gray, marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'flex', justifyContent:'center' }}>
          <MockUI />
        </div>
      </div>

      <div style={{ maxWidth:1280, margin:'48px auto 0', padding:'0 48px', display:'flex' }}>
        <button onClick={() => go('highlights')} style={{ display:'flex', alignItems:'center', gap:8, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:C.gray, background:'none', border:'none', cursor:'pointer' }}>
          <span className="animate-bounce" style={{ display:'inline-block' }}><ArrowDown size={14} /></span> Scroll to discover
        </button>
      </div>
    </section>
  );
};

const MockUI = () => (
  <div style={{ position:'relative', width:'100%', maxWidth:420 }}>
    {/* OTP card back */}
    <div style={{ position:'absolute', top:-24, left:-16, width:'72%', background:'#fff', border:'1px solid rgba(13,27,78,.1)', borderRadius:16, padding:20, boxShadow:'0 8px 32px rgba(13,27,78,.12)', transform:'rotate(-4deg)', zIndex:1 }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
        <div style={{ width:28, height:28, borderRadius:6, background:'rgba(2,128,144,.1)', color:'#028090', display:'flex', alignItems:'center', justifyContent:'center' }}><KeySquare size={13} /></div>
        <span style={{ fontSize:11, fontWeight:600, color:'#0D1B4E' }}>Step 1 — OTP</span>
      </div>
      <div style={{ display:'flex', gap:6 }}>
        {['8','3','2','7','1','5'].map((d,i) => (
          <div key={i} style={{ flex:1, aspectRatio:'1', borderRadius:6, border:'1px solid rgba(13,27,78,.15)', background:'#F4F7FC', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Poppins,sans-serif', fontWeight:700, color:'#0D1B4E', fontSize:15 }}>{d}</div>
        ))}
      </div>
      <div style={{ marginTop:10, fontSize:10, color:'#4A5568', display:'flex', alignItems:'center', gap:4 }}>
        <CheckCircle2 size={10} color="#028090" /> Sent via Twilio · expires in 02:14
      </div>
    </div>

    {/* QR card front */}
    <div style={{ position:'relative', background:'#fff', border:'1px solid rgba(13,27,78,.1)', borderRadius:20, padding:24, boxShadow:'0 20px 60px rgba(13,27,78,.15)', transform:'rotate(2deg)', zIndex:2, marginLeft:'auto', width:'88%' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:28, height:28, borderRadius:6, background:'rgba(45,156,219,.1)', color:'#2D9CDB', display:'flex', alignItems:'center', justifyContent:'center' }}><QrCode size={13} /></div>
          <span style={{ fontSize:11, fontWeight:600, color:'#0D1B4E' }}>Step 2 — Dynamic QR</span>
        </div>
        <span style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.12em', color:'#028090', fontWeight:600 }}>LIVE</span>
      </div>
      <div style={{ aspectRatio:'1', borderRadius:12, background:'#F4F7FC', padding:16, position:'relative', overflow:'hidden' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(9,1fr)', gap:3, width:'100%', height:'100%' }}>
          {Array.from({length:81}).map((_,i) => {
            const filled = [0,1,2,6,7,8,9,11,13,15,17,18,26,30,35,40,44,50,60,62,64,70,72,74,76,78,80].includes(i%81) || i%7===0;
            return <div key={i} style={{ borderRadius:2, background: filled ? '#0D1B4E' : 'transparent' }} />;
          })}
        </div>
        {[{t:16,l:16},{t:16,r:16},{b:16,l:16}].map((pos,i) => (
          <div key={i} style={{ position:'absolute', width:28, height:28, border:'3px solid #0D1B4E', borderRadius:6, background:'#fff', ...pos }} />
        ))}
      </div>
      <div style={{ marginTop:12, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'#4A5568' }}><MapPin size={11} color="#028090" /> Geo-fence verified</div>
        <div style={{ fontSize:11, color:'#0D1B4E', fontWeight:500 }}>Refreshes in 0:08</div>
      </div>
    </div>

    <div style={{ marginTop:20, marginLeft:8, display:'inline-flex', alignItems:'center', gap:8, padding:'8px 14px', background:'#0D1B4E', color:'#fff', fontSize:11, fontWeight:500, borderRadius:6, boxShadow:'0 4px 16px rgba(13,27,78,.25)' }}>
      <CheckCircle2 size={13} color="#2D9CDB" />
      Attendance recorded · CS-302 · 09:42 AM
    </div>
  </div>
);
