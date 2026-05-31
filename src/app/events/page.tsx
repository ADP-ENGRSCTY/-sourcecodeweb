'use client';

import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  // Placeholder events - will be replaced with dynamic data in Phase 2
  const upcomingEvents = [
    {
      title: "Arduino Workshop Series",
      date: "Coming Soon",
      time: "2:00 PM - 5:00 PM",
      venue: "Engineering Lab A",
      capacity: 30,
      tags: ["Workshop", "Arduino", "IoT"],
      description: "Learn the basics of Arduino programming and build your first IoT project."
    },
    {
      title: "Industry Visit: Tech Company",
      date: "Coming Soon",
      time: "9:00 AM - 1:00 PM",
      venue: "Off Campus",
      capacity: 25,
      tags: ["Industry Visit", "Networking"],
      description: "Visit a leading tech company and meet professionals in the field."
    },
    {
      title: "Buildathon 2026",
      date: "Coming Soon",
      time: "All Day",
      venue: "Main Campus",
      capacity: 100,
      tags: ["Competition", "Hackathon"],
      description: "48-hour buildathon challenging teams to create innovative solutions."
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
              Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our workshops, industry visits, and competitions to enhance your skills and network
            </p>
            <Button size="lg" variant="outline" asChild>
              <a href="https://luma.com/tesadp" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Full Calendar
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">
              Stay tuned for exciting events coming your way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-iron-900 rounded-lg border border-iron-700 hover:border-rust transition-all overflow-hidden group"
              >
                <div className="h-2 bg-gradient-to-r from-rust to-rust/50" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-rust/20 text-rust"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-rust transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.capacity} spots</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" disabled>
                    Register (Coming Soon)
                  </Button>
                </div>
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
              Want to Suggest an Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have an idea for a workshop, industry visit, or competition? We&apos;d love to hear from you!
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
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
