"use client"
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/utils/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
        : 'bg-white dark:bg-gray-900'
    } text-gray-900 dark:text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#home"
            onClick={() => scrollToSection('home')} 
            className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href=""
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about"
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills"
              onClick={() => scrollToSection('skills')}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects"
              onClick={() => scrollToSection('projects')}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            
            {/* Theme Toggle Button */}
            <div className=" rounded-lg transition-colors w-8 h-8 flex items-center justify-center">
            <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
