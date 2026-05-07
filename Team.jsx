import React from 'react';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

const TEAM = [
  { name:'Piyush Arora', initials:'PA', role:'Project Lead · Backend & ML', dept:'Department of Computer Science & Engineering', bg:'linear-gradient(135deg,#0D1B4E 0%,#2D9CDB 100%)' },
  { name:'Abhishek M Thomson', initials:'AT', role:'Frontend & System Design', dept:'Department of Computer Science & Engineering', bg:'linear-gradient(135deg,#028090 0%,#0D1B4E 100%)' },
];

export const Team = () => (
  <section id="team" style={{ padding:'80px 0', background:'#F4F7FC' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px' }}>
      <div className="reveal" style={{ maxWidth:560, marginBottom:56 }}>
        <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#028090', marginBottom:12 }}>The team</div>
        <h2 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'#0D1B4E', letterSpacing:'-0.02em' }}>
          Built by two engineers — one capstone semester.
        </h2>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24, maxWidth:860 }}>
        {TEAM.map((m,i) => (
          <div key={m.name} className="reveal" data-testid={`team-card-${i}`}
            style={{ background:'#fff', border:'1px solid rgba(13,27,78,.08)', borderRadius:20, padding:28, transition:'transform .3s,box-shadow .3s', transitionDelay:`${i*100}ms` }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 40px rgba(13,27,78,.12)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
            <div style={{ display:'flex', alignItems:'flex-start', gap:20 }}>
              <div style={{ width:80, height:80, borderRadius:16, background:m.bg, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:24, flexShrink:0, boxShadow:'0 4px 16px rgba(13,27,78,.2)' }}>
                {m.initials}
              </div>
              <div>
                <h3 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:19, color:'#0D1B4E' }}>{m.name}</h3>
                <div style={{ fontSize:12, color:'#2D9CDB', fontWeight:500, marginTop:2 }}>{m.role}</div>
                <div style={{ display:'flex', alignItems:'flex-start', gap:6, marginTop:12, fontSize:12, color:'#4A5568' }}>
                  <GraduationCap size={14} color="#028090" style={{ flexShrink:0, marginTop:1 }} />
                  <span>{m.dept}</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid rgba(13,27,78,.05)', display:'flex', alignItems:'center', gap:8 }}>
              {[Github, Linkedin, Mail].map((Icon, j) => (
                <button key={j} style={{ width:36, height:36, borderRadius:8, border:'1px solid rgba(13,27,78,.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'#4A5568', background:'none', cursor:'pointer', transition:'all .2s' }}
                  onMouseEnter={e=>{e.currentTarget.style.color='#0D1B4E';e.currentTarget.style.borderColor='rgba(13,27,78,.3)';e.currentTarget.style.background='#F4F7FC'}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#4A5568';e.currentTarget.style.borderColor='rgba(13,27,78,.1)';e.currentTarget.style.background='none'}}>
                  <Icon size={14} strokeWidth={1.7} />
                </button>
              ))}
              <span style={{ marginLeft:'auto', fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'#4A5568' }}>CSE · Capstone 2025</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
