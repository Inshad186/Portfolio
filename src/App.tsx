import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeveloperIntro } from './components/DeveloperIntro';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { WhatIDo } from './components/WhatIDo';
import { CodeAndSocials } from './components/CodeAndSocials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import inshad from './assets/Inshad.jpeg';

export const App: React.FC = () => {
  const userPhoto =  inshad; 

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500 selection:text-neutral-950">
      <Navbar />
      <main>
        <Hero userImageSrc={userPhoto} />
        <DeveloperIntro />
        <About />
        <Skills />
        <Projects />
        <WhatIDo />
        <CodeAndSocials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;