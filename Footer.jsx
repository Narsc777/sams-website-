import React from 'react';
import { ShieldCheck } from 'lucide-react';

const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior:'smooth' }); };

export const Footer = () => (
  <footer data-testid="site-footer" style={{ background:'#0D1B4E', color:'rgba(255,255,255,.8)' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'48px 48px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:40 }}>
      <div>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
          <div style={{ width:32, height:32, borderRadius:8, background:'rgba(255,255,255,.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <ShieldCheck size={16} color="#2D9CDB" />
          </div>
          <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, color:'#fff', fontSize:16 }}>SAMS</span>
        </div>
        <p style={{ fontSize:13, color:'rgba(255,255,255,.55)', lineHeight:1.7, maxWidth:280 }}>
          Smart Attendance Management System — a non-biometric, privacy-first attendance pipeline built as a CSE capstone project.
        </p>
      </div>
      <div>
        <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#2D9CDB', marginBottom:16 }}>Project</div>
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
          {[['About','about'],['System Overview','system'],['Results','results'],['Team','team']].map(([label,id]) => (
            <li key={id}><button onClick={() => go(id)} style={{ fontSize:13, color:'rgba(255,255,255,.7)', background:'none', border:'none', cursor:'pointer', transition:'color .2s', padding:0 }}
              onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.7)'}>{label}</button></li>
          ))}
        </ul>
      </div>
      <div>
        <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#2D9CDB', marginBottom:16 }}>Built with</div>
        <p style={{ fontSize:13, color:'rgba(255,255,255,.55)', lineHeight:1.8 }}>React · Node.js · MongoDB · Python · scikit-learn · Twilio · Google Maps API</p>
      </div>
    </div>
    <div style={{ borderTop:'1px solid rgba(255,255,255,.08)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'20px 48px', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:12, fontSize:12, color:'rgba(255,255,255,.4)' }}>
        <span>© {new Date().getFullYear()} SAMS · Capstone Showcase</span>
        <span>Designed & engineered by Piyush Arora &amp; Abhishek M Thomson</span>
      </div>
    </div>
  </footer>
);
