"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/retroui/Button" // Updated to RetroUI
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Github,
    ExternalLink,
    ArrowLeft,
    Code2,
    Layers,
    Zap,
    CheckCircle2,
    Clock,
    PauseCircle,
    XCircle,
    Sparkles,
    TrendingUp,
    Calendar,
    Tag,
    Share2,
    Terminal
} from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { Project } from "@/lib/hardcoded"
import { toast } from "sonner"

interface ProjectDetailClientProps {
    project: Project
}

const statusIcons = {
    Active: <CheckCircle2 className="w-5 h-5" />,
    Paused: <PauseCircle className="w-5 h-5" />,
    Discontinued: <XCircle className="w-5 h-5" />
}

const statusColors = {
    Active: "bg-green-500 text-white border-green-800",
    Paused: "bg-yellow-400 text-black border-yellow-800",
    Discontinued: "bg-red-500 text-white border-red-800"
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [selectedImage, setSelectedImage] = useState(project.image)
    const allImages = [project.image, ...project.otherimages]

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: project.title,
                    text: project.description,
                    url: window.location.href,
                })
                toast.success("Shared successfully!")
            } catch (error) {
                console.error('Error sharing:', error)
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href)
            toast.success("Link copied to clipboard!")
        }
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t border-border">
            {/* Decorative Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#2C333A_1px,transparent_1px),linear-gradient(to_bottom,#2C333A_1px,transparent_1px)] opacity-20 bg-[size:40px_40px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Back Button */}
                <Animated>
                    <Link href="/projects" className="inline-block mb-12">
                        <Button
                            variant="default" // Using default solid style
                            className="bg-background text-foreground border border-border hover:bg-muted font-sans"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                </Animated>

                {/* Project Header */}
                <div className="max-w-7xl mx-auto mb-16">
                    <Animated>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 border-b border-border pb-8">
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <h1 className="text-5xl md:text-7xl font-sans text-foreground">
                                        {project.title}
                                    </h1>
                                    {project.featured && (
                                        <div className="bg-secondary/10 text-secondary border border-secondary px-3 py-1 font-mono text-sm uppercase">
                                            <Sparkles className="w-4 h-4 inline-block mr-1" />
                                            Featured
                                        </div>
                                    )}
                                </div>
                                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed border-l border-primary pl-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 lg:mb-2">
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full sm:w-auto bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary font-sans h-14 text-lg">
                                            <ExternalLink className="w-5 h-5 mr-2" />
                                            Live Demo
                                        </Button>
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full sm:w-auto bg-background text-foreground border border-border hover:bg-muted font-sans h-14 text-lg">
                                            <Github className="w-5 h-5 mr-3" />
                                            Source Code
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>

                         {/* Status Bar */}
                        <div className="flex flex-wrap gap-4 mb-12 font-mono text-sm uppercase">
                            <div className={`flex items-center gap-2 px-4 py-2 border border-border ${statusColors[project.status] || 'bg-background text-foreground'}`}>
                                {statusIcons[project.status]}
                                <span>{project.status}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-background text-foreground border border-border">
                                <Tag className="w-4 h-4" />
                                <span>{project.category}</span>
                            </div>
                            {project.inDevelopment && (
                                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary">
                                    <Terminal className="w-4 h-4" />
                                    <span>In Development</span>
                                </div>
                            )}
                             {project.rebranding && (
                                <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Rebranding</span>
                                </div>
                            )}
                        </div>
                    </Animated>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Images */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Image Display */}
                        <Animated>
                            <div className="border border-border bg-card p-0 relative group">
                                <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                                    <Image
                                        src={selectedImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Subdued overlay */}
                                    <div className="absolute inset-0 bg-background/5 z-10 pointer-events-none"></div>
                                </div>
                                <div className="bg-card text-muted-foreground p-3 font-mono text-xs flex justify-between items-center uppercase">
                                     <span>IMG_SOURCE: {selectedImage.split('/').pop()}</span>
                                     <span className="animate-pulse text-primary">● LIVE VIEW</span>
                                </div>
                            </div>
                        </Animated>

                        {/* Image Gallery */}
                        {allImages.length > 1 && (
                            <Animated delay={0.1}>
                                <div className="grid grid-cols-4 gap-4">
                                    {allImages.map((img, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            className={`relative aspect-video border cursor-pointer transition-all hover:-translate-y-1 hover:shadow-sm ${
                                                selectedImage === img
                                                    ? 'border-primary -translate-y-1 z-10'
                                                    : 'border-border grayscale hover:grayscale-0'
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Animated>
                        )}
                        
                        {/* Detailed Description */}
                        <Animated delay={0.2} className="mt-12">
                             <div className="bg-card border border-border p-8">
                                <h2 className="text-3xl font-sans mb-6 flex items-center gap-3 text-foreground">
                                    <div className="bg-background border border-border text-foreground p-2">
                                        <Code2 className="w-5 h-5" />
                                    </div>
                                    Project Overview
                                </h2>
                                <p className="text-lg leading-loose text-muted-foreground">
                                    {project.description}
                                </p>
                             </div>
                        </Animated>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-8">
                         {/* Tech Stack */}
                         <Animated delay={0.3}>
                            <div className="bg-card border border-border p-6">
                                <h3 className="text-2xl font-sans mb-6 border-b border-border pb-2 inline-block text-foreground">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-background border border-border font-mono uppercase text-xs text-foreground cursor-default hover:border-primary transition-all"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                         </Animated>

                         {/* Sections/Features */}
                         <Animated delay={0.4}>
                            <div className="bg-card border border-border p-6">
                                <h3 className="text-2xl font-sans mb-6 border-b border-border pb-2 inline-block text-foreground">
                                    Components
                                </h3>
                                <div className="space-y-3">
                                     {project.section.map((section, index) => (
                                        <div key={index} className="flex items-center gap-3 font-mono text-sm bg-background border border-border p-3 text-foreground">
                                            <Layers className="w-4 h-4 text-primary" />
                                            <span className="uppercase">{section}</span>
                                        </div>
                                     ))}
                                </div>
                            </div>
                         </Animated>
                        
                        {/* Share / CTAs */}
                         <Animated delay={0.5}>
                             <div className="bg-card text-foreground border border-border p-6">
                                 <h3 className="text-xl font-sans mb-4 text-center">Share This Project</h3>
                                 <Button 
                                    onClick={handleShare}
                                    className="w-full bg-background text-foreground border border-border hover:bg-muted font-sans h-12"
                                >
                                     <Share2 className="w-5 h-5 mr-3" />
                                     Share Link
                                 </Button>
                             </div>
                         </Animated>
                    </div>
                </div>
                
                 {/* Navigation Footer */}
                 <div className="mt-20 border-t border-border pt-12 text-center pb-20">
                    <h3 className="text-xl font-sans mb-6 text-foreground">Ready to see more?</h3>
                    <div className="flex justify-center gap-4">
                        <Link href="/projects">
                             <Button className="bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary font-sans h-14 px-8 text-lg transition-all">
                                 Browse All Projects
                             </Button>
                        </Link>
                        <Link href="/contact">
                             <Button variant="outline" className="bg-background text-foreground border border-border hover:bg-muted font-sans h-14 px-8 text-lg transition-all">
                                 Hire Me
                             </Button>
                        </Link>
                    </div>
                 </div>
            </div>
        </div>
    )
}