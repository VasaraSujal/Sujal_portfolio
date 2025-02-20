import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sun, Moon, Terminal, Code, BookOpen, Briefcase, Rocket, Heart,
} from 'lucide-react';
import Hero from './components/Hero';
import About from "./components/About"; 
import Summary from './components/Summary';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';
import Links from './components/Links';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
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
      <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-lg border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="ml-2 font-semibold opa">Sujal Vasara</span>
          </div>
        </div>
      </nav>
      <main className="relative pt-16">
        <section ref={(el) => (sectionsRef.current[0] = el)}>
          <Hero />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)}>
          <About />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)}>
          <Summary />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)}>
          <PersonalInfo />
        </section>
        <section ref={(el) => (sectionsRef.current[4] = el)}>
          <Education />
        </section>
        <section ref={(el) => (sectionsRef.current[5] = el)}>
          <Skills />
        </section>
        <section ref={(el) => (sectionsRef.current[6] = el)}>
          <Projects />
        </section>
        <section ref={(el) => (sectionsRef.current[7] = el)}>
          <References />
        </section>
        <section ref={(el) => (sectionsRef.current[8] = el)}>
          <Contact />
        </section>
        <section ref={(el) => (sectionsRef.current[9] = el)}>
          <Links />
        </section>
      </main>
    </div>
  );
};

export default App;
