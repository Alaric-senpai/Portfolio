"use client"


import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import { ArrowRight, Code2 } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { projects } from "@/lib/hardcoded"
import { ProjectCard } from "./ProjectCard" // Note: This internal component might need updating too, but let's stick to wrapping it first or check if we can style it via props? Actually, I should probably check ProjectCard content.
// But assuming ProjectCard is complex, I might need to update it separately. For now, let's update the container section.

export default function ProjectsSection() {
  return (
    <Animated
      isContainer
      stagger
      repeat={false}
      delay={1.5}
      duration={1.5}
    >
      <section id="projects" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-block px-4 py-1.5 border-2 border-black bg-white rounded-full font-black uppercase text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] tracking-widest">
                 Selected Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Featured Projects</h2>
            <p className="max-w-2xl text-muted-foreground text-lg font-medium">
              A selection of my recent work and technical experiments.
            </p>
          </div>

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <AnimatedItem
                  delay={0.2 * index}
                  key={project.id}
                >
                  <ProjectCard project={project} />
                </AnimatedItem>
              ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none font-black uppercase"
            >
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Animated>
  )
}

