import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { Tilt } from 'react-tilt';
import NeelSir from '../assets/Neelsir.png';

const References = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const references = [
    {
      name: "Patel Neel Maheshbhai",
      position: "Co-Founder at CodingGita",
      image: NeelSir,
      testimonial: "Patel Neel Maheshbhai is a visionary leader and Co-Founder at CodingGita. His passion for technology and commitment to innovation drive the platform's growth and success."
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
          References
        </motion.h2>

        <div className="grid grid-cols-1 max-w-5xl mx-auto">
          {references.map((reference, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={reference.image}
                    alt={reference.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{reference.name}</h3>
                    <p className="text-gray-400">{reference.position}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan-400/20" />
                  <p className="text-gray-300 italic pl-6">{reference.testimonial}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;