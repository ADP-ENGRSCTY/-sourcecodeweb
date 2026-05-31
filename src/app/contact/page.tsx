'use client';

import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Calendar } from 'lucide-react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission in Phase 2
    alert('Form submission will be implemented in Phase 2 with Resend integration');
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? Want to get involved? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rust focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rust focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rust focus:border-transparent transition-all"
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="events">Events</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rust focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rust/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-rust" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:taylorsengineering2021@gmail.com"
                        className="text-muted-foreground hover:text-rust transition-colors"
                      >
                        taylorsengineering2021@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-rust/10 p-3 rounded-lg">
                      <Instagram className="h-6 w-6 text-rust" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Instagram</h3>
                      <a 
                        href="https://www.instagram.com/tes.adp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-rust transition-colors"
                      >
                        @tes.adp
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-rust/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-rust" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Events Calendar</h3>
                      <a 
                        href="https://luma.com/tesadp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-rust transition-colors"
                      >
                        luma.com/tesadp
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-rust/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-rust" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Taylor&apos;s University<br />
                        American Degree Program (ADP)<br />
                        Subang Jaya, Malaysia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-iron-900 p-6 rounded-lg border border-iron-700">
                <h3 className="font-heading font-semibold text-xl mb-3">Office Hours</h3>
                <p className="text-muted-foreground mb-4">
                  Our team is typically available during regular campus hours. For urgent matters, 
                  please reach out via email or Instagram DM.
                </p>
                <p className="text-sm text-muted-foreground">
                  Response time: Within 24-48 hours
                </p>
              </div>
            </motion.div>
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
