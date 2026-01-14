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
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t-2 border-black">
            {/* Decorative Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Back Button */}
                <Animated>
                    <Link href="/projects" className="inline-block mb-12">
                        <Button
                            variant="default" // Using default solid style
                            className="bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] font-black uppercase"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                </Animated>

                {/* Project Header */}
                <div className="max-w-7xl mx-auto mb-16">
                    <Animated>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 border-b-4 border-black pb-8">
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-[0.9]">
                                        {project.title}
                                    </h1>
                                    {project.featured && (
                                        <div className="bg-secondary text-black border-2 border-black px-3 py-1 font-black uppercase text-sm shadow-[4px_4px_0px_0px_black] rotate-2">
                                            <Sparkles className="w-4 h-4 inline-block mr-1" />
                                            Featured
                                        </div>
                                    )}
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-muted-foreground max-w-3xl leading-relaxed border-l-8 border-primary pl-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 lg:mb-2">
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full sm:w-auto bg-primary text-white border-2 border-black shadow-[6px_6px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] font-black uppercase h-14 text-lg">
                                            <ExternalLink className="w-5 h-5 mr-2" />
                                            Live Demo
                                        </Button>
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full sm:w-auto bg-white text-black border-2 border-black shadow-[6px_6px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] font-black uppercase h-14 text-lg">
                                            <Github className="w-5 h-5 mr-3" />
                                            Source Code
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>

                         {/* Status Bar */}
                        <div className="flex flex-wrap gap-4 mb-12 font-bold uppercase">
                            <div className={`flex items-center gap-2 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_black] ${statusColors[project.status] || 'bg-white text-black'}`}>
                                {statusIcons[project.status]}
                                <span>{project.status}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_black]">
                                <Tag className="w-4 h-4" />
                                <span>{project.category}</span>
                            </div>
                            {project.inDevelopment && (
                                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 border-2 border-black shadow-[4px_4px_0px_0px_black]">
                                    <Terminal className="w-4 h-4" />
                                    <span>In Development</span>
                                </div>
                            )}
                             {project.rebranding && (
                                <div className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-800 border-2 border-black shadow-[4px_4px_0px_0px_black]">
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
                            <div className="border-4 border-black bg-black p-0 shadow-[12px_12px_0px_0px_black] relative group">
                                <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black">
                                    <Image
                                        src={selectedImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* CRT Scanline effect overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                                </div>
                                <div className="bg-black text-white p-2 font-mono text-xs flex justify-between items-center uppercase">
                                     <span>IMG_SOURCE: {selectedImage.split('/').pop()}</span>
                                     <span className="animate-pulse">● LIVE VIEW</span>
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
                                            className={`relative aspect-video border-2 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_black] ${
                                                selectedImage === img
                                                    ? 'border-primary shadow-[4px_4px_0px_0px_black] -translate-y-1 z-10'
                                                    : 'border-black grayscale hover:grayscale-0'
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
                             <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                                    <div className="bg-black text-white p-2">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    Project Overview
                                </h2>
                                <p className="text-lg font-medium leading-loose text-foreground">
                                    {project.description}
                                </p>
                             </div>
                        </Animated>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-8">
                         {/* Tech Stack */}
                         <Animated delay={0.3}>
                            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_black]">
                                <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2 inline-block">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-white border-2 border-black font-bold uppercase text-sm hover:bg-secondary hover:shadow-[2px_2px_0px_0px_black] transition-all cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                         </Animated>

                         {/* Sections/Features */}
                         <Animated delay={0.4}>
                            <div className="bg-accent/10 border-2 border-black p-6 shadow-[8px_8px_0px_0px_black]">
                                <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2 inline-block">
                                    Components
                                </h3>
                                <div className="space-y-3">
                                     {project.section.map((section, index) => (
                                        <div key={index} className="flex items-center gap-3 font-bold bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_black]">
                                            <Layers className="w-5 h-5 text-accent" />
                                            <span className="uppercase">{section}</span>
                                        </div>
                                     ))}
                                </div>
                            </div>
                         </Animated>
                        
                        {/* Share / CTAs */}
                         <Animated delay={0.5}>
                             <div className="bg-black text-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_#8b5cf6]">
                                 <h3 className="text-xl font-black uppercase mb-4 text-center">Share This Project</h3>
                                 <Button 
                                    onClick={handleShare}
                                    className="w-full bg-white text-black border-2 border-white hover:bg-black hover:text-white font-black uppercase"
                                >
                                     <Share2 className="w-5 h-5 mr-3" />
                                     Share Link
                                 </Button>
                             </div>
                         </Animated>
                    </div>
                </div>
                
                 {/* Navigation Footer */}
                 <div className="mt-20 border-t-4 border-black pt-12 text-center pb-20">
                    <h3 className="text-xl font-bold uppercase mb-6">Ready to see more?</h3>
                    <div className="flex justify-center gap-4">
                        <Link href="/projects">
                             <Button className="bg-secondary text-black border-2 border-black shadow-[6px_6px_0px_0px_black] font-black uppercase h-14 px-8 text-lg hover:translate-y-1 hover:shadow-none transition-all">
                                 Browse All Projects
                             </Button>
                        </Link>
                        <Link href="/contact">
                             <Button variant="outline" className="bg-white text-black border-2 border-black shadow-[6px_6px_0px_0px_black] font-black uppercase h-14 px-8 text-lg hover:translate-y-1 hover:shadow-none transition-all">
                                 Hire Me
                             </Button>
                        </Link>
                    </div>
                 </div>
            </div>
        </div>
    )
}