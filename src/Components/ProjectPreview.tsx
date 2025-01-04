// Import required dependencies
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

// Props interface for navigation button component
interface NavButtonProps {
  onClick: (e: React.MouseEvent) => void;
  className: string;
  children: React.ReactNode;
}

// Navigation Button Component - Handles image navigation with animations
const NavButton = ({ onClick, className, children }: NavButtonProps) => (
  <motion.button
    onClick={onClick}
    className={className}
  >
    {children}
  </motion.button>
);

// Props interface for project link component
interface ProjectLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

// Project Link Component - Renders animated links to project resources
const ProjectLink = ({ href, className, children }: ProjectLinkProps) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </motion.a>
);

// Props interface for technology badge component
interface TechBadgeProps {
  tech: string;
}

// Technology Badge Component - Displays technology tags with gradient styling
const TechBadge = ({ tech }: TechBadgeProps) => (
  <span className="px-4 py-2 text-sm bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-800 dark:text-gray-200 rounded-full border border-purple-200 dark:border-purple-800">
    {tech}
  </span>
);

// Props interface for image preview component
interface ImagePreviewProps {
  src: string;
  alt: string;
}

// Image Preview Component - Handles responsive image display
const ImagePreview = ({ src, alt }: ImagePreviewProps) => (
  <Image
    src={src}
    alt={alt}
    fill
    className="object-contain"
  />
);

// Props interface for modal button component
interface ModalButtonProps {
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}

// Modal Button Component - Handles modal close functionality
const ModalButton = ({ onClick, className, children }: ModalButtonProps) => (
  <button
    onClick={onClick}
    className={`p-2 border border-white/10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ${className}`}
  >
    {children}
  </button>
);

// Props interface for thumbnail navigation component
interface ThumbnailNavProps {
  currentIndex: number;
  totalImages: number;
  onSelect: (index: number) => void;
}

// Thumbnail Navigation Component - Displays image navigation dots
const ThumbnailNav = ({ currentIndex, totalImages, onSelect }: ThumbnailNavProps) => (
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/60 p-2 rounded-full">
    {Array.from({ length: totalImages }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-2 h-2 rounded-full transition-colors  ${
          index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
        }`}
      />
    ))}
  </div>
);

// Main ProjectPreview Component
const ProjectPreview = () => {
  // State for tracking current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});

  // State for selected project modal view
  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    currentIndex: number;
  } | null>(null);

  // State to track hover status
  const [isHovered, setIsHovered] = useState<{
    [key: string]: boolean;
  }>({});

  // Project data array containing information about each project
  const projects = [
    {
      title: "BestBuy4uBD",
      description:
        "A modern e-commerce platform built with React and Next.js, featuring secure user authentication, product management, and integrated Bkash payment system.",
      images: [
        "https://i.imgur.com/BJFXsRd.png",
        "https://i.imgur.com/L2MBylV.png",
        "https://i.imgur.com/9UK79yK.png",
        "https://i.imgur.com/9UK79yK.png",
        "https://i.imgur.com/TKJBfvo.png",
        "https://i.imgur.com/IkuSyFQ.png",
        "https://i.imgur.com/m4oFENG.png",
      ],
      technologies: [
        "React",
        "TailwindCSS", 
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Redux",
        "Bkash",
      ],
      liveLink: "https://bestbuy4ubd.com",
      github: {
        link: {
          frontend: "https://github.com/naim0018/SparkTech",
          backend: "https://github.com/naim0018/SparkTech-Server",
        },
      },
    },
    {
      title: "Macrame Crafts",
      description:
        "A specialized e-commerce platform for handcrafted textile products made using traditional knotting techniques. Features include user authentication, product management, and a seamless shopping experience.",
      images: [

        "https://i.imgur.com/ql81RF9.png",
        "https://i.imgur.com/aqQ438y.png",
        "https://i.imgur.com/KE6FU7E.png",
        "https://i.imgur.com/x552Uw3.png",
        "https://i.imgur.com/RG5v7sv.png",
        "https://i.imgur.com/6RGZluP.png",
      
      ],
      technologies: [
        "React",
        "TailwindCSS",
        "Firebase",
        "Express", 
        "Node.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bkash",
      ],
      liveLink: "https://macrame-crafts-bd.vercel.app",
      github: {
        link: {
          frontend: "https://github.com/naim0018/Macrame-Crafts-BD",
          backend: "https://github.com/naim0018/MacrameCrafts-Server",
        },
      },
    },
  ];

  // Function to navigate to next image in project carousel
  const nextImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % totalImages,
    }));
  };

  // Function to navigate to previous image in project carousel
  const prevImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectTitle]:
        ((prev[projectTitle] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  // Function to navigate to next image in preview modal
  const nextPreviewImage = () => {
    if (selectedProject) {
      const nextIndex = (selectedProject.currentIndex + 1) % selectedProject.images.length;
      setSelectedProject({
        ...selectedProject,
        currentIndex: nextIndex
      });
    }
  };

  // Function to navigate to previous image in preview modal
  const prevPreviewImage = () => {
    if (selectedProject) {
      const prevIndex = (selectedProject.currentIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
      setSelectedProject({
        ...selectedProject,
        currentIndex: prevIndex
      });
    }
  };

  // Effect for auto-rotating project images
  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    projects.forEach((project) => {
      if (project.images.length > 1 && !isHovered[project.title]) {
        intervals[project.title] = setInterval(() => {
          nextImage(project.title, project.images.length);
        }, 2000);
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [isHovered]);

  // Effect for handling keyboard navigation in preview modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'ArrowLeft') {
          prevPreviewImage();
        } else if (e.key === 'ArrowRight') {
          nextPreviewImage();
        } else if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject]);

  // Main component render
  return (
    <>
      {/* Main container */}
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Project cards */}
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl transform -rotate-3"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="grid lg:grid-cols-2 gap-12 p-8">
                    {/* Project image preview */}
                    <div className="relative aspect-video group rounded-2xl overflow-hidden">
                      <motion.div
                        className="relative w-full h-full cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setIsHovered(prev => ({ ...prev, [project.title]: true }))}
                        onMouseLeave={() => setIsHovered(prev => ({ ...prev, [project.title]: false }))}
                        onClick={() => setSelectedProject({
                          images: project.images,
                          currentIndex: currentImageIndex[project.title] || 0
                        })}
                      >
                        <ImagePreview 
                          src={project.images[currentImageIndex[project.title] || 0]}
                          alt={project.title}
                        />

                        {/* Image navigation buttons */}
                        {project.images.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-4">
                            <NavButton
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(project.title, project.images.length);
                              }}
                              className="p-3 border border-white/10 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <BsChevronLeft size={20} />
                            </NavButton>
                            <NavButton
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(project.title, project.images.length);
                              }}
                              className="p-3 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <BsChevronRight size={20} />
                            </NavButton>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Project details section */}
                    <div className="flex flex-col justify-center space-y-8">
                      {/* Project title */}
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      >
                        {project.title}
                      </motion.h3>

                      {/* Project description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      {/* Technology stack */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-wrap gap-3"
                      >
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </motion.div>

                      {/* Project links */}
                      <div className="flex flex-wrap gap-4 pt-6">
                        <ProjectLink
                          href={project.liveLink}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          Live Demo
                        </ProjectLink>
                        
                        <div className="flex gap-3">
                          <ProjectLink
                            href={project.github.link.frontend}
                            className="inline-flex items-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-all duration-300"
                          >
                            <FaGithub />
                            Frontend
                          </ProjectLink>
                          <ProjectLink
                            href={project.github.link.backend}
                            className="inline-flex items-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-all duration-300"
                          >
                            <FaGithub />
                            Backend
                          </ProjectLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image preview modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              
              className="relative max-w-7xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image preview */}
              <div className="relative w-full h-full">
                <ImagePreview
                  src={selectedProject.images[selectedProject.currentIndex]}
                  alt="Preview"
                />
              </div>
              
              {/* Modal close button */}
              <ModalButton
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4"
              >
                <BsX size={24} />
              </ModalButton>
              
              {/* Modal navigation controls */}
              {selectedProject.images.length > 1 && (
                <>
                  <NavButton
                    onClick={prevPreviewImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white transition-colors hover:scale-105 active:scale-95"
                  >
                    <BsChevronLeft size={24} />
                  </NavButton>
                  
                  <NavButton
                    onClick={nextPreviewImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white transition-colors hover:scale-105 active:scale-95"
                  >
                    <BsChevronRight size={24} />
                  </NavButton>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {selectedProject.currentIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Thumbnail navigation */}
                  <ThumbnailNav
                    currentIndex={selectedProject.currentIndex}
                    totalImages={selectedProject.images.length}
                    onSelect={(index) => setSelectedProject({
                      ...selectedProject,
                      currentIndex: index
                    })}
                  />
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectPreview;
