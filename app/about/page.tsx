"use client"

import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import { Card, CardContent } from "@/components/ui/card" // Using className override mostly
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, User, Download, Mail, ChevronRight, Star } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import Link from "next/link"
import { motion } from "framer-motion"

const experienceData = [
    {
        role: "Software Developer Assoc.",
        company: "Department of ICT",
        period: "Feb - May 2025",
        description:
            "Spearheaded applications development within the ICT department. Engineered enterprise-grade web solutions and fostered collaborative development protocols.",
        achievements: []
    },
]

const educationData = [
    {
        degree: "BSc Computer Science",
        school: "Dedan Kimathi University of Technology",
        period: "Expected Feb 2026",
        description:
            "Acquiring foundational mastery in Computer Science. Integrating theoretical algorithms with practical software engineering.",
        achievements: []
    },
]

const certifications = [
    // { name: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2024" },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t border-border">
            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Animated>
                        <div className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary text-secondary font-mono text-sm uppercase tracking-wide mb-4">
                             ● Profile
                        </div>
                        <h1 className="text-6xl md:text-8xl font-sans text-foreground mb-6">
                            Behind The Code
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                            The origin story, the arsenal, and the path forward.
                        </p>
                    </Animated>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Profile Card */}
                    <AnimatedItem delay={0.2} className="lg:col-span-1">
                        <div className="bg-card border border-border sticky top-24 p-6">
                            {/* Profile Image Area */}
                            <div className="aspect-square bg-background border border-border relative flex items-center justify-center p-8 overflow-hidden mb-6">
                                <div className="w-48 h-48 bg-secondary/20 border border-secondary flex items-center justify-center">
                                   <span className="text-6xl font-sans text-secondary">CK</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-center">
                                    <h3 className="text-4xl font-sans text-foreground mb-1">Charles Kahuho</h3>
                                    <div className="inline-block text-primary font-mono text-sm uppercase mt-2">
                                        Full-Stack Developer
                                    </div>
                                </div>

                                <div className="space-y-3 font-mono text-sm border-t border-border pt-4">
                                    <div className="flex justify-between pb-2">
                                        <span className="text-muted-foreground">Base</span>
                                        <span className="text-foreground">Makueni, KE</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span className="text-muted-foreground">Field Exp.</span>
                                        <span className="text-foreground">2+ Years</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span className="text-muted-foreground">Op. Status</span>
                                        <span className="text-primary flex items-center gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                            Online
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <Button className="w-full font-sans bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all">
                                        <Download className="w-5 h-5 mr-2" />
                                        Access Dossier
                                    </Button>
                                    <Link href="/contact" className="block w-full">
                                        <Button
                                            variant="outline"
                                            className="w-full font-sans border-border text-foreground hover:bg-muted"
                                        >
                                            <Mail className="w-5 h-5 mr-2" />
                                            Establish Comms
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedItem>

                    {/* Right Column - Tabs */}
                    <AnimatedItem delay={0.4} className="lg:col-span-2">
                        <Tabs defaultValue="bio" className="w-full">
                            <TabsList className="w-full flex flex-col sm:flex-row h-auto bg-transparent gap-4 mb-8">
                                <TabsTrigger 
                                    value="bio" 
                                    className="flex-1 bg-background border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all py-3 font-mono uppercase text-sm rounded-none"
                                >
                                    Profile Data
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="experience" 
                                    className="flex-1 bg-background border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all py-3 font-mono uppercase text-sm rounded-none"
                                >
                                    Deployment Log
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="education" 
                                    className="flex-1 bg-background border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all py-3 font-mono uppercase text-sm rounded-none"
                                >
                                    Knowledge Base
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="bio" className="space-y-8 mt-0">
                                {/* Bio Section */}
                                <div className="bg-card border border-border p-8 relative">
                                    <div className="absolute top-0 right-0 bg-secondary/10 text-secondary px-4 py-1 border-l border-b border-border font-mono uppercase text-xs">
                                        Identity Record
                                    </div>
                                    <h3 className="text-3xl font-sans text-foreground mb-6 flex items-center">
                                        <User className="w-6 h-6 mr-3 text-primary" />
                                        System Intro
                                    </h3>
                                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                        <p>
                                            I am a full-stack developer operating out of Makueni, Kenya, with over 2 years of rigorous experience engineering web and mobile applications. My journey began around age 17, building from a genuinely scrappy, hands-on setup to figure out how software operates under the hood.
                                        </p>
                                        <p className="bg-secondary/10 p-4 border-l border-secondary text-foreground">
                                            I specialize in practical, resource-conscious engineering — focusing on offline-first architectures and low-bandwidth environments. I build robust systems using modern tools like Next.js, Node.js, and React Native.
                                        </p>
                                        <p>
                                            Alongside my freelance practice, I am completing my BSc in Computer Science at Dedan Kimathi University of Technology (expected Feb 2026). I believe in continuous learning and pushing the boundaries of what's possible with code.
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="experience" className="space-y-8 mt-0">
                                <div className="relative border-l border-border ml-4 md:ml-8 pl-8 space-y-12 py-4">
                                    {experienceData.map((job, i) => (
                                        <div key={i} className="relative">
                                            {/* Timeline dot */}
                                            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-primary border border-border rounded-full"></div>

                                            <div className="bg-card border border-border p-6 hover:-translate-y-1 transition-all duration-300">
                                                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-sans text-foreground">{job.role}</h3>
                                                        <div className="flex items-center text-muted-foreground font-mono text-sm mt-1">
                                                            <Briefcase className="w-4 h-4 mr-2" />
                                                            {job.company}
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 bg-background text-muted-foreground font-mono text-xs border border-border">
                                                        {job.period}
                                                    </span>
                                                </div>

                                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed border-t border-border pt-4">{job.description}</p>
                                                {job.achievements.length > 0 && (
                                                    <div>
                                                        <h4 className="font-sans text-foreground text-sm mb-3">Key Achievements:</h4>
                                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                                            {job.achievements.map((achievement: any, idx) => (
                                                                <li key={idx} className="flex items-center">
                                                                    <ChevronRight className="w-4 h-4 mr-2 text-secondary flex-shrink-0" />
                                                                    {achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="education" className="space-y-8 mt-0">
                                <div className="relative border-l border-border ml-4 md:ml-8 pl-8 space-y-12 py-4">
                                    {educationData.map((education, index) => (
                                         <div key={index} className="relative">
                                            {/* Timeline dot */}
                                            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-secondary border border-border rounded-full"></div>

                                            <div className="bg-card border border-border p-6 hover:-translate-y-1 transition-all duration-300">
                                                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-sans text-foreground">{education.degree}</h3>
                                                        <div className="flex items-center text-muted-foreground font-mono text-sm mt-1">
                                                            <GraduationCap className="w-4 h-4 mr-2" />
                                                            {education.school}
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 bg-background text-muted-foreground font-mono text-xs border border-border">
                                                        {education.period}
                                                    </span>
                                                </div>

                                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed border-t border-border pt-4">{education.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </AnimatedItem>
                </div>
            </div>
        </div>
    )
}
