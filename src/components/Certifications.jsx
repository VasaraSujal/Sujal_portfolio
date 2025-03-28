import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jsCertificate from "../images/JS certificate JPG.jpg";
import htmlCertificate from "../images/HTML certificate JPG.png";
import cppCertificate from "../images/C++ certificate JPG.jpg";
import { Award, Calendar, GraduationCap } from "lucide-react";
import { Tilt } from "react-tilt";

const CertificationSection = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "JavaScript Course",
      issuer: "SoloLearn",
      date: "February 2025",
      credentialId: "CC-L6UGRZON",
      image: jsCertificate,
      viewLink: "https://www.sololearn.com/certificates/CC-L6UGRZON",
      color: "#F7DF1E",
      skills: [
        "ES6+",
        "Functions",
        "DOM Manipulation",
        "Async JavaScript",
        "Error Handling",
      ],
      description:
        "Comprehensive JavaScript programming course covering fundamentals through advanced concepts including asynchronous programming, ES6+ features, and modern JavaScript development practices.",
    },
    {
      id: 2,
      title: "HTML Course",
      issuer: "SoloLearn",
      date: "May 2025",
      credentialId: "CC-ZLETZTTT",
      image: htmlCertificate,
      viewLink: "https://www.sololearn.com/certificates/CC-ZLETZTTT",
      color: "#E34F26",
      skills: [
        "Semantic HTML",
        "Forms",
        "Accessibility",
        "HTML5 Features",
        "Document Structure",
      ],
      description:
        "Complete HTML curriculum covering semantic markup, accessibility best practices, form implementation, and modern HTML5 features for building structured, accessible web content.",
    },
    {
      id: 3,
      title: "C++ Course",
      issuer: "SoloLearn",
      date: "May 2025",
      credentialId: "CC-5TZGDQSP",
      image: cppCertificate,
      viewLink: "https://www.sololearn.com/en/certificates/CC-5TZGDQSP",
      color: "#E34F26",
      skills: [
        "OOP",
        "STL",
        "Memory Management",
        "Pointers",
        "Data Structures",
        "Algorithms",
      ],
      description:
        "Comprehensive C++ course covering object-oriented programming, standard template library (STL), efficient memory management, and key data structures and algorithms.",
    },
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-cyan-400 text-center mb-12"
        >
          Certifications
        </motion.h2>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 justify-center">
          {certificates.map((certificate, index) => {
            const isLastOddCard =
              certificates.length % 2 === 1 &&
              index === certificates.length - 1;

            return (
              <Tilt key={certificate.id} options={{ max: 15, scale: 1.05 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                      hover:neon-border transition-all duration-300 relative ${
                        isLastOddCard ? "md:col-start-2 md:col-span-1" : ""
                      }`}
                >
                  {/* Certificate Image */}
                  <div className="h-48 overflow-hidden mb-4">
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate from SoloLearn`}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title and Issuer */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gray-800/50 text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {certificate.title}
                      </h3>
                      <p className="text-gray-400">{certificate.issuer}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{certificate.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300 font-medium">Skills covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <div className="flex justify-center">
                    <a
                      href={certificate.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      View Certificate
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
