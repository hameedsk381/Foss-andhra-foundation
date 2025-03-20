"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Calendar, CheckCircle } from "lucide-react"

export default function FOSStarPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection variant="fadeDown">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="fosstar" className="px-3 py-1 font-medium">
              Program
            </Badge>
            <h1 className="text-4xl font-bold">FOSStar</h1>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fosstar rounded-full flex items-center justify-center text-white">
              <Users className="h-8 w-8" />
            </div>
            <p className="text-xl text-fosstar">
              Our flagship membership program connecting and empowering the FOSS community across Andhra Pradesh.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="membership" id="membership">
                Membership
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="prose prose-lg max-w-none mb-8">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  FOSStar is FOSS Andhra's comprehensive membership program designed to connect individuals, students,
                  professionals, and institutions who share a common interest in promoting and adopting free and open
                  source software solutions.
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  Through FOSStar, we aim to build a vibrant community of FOSS enthusiasts who collaborate, learn, and
                  advocate for open source adoption across educational institutions, government bodies, and society at
                  large.
                </motion.p>

                <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  Mission
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  To create an inclusive and supportive ecosystem for FOSS enthusiasts, enabling knowledge sharing,
                  skill development, and collaborative innovation that drives the adoption of open source solutions
                  throughout Andhra Pradesh.
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
                        <Users className="mr-2 h-5 w-5 text-fosstar" />
                        Community
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Connect with like-minded FOSS enthusiasts, participate in discussions, and collaborate on
                        projects.
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
                        <Calendar className="mr-2 h-5 w-5 text-fosstar" />
                        Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Access exclusive events, workshops, hackathons, and meetups focused on open source technologies.
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
                        <CheckCircle className="mr-2 h-5 w-5 text-fosstar" />
                        Recognition
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Get recognized for your contributions to the FOSS community through our certification programs.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-fosstar/5 p-8 rounded-lg my-12 relative overflow-hidden"
              >
                <motion.div
                  className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-fosstar/10"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Join FOSStar Today</h3>
                  <p className="mb-6">
                    Become part of our growing community of FOSS enthusiasts and help us promote open source adoption
                    throughout Andhra Pradesh.
                  </p>
                  <Link href="#membership">
                    <AnimatedButton variant="fosstar">Become a Member</AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="benefits" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <AnimatedSection variant="fadeLeft">
                  <Card>
                    <CardHeader>
                      <CardTitle>For Students</CardTitle>
                      <CardDescription>Benefits for student members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Access to learning resources and study materials</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Mentorship opportunities from experienced professionals</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Participation in student-focused hackathons and competitions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Internship opportunities with partner organizations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Leadership opportunities in FOSSynC campus clubs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight">
                  <Card>
                    <CardHeader>
                      <CardTitle>For Professionals</CardTitle>
                      <CardDescription>Benefits for professional members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Networking opportunities with industry leaders</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Advanced workshops and training sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Speaking opportunities at FOSS Andhra events</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Participation in community governance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Recognition for contributions and expertise</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeLeft" delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle>For Institutions</CardTitle>
                      <CardDescription>Benefits for institutional members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Custom FOSS implementation consultations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>On-site training and workshops for staff</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Support for establishing FOSSynC campus clubs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Visibility through branding at events and website</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Priority support for migration to open source solutions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight" delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Access</CardTitle>
                      <CardDescription>Benefits for all members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Access to members-only online forums and discussions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Invitations to regional and national FOSS events</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Access to the FOSStar resource library</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Quarterly FOSStar newsletter and updates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Discounts on FOSS Andhra merchandise</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="mt-8 text-center">
                  <Link href="#membership">
                    <AnimatedButton variant="fosstar" size="lg" className="mt-4">
                      Join FOSStar Today
                    </AnimatedButton>
                  </Link>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="activities" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <AnimatedSection variant="fadeLeft">
                  <Card>
                    <CardHeader>
                      <CardTitle>Workshops & Training</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Regular workshops and training sessions on various open source technologies, tools, and
                        practices.
                      </p>
                      <div className="space-y-2">
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Linux Administration</h4>
                          <p className="text-sm text-gray-600">Hands-on training for Linux system administration</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Open Source Development</h4>
                          <p className="text-sm text-gray-600">
                            Best practices for contributing to open source projects
                          </p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">FOSS Alternatives</h4>
                          <p className="text-sm text-gray-600">
                            Exploring open source alternatives to proprietary software
                          </p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meetups & Networking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Regular community meetups, both in-person and virtual, to foster networking and collaboration.
                      </p>
                      <div className="space-y-2">
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Monthly Member Meetups</h4>
                          <p className="text-sm text-gray-600">Regular gatherings to discuss latest FOSS trends</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Expert Panel Discussions</h4>
                          <p className="text-sm text-gray-600">Q&A sessions with FOSS industry experts</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Networking Events</h4>
                          <p className="text-sm text-gray-600">
                            Opportunities to connect with other members and partners
                          </p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeLeft" delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hackathons & Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Collaborative coding events and long-term projects that address local challenges.
                      </p>
                      <div className="space-y-2">
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Quarterly Hackathons</h4>
                          <p className="text-sm text-gray-600">Themed coding marathons for rapid development</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Community Projects</h4>
                          <p className="text-sm text-gray-600">Long-term collaborative initiatives</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Bug Squashing Parties</h4>
                          <p className="text-sm text-gray-600">
                            Events focused on fixing issues in open source software
                          </p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight" delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Certification & Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Programs to recognize and certify the skills and contributions of members.</p>
                      <div className="space-y-2">
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">FOSS Contributor Certification</h4>
                          <p className="text-sm text-gray-600">Recognition for active open source contributors</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">FOSS Champion Awards</h4>
                          <p className="text-sm text-gray-600">Annual awards for outstanding community members</p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-50 p-4 rounded-md"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <h4 className="font-semibold">Skill Verification Program</h4>
                          <p className="text-sm text-gray-600">Technical skill assessment and certification</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </TabsContent>

            <TabsContent value="membership" className="mt-6">
              <AnimatedSection variant="fadeUp">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Join FOSStar Membership Program</h3>
                  <p className="text-gray-600">
                    Select a membership plan that suits your needs and join our community of FOSS enthusiasts
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid gap-6 md:grid-cols-3">
                <AnimatedSection variant="fadeUp" delay={0.1}>
                  <Card className="border-fosstar/20">
                    <CardHeader>
                      <CardTitle>Student Member</CardTitle>
                      <CardDescription>For students interested in FOSS</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4 text-fosstar">
                        ₹500<span className="text-sm font-normal text-gray-500">/year</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Access to community forums</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Invitations to student events</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Basic learning resources</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Student mentorship program</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <AnimatedButton className="w-full" variant="fosstar">
                        Register Now
                      </AnimatedButton>
                    </CardFooter>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeUp" delay={0.2}>
                  <Card className="border-fosstar shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-fosstar to-fosstar/70"></div>
                    <div className="absolute -top-1 right-4 bg-fosstar text-white text-xs px-3 py-1 rounded-b-md">
                      POPULAR
                    </div>
                    <CardHeader className="bg-fosstar/5">
                      <CardTitle>Professional Member</CardTitle>
                      <CardDescription>For working professionals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4 text-fosstar">
                        ₹2000<span className="text-sm font-normal text-gray-500">/year</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>All Student benefits</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Voting rights in community decisions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Advanced workshops & training</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Project collaboration opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>FOSS certification program</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <AnimatedButton className="w-full" variant="fosstar">
                        Register Now
                      </AnimatedButton>
                    </CardFooter>
                  </Card>
                </AnimatedSection>

                <AnimatedSection variant="fadeUp" delay={0.3}>
                  <Card className="border-fosstar/20">
                    <CardHeader>
                      <CardTitle>Institutional Member</CardTitle>
                      <CardDescription>For organizations and institutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4 text-fosstar">
                        ₹10,000<span className="text-sm font-normal text-gray-500">/year</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>All Professional benefits</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Up to 10 member accounts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>On-site training for your team</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Custom FOSS implementation support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Logo on our website & events</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <AnimatedButton className="w-full" variant="fosstar">
                        Register Now
                      </AnimatedButton>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className="mt-12 bg-fosstar/5 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Registration Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-fosstar/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-fosstar font-bold">1</span>
                      </div>
                      <h4 className="font-medium mb-1">Select Plan</h4>
                      <p className="text-sm text-gray-600">Choose the membership plan that best suits your needs</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-fosstar/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-fosstar font-bold">2</span>
                      </div>
                      <h4 className="font-medium mb-1">Fill Form</h4>
                      <p className="text-sm text-gray-600">Complete the registration form with your details</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-fosstar/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-fosstar font-bold">3</span>
                      </div>
                      <h4 className="font-medium mb-1">Payment</h4>
                      <p className="text-sm text-gray-600">Make the payment through our secure payment gateway</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-fosstar/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-fosstar font-bold">4</span>
                      </div>
                      <h4 className="font-medium mb-1">Confirmation</h4>
                      <p className="text-sm text-gray-600">Receive confirmation and welcome package</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.5}>
                <div className="mt-8 bg-white p-8 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Membership Registration Form</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fosstar focus:border-fosstar"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fosstar focus:border-fosstar"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fosstar focus:border-fosstar"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="membershipType" className="text-sm font-medium">
                          Membership Type
                        </label>
                        <select
                          id="membershipType"
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fosstar focus:border-fosstar"
                        >
                          <option value="">Select membership type</option>
                          <option value="student">Student Member (₹500/year)</option>
                          <option value="professional">Professional Member (₹2000/year)</option>
                          <option value="institutional">Institutional Member (₹10,000/year)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-medium">
                        Organization/Institution
                      </label>
                      <input
                        type="text"
                        id="organization"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fosstar focus:border-fosstar"
                        placeholder="Enter your organization or institution name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interests" className="text-sm font-medium">
                        Areas of Interest
                      </label>
                      <textarea
                        id="interests"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fosstar focus:border-fosstar"
                        rows={3}
                        placeholder="What FOSS technologies or areas are you most interested in?"
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" id="terms" className="mt-1 mr-2" />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-fosstar hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-fosstar hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <AnimatedButton className="w-full" variant="fosstar">
                      Submit Registration
                    </AnimatedButton>
                  </form>
                </div>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </div>
  )
}

