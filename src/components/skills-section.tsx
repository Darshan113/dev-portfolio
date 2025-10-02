"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  GitBranch, 
  Smartphone,
  Globe,
  Zap,
  Shield,
  Layers
} from "lucide-react";
import { SkillCard } from "./skill-card";

const frontendSkills = [
  { name: "React", level: 90, icon: <Code className="h-6 w-6" />, color: "#61DAFB" },
  { name: "TypeScript", level: 85, icon: <Code className="h-6 w-6" />, color: "#3178C6" },
  { name: "Next.js", level: 88, icon: <Globe className="h-6 w-6" />, color: "#000000" },
  { name: "Angular", level: 85, icon: <Code className="h-6 w-6" />, color: "#DD0031" },
  { name: "Tailwind CSS", level: 92, icon: <Palette className="h-6 w-6" />, color: "#06B6D4" },
  { name: "JavaScript", level: 88, icon: <Code className="h-6 w-6" />, color: "#F7DF1E" },
];

const backendSkills = [
  { name: "Node.js", level: 80, icon: <Server className="h-6 w-6" />, color: "#339933" },
  { name: "Express", level: 75, icon: <Server className="h-6 w-6" />, color: "#000000" },
  { name: "PostgreSQL", level: 70, icon: <Database className="h-6 w-6" />, color: "#336791" },
  { name: "Python", level: 75, icon: <Code className="h-6 w-6" />, color: "#3776AB" },
  { name: "FastAPI", level: 70, icon: <Zap className="h-6 w-6" />, color: "#009688" },
  { name: "MongoDB", level: 65, icon: <Database className="h-6 w-6" />, color: "#47A248" },
];

const toolsSkills = [
  { name: "Git", level: 85, icon: <GitBranch className="h-6 w-6" />, color: "#F05032" },
  { name: "GitHub", level: 90, icon: <GitBranch className="h-6 w-6" />, color: "#181717" },
  { name: "Responsive Design", level: 88, icon: <Smartphone className="h-6 w-6" />, color: "#FF6B6B" },
  { name: "Performance", level: 82, icon: <Zap className="h-6 w-6" />, color: "#FFD93D" },
  { name: "Security", level: 75, icon: <Shield className="h-6 w-6" />, color: "#4ECDC4" },
  { name: "Testing", level: 70, icon: <Layers className="h-6 w-6" />, color: "#45B7D1" },
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
