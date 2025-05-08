import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import AnimatedElement from "../components/AnimatedElement";
import { Project } from "../types";

// Import project images
import zomatoImage from "../assets/Zomato-Clone.png";
import codeEditorImage from "../assets/Code-Editor.png";
import aiSummaryImage from "../assets/Chrome-Extention.png";
import geminiImage from "../assets/Gemini-Clone.png";
import portfolioImage from "../assets/Personal-Protfolio.png";

interface ProjectsProps {
  setActiveSection: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const projects: Project[] = [
    {
      title: "Zomato Clone",
      description:
        "The project showcases skills in modern web development and provides an opportunity to explore a Zomato-like user experience.It is primarily built using React with some contributions from TypeScript, JavaScript, CSS, and HTML.",
      image: zomatoImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com/Letnightcoder/Zomato-Clone",
      demoUrl: "https://zomato-clone-two-ruddy.vercel.app/",
    },
    {
      title: "Code Editor",
      description:
        "A modern web-based code editor built with React and Monaco Editor that provides a feature-rich development environment with syntax highlighting, code completion, and a user-friendly interface.",
      image: codeEditorImage,
      tags: ["React", "Monaco Editor", "Chakra UI"],
      githubUrl: "https://github.com/Letnightcoder/Code-Editor",
      demoUrl: "https://code-editor-nu-sage.vercel.app/",
    },
    {
      title: "AI Summary Chrome Extension",
      description:
        "AI Summary for Articles is a Chrome extension that helps users quickly understand the content of web articles by generating AI-powered summaries. The extension uses Google's Gemini AI to provide different types of summaries (brief, detailed, or bullet points) of any article the user is viewing.",
      image: aiSummaryImage,
      tags: ["JavaScript", "Chrome Storage API", "Google Gemini API"],
      githubUrl:
        "https://github.com/Letnightcoder/AI-Summarize-Chrome-Extension",
    },
    {
      title: "Personal Portfolio",
      description:
        "An application that helps users find recipes based on ingredients they have. Features include filtering by dietary restrictions, saving favorites, and meal planning.",
      image: portfolioImage,
      tags: ["React", "TypeScript", "Framer Motion", "bolt.new"],
      githubUrl: "https://github.com/Letnightcoder/My-Portfolio",
      demoUrl: "https://my-portfolio-taupe-six-27.vercel.app/",
    },
    {
      title: "Gemini Clone",
      description:
        "Gemini Clone is a React-based web application that mimics the functionality of a chat interface. It uses Vite for fast development and build processes, Redux for state management, and Tailwind CSS for styling.",
      image: geminiImage,
      tags: ["React", "Google Gemini API", "Redux"],
      githubUrl: "https://github.com/Letnightcoder/Gemini-Clone",
      demoUrl: "https://gemini-clone-seven-xi.vercel.app/",
    },
  ];

  return (
    <Section
      id="projects"
      title="My Projects"
      setActiveSection={setActiveSection}
      className="min-h-screen"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <AnimatedElement key={index} delay={index * 100} className="w-full">
            <ProjectCard project={project} />
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
