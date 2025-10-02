"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  color?: string;
  index: number;
}

export function SkillCard({ name, level, icon, color = "#1E90FF", index }: SkillCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center p-10 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
    >
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mb-4">
        <svg
          className="w-32 h-32 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="drop-shadow-sm"
            style={{
              strokeDasharray,
              strokeDashoffset: inView ? strokeDashoffset : circumference,
            }}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Icon and percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="text-sm font-semibold text-primary"
          >
            {level}%
          </motion.div>
        </div>
      </div>

      {/* Skill name */}
      <h3 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
        {name}
      </h3>
    </motion.div>
  );
}
