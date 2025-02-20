import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Tilt } from 'react-tilt';
import HomePage from '../assets/Home_Page.png'
import CodingGita from '../assets/Codinggita.png'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "King Hub - Online Food Delivery Platform",
      description: "King Hub is a modern food delivery platform that connects users with restaurants for quick and easy online ordering. It makes food delivery simple and convenient.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/VasaraSujal/king_hub",
      live: "https://project-demo.com",
      image: HomePage
    },
    {
      title: "YouTube Clone Application",
      description: "Built a YouTube clone using the YouTube API to fetch video data, support video playback, and implement a search bar functionality. The app allows users to browse videos, search content, and watch videos seamlessly.",
      tech: ["HTML", "CSS", "JavaScript", "YouTube API", "Fetch API"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-demo.com",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Figma Projects",
      description: "The Instagram Clone is a responsive replica of Instagram's user interface, featuring a modern design, interactive elements. Similarly, the Coding Gita Website Clone is a faithful reproduction that mirrors the original website's design aesthetics, navigation structure, and content layout, providing a seamless and consistent UX.",
      tech: ["Figma"],
      github: "https://github.com/yourusername/ai-image-gen",
      live: "https://www.figma.com/design/E6bEiKGItd1H4CJyOPvKkQ/Food?node-id=0-1&t=pRuE8tpvEL7ogDGI-1",
      image: CodingGita
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
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 
                         hover:neon-border transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800/30 px-3 py-1 rounded-full text-cyan-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;