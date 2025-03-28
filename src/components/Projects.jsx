import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  Code2,
  Palette,
  Server,
  Database,
  Layout,
} from "lucide-react";
import { Tilt } from "react-tilt";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: "all", label: "All Projects", icon: <Code2 /> },
    { id: "react", label: "React Projects", icon: <Code2 /> },
    { id: "html", label: "HTML/CSS Projects", icon: <Layout /> },
    { id: "figma", label: "Figma Projects", icon: <Palette /> },
    { id: "mern", label: "MERN Projects", icon: <Database /> },
    { id: "backend", label: "Backend API Projects", icon: <Server /> },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      title: "King Hub - Food Delivery",
      description:
        "listings, menu browsing, cart management, and secure checkout, designed with a light theme and responsive layout.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/VasaraSujal/king_hub",
      live: "https://kinghub-by-sujal.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "mern",
      video:
        "https://drive.google.com/file/d/1rlTl1L93fwTUP3o9n5FdQs_f2wZqlcjG/preview",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing projects and skills with modern design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/VasaraSujal/Sujal_portfolio",
      live: "https://portofolio-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740289534/y9wuwy5toglqsnnc8zso.png",
      category: "react",
    },
    {
      title: "Spotify Homepage",
      description:
        "A Spotify homepage clone in React recreates the streaming platform's landing page with a modern UI, featuring navigation, playlists, and responsive design, showcasing React components and state management.",
      tech: ["React"],
      github: "https://github.com/VasaraSujal/SPOTIFY_TASK1",
      live: "https://portofolio-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740938530/w0lgprhoxfwjrwd0k8nr.jpg",
      category: "react",
    },
    {
      title: "Youtube Landingpage",
      description:
        "A YouTube landing page clone recreates the popular video-sharing site's homepage layout, incorporating elements like featured videos, navigation menus, and responsive design to mimic the user experience.",
      tech: ["React"],
      github: "https://github.com/VasaraSujal/Sujal_portfolio",
      live: "https://portofolio-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740938531/dp9ctqqszgkdhvkhb4uu.jpg",
      category: "react",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Amazon home page clone built using HTML and CSS replicates its layout and design for practice.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Amazon",
      live: "https://dashboard-demo.com",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "html",
    },
    {
      title: "Netflix",
      description:
        "A Netflix clone replicates the streaming service's landing page design, featuring a dark theme, carousel sliders for featured content, and user-friendly navigation, demonstrating responsive layouts and component-based architecture.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Netflix",
      live: "https://fabulous-choux-f2bfef.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740294794/p3xxozwurnr3ooh3anpo.png",
      category: "html",
    },
    {
      title: "Porter",
      description:
        "A Porter clone replicates the clean, modern design of the Porter platform, focusing on intuitive navigation, visual storytelling, and a responsive layout to effectively showcase products and services.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Porter",
      live: "https://porter-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740293908/qg4ermitna3ddkwbaf6z.png",
      category: "html",
    },
    {
      title: "indigo",
      description:
        "An Indigo Airlines clone replicates the airline's website layout, featuring clear navigation, flight search and booking sections, responsive design, and a user-friendly interface that mirrors the brand's clean and efficient aesthetic.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Indigo",
      live: "https://indigo-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740293908/w6kfjpagf5gtaepmj1pi.png",
      category: "html",
    },
    {
      title: "Meesho",
      description:
        "A Meesho clone recreates the e-commerce platform's homepage design, featuring product categories, promotional banners, and a user-friendly interface, with a responsive layout that mirrors the app's vibrant and accessible shopping experience.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Meesho",
      live: "https://meesho-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740293910/f4toqjttmqx7ajgekoox.png",
      category: "html",
    },
    {
      title: "Bewakoof",
      description:
        "A Bewakoof clone replicates the trendy e-commerce website's homepage, showcasing bold banners, quirky product displays, and a youthful, vibrant design, with a responsive layout that enhances the shopping experience.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Bewakoof",
      live: "https://bewakoof-by-sujal.netlify.app/",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740293228/mk0uicpnsho4ztrevvyr.png",
      category: "html",
    },
    {
      title: "Youtube Landing Page",
      description:
        "A YouTube landing page clone replicates the platform's homepage layout, featuring a search bar, video thumbnails, navigation menu, and a responsive design, providing a familiar user experience while showcasing front-end development skills.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/VasaraSujal/Youtube-",
      live: "https://dashboard-demo.com",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "html",
    },
    {
      title: "Instagram Clone",
      description:
        "An Instagram clone in Figma replicates the social media platform's sleek UI design, including the feed, stories, navigation bar, and profile pages, showcasing modern UX principles and responsive layout skills.",
      tech: ["Figma", "UI/UX"],
      github: "https://figma.com/file/...",
      live: "https://www.figma.com/design/E6bEiKGItd1H4CJyOPvKkQ/Food?node-id=24-2&t=D5CKnHseUq2rqKa7-1",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740294675/qod9bhxgy3qnt6upnswv.png",
      category: "figma",
    },
    {
      title: "CodingGita Website",
      description:
        "A platform dedicated to coding enthusiasts, featuring tutorials, problem-solving guides, and resources, with a clean and responsive design to enhance the learning experience.",
      tech: ["Figma", "UI/UX"],
      github: "https://figma.com/file/...",
      live: "https://www.figma.com/design/E6bEiKGItd1H4CJyOPvKkQ/Food?node-id=0-1&p=f&t=JYjBti1HKlCdA5v5-0",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740294386/fmdmrma0oi9g3ifcmrje.png",
      category: "figma",
    },
    {
      title: "YouTube API",
      description:
        "The YouTube API allows developers to integrate YouTube's features into their applications, enabling functionalities like video fetching, playback, search, uploading, and managing playlists, enhancing user interaction with YouTube content.",
      tech: ["Node.js", "Express"],
      github: "https://github.com/VasaraSujal/You-Tube_task",
      live: "https://task-api-docs.com",
      image:
        "https://res.cloudinary.com/dkombksnu/image/upload/v1740293216/uu63aiyoicdf8sptv3qh.png",
      category: "backend",
    },
    {
      title: "Multi-API Hub",
      description:
        "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
      tech: ["Node.js", "Express"],
      github: "https://github.com/VasaraSujal/React_Task",
      live: "https://task-api-docs.com",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "backend",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-900/30 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-cyan-400 text-center mb-12"
        >
          My Projects
        </motion.h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/20"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 
                   hover:neon-border transition-all duration-300 overflow-hidden h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-800/30 px-3 py-1 rounded-full text-cyan-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Video Preview (if available) */}
                    {project.video && (
                      <div className="relative h-48 overflow-hidden mt-4">
                        <iframe
                          src={project.video}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${project.title} video preview`}
                        ></iframe>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
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
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
