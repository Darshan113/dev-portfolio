"use client";

import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Palette, 
  Database, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  ExternalLink,
  CheckCircle,
  CreditCard,
  Search,
  BarChart3,
  MessageCircle,
  Settings
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Frontend Development",
    description: "Custom responsive websites and web applications with modern technologies",
    features: [
      "Landing Pages",
      "Admin Dashboards", 
      "Portfolio Websites",
      "College Projects",
      "Responsive Design",
      "React & Next.js Development"
    ],
    popular: true
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Full Stack Development",
    description: "Complete web applications with frontend and backend development",
    features: [
      "REST API Development",
      "Database Setup & Design",
      "Backend Development",
      "Full Web Applications",
      "Authentication Systems",
      "Complete Project Solutions"
    ],
    popular: true
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Hosting & Deployment",
    description: "Professional hosting setup and deployment services",
    features: [
      "AWS Hosting Setup",
      "Vercel Deployment",
      "Netlify Deployment",
      "Domain Configuration",
      "SSL Certificate Setup",
      "Performance Optimization"
    ],
    popular: false
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "WordPress Development",
    description: "Custom WordPress websites and theme development",
    features: [
      "WordPress Theme Development",
      "Custom Plugin Development",
      "WordPress Customization",
      "Content Management Setup",
      "SEO Optimization",
      "WordPress Maintenance"
    ],
    popular: false
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Chat Bot Integration",
    description: "Interactive chat bots for enhanced user engagement",
    features: [
      "Website Chat Bot Integration",
      "Customer Support Bots",
      "Lead Generation Bots",
      "Custom Bot Development",
      "Multi-platform Integration",
      "Bot Analytics & Monitoring"
    ],
    popular: false
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Payment Integration",
    description: "Secure payment gateway integration for e-commerce and business websites",
    features: [
      "Stripe Payment Integration",
      "PayPal Integration",
      "Razorpay Setup",
      "E-commerce Store Development",
      "Shopping Cart Implementation",
      "Order Management Systems"
    ],
    popular: true
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "SEO & Analytics",
    description: "Search engine optimization and website analytics setup",
    features: [
      "SEO Optimization",
      "Google Analytics Setup",
      "Google Search Console",
      "Meta Tags & Schema",
      "Site Speed Optimization",
      "Keyword Research & Implementation"
    ],
    popular: false
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Business Integration",
    description: "Marketing and business tools integration for growth",
    features: [
      "Social Media Integration",
      "Email Marketing Setup",
      "Lead Generation Forms",
      "CRM Integration",
      "Google Ads Integration",
      "Business Dashboard Creation"
    ],
    popular: false
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Technical Support",
    description: "Website maintenance, optimization, and technical improvements",
    features: [
      "Bug Fixes & Debugging",
      "Performance Optimization",
      "Security Enhancements",
      "Database Migration",
      "API Integration",
      "Website Maintenance"
    ],
    popular: false
  }
];

const whyChooseMe = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Quality Work",
    description: "Clean, maintainable code and pixel-perfect designs"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Reliable Support",
    description: "Ongoing support and revisions until you're satisfied"
  }
];

function ServicesContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="text-primary">Services</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Professional web development and design services to bring your ideas to life. 
          From concept to deployment, I deliver high-quality solutions that drive results.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
              service.popular ? 'ring-2 ring-primary/20' : ''
            }`}
          >
            {service.popular && (
              <div className="absolute -top-3 left-6">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </span>
              </div>
            )}
            
            <div className="text-primary mb-4">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Me */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-primary mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your requirements and create something amazing together. 
          I&apos;m here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://www.fiverr.com/s/lj2amgg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View My Fiverr Profile
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Me Directly
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesContent />
    </Layout>
  );
}