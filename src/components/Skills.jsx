import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Server, Database, Globe, Terminal } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsData = [
    { icon: <Code2 />, name: 'Frontend Development', items: ['React.js','JavaScript'] },
    { icon: <Server />, name: 'Backend Development', items: ['Node.js', 'Express.js'] },
    { icon: <Database />, name: 'Databases', items: ['MongoDB'] },
    { icon: <Globe />, name: 'Web Technologies', items: ['HTML5', 'CSS3', 'JavaScript'] },
    { icon: <Terminal />, name: 'Tools & DevOps', items: ['Git', 'GitHub', 'Vercel', 'Netlify'] },
    { icon: <Palette />, name: 'UI/UX', items: ['Tailwind CSS', 'Figma'] }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-cyan-400 text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gray-800/50 text-cyan-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-gray-800/30 px-3 py-1 rounded-full text-gray-300 text-sm inline-block mr-2"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;