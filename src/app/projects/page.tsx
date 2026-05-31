'use client';

import { Header } from '@/components/ui/header';
import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Cpu, Lightbulb, Zap, Code } from 'lucide-react';

export default function ProjectsPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const projectCategories = [
    {
      icon: Cpu,
      title: "Arduino & ESP32",
      description: "Microcontroller projects from basics to advanced IoT applications",
      color: "text-rust"
    },
    {
      icon: Lightbulb,
      title: "IoT Solutions",
      description: "Internet of Things projects connecting the physical and digital worlds",
      color: "text-rust"
    },
    {
      icon: Zap,
      title: "Mechanical Engineering",
      description: "CAD designs, prototyping, and physical engineering challenges",
      color: "text-rust"
    },
    {
      icon: Code,
      title: "Software & ML",
      description: "Machine learning models, web apps, and software solutions",
      color: "text-rust"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-iron-900 to-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore innovative projects built by our members and showcase your own creations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Project Categories</h2>
            <p className="text-lg text-muted-foreground">
              Our members work on diverse engineering challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlowCard glowColor="orange" customSize className="h-full p-6">
                  <div className="space-y-4">
                    <category.icon className={`h-12 w-12 ${category.color}`} />
                    <h3 className="text-2xl font-heading font-semibold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Project Showcase Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re building a comprehensive gallery of member projects. Check back soon to see 
              detailed project pages with descriptions, materials lists, code repositories, and photo galleries.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-rust/20 rounded-lg text-rust">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rust"></span>
              </span>
              <span className="font-medium">Phase 2 Feature</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-iron-900 border-t border-iron-700 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ADP Engineering Society, Taylor&apos;s University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
