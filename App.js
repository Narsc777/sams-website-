import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Highlights } from './components/sections/Highlights';
import { HowItWorks } from './components/sections/HowItWorks';
import { LiveDemo } from './components/sections/LiveDemo';
import { About } from './components/sections/About';
import { SystemOverview } from './components/sections/SystemOverview';
import { Results } from './components/sections/Results';
import { Team } from './components/sections/Team';
import { Footer } from './components/sections/Footer';
import { useReveal } from './hooks/useReveal';

const Page = () => {
  useReveal();
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F4F7FC', color: '#0D1B4E', fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <HowItWorks />
        <LiveDemo />
        <About />
        <SystemOverview />
        <Results />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
