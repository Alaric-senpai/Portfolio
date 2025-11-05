"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    Share2
} from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { Project } from "@/lib/hardcoded"
import { toast } from "sonner"

interface ProjectDetailClientProps {
    project: Project
}

const statusIcons = {
    Active: <CheckCircle2 className="w-4 h-4" />,
    Paused: <PauseCircle className="w-4 h-4" />,
    Discontinued: <XCircle className="w-4 h-4" />
}

const statusColors = {
    Active: "bg-green-500/10 text-green-400 border-green-500/20",
    Paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Discontinued: "bg-red-500/10 text-red-400 border-red-500/20"
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
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Back Button */}
                <Animated>
                    <Link href="/projects">
                        <Button
                            variant="ghost"
                            className="mb-8 text-slate-300 hover:text-white hover:bg-violet-500/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                </Animated>

                {/* Project Header */}
                <div className="max-w-6xl mx-auto mb-12">
                    <Animated>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                                        {project.title}
                                    </h1>
                                    {project.featured && (
                                        <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0">
                                            <Sparkles className="w-3 h-3 mr-1" />
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-xl text-slate-300 mb-6">
                                    {project.description}
                                </p>

                                {/* Status and Category Badges */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <Badge className={`${statusColors[project.status]} border`}>
                                        {statusIcons[project.status]}
                                        <span className="ml-1">{project.status}</span>
                                    </Badge>
                                    <Badge variant="outline" className="bg-violet-500/10 text-violet-400 border-violet-500/20">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {project.category}
                                    </Badge>
                                    {project.inDevelopment && (
                                        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            In Development
                                        </Badge>
                                    )}
                                    {project.rebranding && (
                                        <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/20">
                                            <Sparkles className="w-3 h-3 mr-1" />
                                            Rebranding
                                        </Badge>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    {project.demoUrl && (
                                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <Button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Live Demo
                                            </Button>
                                        </Link>
                                    )}
                                    {project.githubUrl && (
                                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="border-violet-500/20 text-violet-400 hover:bg-violet-500/10">
                                                <Github className="w-4 h-4 mr-2" />
                                                View Source
                                            </Button>
                                        </Link>
                                    )}
                                    <Button
                                        variant="outline"
                                        onClick={handleShare}
                                        className="border-violet-500/20 text-slate-300 hover:bg-violet-500/10"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Share
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Images and Gallery */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Image Display */}
                        <Animated>
                            <Card className="bg-slate-800/50 backdrop-blur-sm border-violet-500/20 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative aspect-video w-full bg-slate-900/50">
                                        <Image
                                            src={selectedImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </Animated>

                        {/* Image Gallery */}
                        {allImages.length > 1 && (
                            <Animated delay={0.1}>
                                <div className="grid grid-cols-4 gap-4">
                                    {allImages.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedImage(img)}
                                            className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${selectedImage === img
                                                    ? 'border-violet-500'
                                                    : 'border-transparent hover:border-violet-500/50'
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </Animated>
                        )}

                        {/* Project Details Tabs */}
                        <Animated delay={0.2}>
                            <Card className="bg-slate-800/50 backdrop-blur-sm border-violet-500/20">
                                <CardContent className="p-6">
                                    <Tabs defaultValue="overview" className="w-full  ">
                                        <TabsList className="grid w-full border border-teal-400 grid-cols-3 bg-slate-900/50 p-2 min-h-10 h-full">
                                            <TabsTrigger value="overview" className="data-[state=inactive]:text-white">Overview</TabsTrigger>
                                            <TabsTrigger value="tech" className="data-[state=inactive]:text-white">Tech Stack</TabsTrigger>
                                            <TabsTrigger value="features" className="data-[state=inactive]:text-white">Features</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="overview" className="mt-6 space-y-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                                    <Code2 className="w-5 h-5 mr-2 text-violet-400" />
                                                    About This Project
                                                </h3>
                                                <p className="text-slate-300 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="pt-4 border-t border-slate-700">
                                                <h4 className="text-lg font-semibold text-white mb-3">Project Sections</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.section.map((section, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="bg-slate-700/50 text-slate-200 border-slate-600"
                                                        >
                                                            <Layers className="w-3 h-3 mr-1" />
                                                            {section}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="tech" className="mt-6">
                                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                                <Zap className="w-5 h-5 mr-2 text-violet-400" />
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <Badge
                                                            className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 hover:from-violet-500/30 hover:to-purple-500/30 transition-all cursor-default"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="features" className="mt-6 space-y-3">
                                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                                <CheckCircle2 className="w-5 h-5 mr-2 text-violet-400" />
                                                Key Features
                                            </h3>
                                            <ul className="space-y-3">
                                                {/* Generate features based on project type */}
                                                {project.category === "Web App" && (
                                                    <>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Responsive design optimized for all devices</span>
                                                        </li>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Modern and intuitive user interface</span>
                                                        </li>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Fast performance and optimized loading times</span>
                                                        </li>
                                                    </>
                                                )}
                                                {project.category === "Mobile App" && (
                                                    <>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Native mobile experience with smooth animations</span>
                                                        </li>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Offline functionality for enhanced usability</span>
                                                        </li>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Cross-platform compatibility</span>
                                                        </li>
                                                    </>
                                                )}
                                                {project.category === "Backend" && (
                                                    <>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>RESTful API architecture with comprehensive endpoints</span>
                                                        </li>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Secure authentication and authorization</span>
                                                        </li>
                                                        <li className="flex items-start text-slate-300">
                                                            <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span>Scalable database design and optimized queries</span>
                                                        </li>
                                                    </>
                                                )}
                                                <li className="flex items-start text-slate-300">
                                                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span>Clean, maintainable, and well-documented codebase</span>
                                                </li>
                                            </ul>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </Animated>
                    </div>

                    {/* Right Column - Project Info Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Info Card */}
                        <Animated delay={0.3}>
                            <Card className="bg-slate-800/50 backdrop-blur-sm border-violet-500/20">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-white mb-4">Project Info</h3>

                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <span className="text-slate-400 text-sm">Status</span>
                                            <Badge className={`${statusColors[project.status]} border text-xs`}>
                                                {project.status}
                                            </Badge>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <span className="text-slate-400 text-sm">Category</span>
                                            <span className="text-white text-sm font-medium">{project.category}</span>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <span className="text-slate-400 text-sm">Development</span>
                                            <span className="text-white text-sm font-medium">
                                                {project.inDevelopment ? "Active" : "Complete"}
                                            </span>
                                        </div>

                                        {project.demoUrl && (
                                            <div className="pt-3 border-t border-slate-700">
                                                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Visit Website
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}

                                        {project.githubUrl && (
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" className="w-full border-violet-500/20 text-violet-400 hover:bg-violet-500/10">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    View on GitHub
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Animated>

                        {/* Tags Cloud */}
                        <Animated delay={0.4}>
                            <Card className="bg-slate-800/50 backdrop-blur-sm border-violet-500/20">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                        <Tag className="w-4 h-4 mr-2 text-violet-400" />
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 8).map((tag, index) => (
                                            <Badge
                                                key={index}
                                                variant="outline"
                                                className="bg-slate-700/30 text-slate-300 border-slate-600 hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/30 transition-all cursor-default text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Animated>

                        {/* Call to Action */}
                        <Animated delay={0.5}>
                            <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/20">
                                <CardContent className="p-6 text-center">
                                    <Sparkles className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                                    <h3 className="text-lg font-semibold text-white mb-2">Interested in this project?</h3>
                                    <p className="text-slate-300 text-sm mb-4">
                                        Let's discuss how we can work together
                                    </p>
                                    <Link href="/contact">
                                        <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white">
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Animated>
                    </div>
                </div>
            </div>
        </div>
    )
}