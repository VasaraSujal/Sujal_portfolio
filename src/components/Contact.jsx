import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vasarasujal.cg@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ahmedabad, Gujarat, India"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-cyan-400 text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 
                             hover:neon-border transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-gray-800/50 text-cyan-400">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-400">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Tilt options={{ max: 15, scale: 1.05 }}>
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white 
                               focus:outline-none focus:border-cyan-400 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white 
                               focus:outline-none focus:border-cyan-400 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white 
                               focus:outline-none focus:border-cyan-400 transition-colors"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Message</label>
                    <textarea
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white 
                               focus:outline-none focus:border-cyan-400 transition-colors h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg 
                             flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;