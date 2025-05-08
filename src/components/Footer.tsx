import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/Letnightcoder",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/kallolnath/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://x.com/Letnightcoder",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:official.kallol24@gmail.com",
      label: "Email",
    },
  ];
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-teal-400"
            >
              Kallol Nath
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Frontend Developer | ReactJS Developer
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Kallol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;