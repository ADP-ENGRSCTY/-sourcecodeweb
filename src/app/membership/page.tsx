'use client';

import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, Star, Users, Calendar, Trophy, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function MembershipPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const benefits = [
    {
      icon: Star,
      title: "Priority Access",
      description: "Get first dibs on limited-seat workshops and events"
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with seniors and alumni for guidance"
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access members-only workshops and networking sessions"
    },
    {
      icon: Trophy,
      title: "Competition Support",
      description: "Team formation help and resources for competitions"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to tutorials, guides, and project materials"
    }
  ];

  const faqs = [
    {
      question: "Who can join?",
      answer: "Any ADP student at Taylor's University is welcome to join! All majors and skill levels are encouraged."
    },
    {
      question: "Is there a membership fee?",
      answer: "Membership is currently free. We want to make it accessible to all ADP students."
    },
    {
      question: "What if I'm a beginner?",
      answer: "Perfect! We design workshops for all skill levels. Many of our most active members started as complete beginners."
    },
    {
      question: "How active do I need to be?",
      answer: "It's entirely up to you! Attend as many or as few events as your schedule allows. There's no minimum commitment."
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
              Join ADP EngSoc
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Become part of Taylor&apos;s premier engineering community and unlock exclusive benefits
            </p>
            <Button size="lg" className="text-lg" asChild>
              <Link href="/contact">Join Now (Free)</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Membership Benefits</h2>
            <p className="text-lg text-muted-foreground">
              What you get as an ADP EngSoc member
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-iron-900 p-6 rounded-lg border border-iron-700 hover:border-rust transition-colors"
              >
                <benefit.icon className="h-10 w-10 text-rust mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              How to Join
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Get in Touch",
                  description: "Contact us via email or Instagram to express your interest"
                },
                {
                  step: "2",
                  title: "Fill Out Form",
                  description: "Complete a quick form with your name, program, and cohort"
                },
                {
                  step: "3",
                  title: "Join the Community",
                  description: "Get added to our WhatsApp group and start participating in events!"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 items-start bg-background/50 p-6 rounded-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-rust rounded-full flex items-center justify-center font-heading font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-heading font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-iron-900 p-6 rounded-lg border border-iron-700"
                >
                  <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                    <Check className="h-5 w-5 text-rust flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </motion.div>
              ))}
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
