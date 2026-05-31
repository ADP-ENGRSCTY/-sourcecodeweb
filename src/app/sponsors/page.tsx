'use client';

import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2, Users, Trophy, TrendingUp, Download } from 'lucide-react';
import Link from 'next/link';

export default function SponsorsPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const benefits = [
    {
      icon: Users,
      title: "Access to Talent",
      description: "Connect with motivated engineering students for internships and recruitment"
    },
    {
      icon: Building2,
      title: "Brand Visibility",
      description: "Logo placement on website, social media, and event materials"
    },
    {
      icon: Trophy,
      title: "Event Presence",
      description: "Speaking opportunities, booths, and judging roles at competitions"
    },
    {
      icon: TrendingUp,
      title: "Community Impact",
      description: "Support education and help shape the next generation of engineers"
    }
  ];

  const tiers = [
    {
      name: "Bronze",
      price: "Contact Us",
      features: [
        "Logo on website",
        "Social media mentions",
        "Event announcements inclusion"
      ]
    },
    {
      name: "Silver",
      price: "Contact Us",
      features: [
        "All Bronze benefits",
        "Logo on event materials",
        "Access to resume database",
        "1 workshop sponsorship"
      ],
      highlighted: true
    },
    {
      name: "Gold",
      price: "Contact Us",
      features: [
        "All Silver benefits",
        "Booth at major events",
        "Speaking opportunity",
        "Judging panel seat",
        "Recruiting session"
      ]
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
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Support engineering education and connect with Taylor&apos;s brightest ADP students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Become a Sponsor</Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Prospectus (Coming Soon)
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Why Sponsor ADP EngSoc?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with us to access motivated engineering talent and make a meaningful impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Audience Stats */}
      <section className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Reach</h2>
            <p className="text-lg text-muted-foreground">
              Access to a diverse community of engineering students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            {[
              { number: "200+", label: "Active Members" },
              { number: "500+", label: "Event Attendees/Year" },
              { number: "50+", label: "Workshops & Events" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-5xl font-heading font-bold text-rust mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Sponsorship Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Choose the partnership level that fits your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-lg p-6 ${
                  tier.highlighted
                    ? 'bg-rust/10 border-2 border-rust scale-105'
                    : 'bg-iron-900 border border-iron-700'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-heading font-bold text-rust">{tier.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-rust mt-0.5">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.highlighted ? "default" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-iron-900">
        <div className="container mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create a partnership that benefits both your organization 
              and our student community.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
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
