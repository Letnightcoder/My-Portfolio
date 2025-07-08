import React from "react";
import { ArrowDown } from "lucide-react";
import Section from "../components/Section";
import AnimatedElement from "../components/AnimatedElement";
import resumePDF from "../assets/Kallol-Kumar-Nath-Frontend-Developer-Resume.pdf";


interface HomeProps {
  setActiveSection: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section
      id="home"
      title=""
      className="min-h-screen pt-0 flex flex-col justify-center"
      setActiveSection={setActiveSection}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 min-h-128">
        <AnimatedElement className="order-2 md:order-1">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Frontend Developer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-teal-400">
              Kallol
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I am a Frontend Developer. I create responsive web experiences with
            modern technologies. Passionate about user-centric design and clean
            code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              View Projects
            </a>
            <a
              href={resumePDF}
              download="Kallol-Kumar-Nath-Frontend-Developer-Resume.pdf"
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              My Resume
            </a>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={300} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            <img
              src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </AnimatedElement>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center mt-16 animate-bounce">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </Section>
  );
};

export default Home;
