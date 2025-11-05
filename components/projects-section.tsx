"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Code2, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Animated, { AnimatedItem } from "@/components/Animated"
import Link from "next/link"
import { projects } from "@/lib/hardcoded"
import ShinyText from "./textanimations/ShinyText/ShinyText"
import { ProjectCard } from "./ProjectCard"

export default function ProjectsSection() {
  const categories = ["All", "Web App", "Mobile", "UI/UX", "Backend"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <Animated
      isContainer
      stagger
      repeat={false}
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

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects
              .filter((p) => p.featured)
              .map((project, index) => (
                <AnimatedItem
                  delay={0.4 * index}
                  key={project.id}
                >
                  <ProjectCard project={project} />
                </AnimatedItem>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20"
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

