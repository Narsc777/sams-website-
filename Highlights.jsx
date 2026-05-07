import React from 'react';
import { ShieldOff, Layers, BrainCircuit } from 'lucide-react';

const ITEMS = [
  { icon: ShieldOff, title: 'No Biometrics', desc: 'Zero face, fingerprint or iris data collected. Privacy is preserved by design — students are not tracked beyond a session.', color: '#028090', tag: 'Privacy-First' },
  { icon: Layers, title: 'Multi-Layer Verification', desc: 'OTP login, dynamic QR, and geo-fencing combine into a tamper-resistant pipeline that is hard to spoof at any single layer.', color: '#2D9CDB', tag: 'Tamper Resistant' },
  { icon: BrainCircuit, title: 'ML-Powered Analytics', desc: 'Lightweight scikit-learn models flag anomalies, detect proxy patterns and surface attendance behavior clusters.', color: '#0D1B4E', tag: 'scikit-learn' },
];

export const Highlights = () => (
  <section id="highlights" style={{ padding:'80px 0', background:'#F4F7FC' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px' }}>
      <div className="reveal" style={{ maxWidth:560, marginBottom:48 }}>
        <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#028090', marginBottom:12 }}>Why this project</div>
        <h2 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'#0D1B4E', letterSpacing:'-0.02em' }}>
          Three pillars that set this apart from existing systems.
        </h2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:24 }}>
        {ITEMS.map((h,i) => (
          <div key={h.title} className="reveal" data-testid={`highlight-card-${i}`}
            style={{ background:'#fff', border:'1px solid rgba(13,27,78,.08)', borderRadius:16, padding:28, transition:'transform .3s, box-shadow .3s', transitionDelay:`${i*80}ms`, cursor:'default' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(13,27,78,.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
              <div style={{ width:48, height:48, borderRadius:12, background:`${h.color}15`, color:h.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <h.icon size={22} strokeWidth={1.7} />
              </div>
              <span style={{ fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:600, padding:'4px 10px', borderRadius:999, background:`${h.color}12`, color:h.color }}>{h.tag}</span>
            </div>
            <h3 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:20, color:'#0D1B4E', marginBottom:8 }}>{h.title}</h3>
            <p style={{ fontSize:14, color:'#4A5568', lineHeight:1.7 }}>{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
