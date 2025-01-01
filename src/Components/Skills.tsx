/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skills = [
    { name: "React", level: 90, icon: "⚛️", category: "Frontend" },
    { name: "Next.js", level: 85, icon: "🔲", category: "Frontend" },
    { name: "TypeScript", level: 85, icon: "📘", category: "Languages" }, 
    { name: "Node.js", level: 80, icon: "🟢", category: "Backend" },
    { name: "Git", level: 90, icon: "📦", category: "Tools" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.6 } }
  };

  const barVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: { scaleX: 1, transition: { duration: 1, delay: 0.3 } }
  };

  return (
    <section id="skills" className="min-h-[20vh] px-4 ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" 
              />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <motion.span 
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-3xl"
                  >
                    {skill.icon}
                  </motion.span>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-600 dark:text-gray-300">Proficiency</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                  </motion.div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      variants={barVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
