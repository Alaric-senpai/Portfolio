"use client"

import { useState } from "react"
import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import { Input } from "@/components/ui/input"
import { Search, Filter, Code2, Layout, Smartphone, Database, Terminal, Ghost } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { projects } from "@/lib/hardcoded"
import { ProjectCard } from "@/components/ProjectCard"

const categories = ["All", "Web App", "Mobile App", "Backend", "UI/UX"]

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === "All" || project.category === activeCategory
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t border-border">
             {/* Decorative Grid */}
             <div className="fixed inset-0 bg-[linear-gradient(to_right,#2C333A_1px,transparent_1px),linear-gradient(to_bottom,#2C333A_1px,transparent_1px)] opacity-20 bg-[size:40px_40px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Animated>
                        <div className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary text-secondary font-mono text-sm uppercase tracking-wide mb-4">
                             ● Portfolio
                        </div>
                        <h1 className="text-6xl md:text-8xl font-sans text-foreground mb-6">
                            Deployed Artifacts
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                            A visual archive of deployed solutions and engineering milestones.
                        </p>
                    </Animated>
                </div>

                {/* Search and Filter Section */}
                <div className="max-w-6xl mx-auto mb-12">
                     <div className="bg-card border border-border p-4 flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="SEARCH PROJECTS..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12 bg-background border border-border rounded-none text-foreground placeholder:text-muted-foreground font-mono transition-all"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-mono uppercase border border-border transition-all ${
                                        activeCategory === category
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-background text-foreground hover:bg-muted"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {filteredProjects.map((project, index) => (
                            <AnimatedItem key={index} delay={index * 0.1}>
                                <ProjectCard project={project} />
                            </AnimatedItem>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 border-2 border-black border-dashed bg-muted/20">
                            <div className="text-6xl mb-6">
                                <Ghost className="w-20 h-20 mx-auto text-muted-foreground" />
                            </div>
                            <h3 className="text-3xl font-black text-foreground mb-2 uppercase">No projects found</h3>
                            <p className="text-muted-foreground font-bold text-lg">Try adjusting your search or filters to find what you're looking for.</p>
                            <Button 
                                className="mt-6 font-black uppercase"
                                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}