"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Animated, { AnimatedItem } from "@/components/Animated"

export default function ProjectsSection() {
  const categories = ["All", "Web App", "Mobile", "UI/UX", "Backend"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      tags: ["Next.js", "Stripe", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      tags: ["React", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Fitness Tracker Mobile App",
      description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      tags: ["React Native", "Redux", "Node.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Banking Dashboard UI",
      description: "A modern banking dashboard UI design with data visualization and account management.",
      image: "/placeholder.svg?height=400&width=600",
      category: "UI/UX",
      tags: ["Figma", "UI Design", "Prototyping"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "API Gateway Service",
      description: "A microservice API gateway for routing and authentication in a distributed system.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      tags: ["Node.js", "Express", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts and analytics.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      tags: ["Vue.js", "GraphQL", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <Animated
    isContainer 
    stagger
    staggerChildren 
    repeat 
    delay={1.5}
    duration={1.5}
    >
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <Code2 className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            <p className="max-w-2xl text-slate-400">
              A collection of my recent work and projects that showcase my skills and expertise.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "inactive"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-violet-600 hover:bg-violet-700 text-white"
                    : "border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredProjects
              .filter((p) => p.featured)
              .map((project, index) => (
                <AnimatedItem delay={0.4*index}
                  key={project.id}

                  >
                <Card
                  className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={'/assets/profile.png'}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-violet-500/80 hover:bg-violet-500 text-white">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-midnight-800/80 border border-violet-500/20 rounded-full text-violet-300 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                </AnimatedItem >
              ))}
          </div>

          {/* Regular projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-violet-500/80 hover:bg-violet-500 text-white">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-midnight-800/80 border border-violet-500/20 rounded-full text-violet-300 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Animated>
  )
}
