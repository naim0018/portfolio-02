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
  <span className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-800 dark:text-gray-200 rounded-full border border-purple-200 dark:border-purple-800">
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
  <div className="absolute bottom-4 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/60 p-2 rounded-full">
    {Array.from({ length: totalImages }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors ${
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
    {
      title: "Component UI",
      description:
        "A collection of reusable UI components built with React and TailwindCSS, designed to enhance the consistency and efficiency of web development projects.",
      images: [
        "https://i.imgur.com/vIAGU1a.png",
        "https://i.imgur.com/0vFcPXk.png",
        "https://i.imgur.com/o4DPCpu.png",
      ],
      technologies: [
        "React",
        "TailwindCSS",
      ],
      liveLink: "https://component-collection-mu.vercel.app",
      github: {
        link: {
          frontend: "https://github.com/naim0018/component-collection",
        },
      },
    },
  ];

  // Function to handle thumbnail click
  const handleThumbnailClick = (projectTitle: string, index: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectTitle]: index
    }));
  };

  // Function to navigate to next image in preview modal
  const nextPreviewImage = () => {
    if (selectedProject) {
      const nextIndex = (selectedProject?.currentIndex + 1) % selectedProject?.images.length;
      setSelectedProject({
        ...selectedProject,
        currentIndex: nextIndex
      });
    }
  };

  // Function to navigate to previous image in preview modal
  const prevPreviewImage = () => {
    if (selectedProject) {
      const prevIndex = (selectedProject?.currentIndex - 1 + selectedProject?.images.length) % selectedProject?.images.length;
      setSelectedProject({
        ...selectedProject,
        currentIndex: prevIndex
      });
    }
  };

  // Function to handle thumbnail navigation
  const handleThumbnailNav = (projectTitle: string, direction: 'prev' | 'next') => {
    const project = projects.find(p => p.title === projectTitle);
    if (!project) return;

    const currentIndex = currentImageIndex[projectTitle] || 0;
    const totalImages = project.images.length;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalImages;
    } else {
      newIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    setCurrentImageIndex(prev => ({
      ...prev,
      [projectTitle]: newIndex
    }));
  };

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
      <div className="min-h-screen py-8 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-24">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl sm:rounded-3xl blur-3xl transform -rotate-3"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-12 p-4 sm:p-8">
                    {/* Project image preview */}
                    <div className="space-y-4 lg:col-span-3">
                      <div className="relative aspect-video rounded-lg sm:rounded-2xl overflow-hidden">
                        <motion.div
                          className="relative w-full h-full cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setSelectedProject({
                            images: project.images,
                            currentIndex: currentImageIndex?.[project.title] || 0
                          })}
                        >
                          <ImagePreview 
                            src={project.images[currentImageIndex?.[project.title] || 0]}
                            alt={project.title}
                          />
                        </motion.div>
                      </div>

                      {/* Thumbnails with navigation buttons */}
                      <div className="relative flex items-center justify-center w-full rounded-xl">
                        <button
                          onClick={() => handleThumbnailNav(project.title, 'prev')}
                          className="absolute left-1 sm:left-2 z-10 p-1 sm:p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                        >
                          <BsChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        <div className="flex gap-2 sm:gap-3 justify-center items-center px-8 sm:px-12 overflow-x-hidden overflow-y-hidden">
                          {project.images.slice(Math.max(0, (currentImageIndex?.[project.title] || 0) - 2), 
                                              Math.min(project.images.length, (currentImageIndex?.[project.title] || 0) + 3))
                            .map((image, idx) => {
                              const actualIndex = Math.max(0, (currentImageIndex?.[project.title] || 0) - 2) + idx;
                              return (
                                <button
                                  key={actualIndex}
                                  onClick={() => handleThumbnailClick(project.title, actualIndex)}
                                  className={`relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                                    actualIndex === (currentImageIndex?.[project.title] || 0)
                                      ? 'border-purple-500 scale-110'
                                      : 'border-transparent hover:border-purple-300'
                                  }`}
                                >
                                  <Image
                                    src={image}
                                    alt={`${project.title} thumbnail ${actualIndex + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </button>
                              );
                          })}
                        </div>

                        <button
                          onClick={() => handleThumbnailNav(project.title, 'next')}
                          className="absolute right-1 sm:right-2 z-10 p-1 sm:p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                        >
                          <BsChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Project details section */}
                    <div className="flex flex-col justify-center space-y-4 sm:space-y-8 lg:col-span-2">
                      {/* Project title */}
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      >
                        {project.title}
                      </motion.h3>

                      {/* Project description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      {/* Technology stack */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-wrap gap-2 sm:gap-3"
                      >
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </motion.div>

                      {/* Project links */}
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                        <ProjectLink
                          href={project.liveLink}
                          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg sm:rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 text-sm sm:text-base"
                        >
                          <FaExternalLinkAlt className="text-xs sm:text-sm" />
                          Live Demo
                        </ProjectLink>
                        
                        <div className="flex gap-2 sm:gap-3">
                          <ProjectLink
                            href={project.github?.link?.frontend}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-all duration-300 text-sm sm:text-base"
                          >
                            <FaGithub />
                            Frontend
                          </ProjectLink>
                          <ProjectLink
                            href={project.github?.link?.backend || ''}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-all duration-300 text-sm sm:text-base"
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <motion.div
              className="relative max-w-7xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image preview */}
              <div className="relative w-full h-full">
                <ImagePreview
                  src={selectedProject?.images[selectedProject?.currentIndex]}
                  alt="Preview"
                />
              </div>
              
              {/* Modal close button */}
              <ModalButton
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4"
              >
                <BsX className="w-5 h-5 sm:w-6 sm:h-6" />
              </ModalButton>
              
              {/* Modal navigation controls */}
              {selectedProject?.images.length > 1 && (
                <>
                  <NavButton
                    onClick={prevPreviewImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 text-white transition-colors hover:scale-105 active:scale-95"
                  >
                    <BsChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </NavButton>
                  
                  <NavButton
                    onClick={nextPreviewImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 text-white transition-colors hover:scale-105 active:scale-95"
                  >
                    <BsChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </NavButton>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                    {selectedProject?.currentIndex + 1} / {selectedProject?.images.length}
                  </div>

                  {/* Thumbnail navigation */}
                  <ThumbnailNav
                    currentIndex={selectedProject?.currentIndex}
                    totalImages={selectedProject?.images.length}
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
