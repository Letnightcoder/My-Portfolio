import React from 'react';
import { Code, Globe, Zap } from 'lucide-react';
import Section from '../components/Section';
import AnimatedElement from '../components/AnimatedElement';

interface AboutProps {
  setActiveSection: (id: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Building modern websites with the latest technologies like Nextjs, React, JavaScript and Tailwind CSS.',
    },
    {
      icon: <Globe size={24} />,
      title: 'UI/UX Design',
      description: 'Creating responsive, intuitive and visually appealing interfaces that provide exceptional user   experiences.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Improving website performance by optimizing code, images, and implementing best practices.',
    },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      className="bg-gray-50 dark:bg-gray-950"
      setActiveSection={setActiveSection}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedElement>
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Me"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
              <div className="p-6">
                <span className="text-white text-sm font-medium">
                  Coding with passion
                </span>
              </div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Frontend Developer With a Passion for Creating Exceptional Web
            Experiences
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I’m a passionate frontend developer skilled in HTML, CSS,
            JavaScript, TypeScript, React, Next.js and Node.js. I enjoy creating clean, responsive
            interfaces that deliver a great user experience and bring digital
            ideas to life.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            My journey into web development began with curiosity, which quickly
            grew into a passion. I’ve built multiple projects, enhancing my
            knowledge in responsive design, TailwindCSS, and Git, while
            constantly learning new tools and techniques.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I thrive in creative environments and love solving problems through
            code. My goal is to grow professionally, contribute to impactful
            projects, and collaborate with teams that value innovation and
            user-centered design.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              TypeScript 
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              TailwindCSS
            </span>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Let's work together
            <svg
              className="ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </AnimatedElement>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Services I Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 inline-flex rounded-lg text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;