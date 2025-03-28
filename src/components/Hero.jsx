import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about"); // Locate the "About Me" section
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <div className="hero relative min-h-screen bg-gradient-to-br from-[#43cea2] via-[#2a9d8f] to-[#185a9d] overflow-hidden">
      {/* Interactive Background Layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${
            mousePosition.y + 50
          }%, rgba(255,255,255,0.1), transparent 50%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* Dynamic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              scale: [0, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 py-32 text-white text-center"
      >
        {/* Interactive Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          Hey, I'm Vasara Sujal
        </motion.h1>

        {/* Typing Animation with Glow */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 bg-white/20 blur-xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <TypeAnimation
            sequence={[
              "Frontend Developer Extraordinaire",
              2000,
              "Interactive UI Specialist",
              2000,
              "React Animation Master",
              2000,
              "Creative Code Architect",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="relative inline-block bg-white/10 px-6 py-3 rounded-full shadow-lg"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90"
        >
          Crafting immersive digital experiences with cutting-edge technology
        </motion.p>

        {/* Interactive Buttons with Effects */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <ScrollLink to="projects" smooth={true} offset={-80} duration={500}>
            <motion.button
              className="relative bg-white text-[#185a9d] font-semibold py-3 px-8 rounded-full shadow-xl overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => controls.start({ x: 0 })}
              onHoverEnd={() => controls.start({ x: "-100%" })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={controls}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center gap-2">
                Explore Work
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </motion.button>
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} offset={-80} duration={500}>
            <motion.button
              className="relative border-2 border-white text-white font-semibold py-3 px-8 rounded-full"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                Let's Connect
              </motion.span>
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {/* Arrow container */}
          <motion.div
            className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 180 }}
            onClick={scrollToAboutMe}
          >
            {/* Arrow SVG */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
