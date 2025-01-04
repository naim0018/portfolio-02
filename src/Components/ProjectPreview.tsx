// Import required dependencies
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight, BsX, BsZoomIn, BsZoomOut } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

interface NavButtonProps {
  onClick: (e: React.MouseEvent) => void;
  className: string;
  children: React.ReactNode;
}

// Navigation Button Component
const NavButton = ({ onClick, className, children }: NavButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={className}
  >
    {children}
  </motion.button>
);

interface ProjectLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

// Project Link Component
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

interface TechBadgeProps {
  tech: string;
}

// Technology Badge Component
const TechBadge = ({ tech }: TechBadgeProps) => (
  <span className="px-4 py-2 text-sm bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-800 dark:text-gray-200 rounded-full border border-purple-200 dark:border-purple-800">
    {tech}
  </span>
);

interface ImagePreviewProps {
  src: string;
  alt: string;
  isZoomed: boolean;
  onClick: () => void;
}

// Image Preview Component
const ImagePreview = ({ src, alt, isZoomed, onClick }: ImagePreviewProps) => (
  <Image
    src={src}
    alt={alt}
    fill
    className={`transition-transform duration-300 ${
      isZoomed ? 'object-cover scale-150' : 'object-contain'
    }`}
    onClick={onClick}
  />
);

interface ModalButtonProps {
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}

// Modal Button Component
const ModalButton = ({ onClick, className, children }: ModalButtonProps) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ${className}`}
  >
    {children}
  </button>
);

interface ThumbnailNavProps {
  currentIndex: number;
  totalImages: number;
  onSelect: (index: number) => void;
}

// Thumbnail Navigation Component
const ThumbnailNav = ({ currentIndex, totalImages, onSelect }: ThumbnailNavProps) => (
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/60 p-2 rounded-full">
    {Array.from({ length: totalImages }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-2 h-2 rounded-full transition-colors ${
          index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
        }`}
      />
    ))}
  </div>
);

const ProjectPreview = () => {
  // State management remains the same
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});

  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    currentIndex: number;
    isZoomed?: boolean;
  } | null>(null);

  // Project data array containing information about each project
  const projects = [
    {
      title: "BestBuy4uBD",
      description:
        "A modern e-commerce platform built with React and Next.js, featuring secure user authentication, product management, and integrated Bkash payment system.",
      images: [
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
        "https://i.imgur.com/3XNXMTL.jpg", 
        "https://i.imgur.com/rMvi6qj.png",
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
      liveLink: "https://macrame-crafts.vercel.app/",
      github: {
        link: {
          frontend: "https://github.com/naim0018/Macrame-Crafts-BD",
          backend: "https://github.com/naim0018/MacrameCrafts-Server",
        },
      },
    },
  ];

  // Image navigation functions
  const nextImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectTitle: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectTitle]:
        ((prev[projectTitle] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const nextPreviewImage = () => {
    if (selectedProject) {
      const nextIndex = (selectedProject.currentIndex + 1) % selectedProject.images.length;
      setSelectedProject({
        ...selectedProject,
        currentIndex: nextIndex,
        isZoomed: false
      });
    }
  };

  const prevPreviewImage = () => {
    if (selectedProject) {
      const prevIndex = (selectedProject.currentIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
      setSelectedProject({
        ...selectedProject,
        currentIndex: prevIndex,
        isZoomed: false
      });
    }
  };

  const toggleZoom = () => {
    if (selectedProject) {
      setSelectedProject({
        ...selectedProject,
        isZoomed: !selectedProject.isZoomed
      });
    }
  };

  // Effects
  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    projects.forEach((project) => {
      if (project.images.length > 1) {
        intervals[project.title] = setInterval(() => {
          nextImage(project.title, project.images.length);
        }, 1000);
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, []);

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

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl transform -rotate-3"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="grid lg:grid-cols-2 gap-12 p-8">
                    <div className="relative aspect-video group rounded-2xl overflow-hidden">
                      <motion.div
                        className="relative w-full h-full cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject({
                          images: project.images,
                          currentIndex: currentImageIndex[project.title] || 0,
                          isZoomed: false
                        })}
                      >
                        <ImagePreview 
                          src={project.images[currentImageIndex[project.title] || 0]}
                          alt={project.title}
                          isZoomed={false}
                          onClick={() => {}}
                        />

                        {project.images.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-4">
                            <NavButton
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(project.title, project.images.length);
                              }}
                              className="p-3 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
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

                    <div className="flex flex-col justify-center space-y-8">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-wrap gap-3"
                      >
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </motion.div>

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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative w-full h-full ${selectedProject.isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                <div className={`relative w-full h-full ${selectedProject.isZoomed ? 'overflow-hidden' : ''}`}>
                  <ImagePreview
                    src={selectedProject.images[selectedProject.currentIndex]}
                    alt="Preview"
                    isZoomed={selectedProject.isZoomed || false}
                    onClick={toggleZoom}
                  />
                </div>
              </div>
              
              <ModalButton
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4"
              >
                <BsX size={24} />
              </ModalButton>

              <ModalButton
                onClick={toggleZoom}
                className="absolute top-4 right-16"
              >
                {selectedProject.isZoomed ? <BsZoomOut size={24} /> : <BsZoomIn size={24} />}
              </ModalButton>
              
              {selectedProject.images.length > 1 && (
                <>
                  <NavButton
                    onClick={prevPreviewImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <BsChevronLeft size={24} />
                  </NavButton>
                  
                  <NavButton
                    onClick={nextPreviewImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <BsChevronRight size={24} />
                  </NavButton>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {selectedProject.currentIndex + 1} / {selectedProject.images.length}
                  </div>

                  <ThumbnailNav
                    currentIndex={selectedProject.currentIndex}
                    totalImages={selectedProject.images.length}
                    onSelect={(index) => setSelectedProject({
                      ...selectedProject,
                      currentIndex: index,
                      isZoomed: false
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
