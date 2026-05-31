'use client';

import Link from 'next/link';
import { Header } from '@/components/ui/header';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { TextRotate } from '@/components/ui/text-rotate';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Wrench, Users, Calendar, Lightbulb, Award, Building2, Mail, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatedGradientBackground 
          Breathing={true}
          breathingRange={8}
          animationSpeed={0.03}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Wrench className="h-12 w-12 text-rust" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              ADP Engineering Society
            </h1>
            
            <div className="text-2xl md:text-4xl font-heading mb-8 flex flex-wrap items-center justify-center gap-2">
              <span>Building, learning, and</span>
              <TextRotate
                texts={[
                  "leading",
                  "innovating",
                  "creating",
                  "collaborating",
                  "growing"
                ]}
                mainClassName="text-rust px-3 overflow-hidden justify-center rounded-lg"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
              <span>— together.</span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join Taylor&apos;s University&apos;s premier engineering society. 
              Grow through hands-on workshops, industry visits, and competitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/membership">Join the Society</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="/events">See Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering ADP students through meaningful experiences
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Lightbulb,
                title: "Workshops",
                description: "Hands-on technical workshops covering Arduino, ESP32, IoT, ML, and more. Learn by building real projects.",
                color: "text-rust"
              },
              {
                icon: Building2,
                title: "Industry Visits",
                description: "Visit cutting-edge facilities and meet industry professionals. Bridge the gap between classroom and career.",
                color: "text-rust"
              },
              {
                icon: Award,
                title: "Competitions",
                description: "Participate in hackathons, buildathons, and engineering challenges. Showcase your skills and win prizes.",
                color: "text-rust"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
              >
                <GlowCard glowColor="orange" customSize className="h-full p-6">
                  <div className="space-y-4">
                    <item.icon className={`h-12 w-12 ${item.color}`} />
                    <h3 className="text-2xl font-heading font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "200+", label: "Active Members" },
              { number: "50+", label: "Workshops Held" },
              { number: "15+", label: "Partner Organizations" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-rust mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-iron-900 to-iron-700 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us today and be part of a community that empowers engineering students to innovate, 
              collaborate, and build a future prepared for industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/membership">Join Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-iron-900 border-t border-iron-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-6 w-6 text-rust" />
                <span className="font-heading font-bold text-lg">ADP EngSoc</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building, learning, and leading — together.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Society</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-rust transition-colors">About</Link></li>
                <li><Link href="/team" className="text-muted-foreground hover:text-rust transition-colors">Team</Link></li>
                <li><Link href="/membership" className="text-muted-foreground hover:text-rust transition-colors">Membership</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/events" className="text-muted-foreground hover:text-rust transition-colors">Events</Link></li>
                <li><Link href="/projects" className="text-muted-foreground hover:text-rust transition-colors">Projects</Link></li>
                <li><Link href="/sponsors" className="text-muted-foreground hover:text-rust transition-colors">Sponsors</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <a href="https://www.instagram.com/tes.adp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-rust transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="mailto:taylorsengineering2021@gmail.com" className="text-muted-foreground hover:text-rust transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Taylor&apos;s University – ADP<br />
                <a href="mailto:taylorsengineering2021@gmail.com" className="hover:text-rust transition-colors">
                  taylorsengineering2021@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-iron-700 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ADP Engineering Society, Taylor&apos;s University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
