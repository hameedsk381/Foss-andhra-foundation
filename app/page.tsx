"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, BookOpen, Users, Rocket, Server, Globe, Database, Megaphone } from 'lucide-react'
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { programInfo } from "@/lib/utils"

export default function Home() {
  const programs = Object.entries(programInfo).map(([key, value]) => ({
    id: key,
    title: value.title,
    description: value.description,
    href: `/programs/${key}`,
    color: value.color,
    icon: value.icon,
  }))

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Users: <Users className="h-6 w-6" />,
      BookOpen: <BookOpen className="h-6 w-6" />,
      GraduationCap: <Users className="h-6 w-6" />,
      Code: <Code className="h-6 w-6" />,
      Rocket: <Rocket className="h-6 w-6" />,
      Database: <Database className="h-6 w-6" />,
      Megaphone: <Megaphone className="h-6 w-6" />,
    }
    return icons[iconName] || <Code className="h-6 w-6" />
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-10 lg:py-16 bg-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#015ba7,#015ba7)]" />
          <motion.div 
            className="blob w-[500px] h-[500px] bg-secondary/30 left-[-200px] top-[-100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="blob w-[300px] h-[300px] bg-secondary/30 right-[-100px] bottom-[-50px]"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blob-spin"
            style={{
              backgroundImage: "url('/placeholder.svg?height=800&width=800&text=FOSS')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AnimatedSection variant="fadeDown">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4">
                Promoting Free and Open Source Solutions
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeUp">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                FOSS <span className="text-secondary">Andhra</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Digitalizing education, governance, and society through free and open source solutions
              </p>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 my-2">
                <Link href="/about">
                  <AnimatedButton className="bg-white text-primary hover:bg-white/90">
                    Learn More
                  </AnimatedButton>
                </Link>
                <Link href="/programs/fosstar#membership">
                  <AnimatedButton variant="outline" className="border-white text-white  bg-transparent">
                    Join Us
                  </AnimatedButton>
                </Link>
              </div>
            </AnimatedSection>

            {/* Modern animated hero graphic */}
            <AnimatedSection variant="fadeUp" delay={0.3} className="mt-12 relative">
              <motion.div 
                className="relative w-full max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-white"
                        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {i === 1 ? <BookOpen className="h-6 w-6 text-white" /> : 
                           i === 2 ? <Server className="h-6 w-6 text-white" /> : 
                           <Globe className="h-6 w-6 text-white" />}
                        </motion.div>
                        <span className="text-sm font-medium">
                          {i === 1 ? "Open Knowledge" : 
                           i === 2 ? "Data Privacy" : 
                           "Offline First"}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-3 -right-3 w-24 h-24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full border-4 border-dashed border-secondary/50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-secondary"></div>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="shimmer absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection variant="fadeUp">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Empowering Through Open Source
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Digitalizing education, governance, and society through free and open source software
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Open Knowledge</CardTitle>
                  <BookOpen className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Promoting open knowledge and data accessibility for all, ensuring information is freely available
                    and shareable.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.2}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Data Privacy</CardTitle>
                  <Server className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Championing data privacy, ownership, and public welfare through transparent and secure open-source
                    solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.3}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Offline First</CardTitle>
                  <Globe className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Building offline-first solutions for inclusive digital access, ensuring technology works for
                    everyone regardless of connectivity.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedSection variant="fadeUp">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                Our Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Initiatives for Change
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Discover our initiatives to promote free and open source solutions across various domains
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programs.map((program, index) => (
              <AnimatedSection key={program.id} variant="fadeUp" delay={0.1 * index}>
                <Link href={program.href} className="block h-full">
                  <AnimatedCard className="h-full overflow-hidden transition-all duration-200 hover:border-secondary">
                    <CardHeader className={`bg-${program.color} text-white`}>
                      <CardTitle className="flex items-center">
                        {getIconComponent(program.icon)}
                        <span className="ml-2">{program.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardDescription className="text-sm text-gray-500 mb-4">{program.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-4">
                      <span className={`text-sm font-medium text-${program.color} flex items-center`}>
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardFooter>
                  </AnimatedCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#015ba7,#015ba7)]" />
          <motion.div 
            className="blob w-[400px] h-[400px] bg-secondary/30 right-[-150px] top-[-100px]"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="blob w-[350px] h-[350px] bg-secondary/20 left-[-100px] bottom-[-50px]"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection variant="fadeUp">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Join the FOSS Movement
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Become a member and help us promote free and open source solutions across Andhra
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link href="/programs/fosstar#membership">
                  <AnimatedButton className="bg-secondary text-white hover:bg-secondary/90">
                    Become a Member
                  </AnimatedButton>
                </Link>
                <Link href="/contribute">
                  <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
                    Contribute
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
