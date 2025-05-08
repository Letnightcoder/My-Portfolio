import React, { useRef, useEffect, useState, ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  setActiveSection?: (id: string) => void;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
  setActiveSection,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && setActiveSection) {
          setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "-50px 0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, setActiveSection]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center relative">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-teal-400">
            {title}
          </span>
          <span className="block w-16 sm:w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-3 sm:mt-4"></span>
        </h2>
        <div
          className={`transition-all duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
