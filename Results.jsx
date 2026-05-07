import React, { useRef } from 'react';
import { Clock, ShieldCheck, Activity, Star, Cpu, GitBranch, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import { useCountUp } from '../../hooks/useReveal';

const STATS = [
  { icon:Clock, value:45, suffix:'s', label:'Marking time', sub:'End-to-end per session', accent:'#2D9CDB' },
  { icon:ShieldCheck, value:94.2, suffix:'%', label:'Proxy detection', sub:'True positive rate', accent:'#028090', decimals:1 },
  { icon:Activity, value:99.4, suffix:'%', label:'Uptime', sub:'Across 30-day pilot', accent:'#0D1B4E', decimals:1 },
  { icon:Star, value:4.3, suffix:'/5', label:'Satisfaction', sub:'Faculty + student survey', accent:'#2D9CDB', decimals:1 },
];

const ML = [
  { icon:Cpu, value:'89%', label:'Anomaly precision', desc:'Random Forest classifier on labelled session data.' },
  { icon:GitBranch, value:'3', label:'Behavior clusters', desc:'K-means revealed regular, occasional, and at-risk attendees.' },
  { icon:DollarSign, value:'60%', label:'Cheaper than face-rec', desc:'No specialized cameras or biometric infra needed.' },
];

const CHART_DATA = [
  { name:'Manual roll-call', seconds:480, fill:'#94A3B8' },
  { name:'Our system', seconds:45, fill:'#028090' },
];

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const display = useCountUp(ref, stat.value, { duration:1500, decimals:stat.decimals||0 });
  return (
    <div ref={ref} data-testid={`stat-card-${index}`} className="reveal"
      style={{ background:'#fff', border:'1px solid rgba(13,27,78,.08)', borderRadius:16, padding:28, transition:'transform .3s, box-shadow .3s', transitionDelay:`${index*80}ms` }}
      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 24px rgba(13,27,78,.1)'}}
      onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
      <div style={{ width:44, height:44, borderRadius:10, background:`${stat.accent}12`, color:stat.accent, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
        <stat.icon size={20} strokeWidth={1.7} />
      </div>
      <div className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(2.2rem,4vw,3rem)', color:'#0D1B4E', lineHeight:1 }}>
        {display}<span style={{ fontSize:'60%', color:'#4A5568', fontWeight:700 }}>{stat.suffix}</span>
      </div>
      <div style={{ fontSize:13, fontWeight:600, color:'#0D1B4E', marginTop:12 }}>{stat.label}</div>
      <div style={{ fontSize:12, color:'#4A5568', marginTop:4 }}>{stat.sub}</div>
    </div>
  );
};

export const Results = () => (
  <section id="results" style={{ padding:'80px 0', background:'#fff' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px' }}>
      <div className="reveal" style={{ maxWidth:560, marginBottom:56 }}>
        <div style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, color:'#028090', marginBottom:12 }}>Results & analysis</div>
        <h2 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'#0D1B4E', letterSpacing:'-0.02em' }}>
          Measured against a live, semester-long pilot.
        </h2>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20, marginBottom:48 }}>
        {STATS.map((s,i) => <StatCard key={s.label} stat={s} index={i} />)}
      </div>

      <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:24 }}>
        <div style={{ background:'#F4F7FC', border:'1px solid rgba(13,27,78,.08)', borderRadius:16, padding:28 }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:12, marginBottom:24 }}>
            <div>
              <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#0D1B4E' }}>Time per session</div>
              <div className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:18, color:'#0D1B4E', marginTop:4 }}>Manual process vs Our system (seconds)</div>
            </div>
            <div style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:600, color:'#028090' }}>~10.6× faster</div>
          </div>
          <div style={{ height:280 }} data-testid="results-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} margin={{ top:16, right:24, bottom:8, left:0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(13,27,78,.08)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill:'#4A5568', fontSize:12, fontFamily:'Inter' }} axisLine={{ stroke:'rgba(13,27,78,.1)' }} tickLine={false} />
                <YAxis tick={{ fill:'#4A5568', fontSize:12, fontFamily:'Inter' }} axisLine={false} tickLine={false} unit="s" />
                <Tooltip cursor={{ fill:'rgba(13,27,78,.04)' }}
                  contentStyle={{ background:'#0D1B4E', border:'none', borderRadius:8, color:'white', fontFamily:'Inter', fontSize:12 }}
                  itemStyle={{ color:'white' }} labelStyle={{ color:'white', fontWeight:600 }}
                  formatter={(v) => [`${v}s`, 'Time']} />
                <Bar dataKey="seconds" radius={[8,8,0,0]} barSize={80}>
                  {CHART_DATA.map((e,i) => <Cell key={i} fill={e.fill} />)}
                  <LabelList dataKey="seconds" position="top" formatter={v=>`${v}s`} style={{ fill:'#0D1B4E', fontWeight:700, fontFamily:'Poppins' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ background:'#0D1B4E', borderRadius:16, padding:28, color:'#fff', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-80, width:240, height:240, background:'rgba(45,156,219,.12)', borderRadius:'50%', filter:'blur(40px)' }} />
          <div style={{ position:'relative' }}>
            <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600, color:'#2D9CDB', marginBottom:12 }}>ML findings</div>
            <h3 className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:20, color:'#fff' }}>The model earns its keep — with much smaller compute.</h3>
            <div style={{ marginTop:24, display:'flex', flexDirection:'column', gap:14 }}>
              {ML.map((f,i) => (
                <div key={i} data-testid={`ml-finding-${i}`} style={{ display:'flex', alignItems:'flex-start', gap:16, padding:16, background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:12 }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:'rgba(255,255,255,.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <f.icon size={16} color="#2D9CDB" />
                  </div>
                  <div>
                    <div className="font-display" style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:22 }}>
                      {f.value} <span style={{ fontSize:12, fontWeight:500, color:'rgba(255,255,255,.7)' }}>{f.label}</span>
                    </div>
                    <p style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginTop:4, lineHeight:1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
