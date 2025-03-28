import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About"; 
import Summary from './components/Summary';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';
import Links from './components/Links';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const sectionsRef = useRef([]);
  
  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            delay: index * 0.3
          },
        }
      );
    });
  }, []);

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <main className="relative pt-16">
        <section ref={(el) => (sectionsRef.current[0] = el)} id="hero">
          <Hero />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)} id="about">
          <About />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)}>
          <Summary />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)}>
          <PersonalInfo />
        </section>
        <section ref={(el) => (sectionsRef.current[4] = el)} id="education">
          <Education />
        </section>
        <section ref={(el) => (sectionsRef.current[5] = el)} id="skills">
          <Skills />
        </section>
        <section ref={(el) => (sectionsRef.current[6] = el)} id="certifications">
          <Certifications />
        </section>
        <section ref={(el) => (sectionsRef.current[7] = el)} id="projects">
          <Projects />
        </section>
        <section ref={(el) => (sectionsRef.current[8] = el)}>
          <References />
        </section>
        <section ref={(el) => (sectionsRef.current[9] = el)} id="contact">
          <Contact />
        </section>
        <section ref={(el) => (sectionsRef.current[10] = el)}>
          <Links />
        </section>
      </main>
    </div>
  );
};

export default App;