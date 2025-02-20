import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Rai University",
      duration: "2024 - 2028",
      description: "Pursuing a Bachelor of Computer Science, currently in the first year at Rai University (Ahmedabad). Learning foundational subjects like programming, data structures, and algorithms. Developing problem-solving and analytical skills through coursework and projects. Gaining a basic understanding of computer systems and software development. Building a strong foundation for future specialization in Artificial Intelligence and Machine Learning.",
      achievements: [
        "9.95 CGPA",
        "Learner"
      ],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Modi Schools",
      duration: "2023 - 2024",
      description: "Completed Higher Secondary Certificate (HSC) with a focus on Science stream, building a strong foundation in Mathematics and Computer Science. Gained fundamental knowledge of programming and problem-solving techniques. Developed analytical and logical thinking skills through coursework and practical exercises. Engaged in Artificial Intelligence and Machine Learning. Prepared for advanced studies in Computer Science and emerging technologies.",
      achievements: [
        "JEE Mains: 94 PR",
        "Board Examinations: 80%"
      ],
      icon: <BookOpen className="w-6 h-6" />
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
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {education.map((edu, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gray-800/50 text-cyan-400">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>

                <p className="text-gray-300 mb-4">{edu.description}</p>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{achievement}</span>
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

export default Education;