"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SkillCard } from "./skill-card";

const frontendSkills = [
  { 
    name: "HTML", 
    level: 95, 
    icon: <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">H</div>, 
    color: "#E34F26" 
  },
  { 
    name: "CSS", 
    level: 90, 
    icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">C</div>, 
    color: "#1572B6" 
  },
  { 
    name: "JavaScript", 
    level: 88, 
    icon: <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center text-black text-xs font-bold">JS</div>, 
    color: "#F7DF1E" 
  },
  { 
    name: "TypeScript", 
    level: 85, 
    icon: <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">TS</div>, 
    color: "#3178C6" 
  },
  { 
    name: "Angular", 
    level: 80, 
    icon: <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">A</div>, 
    color: "#DD0031" 
  },
  { 
    name: "React", 
    level: 90, 
    icon: <div className="w-6 h-6 bg-cyan-400 rounded flex items-center justify-center text-white text-xs font-bold">R</div>, 
    color: "#61DAFB" 
  },
  { 
    name: "Next.js", 
    level: 85, 
    icon: <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">N</div>, 
    color: "#000000" 
  },
];

const backendSkills = [
  { 
    name: "Python", 
    level: 85, 
    icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">P</div>, 
    color: "#3776AB" 
  },
  { 
    name: "FastAPI", 
    level: 80, 
    icon: <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center text-white text-xs font-bold">F</div>, 
    color: "#009688" 
  },
  { 
    name: "Node.js", 
    level: 85, 
    icon: <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">N</div>, 
    color: "#339933" 
  },
  { 
    name: "Express", 
    level: 80, 
    icon: <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-bold">E</div>, 
    color: "#000000" 
  },
  { 
    name: "PostgreSQL", 
    level: 75, 
    icon: <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">P</div>, 
    color: "#336791" 
  },
  { 
    name: "MongoDB", 
    level: 70, 
    icon: <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">M</div>, 
    color: "#47A248" 
  },
];

const toolsSkills = [
  { 
    name: "Git", 
    level: 85, 
    icon: <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">G</div>, 
    color: "#F05032" 
  },
  { 
    name: "GitHub", 
    level: 90, 
    icon: <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-bold">GH</div>, 
    color: "#181717" 
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="text-primary">Expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I specialize in modern web technologies and have extensive experience in both frontend and backend development. 
            Here's a breakdown of my technical skills and proficiency levels.
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frontend <span className="text-primary">Development</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Backend <span className="text-primary">Development</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Tools & Others */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Tools & <span className="text-primary">Others</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What I Bring to the Table</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I create full-stack applications 
              that are not only visually appealing but also performant, scalable, and user-friendly. I'm passionate 
              about learning new technologies and staying up-to-date with the latest industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
