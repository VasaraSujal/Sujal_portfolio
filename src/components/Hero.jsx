import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-br from-[#43cea2] to-[#185a9d]

 text-white text-center py-20">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover My Projects and Skills
      </motion.p>
      <motion.button
        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Hero;
