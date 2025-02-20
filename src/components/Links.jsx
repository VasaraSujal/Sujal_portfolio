import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Globe, Mail, FileText } from 'lucide-react';
import { Tilt } from 'react-tilt';
import Resume from '../assets/Vasara Sujal.pdf';

const Links = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const links = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/VasaraSujal',
      color: 'hover:text-[#333]'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sujal-vasara/',
      color: 'hover:text-[#0077b5]'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://x.com/SujalVasara',
      color: 'hover:text-[#1da1f2]'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: 'Portfolio',
      url: 'https://yourportfolio.com',
      color: 'hover:text-[#00ff00]'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      url: '',
      color: 'hover:text-[#ea4335]'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      name: 'Resume',
      url: Resume,
      color: 'hover:text-[#ff9900]'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-cyan-400 text-center mb-12"
        >
          Connect With Me
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.1 }}>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300 flex flex-col items-center gap-3
                         group ${link.color}`}
              >
                <div className="p-3 rounded-full bg-gray-800/50 text-cyan-400 group-hover:text-inherit 
                            transition-colors">
                  {link.icon}
                </div>
                <span className="text-gray-300 group-hover:text-inherit transition-colors">
                  {link.name}
                </span>
              </motion.a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;