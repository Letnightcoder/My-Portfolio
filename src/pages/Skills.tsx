import React from 'react';
import Section from '../components/Section';
import SkillItem from '../components/SkillItem';
import AnimatedElement from '../components/AnimatedElement';
import { Skill } from '../types';

interface SkillsProps {
  setActiveSection: (id: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const frontendSkills: Skill[] = [
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Nextjs', level: 85 },
    { name: 'React', level: 92 },
  ];

  const designSkills: Skill[] = [
    { name: 'Responsive Design', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Material UI', level: 85 },
    { name: 'CSS-in-JS', level: 88 },
  ];

  const otherSkills: Skill[] = [
    { name: "Git & GitHub", level: 90 },
    { name: "Nodejs", level: 85 },
    { name: "RESTful APIs", level: 88 },
    { name: "Problem-solving", level: 92 },
  ];

  return (
    <Section
      id="skills"
      title="My Skills"
      setActiveSection={setActiveSection}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedElement>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </span>
              Frontend Development
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} delay={index * 100} />
            ))}
          </div>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </span>
              Design
            </h3>
            {designSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} delay={index * 100} />
            ))}
          </div>
        </AnimatedElement>

        <AnimatedElement delay={400}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                </svg>
              </span>
              Other Skills
            </h3>
            {otherSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} delay={index * 100} />
            ))}
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default Skills;