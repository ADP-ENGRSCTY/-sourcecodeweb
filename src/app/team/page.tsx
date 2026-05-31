'use client';

import { Header } from '@/components/ui/header';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TEAM } from '@/data/team';
import { Linkedin, User } from 'lucide-react';
import Image from 'next/image';

export default function TeamPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const departments = ['All', 'Executive', 'Events', 'Marketing', 'PR', 'Finance', 'Engineering', 'Secretary'];

  const filterByDepartment = (dept: string) => {
    if (dept === 'All') return TEAM;
    return TEAM.filter(member => member.department === dept);
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
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The dedicated leaders and organizers making ADP EngSoc a success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="flex-wrap h-auto">
                {departments.map((dept) => (
                  <TabsTrigger key={dept} value={dept}>
                    {dept}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {departments.map((dept) => (
              <TabsContent key={dept} value={dept}>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    animate: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {filterByDepartment(dept)
                    .sort((a, b) => a.order - b.order)
                    .map((member) => (
                      <motion.div
                        key={member.name}
                        variants={fadeUp}
                        className="group"
                      >
                        <div className="bg-iron-900 rounded-lg overflow-hidden border border-iron-700 hover:border-rust transition-all duration-300 hover:shadow-lg hover:shadow-rust/20">
                          <div className="aspect-square relative bg-iron-700 flex items-center justify-center">
                            {/* Placeholder avatar - replace with actual images */}
                            <User className="h-24 w-24 text-iron-600" />
                            {/* Uncomment when images are available:
                            <Image
                              src={member.avatarUrl}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                            */}
                          </div>
                          <div className="p-4">
                            <h3 className="font-heading font-semibold text-lg mb-1">
                              {member.name}
                            </h3>
                            {member.nickname && (
                              <p className="text-sm text-rust mb-2">
                                &quot;{member.nickname}&quot;
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground mb-3">
                              {member.role}
                            </p>
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-rust hover:text-rust/80 transition-colors"
                              >
                                <Linkedin className="h-4 w-4" />
                                <span>LinkedIn</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
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
