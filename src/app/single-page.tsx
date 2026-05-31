'use client';

import { useEffect } from 'react';
import { Header } from '@/components/ui/header';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { TextRotate } from '@/components/ui/text-rotate';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { TEAM } from '@/data/team';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { motion } from 'framer-motion';
import { Wrench, Target, Eye, Users, Calendar, Lightbulb, Award, Building2, Mail, Instagram, User, Linkedin, Trophy, Star, BookOpen, Check } from 'lucide-react';
import Lenis from 'lenis';

export default function SinglePageArchive() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const eventImages = [
    { src: '/events/20250404_164436.jpg', alt: 'Event 1' },
    { src: '/events/20250404_171812.jpg', alt: 'Event 2' },
    { src: '/events/20250404_192445.jpg', alt: 'Event 3' },
    { src: '/events/IMG_20250404_170100.jpg', alt: 'Event 4' },
    { src: '/events/IMG_20250714_133926.jpg', alt: 'Event 5' },
    { src: '/events/20250404_164436.jpg', alt: 'Event 6' },
    { src: '/events/IMG_20250404_170100.jpg', alt: 'Event 7' },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatedGradientBackground Breathing={true} breathingRange={8} animationSpeed={0.03} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Wrench className="h-12 w-12 text-rust mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">ADP Engineering Society</h1>
            <div className="text-2xl md:text-4xl font-heading mb-8 flex flex-wrap items-center justify-center gap-2">
              <span>Building, learning, and</span>
              <TextRotate texts={["leading", "innovating", "creating"]} mainClassName="text-rust px-3" rotationInterval={2500} />
              <span>— together.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild><a href="#membership">Join the Society</a></Button>
              <Button size="lg" variant="outline" asChild><a href="#events">See Events</a></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Gallery with Zoom Parallax */}
      <section id="events" className="relative">
        <div className="text-center py-12 px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">Our Events</h2>
          <p className="text-muted-foreground">Scroll to explore our community in action</p>
        </div>
        <ZoomParallax images={eventImages} />
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-4"><Target className="h-8 w-8 text-rust" /><h2 className="text-3xl font-heading font-bold">Our Mission</h2></div>
            <p className="text-lg text-muted-foreground mb-12">To create a supportive, safe, and empowering environment where members grow through meaningful experiences, hands-on activities, and workshops.</p>
            <div className="flex items-center gap-3 mb-4"><Eye className="h-8 w-8 text-rust" /><h2 className="text-3xl font-heading font-bold">Our Vision</h2></div>
            <p className="text-lg text-muted-foreground">To lead by example and empower engineering students to innovate, collaborate, and build a community prepared for the challenges of the industry.</p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Meet Our Team</h2>
          <Tabs defaultValue="All">
            <div className="flex justify-center mb-12">
              <TabsList className="flex-wrap h-auto">
                {['All', 'Executive', 'Events', 'Marketing', 'PR', 'Finance', 'Engineering', 'Secretary'].map(d => <TabsTrigger key={d} value={d}>{d}</TabsTrigger>)}
              </TabsList>
            </div>
            {['All', 'Executive', 'Events', 'Marketing', 'PR', 'Finance', 'Engineering', 'Secretary'].map(dept => (
              <TabsContent key={dept} value={dept}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {TEAM.filter(m => dept === 'All' || m.department === dept).map(member => (
                    <div key={member.name} className="bg-iron-900 rounded-lg border border-iron-700 hover:border-rust transition-all">
                      <div className="aspect-square relative bg-iron-700 flex items-center justify-center">
                        <User className="h-16 w-16 text-iron-600" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-semibold">{member.name}</h3>
                        {member.nickname && <p className="text-sm text-rust">&quot;{member.nickname}&quot;</p>}
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-rust mt-2"><Linkedin className="h-3 w-3" />LinkedIn</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Join ADP EngSoc</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Star, title: "Priority Access", desc: "First dibs on workshops" },
              { icon: Users, title: "Mentorship", desc: "Connect with seniors" },
              { icon: Trophy, title: "Competitions", desc: "Team support" },
              { icon: BookOpen, title: "Resources", desc: "Tutorials & guides" }
            ].map((b, i) => (
              <div key={i} className="bg-background p-6 rounded-lg border border-iron-700">
                <b.icon className="h-8 w-8 text-rust mb-3" />
                <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild><a href="#contact">Join Now (Free)</a></Button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-4">Partner With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">Support engineering education and connect with talented students</p>
          <Button size="lg" asChild><a href="#contact">Become a Sponsor</a></Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-rust/10 p-3 rounded-lg"><Mail className="h-6 w-6 text-rust" /></div>
              <div><h3 className="font-heading font-semibold mb-1">Email</h3><a href="mailto:taylorsengineering2021@gmail.com" className="text-muted-foreground hover:text-rust">taylorsengineering2021@gmail.com</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-rust/10 p-3 rounded-lg"><Instagram className="h-6 w-6 text-rust" /></div>
              <div><h3 className="font-heading font-semibold mb-1">Instagram</h3><a href="https://www.instagram.com/tes.adp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-rust">@tes.adp</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-rust/10 p-3 rounded-lg"><Calendar className="h-6 w-6 text-rust" /></div>
              <div><h3 className="font-heading font-semibold mb-1">Events</h3><a href="https://luma.com/tesadp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-rust">luma.com/tesadp</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-iron-900 border-t border-iron-700 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ADP Engineering Society, Taylor&apos;s University.</p>
        </div>
      </footer>
    </div>
  );
}
