"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Server, FileText, Search, Filter, Download, Image, CheckCircle, ArrowRight } from 'lucide-react';

export default function FOSSteragePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection variant="fadeDown">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="fossterage" className="px-3 py-1 font-medium">
              Program
            </Badge>
            <h1 className="text-4xl font-bold">FOSSterage</h1>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fossterage rounded-full flex items-center justify-center text-white">
              <Database className="h-8 w-8" />
            </div>
            <p className="text-xl text-fossterage">
              Repository of knowledge bases for researchers, data scientists, and other stakeholders.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="prose prose-lg max-w-none mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  FOSSterage is FOSS Andhra's comprehensive knowledge repository program designed to collect, curate, and
                  provide access to valuable datasets, research papers, and educational resources. Our mission is to
                  democratize access to knowledge and empower researchers, data scientists, educators, and students with
                  the information they need.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Through FOSSterage, we aim to build a robust ecosystem of open knowledge repositories that can be freely
                  accessed, used, and contributed to by anyone. We believe that knowledge should be open, accessible, and
                  beneficial to all.
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
                  To create and maintain comprehensive, accessible, and reliable knowledge repositories that empower
                  researchers, educators, and the public with the information they need to innovate, learn, and make
                  informed decisions.
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
                        <Database className="mr-2 h-5 w-5 text-fossterage" />
                        Open Data
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Curated datasets from various domains, made accessible for research, analysis, and application
                        development.
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
                        <FileText className="mr-2 h-5 w-5 text-fossterage" />
                        Research Papers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Collection of open-access research papers, articles, and publications across various disciplines.
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
                        <Server className="mr-2 h-5 w-5 text-fossterage" />
                        Digital Archives
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Preservation of cultural, historical, and educational materials in digital format for long-term
                        access.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-fossterage/5 p-8 rounded-lg my-12 relative overflow-hidden"
              >
                <motion.div
                  className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-fossterage/10"
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
                  <h3 className="text-2xl font-bold mb-4">Contribute to FOSSterage</h3>
                  <p className="mb-6">
                    Help us expand our knowledge repositories by contributing datasets, research papers, or educational
                    resources. Your contributions can help researchers, educators, and students across Andhra Pradesh and
                    beyond.
                  </p>
                  <Link href="/contribute">
                    <AnimatedButton variant="fossterage">Contribute Resources</AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Educational Resources</h3>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Open Textbooks",
                      description: "Free, openly licensed textbooks for various subjects and education levels",
                      count: 250,
                      icon: <FileText className="h-8 w-8 text-fossterage" />,
                    },
                    {
                      title: "Video Lectures",
                      description: "Recorded lectures and educational videos on various topics",
                      count: 500,
                      icon: <FileText className="h-8 w-8 text-fossterage" />,
                    },
                    {
                      title: "Course Materials",
                      description: "Syllabi, assignments, and course materials for educators",
                      count: 150,
                      icon: <FileText className="h-8 w-8 text-fossterage" />,
                    },
                    {
                      title: "Interactive Tutorials",
                      description: "Self-paced learning modules with interactive elements",
                      count: 100,
                      icon: <FileText className="h-8 w-8 text-fossterage" />,
                    },
                    {
                      title: "Educational Tools",
                      description: "Software tools and applications for teaching and learning",
                      count: 75,
                      icon: <FileText className="h-8 w-8 text-fossterage" />,
                    },
                    {
                      title: "Assessment Resources",
                      description: "Question banks, quizzes, and assessment materials",
                      count: 120,
                      icon: <FileText className="h-8 w-8 text-fossterage" />,
                    },
                  ].map((resource, index) => (
                    <AnimatedSection key={index} variant="fadeUp" delay={0.1 * index}>
                      <Card className="h-full">
                        <CardHeader className="pb-2">
                          <div className="mb-2">{resource.icon}</div>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{resource.count} resources available</span>
                            <Badge variant="fossterage">{resource.count}+</Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/programs/fossterage/resources/${resource.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                            <Button variant="outline" className="w-full">Browse Resources</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="bg-fossterage/5 p-6 rounded-lg mt-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Search className="h-16 w-16 text-fossterage mx-auto md:mx-0" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">Search All Resources</h3>
                      <p className="mb-4">
                        Looking for specific educational resources? Use our comprehensive search tool to find exactly what
                        you need from our extensive collection.
                      </p>
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Search resources..."
                          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-fossterage"
                        />
                        <Button variant="fossterage" className="rounded-l-none">
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="databases" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Open Databases</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" /> Filter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" /> Export
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Census Data",
                    description: "Demographic data from Andhra Pradesh census surveys",
                    category: "Demographics",
                    format: "CSV, JSON",
                    lastUpdated: "2023-05-15",
                  },
                  {
                    title: "Agricultural Statistics",
                    description: "Crop production, land use, and agricultural data",
                    category: "Agriculture",
                    format: "CSV, Excel",
                    lastUpdated: "2023-06-22",
                  },
                  {
                    title: "Public Health Records",
                    description: "Anonymized health statistics and disease prevalence data",
                    category: "Healthcare",
                    format: "CSV, SQL",
                    lastUpdated: "2023-04-10",
                  },
                  {
                    title: "Educational Metrics",
                    description: "School performance, enrollment, and educational outcomes",
                    category: "Education",
                    format: "CSV, JSON",
                    lastUpdated: "2023-07-05",
                  },
                  {
                    title: "Climate Data",
                    description: "Weather patterns, rainfall, and climate indicators",
                    category: "Environment",
                    format: "CSV, NetCDF",
                    lastUpdated: "2023-08-01",
                  },
                  {
                    title: "Economic Indicators",
                    description: "Economic growth, employment, and business statistics",
                    category: "Economics",
                    format: "CSV, Excel",
                    lastUpdated: "2023-07-18",
                  },
                ].map((database, index) => (
                  <AnimatedSection key={index} variant="fadeUp" delay={0.1 * index}>
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between">
                          <CardTitle>{database.title}</CardTitle>
                          <Badge>{database.category}</Badge>
                        </div>
                        <CardDescription>{database.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500 block">Format:</span>
                            <span>{database.format}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Last Updated:</span>
                            <span>{database.lastUpdated}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">Preview</Button>
                        <Button variant="fossterage" size="sm">Download</Button>
                      </CardFooter>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className="mt-8 p-6 border rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Database API Access</h3>
                  <p className="mb-4">
                    Access our databases programmatically through our REST API. Perfect for developers building
                    applications that need to query and analyze our open datasets.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
                    <code className="text-sm">
                      GET https://api.fossandhra.org/fossterage/v1/databases/census-data
                    </code>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="fossterage">Get API Key</Button>
                    <Button variant="outline">View Documentation</Button>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Image className="mr-2 h-6 w-6 text-fossterage" />
                FOSSterage Gallery
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <AnimatedSection key={item} variant="fadeUp" delay={item * 0.05}>
                    <div className="overflow-hidden rounded-lg bg-gray-100 aspect-video relative group">
                      <img
                        src={`/placeholder.svg?height=450&width=800&text=FOSSterage+Database+${item}`}
                        alt={`FOSSterage database ${item}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <h4 className="font-medium">Knowledge Repository {item}</h4>
                        <p className="text-sm opacity-90">Data visualization and analytics</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" className="mt-4 border-fossterage/20 text-fossterage">
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
