"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: "work" | "education";
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Programmer Analyst",
    company: "DosePacker Inc. (Meditab India)",
    location: "India",
    period: "September 2024 - Present",
    description: "Currently working as an Angular Developer handling projects in React, Next.js, and Angular. Responsible for developing and maintaining web applications using modern frontend technologies.",
    type: "work",
    current: true,
  },
  {
    id: "2",
    title: "Programmer Analyst Trainee",
    company: "DosePacker Inc. (Meditab India)",
    location: "India",
    period: "March 2024 - September 2024",
    description: "Started as a trainee and completed a 6-month internship program. Successfully transitioned to a confirmed Programmer Analyst position, gaining hands-on experience in full-stack development.",
    type: "work",
  },
  {
    id: "3",
    title: "Bachelor of Engineering in Computer Science",
    company: "Gujarat Technological University",
    location: "Gujarat, India",
    period: "2020 - 2024",
    description: "Completed Bachelor of Engineering in Computer Science with focus on software development, algorithms, data structures, and modern programming languages. Gained strong foundation in computer science fundamentals.",
    type: "education",
  },
];

export function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My journey in software development and the experiences that shaped my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  {item.current && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary/20 rounded-full"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {item.current && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                      Current Position
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
