import React, { useState, useEffect } from 'react';
import { Skill } from '../types';

interface SkillItemProps {
  skill: Skill;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, delay }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress after component mounts with the specified delay
    const timeout = setTimeout(() => {
      setProgress(skill.level);
    }, 300 + delay);

    return () => clearTimeout(timeout);
  }, [skill.level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-teal-400"
          style={{ 
            width: `${progress}%`,
            transition: 'width 1s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;