/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Image from "next/image";
import { useTheme } from "next-themes";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id="about" className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl"></div>
            <Image
              src="https://i.imgur.com/WFRLTZl.png"
              alt="About Me"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <div className="inline-block px-4 py-2 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm rounded-full">
              <span className="text-sm">Web Developer & Problem Solver</span>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Turning Ideas into Reality through Code
            </h3>

            <p className="text-lg">
              I am a passionate web developer with a strong foundation in full-stack development. 
              My journey in programming started with solving complex problems, and now I channel 
              that analytical mindset into creating elegant web solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span>Expertise in React, Next.js, and Modern Web Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span>Strong Problem-Solving Skills with Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span>Passionate about Creating User-Centric Applications</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity">
                Download CV
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-xl text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
