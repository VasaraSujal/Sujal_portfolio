// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';
// import { Tilt } from 'react-tilt';
// import { useInView } from 'react-intersection-observer';
// import {
//   BookOpen, Code, Heart, Briefcase, Rocket
// } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   const techStack = [
//     { name: 'HTML/CSS', description: 'Building beautiful, responsive interfaces' },
//     { name: 'JavaScript', description: 'Creating dynamic web applications' },
//     { name: 'React', description: 'Developing modern user interfaces' },
//     { name: 'Node.js', description: 'Building scalable backend services' },
//     { name: 'MongoDB', description: 'Managing NoSQL databases' },
//     { name: 'Express.js', description: 'Creating robust API endpoints' }
//   ];

//   const [hoveredTech, setHoveredTech] = useState(null);

//   return (
//     <section ref={ref} className="py-20 bg-gray-900/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Who Am I Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.2 }}
//             className="mb-16"
//           >
//             <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
//               <TypeAnimation
//                 sequence={[
//                   'Who Am I?',
//                   1000,
//                   'A Developer',
//                   1000,
//                   'A Problem Solver',
//                   1000,
//                   'Who Am I?',
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//               />
//             </h2>
//             <Tilt options={{ max: 15, scale: 1.05 }}>
//               <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:neon-border transition-all duration-300">
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.4 }}
//                   className="text-gray-300 leading-relaxed mb-6"
//                 >
//                   I'm a passionate <span className="text-cyan-400">Full Stack Developer</span> with a 
//                   deep love for creating innovative web solutions. My journey in tech started with 
//                   curiosity and has evolved into a professional pursuit of excellence in software development.
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.6 }}
//                   className="text-gray-300 leading-relaxed"
//                 >
//                   I believe in writing <span className="text-cyan-400">clean, efficient code</span> and 
//                   creating <span className="text-cyan-400">user-centric applications</span> that make a 
//                   real difference.
//                 </motion.p>
//               </div>
//             </Tilt>
//           </motion.div>
          
//           {/* Tech Stack Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 1.8 }}
//             className="mb-16"
//           >
//             <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center justify-center">
//               <Code className="w-6 h-6 mr-2" />
//               Tech Stack
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {techStack.map((tech, index) => (
//                 <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 2 + index * 0.1 }}
//                     className="relative bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:neon-border transition-all duration-300"
//                     onHoverStart={() => setHoveredTech(index)}
//                     onHoverEnd={() => setHoveredTech(null)}
//                   >
//                     <h4 className="text-lg font-semibold text-cyan-400 mb-2">{tech.name}</h4>
//                     <AnimatePresence>
//                       {hoveredTech === index && (
//                         <motion.p
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 10 }}
//                           className="text-sm text-gray-300"
//                         >
//                           {tech.description}
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 </Tilt>
//               ))}
//             </div>
//           </motion.div>

//           {/* Vision Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 2.4 }}
//           >
//             <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center justify-center">
//               <Heart className="w-6 h-6 mr-2" />
//               My Vision
//             </h3>
//             <Tilt options={{ max: 15, scale: 1.05 }}>
//               <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:neon-border transition-all duration-300">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={inView ? { opacity: 1 } : {}}
//                   transition={{ delay: 2.6 }}
//                   className="space-y-4"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0">
//                       <Briefcase className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-white mb-2">Short Term</h4>
//                       <p className="text-gray-300">Master modern web technologies and contribute to innovative projects</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0">
//                       <Rocket className="w-6 h-6 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-white mb-2">Long Term</h4>
//                       <p className="text-gray-300">Lead development teams and architect scalable solutions</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </Tilt>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;








// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, GraduationCap, Brain, Target, Coffee } from 'lucide-react';

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const techStack = [
//     'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 
//     'MongoDB', 'Express.js', 'REST APIs', 'Git', 'Tailwind CSS'
//   ];

//   const stats = [
//     { icon: GraduationCap, label: 'University', value: 'Rai University, Ahmedabad' },
//     { icon: Brain, label: 'CGPA', value: '9.95' },
//     { icon: Code2, label: 'Tech Stack', value: '10+ Technologies' },
//     { icon: Target, label: 'Goal', value: 'Full Stack Developer' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto"
//       >
//         {/* Header Section */}
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
//             About Me
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mb-8"></div>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Introduction */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <motion.div
//               className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 I am <span className="text-cyan-400 font-semibold">Vasara Sujal</span>, a first-year B.Tech student with a passion for web development and technology. My journey in tech is driven by curiosity and the desire to create innovative solutions.
//               </p>
//             </motion.div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
//                 >
//                   <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
//                   <h3 className="text-gray-400 text-sm">{stat.label}</h3>
//                   <p className="text-white font-semibold mt-1">{stat.value}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Column - Skills & Goals */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             {/* Tech Stack */}
//             <motion.div
//               className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//               <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                 <Code2 className="w-5 h-5 text-cyan-400" />
//                 Technical Expertise
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {techStack.map((tech, index) => (
//                   <motion.span
//                     key={index}
//                     className="px-4 py-2 bg-white/10 rounded-full text-sm text-cyan-400 border border-cyan-400/20"
//                     whileHover={{ scale: 1.1, backgroundColor: 'rgba(34,211,238,0.1)' }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Goals & Aspirations */}
//             <motion.div
//               className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//               <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                 <Target className="w-5 h-5 text-cyan-400" />
//                 Goals & Aspirations
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 My goal is to become a skilled full-stack developer and contribute to innovative projects. I am constantly learning and improving my problem-solving skills to stay ahead in the ever-evolving tech landscape.
//               </p>
//             </motion.div>

//             {/* Fun Fact */}
//             <motion.div
//               className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl p-6 border border-white/10 flex items-center gap-4"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//               <Coffee className="w-8 h-8 text-cyan-400" />
//               <p className="text-gray-300">
//                 Always eager to learn new technologies and tackle challenging problems!
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Interactive Element */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-16 text-center"
//           whileHover={{ scale: 1.05 }}
//         >
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
//           >
//             Let's Build Something Amazing
//             <motion.span
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 1, repeat: Infinity }}
//             >
//               →
//             </motion.span>
//           </a>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;





import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Brain, Target, Coffee, BookOpen, Award, BarChart2 } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const techStack = [
    { name: 'HTML/CSS', description: 'Building beautiful, responsive interfaces' },
    { name: 'JavaScript', description: 'Creating dynamic web applications' },
    { name: 'React', description: 'Developing modern user interfaces' },
    { name: 'Node.js', description: 'Building scalable backend services' },
    { name: 'MongoDB', description: 'Managing NoSQL databases' },
    { name: 'Express.js', description: 'Creating robust API endpoints' },
    { name: 'REST APIs', description: 'Designing and consuming RESTful services' },
    { name: 'Git', description: 'Version control for collaborative development' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS for rapid UI development' },
  ];

  const stats = [
    { icon: GraduationCap, label: 'University', value: 'Rai University, Ahmedabad' },
    { icon: Brain, label: 'CGPA', value: '9.95' },
    { icon: Code2, label: 'Tech Stack', value: '10+ Technologies' },
    { icon: Target, label: 'Goal', value: 'Full Stack Developer' },
    { icon: BookOpen, label: 'Learning', value: 'Building RESTful APIs with Node.js & Express' },
    { icon: BarChart2, label: 'Progress', value: 'Completed 3+ Projects' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Introduction */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I am <span className="text-cyan-400 font-semibold">Vasara Sujal</span>, a first-year B.Tech student with a passion for web development and technology. My journey in tech is driven by curiosity and the desire to create innovative solutions. I love solving real-world problems through coding and have participated in several hackathons, winning accolades for my projects.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-gray-400 text-sm">{stat.label}</h3>
                  <p className="text-white font-semibold mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Goals */}
          <motion.div variants={itemVariants} className="space-y-6 mb-30">
            {/* Tech Stack */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-cyan-400 border border-cyan-400/20"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(34,211,238,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative group">
                      {tech.name}
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech.description}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Goals & Aspirations */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                Goals & Aspirations
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My goal is to become a skilled full-stack developer and contribute to innovative projects that solve real-world problems. I aim to master advanced algorithms, data structures, and cloud technologies to build scalable and efficient systems. Additionally, I plan to work on open-source projects and collaborate with like-minded developers to create impactful solutions.
              </p>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl p-6 border border-white/10 flex flex-col gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Coffee className="w-5 h-5 text-cyan-400" />
                Fun Facts
              </h3>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>Always eager to learn new technologies and tackle challenging problems!</li>
                <li>Love participating in hackathons and building innovative projects.</li>
                <li>Enjoy reading books on psychology and philosophy during my free time.</li>
                <li>Passionate about contributing to open-source software.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Element */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Let's Build Something Amazing
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;