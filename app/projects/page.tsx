// app/projects/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Github, ExternalLink, Tag, Code2, Layout, Smartphone, Database } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/lib/hardcoded"
import { ProjectCard } from "@/components/ProjectCard"

const categories = ["All", "Web App", "Mobile", "UI/UX", "Backend"]
const techIcons = {
    "Web App": <Layout className="w-4 h-4" />,
    "Mobile": <Smartphone className="w-4 h-4" />,
    "UI/UX": <Tag className="w-4 h-4" />,
    "Backend": <Database className="w-4 h-4" />
}

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
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Animated>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/10 mb-8 backdrop-blur-sm border border-violet-500/20">
                            <Code2 className="w-10 h-10 text-violet-400" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Projects</span>
                        </h1>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Explore my portfolio of projects showcasing my skills in full-stack development, UI/UX design, and more.
                        </p>
                    </Animated>
                </div>

                {/* Search and Filter Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 bg-slate-800/50 backdrop-blur-sm border-violet-500/20 text-white placeholder-white focus:border-violet-400"
                            />
                        </div>


                    </div>
                </div>

                {/* Projects Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}