"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRef } from "react";

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Next.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Next.js", "TailwindCSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 2", 
      description: "Full-stack application with robust backend integration",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["TypeScript", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 3",
      description: "Mobile-responsive e-commerce platform",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      technologies: ["React", "Redux", "Firebase"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </h2>
          <div className={`h-1 w-20 mx-auto ${isDark ? 'bg-purple-500' : 'bg-purple-600'} rounded-full mb-4`} />
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Explore my latest works and creative solutions
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-purple-900/20' : 'bg-purple-100/20'} group-hover:bg-transparent transition-colors duration-300`} />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 space-y-4">
                <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                        isDark 
                          ? 'bg-gray-800 text-purple-400 ring-1 ring-purple-400/20' 
                          : 'bg-purple-50 text-purple-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveLink}
                    className={`px-6 py-2 rounded-lg font-medium text-sm ${
                      isDark
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    } transition-colors duration-300`}
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubLink}
                    className={`px-6 py-2 rounded-lg font-medium text-sm ${
                      isDark
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition-colors duration-300`}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
