import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import TypeWriterEffect from "@/Components/TypeWriterEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div id="" className="relative py-20 lg:pt-48 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4 ">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm rounded-full">
                <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-900 dark:text-white">Hi! I&apos;m{" "}</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Md. Kazi Naim
                </span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                  <TypeWriterEffect props={["Problem Solver", "Innovator", "Creator"]} />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    from Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-white/10 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <span className="relative text-gray-900 dark:text-white font-medium flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Get in Touch
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <span className="relative text-white font-medium flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  View Resume
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"/>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-[3rem] rotate-6"/>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-[3rem] -rotate-6"/>
              <Image
                src="https://i.imgur.com/WFRLTZl.png"
                alt="Profile Image"
                width={500}
                height={500}
                priority
                className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-lg mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="my-32 py-10">
          <About />
        </div>

        <div className="my-32 py-10">
          <Skills />
        </div>

        <div className="my-32 py-10">
          <Projects />
        </div>

        <div className="mt-32 py-10">
          <Contact />
        </div>

      </div>
    </div>
  );
}
