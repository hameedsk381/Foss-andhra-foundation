"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Filter, Search, X } from 'lucide-react';
import { programInfo } from "@/lib/utils";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const programs = Object.entries(programInfo).map(([key, value]) => ({
    id: key,
    title: value.title,
    color: value.color,
  }));

  const galleryItems = [
    {
      id: 1,
      title: "FOSStar Community Meetup",
      description: "Members networking at our monthly community gathering",
      program: "fosstar",
      tags: ["event", "community", "networking"],
      image: "/placeholder.svg?height=600&width=800&text=FOSStar+Meetup",
    },
    {
      id: 2,
      title: "FOSServe School Implementation",
      description: "Setting up Linux labs in rural schools",
      program: "fosserve",
      tags: ["implementation", "education", "rural"],
      image: "/placeholder.svg?height=600&width=800&text=FOSServe+Implementation",
    },
    {
      id: 3,
      title: "FOSSynC Campus Club Launch",
      description: "Inauguration of a new campus FOSS club",
      program: "fossync",
      tags: ["campus", "students", "launch"],
      image: "/placeholder.svg?height=600&width=800&text=FOSSynC+Launch",
    },
    {
      id: 4,
      title: "FOSStorm Hackathon",
      description: "Developers collaborating on open source projects",
      program: "fosstorm",
      tags: ["hackathon", "coding", "collaboration"],
      image: "/placeholder.svg?height=600&width=800&text=FOSStorm+Hackathon",
    },
    {
      id: 5,
      title: "FOSSart Startup Showcase",
      description: "Open source startups presenting their innovations",
      program: "fossart",
      tags: ["startup", "innovation", "presentation"],
      image: "/placeholder.svg?height=600&width=800&text=FOSSart+Showcase",
    },
    {
      id: 6,
      title: "FOSSterage Data Workshop",
      description: "Training on using open datasets for research",
      program: "fossterage",
      tags: ["workshop", "data", "research"],
      image: "/placeholder.svg?height=600&width=800&text=FOSSterage+Workshop",
    },
    {
      id: 7,
      title: "FOSSpeaks Policy Forum",
      description: "Discussing open source policies with government officials",
      program: "fosspeaks",
      tags: ["policy", "advocacy", "government"],
      image: "/placeholder.svg?height=600&width=800&text=FOSSpeaks+Forum",
    },
    {
      id: 8,
      title: "Annual FOSS Conference",
      description: "Keynote presentation at our annual conference",
      program: "fosstar",
      tags: ["conference", "keynote", "annual"],
      image: "/placeholder.svg?height=600&width=800&text=Annual+Conference",
    },
    {
      id: 9,
      title: "Government Training Program",
      description: "Training government officials on open source solutions",
      program: "fosserve",
      tags: ["training", "government", "implementation"],
      image: "/placeholder.svg?height=600&width=800&text=Government+Training",
    },
    {
      id: 10,
      title: "Student Hackathon",
      description: "College students participating in a coding challenge",
      program: "fossync",
      tags: ["hackathon", "students", "coding"],
      image: "/placeholder.svg?height=600&width=800&text=Student+Hackathon",
    },
    {
      id: 11,
      title: "Project Showcase",
      description: "Demonstrating community-developed open source projects",
      program: "fosstorm",
      tags: ["showcase", "projects", "community"],
      image: "/placeholder.svg?height=600&width=800&text=Project+Showcase",
    },
    {
      id: 12,
      title: "Startup Incubation Program",
      description: "Mentoring session for open source startups",
      program: "fossart",
      tags: ["mentoring", "startup", "incubation"],
      image: "/placeholder.svg?height=600&width=800&text=Startup+Mentoring",
    },
    {
      id: 13,
      title: "Data Visualization Workshop",
      description: "Learning to visualize open datasets effectively",
      program: "fossterage",
      tags: ["workshop", "visualization", "data"],
      image: "/placeholder.svg?height=600&width=800&text=Data+Visualization",
    },
    {
      id: 14,
      title: "Open Source Awareness Campaign",
      description: "Public event promoting FOSS benefits",
      program: "fosspeaks",
      tags: ["campaign", "awareness", "public"],
      image: "/placeholder.svg?height=600&width=800&text=Awareness+Campaign",
    },
    {
      id: 15,
      title: "Community Contribution Day",
      description: "Members contributing to open source projects together",
      program: "fosstar",
      tags: ["contribution", "community", "coding"],
      image: "/placeholder.svg?height=600&width=800&text=Contribution+Day",
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    // Filter by program if activeFilter is set
    if (activeFilter && item.program !== activeFilter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  const allTags = Array.from(new Set(galleryItems.flatMap((item) => item.tags)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection variant="fadeDown">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="outline" className="px-3 py-1 font-medium">
              Gallery
            </Badge>
            <h1 className="text-4xl font-bold">FOSS Andhra Gallery</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Explore photos and images from our programs, events, and initiatives
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-3/4">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={activeFilter === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(null)}
                >
                  All Programs
                </Button>
                {programs.map((program) => (
                  <Button
                    key={program.id}
                    variant={activeFilter === program.id ? program.color as any : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(program.id)}
                  >
                    {program.title}
                  </Button>
                ))}
              </div>

              {filteredItems.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <Image className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-600 mb-2">No images found</h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search query to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setActiveFilter(null);
                      setSearchQuery("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredItems.map((item, index) => (
                    <AnimatedSection key={item.id} variant="fadeUp" delay={index * 0.05}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="overflow-hidden rounded-lg bg-gray-100 aspect-video relative group"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm opacity-90">{item.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-white/20 px-2 py-0.5 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>

            <div className="md:w-1/4">
              <div className="bg-gray-50 p-4 rounded-lg sticky top-20">
                <h3 className="font-medium mb-4 flex items-center">
                  <Filter className="mr-2 h-4 w-4" /> Filter by Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-4">Popular Collections</h3>
                  <ul className="space-y-2">
                    <li>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => setSearchQuery("event")}
                      >
                        Events & Conferences
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => setSearchQuery("workshop")}
                      >
                        Workshops & Training
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => setSearchQuery("community")}
                      >
                        Community Activities
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => setSearchQuery("implementation")}
                      >
                        Implementation Projects
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
