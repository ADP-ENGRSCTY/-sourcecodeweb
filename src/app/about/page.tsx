'use client';

import { Header } from '@/components/ui/header';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Lightbulb, Trophy } from 'lucide-react';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "Creating a supportive and safe environment for all members"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Welcoming students from all backgrounds and skill levels"
    },
    {
      icon: Lightbulb,
      title: "Curiosity",
      description: "Fostering a passion for learning and experimentation"
    },
    {
      icon: Trophy,
      title: "Craft",
      description: "Developing practical skills through hands-on projects"
    },
    {
      icon: Target,
      title: "Leadership",
      description: "Empowering members to lead and inspire others"
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
              About ADP EngSoc
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering engineering students to innovate, collaborate, and build a community 
              prepared for the challenges of the industry and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeIn} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-rust" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create a supportive, safe, and empowering environment where members grow through 
              meaningful experiences, hands-on activities, and workshops, developing strong teamwork, 
              leadership, and practical skills to thrive in both their academic journey and future careers.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-8 w-8 text-rust" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To lead by example and empower engineering students to innovate, collaborate, and build 
              a community prepared for the challenges of the industry and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is ADP Section */}
      <section className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
              What is ADP?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                The American Degree Program (ADP) is a unique 2+2 pathway that allows students to complete 
                their first two years of engineering education at Taylor&apos;s University in Malaysia, followed by 
                two years at a partner university in the United States.
              </p>
              <p>
                This program provides students with an internationally recognized degree while experiencing 
                education systems in both Asia and North America. The ADP Engineering Society serves as the 
                central hub for students in this program, providing community, support, and opportunities for 
                growth.
              </p>
              <div className="bg-background/50 p-6 rounded-lg mt-8">
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Program Structure</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-rust font-bold">Years 1-2:</span>
                    <span>Foundation studies at Taylor&apos;s University, Malaysia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rust font-bold">Years 3-4:</span>
                    <span>Complete degree at partner university in the USA</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-iron-900 p-6 rounded-lg border border-iron-700 hover:border-rust transition-colors"
              >
                <value.icon className="h-10 w-10 text-rust mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
