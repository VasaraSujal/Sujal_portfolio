import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Mail, MapPin, Phone } from 'lucide-react';
import { Tilt } from 'react-tilt';

const PersonalInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const personalDetails = [
    { icon: <User />, label: "Name", value: "Vasara Sujal" },
    { icon: <Mail />, label: "Email", value: "vasarasujal.cg@gmail.com" },
    { icon: <MapPin />, label: "Location", value: "Ahmedabad, Gujarat, India" },
    { icon: <Phone />, label: "Phone", value: "+91 6354937917" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-cyan-400 text-center mb-12"
        >
          Personal Information
        </motion.h2>

        <Tilt options={{ max: 15, scale: 1.05 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 
                     hover:neon-border transition-all duration-300"
          >
            <div className="grid gap-6">
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="p-2 rounded-full bg-gray-800/50 text-cyan-400">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default PersonalInfo;