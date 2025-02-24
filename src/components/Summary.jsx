import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Summary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Full Stack Development",
      description: "Experienced in building end-to-end web applications with modern technologies"
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Problem Solving",
      description: "Strong analytical skills with a focus on efficient solutions"
    },
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section ref={ref} className="py-20 bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Professional Summary</h2>
          <p className="text-gray-300 text-lg">
            Dedicated full-stack developer with a passion for creating innovative solutions
            and delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, i) => (
            <Tilt key={i} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300 flex flex-col items-center
                         transform-gpu hover:-translate-y-1"
              >
                <div className="mb-4 p-3 rounded-full bg-gray-800/50">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;