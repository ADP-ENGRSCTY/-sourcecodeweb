'use client';

import { useEffect } from 'react';
import { Header } from '@/components/ui/header';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { TextRotate } from '@/components/ui/text-rotate';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { GlowingShadow } from '@/components/ui/glowing-shadow';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ContactForm } from '@/components/ui/contact-form';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';
import { Footer } from '@/components/ui/footer-section';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { TEAM } from '@/data/team';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { SparklesCore } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Wrench, Target, Eye, Users, Calendar, Lightbulb, Award, Building2, Mail, Instagram, Linkedin, Trophy, Star, BookOpen, Check } from 'lucide-react';
import Lenis from 'lenis';
import Image from 'next/image';

export default function SinglePage() {
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

  // DSC07001.jpg as the CENTER image (index 0), surrounded by other event images and VIDEOS
  const eventImages = [
    { src: '/events/DSC07001.jpg', alt: 'ADP EngSoc Main Event' },
    { src: '/events/IMG_6581.jpg', alt: 'Team Event' },
    { src: '/events/20250404_164436.jpg', alt: 'Arduino Workshop' },
    { src: '/events/IMG_3792.mp4', alt: 'Welcome Party Video', isVideo: true },
    { src: '/events/IMG_5411_(1).jpg', alt: 'Team Activities' },
    { src: '/events/IMG_6277.mp4', alt: 'Event Video', isVideo: true },
    { src: '/events/IMG_6333.jpg', alt: 'Engineering Project' },
  ];

  // Image slider images - ALL event images
  const sliderImages = [
    '/events/IMG_6581.jpg',
    '/events/20250404_164436.jpg',
    '/events/20250404_171812.jpg',
    '/events/IMG_20250404_170100.jpg',
    '/events/IMG_6333.jpg',
    '/events/20250404_192445.jpg',
    '/events/IMG_20250714_133926.jpg',
    '/events/IMG_6105.jpg',
    '/events/IMG_6135.jpg',
    '/events/WhatsApp Image 2025-11-01 at 20.45.44_916c50a6.jpg',
    '/events/IMG_5411_(1).jpg',
  ];

  // Event details with posters - UPDATED with new events
  const pastEvents = [
    {
      title: 'Welcome Party',
      date: 'October 27, 2024',
      description: 'Halloween-themed welcome party with food provided, thrilling games, and costume contest. Entry fee: RM5.',
      poster: '/events/posters/WhatsApp Image 2025-10-18 at 11.25.53_b3a43e4c.jpg',
      images: ['/events/WhatsApp Image 2025-11-01 at 20.45.44_916c50a6.jpg']
    },
    {
      title: 'Arduino IoT Workshop',
      date: 'April 4, 2025',
      description: 'Hands-on workshop on Arduino programming and IoT basics. Collaborated with Taylor\'s Robotics Club, sponsored by Cytron Technologies. Limited to 36 participants with refreshments provided.',
      poster: '/events/posters/[Poster_A4] Arduino Workshop .png',
      images: ['/events/20250404_164436.jpg', '/events/IMG_20250404_170100.jpg']
    },
    {
      title: 'Pop-Up Fundraising',
      date: 'July 2-3, 2025',
      description: 'Community fundraising event at SLC Walkway to support engineering society activities. "Donate today. Be the reason they believe in a better tomorrow."',
      poster: '/events/posters/fundraising.png',
      images: ['/events/20250404_192445.jpg']
    },
    {
      title: 'STEM Challenge',
      date: '2024',
      description: 'Hands-on problem-solving activity engaging students in Science, Technology, Engineering, and Mathematics fields.',
      poster: '/events/posters/image.png',
      images: ['/events/IMG_5411_(1).jpg', '/events/IMG_6333.jpg']
    },
  ];

  // Executive team for animated tooltip
  const executiveTeam = [
    { id: 1, name: 'Tin Su Su Tun', designation: 'President', image: '/team/tinsu.jpg' },
    { id: 2, name: 'Joel John Tan', designation: 'Vice President', image: '/team/joel.jpg' },
    { id: 3, name: 'Shannon Choo', designation: 'Vice President', image: '/team/shannon.jpg' },
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
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticleshero"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#BB3A1A"
            speed={0.5}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Image src="/brand/logo.png" alt="ADP TES Logo" width={96} height={96} className="h-24 w-24 mx-auto mb-4 object-contain" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">ADP TES</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">Taylor&apos;s Engineering Society</p>
            <div className="text-2xl md:text-4xl font-heading mb-8 flex flex-wrap items-center justify-center gap-2">
              <span>Building, learning, and</span>
              <TextRotate texts={["leading", "innovating", "creating"]} mainClassName="text-rust px-3" rotationInterval={2500} />
              <span>— together.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <ShinyButton href="#membership">Join the Society</ShinyButton>
              <ShinyButton href="#events" className="bg-transparent">See Events</ShinyButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Mascot */}
      <section id="about" className="relative py-20 px-4 bg-iron-900 overflow-hidden">
        <FlickeringGrid className="z-0 absolute inset-0 size-full" squareSize={4} gridGap={6} color="#BB3A1A" maxOpacity={0.2} flickerChance={0.1} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mission & Vision Content */}
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-rust" />
                <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-12">
                To create a supportive, safe, and empowering environment where members grow through meaningful experiences, hands-on activities, and workshops.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-rust" />
                <h2 className="text-3xl font-heading font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To lead by example and empower engineering students to innovate, collaborate, and build a community prepared for the challenges of the industry.
              </p>
            </motion.div>
            
            {/* Schrödinger Cat Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rust/30 to-orange-500/20 blur-3xl" />
              <div className="relative z-10 max-w-md mx-auto" style={{ filter: 'grayscale(1) contrast(1.3) brightness(0.95)' }}>
                <DotLottieReact
                  src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-6 space-y-2">
                <h3 className="text-xl font-heading font-bold text-rust">Schrödinger Cat Mascot of ADP TES</h3>
                <p className="text-sm text-muted-foreground italic">
                  Exploring the quantum possibilities of engineering innovation
                </p>
              </div>
            </motion.div>
          </div>
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

      {/* Past Events Timeline */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Past Events Timeline</h2>
            <p className="text-muted-foreground text-lg">Highlights from our recent activities and workshops</p>
          </motion.div>
          
          {/* Timeline Layout */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rust via-rust/50 to-transparent" />
            
            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-iron-900 rounded-lg overflow-hidden border border-iron-700 hover:border-rust transition-all group">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={event.poster}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-rust text-sm font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </p>
                        <h3 className="font-heading font-bold text-2xl mb-3">{event.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 rounded-full bg-rust border-4 border-background shadow-lg shadow-rust/50" />
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Auto Slider */}
      <section className="relative">
        <ImageAutoSlider images={sliderImages} speed={25} />
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-12">
            <motion.div {...fadeUp} className="text-center md:text-left">
              <h2 className="text-4xl font-heading font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">The passionate leaders driving ADP TES forward</p>
            </motion.div>
            
            {/* Small Mascot in Team Section */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <div className="w-32 h-32" style={{ filter: 'grayscale(1) contrast(1.3) brightness(0.95)' }}>
                <DotLottieReact
                  src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs text-muted-foreground italic text-center mt-2">
                In a superposition of leading and learning
              </p>
            </motion.div>
          </div>

          {/* Executive Team with Tooltips */}
          <motion.div {...fadeUp} className="mb-16">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">Executive Committee</h3>
            <div className="flex justify-center mb-8">
              <AnimatedTooltip items={executiveTeam} />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TEAM.filter(m => m.department === 'Executive').map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-iron-900 rounded-lg border border-iron-700 hover:border-rust transition-all overflow-hidden"
                >
                  <div className="aspect-square relative bg-iron-800">
                    <Image
                      src={member.avatarUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-heading font-bold text-lg mb-1">{member.name}</h4>
                    <p className="text-rust text-sm font-semibold mb-2">{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rust transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Team Members */}
          <Tabs defaultValue="All">
            <div className="flex justify-center mb-8">
              <TabsList className="flex-wrap h-auto">
                {['All', 'Events', 'Marketing', 'PR', 'Finance', 'Engineering', 'Secretary'].map(d => <TabsTrigger key={d} value={d}>{d}</TabsTrigger>)}
              </TabsList>
            </div>
            {['All', 'Events', 'Marketing', 'PR', 'Finance', 'Engineering', 'Secretary'].map(dept => (
              <TabsContent key={dept} value={dept}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {TEAM.filter(m => m.department !== 'Executive' && (dept === 'All' || m.department === dept)).map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-iron-900 rounded-lg border border-iron-700 hover:border-rust transition-all p-4 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-iron-700 flex items-center justify-center">
                        <Users className="h-8 w-8 text-iron-500" />
                      </div>
                      <h4 className="font-heading font-semibold text-sm mb-1">{member.name}</h4>
                      <p className="text-xs text-rust mb-1">{member.role}</p>
                      <p className="text-xs text-muted-foreground">{member.department}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-rust mt-2 hover:underline"
                        >
                          <Linkedin className="h-3 w-3" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="relative py-20 px-4 bg-iron-900 overflow-hidden">
        <FlickeringGrid className="z-0 absolute inset-0 size-full" squareSize={4} gridGap={6} color="#BB3A1A" maxOpacity={0.15} flickerChance={0.15} />
        <div className="container mx-auto max-w-4xl relative z-10">
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
            <ShinyButton href="#contact">Join Now (Free)</ShinyButton>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-4">Partner With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">Support engineering education and connect with talented students</p>
          <ShinyButton href="#contact">Become a Sponsor</ShinyButton>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Have questions? We'd love to hear from you!</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Animated Cat Mascot + Contact Info */}
            <div className="space-y-8">
              {/* Lottie Cat Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rust/20 to-purple-500/20 blur-3xl" />
                <div className="relative z-10 max-w-sm mx-auto" style={{ filter: 'grayscale(1) contrast(1.3) brightness(0.95)' }}>
                  <DotLottieReact
                    src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                    loop
                    autoplay
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center mt-6 space-y-2">
                  <h3 className="text-xl font-heading font-bold text-rust">Schrödinger Cat Mascot</h3>
                  <p className="text-sm text-muted-foreground italic">
                    In a superposition of helping and observing
                  </p>
                </div>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 bg-background p-6 rounded-lg border border-iron-700"
              >
                <h3 className="font-heading font-bold text-xl mb-4">Other Ways to Connect</h3>
                <div className="flex items-start gap-4">
                  <div className="bg-rust/10 p-3 rounded-lg"><Mail className="h-6 w-6 text-rust" /></div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <a href="mailto:taylorsengineering2021@gmail.com" className="text-muted-foreground hover:text-rust transition-colors text-sm">
                      taylorsengineering2021@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rust/10 p-3 rounded-lg"><Instagram className="h-6 w-6 text-rust" /></div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/tes.adp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-rust transition-colors text-sm">
                      @tes.adp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rust/10 p-3 rounded-lg"><Calendar className="h-6 w-6 text-rust" /></div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Events</h4>
                    <a href="https://luma.com/tesadp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-rust transition-colors text-sm">
                      luma.com/tesadp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
