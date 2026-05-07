import React, { useEffect, useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'System', id: 'system' },
  { label: 'Demo', id: 'demo' },
  { label: 'Results', id: 'results' },
  { label: 'Team', id: 'team' },
];

const S = {
  header: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all 0.3s',
    background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(13,27,78,0.08)' : 'none',
    boxShadow: scrolled ? '0 1px 0 rgba(13,27,78,0.04)' : 'none',
  }),
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer' },
  logoIcon: (hover) => ({ width: 36, height: 36, borderRadius: 8, background: hover ? '#2D9CDB' : '#0D1B4E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'background 0.2s' }),
  nav: { display: 'flex', alignItems: 'center', gap: 4 },
  navBtn: (active) => ({ position: 'relative', padding: '8px 16px', fontSize: 14, fontWeight: 500, color: active ? '#0D1B4E' : '#4A5568', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }),
  activeLine: { position: 'absolute', left: 12, right: 12, bottom: -2, height: 2, background: '#2D9CDB', borderRadius: 4 },
  cta: { marginLeft: 12, padding: '8px 20px', background: '#0D1B4E', color: '#fff', fontSize: 14, fontWeight: 500, borderRadius: 6, border: 'none', cursor: 'pointer', transition: 'background 0.2s' },
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
      let current = 'hero';
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header style={S.header(scrolled)}>
      <div style={{ ...S.inner, padding: window.innerWidth < 640 ? '0 20px' : '0 48px' }}>
        <button style={S.logo} onClick={() => go('hero')} onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)}>
          <div style={S.logoIcon(logoHover)}><ShieldCheck size={18} /></div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0D1B4E', fontSize: 14, letterSpacing: '-0.02em' }}>SAMS</div>
            <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4A5568' }}>Smart Attendance</div>
          </div>
        </button>

        <nav style={{ ...S.nav, display: window.innerWidth < 768 ? 'none' : 'flex' }}>
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => go(link.id)} style={S.navBtn(active === link.id)}>
              {link.label}
              {active === link.id && <span style={S.activeLine} />}
            </button>
          ))}
          <button onClick={() => go('demo')} style={S.cta}
            onMouseEnter={e => e.target.style.background = '#2D9CDB'}
            onMouseLeave={e => e.target.style.background = '#0D1B4E'}>
            Try Live Demo
          </button>
        </nav>

        <button onClick={() => setOpen(o => !o)} style={{ display: window.innerWidth >= 768 ? 'none' : 'block', padding: 8, color: '#0D1B4E', background: 'none', border: 'none', cursor: 'pointer' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid rgba(13,27,78,0.08)' }} className="animate-fade-in">
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => go(link.id)}
                style={{ textAlign: 'left', padding: '12px', borderRadius: 6, fontSize: 14, fontWeight: 500, color: active === link.id ? '#0D1B4E' : '#4A5568', background: active === link.id ? '#F4F7FC' : 'none', border: 'none', cursor: 'pointer' }}>
                {link.label}
              </button>
            ))}
            <button onClick={() => go('demo')} style={{ marginTop: 8, padding: '12px 16px', background: '#0D1B4E', color: '#fff', fontSize: 14, fontWeight: 500, borderRadius: 6, border: 'none', cursor: 'pointer' }}>
              Try Live Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
