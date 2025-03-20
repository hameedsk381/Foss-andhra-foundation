import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Building, GraduationCap, CheckCircle, FileText, Image } from "lucide-react"

export default function FOSServePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="px-3 py-1 text-purple-600 border-purple-200 font-medium">
            Program
          </Badge>
          <h1 className="text-4xl font-bold">FOSServe</h1>
        </div>

        <p className="text-xl text-purple-600 mb-8">Promoting open source solutions in education and governance</p>

        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
            <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                FOSServe is our dedicated program focused on promoting and implementing open source solutions in
                educational institutions, government bodies, and the broader society. We believe that open source
                software offers numerous advantages including cost-effectiveness, transparency, customizability, and
                security.
              </p>

              <p>
                Through FOSServe, we work closely with schools, colleges, universities, and government departments to
                help them transition to open source alternatives, providing training, support, and custom implementation
                services.
              </p>

              <h3>Mission</h3>
              <p>
                To transform education and governance in Andhra Pradesh through the adoption of free and open source
                solutions, making technology more accessible, transparent, and affordable for all institutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-purple-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Promoting FOSS solutions in schools, colleges, and universities through training and implementation
                    support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-purple-600" />
                    Governance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Supporting government departments in adopting open source solutions for efficient and transparent
                    governance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-purple-600" />
                    Society
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enabling broader access to technology through open source solutions for community organizations and
                    the public.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold mb-4">Partner with FOSServe</h3>
              <p className="mb-6">
                Are you an educational institution or government department interested in implementing open source
                solutions? Partner with FOSServe for comprehensive support, training, and implementation assistance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700">Contact Us</Button>
                </Link>
                <Link href="/programs/fosserve/case-studies">
                  <Button variant="outline" className="border-purple-200 text-purple-600">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="initiatives" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                  <CardTitle>FOSS Campus</CardTitle>
                  <CardDescription>Open source solutions for educational institutions</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    A comprehensive initiative to help educational institutions transition to open source software for
                    administration, teaching, and student projects.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Linux-based computer labs and digital classrooms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open source learning management systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>LibreOffice training for staff and students</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>FOSS-based curriculum development</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href="/programs/fosserve/foss-campus">
                    <Button variant="ghost" className="text-purple-600">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                  <CardTitle>FOSS Gov</CardTitle>
                  <CardDescription>Open source solutions for government departments</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Supporting government departments and offices in implementing open source solutions for efficient,
                    transparent, and cost-effective governance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open source e-governance solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure document management systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital infrastructure development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Employee training and capacity building</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href="/programs/fosserve/foss-gov">
                    <Button variant="ghost" className="text-purple-600">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                  <CardTitle>FOSS Library</CardTitle>
                  <CardDescription>Open source digital library solutions</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Implementing open source library management systems and digital archives for educational
                    institutions and public libraries.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Koha library management system implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital archive solutions using DSpace</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open access content management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Librarian and staff training programs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href="/programs/fosserve/foss-library">
                    <Button variant="ghost" className="text-purple-600">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                  <CardTitle>FOSS Training</CardTitle>
                  <CardDescription>Capacity building for FOSS adoption</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Comprehensive training programs for institutions and organizations to facilitate smooth transition
                    to open source solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic and advanced Linux administration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open source productivity suite training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>System administrator certification courses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Train-the-trainer programs for sustainability</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href="/programs/fosserve/foss-training">
                    <Button variant="ghost" className="text-purple-600">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="casestudies" className="mt-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-purple-600" />
                Success Stories
              </h3>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>State University Transition</CardTitle>
                    <CardDescription>Complete migration to open source solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src="/placeholder.svg?height=300&width=400&text=University+Campus"
                          alt="University Campus"
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="mb-4">
                          We helped a major state university transition their entire IT infrastructure to open source
                          solutions, resulting in significant cost savings and improved system performance.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Annual Cost Savings</span>
                            <span className="text-green-600 font-semibold">₹1.2 Crore</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Implementation Time</span>
                            <span>6 months</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Systems Migrated</span>
                            <span>500+</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Staff Trained</span>
                            <span>200+</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href="/programs/fosserve/case-studies/university">
                            <Button variant="outline" size="sm" className="text-purple-600">
                              Read Full Case Study
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>District Administration Office</CardTitle>
                    <CardDescription>Digital transformation through open source</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src="/placeholder.svg?height=300&width=400&text=Government+Office"
                          alt="Government Office"
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="mb-4">
                          Implemented a comprehensive digital transformation for a district administrative office using
                          entirely open source solutions, enhancing efficiency and transparency.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Paperwork Reduction</span>
                            <span className="text-green-600 font-semibold">70%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Processing Time Improvement</span>
                            <span className="text-green-600 font-semibold">65%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Implementation Time</span>
                            <span>3 months</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Staff Satisfaction</span>
                            <span className="text-green-600 font-semibold">92%</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href="/programs/fosserve/case-studies/district-office">
                            <Button variant="outline" size="sm" className="text-purple-600">
                              Read Full Case Study
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rural School Network</CardTitle>
                    <CardDescription>Bringing technology to underserved areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src="/placeholder.svg?height=300&width=400&text=Rural+School"
                          alt="Rural School"
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="mb-4">
                          Implemented a network of computer labs running open source software in 25 rural schools,
                          providing technology access to over 5,000 students with limited resources.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Schools Connected</span>
                            <span>25</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Students Impacted</span>
                            <span>5,000+</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Cost per Computer</span>
                            <span className="text-green-600 font-semibold">₹12,000</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Teacher Training Hours</span>
                            <span>1,200+</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href="/programs/fosserve/case-studies/rural-schools">
                            <Button variant="outline" size="sm" className="text-purple-600">
                              Read Full Case Study
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Image className="mr-2 h-6 w-6 text-purple-600" />
              FOSServe Implementation Gallery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg bg-gray-100 aspect-video relative group">
                  <img
                    src={`/placeholder.svg?height=450&width=800&text=FOSServe+Implementation+${item}`}
                    alt={`FOSServe implementation ${item}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h4 className="font-medium">FOSServe Project {item}</h4>
                    <p className="text-sm opacity-90">Open source implementation</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="mt-4 border-purple-200 text-purple-600">
                View All Gallery Images
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

