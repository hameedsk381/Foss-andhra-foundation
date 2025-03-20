"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Megaphone, Users, Calendar, Globe, CheckCircle, ArrowRight, Image, FileText } from 'lucide-react';

export default function FOSSpeaksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection variant="fadeDown">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="fosspeaks" className="px-3 py-1 font-medium">
              Program
            </Badge>
            <h1 className="text-4xl font-bold">FOSSpeaks</h1>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fosspeaks rounded-full flex items-center justify-center text-white">
              <Megaphone className="h-8 w-8" />
            </div>
            <p className="text-xl text-fosspeaks">
              Advocacy program for free and open-source technology for society.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="prose prose-lg max-w-none mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  FOSSpeaks is FOSS Andhra's advocacy and outreach program designed to raise awareness about the benefits
                  of free and open-source software among policymakers, educational institutions, businesses, and the
                  general public. We believe that informed advocacy is essential for creating an environment where open
                  source solutions can thrive.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Through FOSSpeaks, we organize awareness campaigns, policy discussions, media outreach, and public
                  events to promote the adoption of open source principles and technologies. Our advocacy efforts are
                  backed by research, case studies, and success stories that demonstrate the value of open source.
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Mission
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  To advocate for policies, practices, and cultural shifts that promote the adoption of free and
                  open-source technologies across all sectors of society, creating a more inclusive, transparent, and
                  innovative digital ecosystem.
                </motion.p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Megaphone className="mr-2 h-5 w-5 text-fosspeaks" />
                        Public Awareness
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Raising awareness about the benefits of open source through campaigns, media outreach, and public
                        events.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-fosspeaks" />
                        Policy Advocacy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Working with policymakers to develop and implement policies that support open source adoption.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-fosspeaks" />
                        Community Building
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Creating networks of advocates, ambassadors, and champions who promote open source in their
                        communities.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-fosspeaks/5 p-8 rounded-lg my-12 relative overflow-hidden"
              >
                <motion.div
                  className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-fosspeaks/10"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Become an Advocate</h3>
                  <p className="mb-6">
                    Join our network of FOSS advocates and help us spread the message about the benefits of free and
                    open-source software in your community, institution, or organization.
                  </p>
                  <Link href="/programs/fosspeaks/advocate">
                    <AnimatedButton variant="fosspeaks">Become an Advocate</AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="initiatives" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <AnimatedSection variant="fadeLeft">
                  <Card>
                    <CardHeader>
                      <CardTitle>FOSS in Education Campaign</CardTitle>
                      <CardDescription>Promoting open source in educational institutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        A comprehensive campaign to promote the adoption of open source software in schools, colleges, and
                        universities across Andhra Pradesh.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Workshops for educators on open source alternatives</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Development of curriculum materials on FOSS</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Student ambassador programs in colleges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Case studies of successful FOSS implementations</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/programs/fosspeaks/initiatives/education" className="w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight">
                  <Card>
                    <CardHeader>
                      <CardTitle>Open Government Initiative</CardTitle>
                      <CardDescription>Advocating for open source in governance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Working with government departments and agencies to promote the adoption of open source solutions
                        for transparency, efficiency, and cost-effectiveness.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Policy recommendations for open source adoption</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Training programs for government officials</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Pilot projects demonstrating FOSS benefits</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Cost-benefit analyses of open source solutions</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/programs/fosspeaks/initiatives/government" className="w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeLeft" delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Digital Rights Campaign</CardTitle>
                      <CardDescription>Promoting digital rights and freedoms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Advocating for digital rights, privacy, and freedom through the adoption of open source
                        technologies and open standards.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Public awareness campaigns on digital rights</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Workshops on privacy-enhancing technologies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Advocacy for open data and transparency</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Collaboration with digital rights organizations</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/programs/fosspeaks/initiatives/digital-rights" className="w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight" delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Outreach Program</CardTitle>
                      <CardDescription>Promoting FOSS in the business sector</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Engaging with businesses to demonstrate the benefits of open source solutions for innovation,
                        cost-effectiveness, and competitive advantage.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Executive briefings on open source strategies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Industry-specific case studies and success stories</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Open source business models and strategies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Networking events for FOSS-friendly businesses</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/programs/fosspeaks/initiatives/business" className="w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Upcoming Advocacy Events</h3>
                
                <div className="space-y-6">
                  <AnimatedSection variant="fadeUp">
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Open Source Policy Summit</CardTitle>
                            <CardDescription>Bringing together policymakers and FOSS advocates</CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Upcoming</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <img
                              src="/placeholder.svg?height=200&width=300&text=Policy+Summit"
                              alt="Policy Summit"
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>March 15, 2025</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Globe className="mr-2 h-4 w-4" />
                                <span>Visakhapatnam Convention Center</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              A one-day summit bringing together policymakers, government officials, and FOSS advocates to
                              discuss policies that can promote the adoption of open source solutions in governance and
                              public services.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Policy</Badge>
                              <Badge variant="outline">Governance</Badge>
                              <Badge variant="outline">Advocacy</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Add to Calendar</Button>
                        <Button variant="fosspeaks">Register Now</Button>
                      </CardFooter>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection variant="fadeUp" delay={0.1}>
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>FOSS in Education Workshop Series</CardTitle>
                            <CardDescription>Workshops for educators on open source tools</CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Upcoming</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <img
                              src="/placeholder.svg?height=200&width=300&text=Education+Workshop"
                              alt="Education Workshop"
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>April 5-7, 2025</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Globe className="mr-2 h-4 w-4" />
                                <span>Multiple locations across Andhra Pradesh</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              A series of workshops for educators on using open source tools in the classroom. Participants
                              will learn about open source alternatives to proprietary software and how to integrate them
                              into their teaching.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Education</Badge>
                              <Badge variant="outline">Workshop</Badge>
                              <Badge variant="outline">Training</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Add to Calendar</Button>
                        <Button variant="fosspeaks">Register Now</Button>
                      </CardFooter>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection variant="fadeUp" delay={0.2}>
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Digital Rights Forum</CardTitle>
                            <CardDescription>Public discussion on digital rights and freedoms</CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Upcoming</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <img
                              src="/placeholder.svg?height=200&width=300&text=Digital+Rights+Forum"
                              alt="Digital Rights Forum"
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>May 20, 2025</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Globe className="mr-2 h-4 w-4" />
                                <span>Andhra University, Visakhapatnam</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              A public forum on digital rights, privacy, and freedom in the digital age. Speakers will
                              discuss how open source technologies can help protect digital rights and promote a more
                              equitable digital society.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">Digital Rights</Badge>
                              <Badge variant="outline">Privacy</Badge>
                              <Badge variant="outline">Public Forum</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Add to Calendar</Button>
                        <Button variant="fosspeaks">Register Now</Button>
                      </CardFooter>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>

              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="bg-fosspeaks/5 p-6 rounded-lg mt-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Calendar className="h-16 w-16 text-fosspeaks mx-auto md:mx-0" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">Host an Advocacy Event</h3>
                      <p className="mb-4">
                        Interested in hosting a FOSS advocacy event in your community, institution, or organization? We can
                        provide speakers, materials, and support to help you organize a successful event.
                      </p>
                      <Button variant="fosspeaks">Request an Event</Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Image className="mr-2 h-6 w-6 text-fosspeaks" />
                FOSSpeaks Gallery
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <AnimatedSection key={item} variant="fadeUp" delay={item * 0.05}>
                    <div className="overflow-hidden rounded-lg bg-gray-100 aspect-video relative group">
                      <img
                        src={`/placeholder.svg?height=450&width=800&text=FOSSpeaks+Event+${item}`}
                        alt={`FOSSpeaks event ${item}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <h4 className="font-medium">Advocacy Campaign {item}</h4>
                        <p className="text-sm opacity-90">Promoting FOSS awareness</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" className="mt-4 border-fosspeaks/20 text-fosspeaks">
                  View All Gallery Images
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </div>
  );
}
