"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { AnimatedSection } from "@/components/ui/animated-section"
import { programInfo } from "@/lib/utils"

export function SiteFooter() {
  const programs = Object.entries(programInfo).map(([key, value]) => ({
    id: key,
    title: value.title,
    href: `/programs/${key}`,
  }))

  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection variant="fadeUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl font-bold mb-4"
              >
                FOSS Andhra
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                Promoting free and open source solutions for education, governance, and society.
              </motion.p>
              <motion.div variants={staggerChildren} initial="hidden" animate="show" className="flex space-x-4">
                <motion.a variants={fadeInUp} href="https://github.com/fossandhra" className="hover:text-secondary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a variants={fadeInUp} href="https://twitter.com/fossandhra" className="hover:text-secondary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a variants={fadeInUp} href="https://facebook.com/fossandhra" className="hover:text-secondary">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a variants={fadeInUp} href="https://instagram.com/fossandhra" className="hover:text-secondary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </motion.a>
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-semibold mb-4"
              >
                Programs
              </motion.h3>
              <motion.ul variants={staggerChildren} initial="hidden" animate="show" className="space-y-2">
                {programs.map((program) => (
                  <motion.li key={program.id} variants={fadeInUp}>
                    <Link href={program.href} className="hover:text-secondary transition-colors">
                      {program.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg font-semibold mb-4"
              >
                Quick Links
              </motion.h3>
              <motion.ul variants={staggerChildren} initial="hidden" animate="show" className="space-y-2">
                <motion.li variants={fadeInUp}>
                  <Link href="/about" className="hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <Link href="/events" className="hover:text-secondary transition-colors">
                    Events
                  </Link>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <Link href="/contribute" className="hover:text-secondary transition-colors">
                    Contribute
                  </Link>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <Link href="/programs/fosstar#membership" className="hover:text-secondary transition-colors">
                    Membership
                  </Link>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
                    Privacy Policy
                  </Link>
                </motion.li>
              </motion.ul>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg font-semibold mb-4"
              >
                Contact Us
              </motion.h3>
              <motion.ul variants={staggerChildren} initial="hidden" animate="show" className="space-y-2">
                <motion.li variants={fadeInUp} className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:info@fossandhra.org" className="hover:text-secondary transition-colors">
                    info@fossandhra.org
                  </a>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:+918000000000" className="hover:text-secondary transition-colors">
                    +91 8000000000
                  </a>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-1" />
                  <span>Andhra Pradesh, India</span>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.6}>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} FOSS Andhra. All rights reserved.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
