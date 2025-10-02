"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX",
    longDescription: "A comprehensive e-commerce platform built with Next.js, featuring user authentication, payment processing with Stripe, inventory management, and admin dashboard. Includes real-time order tracking and customer support chat.",
    image: "/api/placeholder/400/300",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL", "Prisma"],
    github: "https://github.com/darshanpanchal/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
    status: "completed" as const,
    category: "web" as const,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    longDescription: "A real-time collaborative task management application with team workspaces, project boards, file sharing, and progress tracking. Features include drag-and-drop interface, notifications, and team analytics.",
    image: "/api/placeholder/400/300",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    github: "https://github.com/darshanpanchal/taskmanager",
    live: "https://taskmanager-demo.vercel.app",
    status: "completed" as const,
    category: "web" as const,
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather visualization app",
    longDescription: "A beautiful weather dashboard with location-based forecasts, interactive maps, weather alerts, and historical data visualization. Includes 7-day forecasts, hourly updates, and weather comparison features.",
    image: "/api/placeholder/400/300",
    tech: ["Angular", "TypeScript", "Chart.js", "OpenWeather API", "RxJS", "Bootstrap"],
    github: "https://github.com/darshanpanchal/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    status: "completed" as const,
    category: "web" as const,
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics",
    longDescription: "A comprehensive analytics platform for tracking social media performance across multiple platforms. Features include engagement metrics, content performance analysis, and automated reporting.",
    image: "/api/placeholder/400/300",
    tech: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "D3.js", "Redis"],
    github: "https://github.com/darshanpanchal/social-analytics",
    live: "https://social-analytics-demo.vercel.app",
    status: "in-progress" as const,
    category: "web" as const,
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application",
    longDescription: "A secure mobile banking application with biometric authentication, transaction history, bill payments, and money transfer features. Built with React Native and integrated with banking APIs.",
    image: "/api/placeholder/400/300",
    tech: ["React Native", "TypeScript", "Redux", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/darshanpanchal/mobile-banking",
    live: null,
    status: "in-progress" as const,
    category: "mobile" as const,
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent customer support chatbot",
    longDescription: "An AI-powered chatbot for customer support with natural language processing, sentiment analysis, and integration with CRM systems. Features include multi-language support and learning capabilities.",
    image: "/api/placeholder/400/300",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "WebSocket", "NLP"],
    github: "https://github.com/darshanpanchal/ai-chatbot",
    live: "https://ai-chatbot-demo.vercel.app",
    status: "planned" as const,
    category: "other" as const,
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, mobile applications, 
            and innovative solutions. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
              status={project.status}
              category={project.category}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I&apos;m always excited to work on new projects and collaborate with other developers. 
              Whether you have an idea for a web application, mobile app, or any other software solution, 
              I&apos;d love to hear about it!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Let&apos;s Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
