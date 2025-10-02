"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string | null;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "desktop" | "other";
  index: number;
}

export function ProjectCard({
  title,
  description,
  longDescription,
  image,
  tech,
  github,
  live,
  status,
  category,
  index,
}: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-yellow-500",
    planned: "bg-blue-500",
  };

  const categoryIcons = {
    web: "🌐",
    mobile: "📱",
    desktop: "💻",
    other: "🔧",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/30">
            {categoryIcons[category]}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${statusColors[status]}`}>
            {status.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-2xl">{categoryIcons[category]}</span>
        </div>

        <p className="text-muted-foreground mb-4 text-sm">
          {description}
        </p>

        <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
          {longDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((technology) => (
            <span
              key={technology}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">Code</span>
            </motion.a>
          )}
          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
