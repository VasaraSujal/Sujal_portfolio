import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import {
  BookOpen, Code, Heart, Briefcase, Rocket
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techStack = [
    { name: 'HTML/CSS', description: 'Building beautiful, responsive interfaces' },
    { name: 'JavaScript', description: 'Creating dynamic web applications' },
    { name: 'React', description: 'Developing modern user interfaces' },
    { name: 'Node.js', description: 'Building scalable backend services' },
    { name: 'MongoDB', description: 'Managing NoSQL databases' },
    { name: 'Express.js', description: 'Creating robust API endpoints' }
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          {/* Who Am I Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
              <TypeAnimation
                sequence={[
                  'Who Am I?',
                  1000,
                  'A Developer',
                  1000,
                  'A Problem Solver',
                  1000,
                  'Who Am I?',
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <Tilt options={{ max: 15, scale: 1.05 }}>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:neon-border transition-all duration-300">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 leading-relaxed mb-6"
                >
                  I'm a passionate <span className="text-cyan-400">Full Stack Developer</span> with a 
                  deep love for creating innovative web solutions. My journey in tech started with 
                  curiosity and has evolved into a professional pursuit of excellence in software development.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 leading-relaxed"
                >
                  I believe in writing <span className="text-cyan-400">clean, efficient code</span> and 
                  creating <span className="text-cyan-400">user-centric applications</span> that make a 
                  real difference.
                </motion.p>
              </div>
            </Tilt>
          </motion.div>
          
          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center justify-center">
              <Code className="w-6 h-6 mr-2" />
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2 + index * 0.1 }}
                    className="relative bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:neon-border transition-all duration-300"
                    onHoverStart={() => setHoveredTech(index)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">{tech.name}</h4>
                    <AnimatePresence>
                      {hoveredTech === index && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="text-sm text-gray-300"
                        >
                          {tech.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.4 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2" />
              My Vision
            </h3>
            <Tilt options={{ max: 15, scale: 1.05 }}>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:neon-border transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Short Term</h4>
                      <p className="text-gray-300">Master modern web technologies and contribute to innovative projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Rocket className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Long Term</h4>
                      <p className="text-gray-300">Lead development teams and architect scalable solutions</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;