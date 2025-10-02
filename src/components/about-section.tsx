"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { 
  Code, 
  Coffee, 
  Gamepad2, 
  BookOpen, 
  Dumbbell, 
  Music,
  Camera,
  Plane,
  Heart,
  Lightbulb
} from "lucide-react";

const interests = [
  { name: "Coding", icon: <Code className="h-6 w-6" />, description: "Building amazing applications" },
  { name: "Coffee", icon: <Coffee className="h-6 w-6" />, description: "Fuel for creativity" },
  { name: "Gaming", icon: <Gamepad2 className="h-6 w-6" />, description: "Strategic thinking" },
  { name: "Reading", icon: <BookOpen className="h-6 w-6" />, description: "Continuous learning" },
  { name: "Fitness", icon: <Dumbbell className="h-6 w-6" />, description: "Healthy lifestyle" },
  { name: "Music", icon: <Music className="h-6 w-6" />, description: "Creative inspiration" },
  { name: "Photography", icon: <Camera className="h-6 w-6" />, description: "Capturing moments" },
  { name: "Travel", icon: <Plane className="h-6 w-6" />, description: "Exploring new places" },
];

const values = [
  {
    title: "Passion",
    icon: <Heart className="h-8 w-8" />,
    description: "I'm passionate about creating solutions that make a real difference in people's lives."
  },
  {
    title: "Innovation",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "I love exploring new technologies and finding creative ways to solve complex problems."
  },
  {
    title: "Quality",
    icon: <Code className="h-8 w-8" />,
    description: "I believe in writing clean, maintainable code and delivering high-quality products."
  },
];

export function AboutSection() {
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
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code. My journey, values, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/me.jpg"
                    alt="Darshan Panchal"
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Darshan Panchal</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 2 years of experience creating 
                digital solutions that make a difference. My journey in software development 
                started during my computer science studies, and I've been hooked ever since.
              </p>
              
              <p>
                What drives me is the ability to transform ideas into reality through code. 
                I love the challenge of solving complex problems and creating user experiences 
                that are both beautiful and functional. Whether it's building a responsive 
                web application or optimizing performance, I approach every project with 
                enthusiasm and attention to detail.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-primary">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            What I <span className="text-primary">Enjoy</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
              >
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {interest.icon}
                </div>
                <h3 className="font-semibold mb-1">{interest.name}</h3>
                <p className="text-xs text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm always excited to meet new people and discuss interesting projects. 
              Whether you want to collaborate, have a question, or just want to say hi, 
              I'd love to hear from you!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
