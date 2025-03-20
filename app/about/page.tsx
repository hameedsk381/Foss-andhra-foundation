"use client"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Globe, Shield, BookOpen, Code, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection variant="fadeDown">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">About Us</div>
          <h1 className="text-4xl text-primary font-bold mb-6">About FOSS Andhra</h1>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 mb-8">
              FOSS Andhra is a non-profit organization dedicated to promoting free and open source hardware and software
              solutions throughout Andhra Pradesh and beyond. We believe in the power of open technology to transform
              education, governance, and society.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="my-12">
            <h2 className="text-2xl font-bold mb-6">Our Vision & Mission</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Vision
                    </h3>
                    <p>
                      A society where free and open source technology empowers every individual, institution, and
                      organization with digital sovereignty and inclusive innovation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-primary" />
                      Mission
                    </h3>
                    <p>
                      To digitalize education, governance, and society through the adoption of free and open source
                      software, promoting data privacy, ownership, and public welfare.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.3}>
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <motion.ul
            className="space-y-4 my-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.li
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5" />
              <div>
                <strong>Open Knowledge</strong>: We believe knowledge should be free and accessible to all, promoting
                community-driven innovation.
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5" />
              <div>
                <strong>Data Privacy</strong>: We advocate for individual data ownership and privacy in the digital age.
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5" />
              <div>
                <strong>Public Welfare</strong>: We prioritize solutions that benefit society as a whole, not just
                individuals or corporations.
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5" />
              <div>
                <strong>Offline First</strong>: We develop solutions that work without constant internet dependency,
                ensuring accessibility for all.
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5" />
              <div>
                <strong>Community Driven</strong>: We believe in the power of community collaboration to create
                sustainable technological solutions.
              </div>
            </motion.li>
          </motion.ul>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.4}>
          <h2 className="text-2xl font-bold mb-6">What We Do</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Educational Programs</h3>
              <p className="text-sm text-gray-600">
                We conduct workshops, training sessions, and skill development initiatives to empower individuals with
                FOSS knowledge.
              </p>
              <Link
                href="/programs/fosserve"
                className="inline-flex items-center text-primary text-sm mt-4 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Institutional Support</h3>
              <p className="text-sm text-gray-600">
                We help educational institutions and government bodies adopt and transition to open source solutions.
              </p>
              <Link
                href="/programs/fosserve"
                className="inline-flex items-center text-primary text-sm mt-4 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Project Development</h3>
              <p className="text-sm text-gray-600">
                We develop and support community-led open source projects that address local needs and challenges.
              </p>
              <Link
                href="/programs/fosstorm"
                className="inline-flex items-center text-primary text-sm mt-4 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="bg-primary/5 p-8 rounded-lg my-12 relative overflow-hidden">
            <motion.div
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/10"
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
              <h2 className="text-2xl font-bold mb-4">Join Our Movement</h2>
              <p className="mb-6">
                Whether you're a student, educator, developer, or institution, there are many ways to get involved with
                FOSS Andhra and support our mission. Join us in promoting free and open source solutions throughout
                Andhra Pradesh.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/programs/fosstar#membership">
                  <AnimatedButton>Become a Member</AnimatedButton>
                </Link>
                <Link href="/contribute">
                  <AnimatedButton variant="outline">Contribute</AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton variant="secondary">Contact Us</AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

