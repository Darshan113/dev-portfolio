"use client";

import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Briefcase
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "dppanchal106@gmail.com",
    href: "mailto:dppanchal106@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+91 9327870121",
    href: "tel:+919327870121",
    description: "Call me for urgent matters",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Nikol, Ahmedabad",
    href: "#",
    description: "Based in Gujarat, India",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/Darshan113",
    color: "hover:text-gray-800",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/darshan-panchal-5519a9253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:text-blue-600",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="h-6 w-6" />,
    href: "https://wa.me/9327870121",
    color: "hover:text-green-600",
  },
  {
    name: "Fiverr",
    icon: <Briefcase className="h-6 w-6" />,
    href: "https://www.fiverr.com/s/lj2amgg",
    color: "hover:text-green-500",
  },
];

export function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-12"
    >
      <div>
        <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m always excited to hear about new opportunities and interesting projects. 
          Whether you want to collaborate, have a question, or just want to say hi, 
          feel free to reach out!
        </p>
      </div>

      {/* Contact Methods */}
        <div className="space-y-8">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            whileHover={{ x: 10 }}
            className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <div className="text-primary group-hover:scale-110 transition-transform">
              {method.icon}
            </div>
            <div>
              <h4 className="font-semibold">{method.title}</h4>
              <p className="text-muted-foreground text-sm">{method.value}</p>
              <p className="text-muted-foreground text-xs">{method.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="font-semibold mb-4">Follow me</h4>
          <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 bg-card border border-border rounded-lg text-muted-foreground transition-colors ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* CV Download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Download className="h-8 w-8 text-primary" />
          <div>
            <h4 className="font-semibold">Download my CV</h4>
            <p className="text-muted-foreground text-sm">
              Get a copy of my resume in PDF format
            </p>
          </div>
        </div>
        <motion.a
          href="/cv.pdf"
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </motion.a>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
            </div>
            <div className="absolute inset-0 w-8 h-8 bg-primary/40 rounded-full animate-ping opacity-30" />
          </div>
          <div>
            <h4 className="font-semibold">Available for new projects</h4>
            <p className="text-muted-foreground text-sm">
            I&apos;m currently open to freelance opportunities. Alongside my professional role, I provide web services and collaborate on exciting projects.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium">
            Status: Open to freelance opportunities
          </span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
