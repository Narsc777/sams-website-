import React from 'react';
import { KeyRound, QrCode, MapPin, Radio, BrainCircuit, Database, LayoutDashboard, ShieldCheck } from 'lucide-react';

const LAYERS = [
  { n:'L1', title:'Authentication', subtitle:'Identity, not biometrics', icon:KeyRound, items:[{icon:KeyRound,label:'Unique student ID'},{icon:ShieldCheck,label:'OTP via Twilio SMS'}], accent:'#2D9CDB' },
  { n:'L2', title:'Verification', subtitle:'Multi-signal proof of presence', icon:QrCode, items:[{icon:QrCode,label:'Dynamic rotating QR'},{icon:MapPin,label:'Geo-fencing (Google Maps API)'},{icon:Radio,label:'Optional RFID tap'}], accent:'#028090' },
  { n:'L3', title:'Recording & Analytics', subtitle:'Auto-record, analyze, surface', icon:BrainCircuit, items:[{icon:Database,label:'Auto-record to MongoDB'},{icon:BrainCircuit,label:'ML anomaly detection (scikit-learn)'},{icon:LayoutDashboard,label:'Faculty / admin dashboard'}], accent:'#FFFFFF' },
];

const TECH = [
  {name:'React.js',cat:'frontend'},{name:'Node.js',cat:'backend'},{name:'MongoDB',cat:'data'},
  {name:'Python',cat:'data'},{name:'scikit-learn',cat:'data'},{name:'Twilio API',cat:'service'},{name:'Google Maps API',cat:'service'},
];
const TC = { frontend:'rgba(45,156,219,.15)',backend:'rgba(2,128,144,.15)',data:'rgba(255,255,255,.1)',service:'rgba(255,255,255,.06)' };
const TT = { frontend:'#7DC3E8',backend:'#5EBFAE',data:'#ffffff',service:'rgba(255,255,255,.75)' };

export const SystemOverview = () => (
  <section id="system" style={{ padding:'80px 0', background:'#0D1B4E', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,255,255,.07) 1px, transparent 1px)', backgroundSize:'24px 24px', opacity:0.5, pointerEvents:'none' }} />
    <div style={{ position:'absolute', top:-160, right:-80, width:500, height:500, background:'rgba(45,156,219,.1)', borderRadius:'50%', filter:'blur(60px)', pointerEvents:'none' }} />
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px', position:'relative' }}>
      <div className="reveal" style={{ maxWidth:560, marginBottom:56 }}>
        <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#2D9CDB', marginBottom:12 }}>System overview · Methodology</div>
        <h2 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'#fff', letterSpacing:'-0.02em' }}>
          A three-layer architecture, designed for verifiability.
        </h2>
        <p style={{ marginTop:16, fontSize:15, color:'rgba(255,255,255,.7)', lineHeight:1.7 }}>
          Each layer is independently auditable and contributes a different kind of evidence — making it expensive to spoof at every level simultaneously.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
        {LAYERS.map((layer,i) => (
          <div key={layer.n} className="reveal" data-testid={`layer-${i+1}`}
            style={{ background:'#1A2859', border:'1px solid rgba(255,255,255,.1)', borderRadius:20, padding:28, transition:'border-color .3s', transitionDelay:`${i*100}ms` }}
            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(255,255,255,.25)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,.1)'}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
              <span style={{ fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, padding:'4px 12px', borderRadius:999, border:`1px solid ${layer.accent==='#FFFFFF'?'rgba(255,255,255,.3)':layer.accent}`, color:layer.accent, background: layer.accent==='#FFFFFF'?'rgba(255,255,255,.06)':`${layer.accent}15` }}>
                Layer {layer.n}
              </span>
              <div style={{ width:48, height:48, borderRadius:12, background: layer.accent==='#FFFFFF'?'rgba(255,255,255,.08)':`${layer.accent}20`, color:layer.accent, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <layer.icon size={22} strokeWidth={1.7} />
              </div>
            </div>
            <h3 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:20, color:'#fff' }}>{layer.title}</h3>
            <p style={{ fontSize:13, color:'rgba(255,255,255,.55)', marginTop:4, marginBottom:24 }}>{layer.subtitle}</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
              {layer.items.map((it,j) => (
                <li key={j} style={{ display:'flex', alignItems:'center', gap:12, fontSize:13, color:'rgba(255,255,255,.85)' }}>
                  <div style={{ width:28, height:28, borderRadius:6, background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <it.icon size={12} strokeWidth={1.8} color="rgba(255,255,255,.8)" />
                  </div>
                  {it.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop:56, paddingTop:40, borderTop:'1px solid rgba(255,255,255,.1)' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16, marginBottom:24 }}>
          <div>
            <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#2D9CDB', marginBottom:8 }}>Tech stack</div>
            <h3 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:20, color:'#fff' }}>Built with battle-tested, mainstream tools.</h3>
          </div>
          <span style={{ fontSize:12, color:'rgba(255,255,255,.4)' }}>7 technologies · open standards</span>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
          {TECH.map(t => (
            <span key={t.name} style={{ display:'inline-flex', alignItems:'center', padding:'6px 16px', borderRadius:999, fontSize:12, fontWeight:500, border:'1px solid rgba(255,255,255,.2)', background:TC[t.cat], color:TT[t.cat] }}>{t.name}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
