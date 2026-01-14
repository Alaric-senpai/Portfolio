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
        degree: "B.S. Computer Science",
        school: "Dedan Kimathi University",
        period: "2022 - Present",
        description:
            "Acquiring foundational mastery in Computer Science. Integrating theoretical algorithms with practical web engineering.",
        achievements: []
    },
]

const certifications = [
    // { name: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2024" },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t-2 border-black">
            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Animated>
                        <div className="inline-block px-4 py-1 bg-secondary border-2 border-black font-black uppercase tracking-widest text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                             Profile
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 uppercase tracking-tighter leading-[0.8]">
                            Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" style={{ WebkitTextStroke: "2px black", color: "transparent" }}>The Code</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-muted-foreground max-w-3xl mx-auto border-l-8 border-primary pl-6 text-left md:text-center md:border-l-0 md:border-t-8 md:pt-6">
                            The origin story, the arsenal, and the path forward.
                        </p>
                    </Animated>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Profile Card */}
                    <AnimatedItem delay={0.2} className="lg:col-span-1">
                        <div className="bg-white border-2 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-24">
                            {/* Profile Image Area */}
                            <div className="aspect-square bg-muted border-b-2 border-black relative flex items-center justify-center p-8 overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white z-0 via-muted to-muted opacity-50"></div>
                                <div className="w-48 h-48 bg-secondary border-2 border-black rounded-none rotate-3 group-hover:rotate-0 transition-transform duration-500 absolute z-0 shadow-[4px_4px_0px_0px_black]"></div>
                                <div className="w-48 h-48 bg-white border-2 border-black rounded-none relative z-10 flex items-center justify-center -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                   <span className="text-6xl font-black">CK</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="text-center">
                                    <h3 className="text-4xl font-black text-foreground uppercase mb-1">Charles</h3>
                                    <div className="inline-block bg-black text-white px-2 py-1 font-mono text-xs font-bold uppercase">
                                        Full-Stack Developer
                                    </div>
                                </div>

                                <div className="space-y-3 font-bold text-sm">
                                    <div className="flex justify-between border-b-2 border-black/10 pb-2">
                                        <span className="text-muted-foreground uppercase">Base</span>
                                        <span>Nyeri, KE</span>
                                    </div>
                                    <div className="flex justify-between border-b-2 border-black/10 pb-2">
                                        <span className="text-muted-foreground uppercase">Field Exp.</span>
                                        <span>2+ Years</span>
                                    </div>
                                    <div className="flex justify-between border-b-2 border-black/10 pb-2">
                                        <span className="text-muted-foreground uppercase">Op. Status</span>
                                        <span className="text-green-600 flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Online
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <Button className="w-full font-black uppercase shadow-[4px_4px_0px_0px_black] border-2 border-black bg-primary text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all">
                                        <Download className="w-5 h-5 mr-2" />
                                        Access Dossier
                                    </Button>
                                    <Link href="/contact" className="block w-full">
                                        <Button
                                            variant="outline"
                                            className="w-full font-black uppercase shadow-[4px_4px_0px_0px_black] bg-white hover:bg-black hover:text-white"
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
                                    className="flex-1 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:translate-x-[2px] data-[state=active]:translate-y-[2px] transition-all py-3 font-black uppercase text-lg rounded-none"
                                >
                                    Profile Data
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="experience" 
                                    className="flex-1 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:translate-x-[2px] data-[state=active]:translate-y-[2px] transition-all py-3 font-black uppercase text-lg rounded-none"
                                >
                                    Deployment Log
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="education" 
                                    className="flex-1 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:translate-x-[2px] data-[state=active]:translate-y-[2px] transition-all py-3 font-black uppercase text-lg rounded-none"
                                >
                                    Knowledge Base
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="bio" className="space-y-8 mt-0">
                                {/* Bio Section */}
                                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                                    <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-1 border-2 border-black font-black uppercase text-sm rotate-3 shadow-[2px_2px_0px_0px_black]">
                                        Identity Record
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground mb-6 flex items-center uppercase">
                                        <User className="w-8 h-8 mr-3 text-black" />
                                        System Intro
                                    </h3>
                                    <div className="space-y-6 text-foreground text-lg font-medium leading-relaxed">
                                        <p>
                                            I am a Full-Stack Developer with over 2 years of rigorous experience engineering web applications that solve complex real-world problems. My journey began at 18, fueled by a curiosity for how the digital world operates.
                                        </p>
                                        <p className="bg-secondary/20 p-4 border-l-4 border-black">
                                            I specialize in architecting robust, scalable applications using modern technologies like Angular, Next.js, and Nest.js. My philosophy combines clean, maintainable code with intuitive, user-centric design.
                                        </p>
                                        <p>
                                            When I'm not coding, you'll find me exploring new technologies, mentoring junior developers. I believe in continuous learning and pushing the boundaries of what's possible with code.
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="experience" className="space-y-8 mt-0">
                                <div className="relative border-l-4 border-black ml-4 md:ml-8 pl-8 space-y-12 py-4">
                                    {experienceData.map((job, i) => (
                                        <div key={i} className="relative">
                                            {/* Timeline dot */}
                                            <div className="absolute -left-[45px] top-0 w-6 h-6 bg-secondary border-4 border-black rounded-full"></div>

                                            <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_black] hover:shadow-[2px_2px_0px_0px_black] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                                                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-black uppercase">{job.role}</h3>
                                                        <div className="flex items-center text-muted-foreground font-bold mt-1">
                                                            <Briefcase className="w-4 h-4 mr-2" />
                                                            {job.company}
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 bg-black text-white font-mono text-sm font-bold border-2 border-transparent">
                                                        {job.period}
                                                    </span>
                                                </div>

                                                <p className="text-foreground mb-4 text-lg font-medium border-t-2 border-black/10 pt-4">{job.description}</p>
                                                {job.achievements.length > 0 && (
                                                    <div>
                                                        <h4 className="font-black uppercase text-sm mb-3">Key Achievements:</h4>
                                                        <ul className="space-y-2">
                                                            {job.achievements.map((achievement: any, idx) => (
                                                                <li key={idx} className="flex items-center text-foreground font-medium">
                                                                    <ChevronRight className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
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
                                <div className="relative border-l-4 border-black ml-4 md:ml-8 pl-8 space-y-12 py-4">
                                    {educationData.map((education, index) => (
                                         <div key={index} className="relative">
                                            {/* Timeline dot */}
                                            <div className="absolute -left-[45px] top-0 w-6 h-6 bg-accent border-4 border-black rounded-full"></div>

                                            <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_black] hover:shadow-[2px_2px_0px_0px_black] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                                                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-black uppercase">{education.degree}</h3>
                                                        <div className="flex items-center text-muted-foreground font-bold mt-1">
                                                            <GraduationCap className="w-4 h-4 mr-2" />
                                                            {education.school}
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 bg-black text-white font-mono text-sm font-bold border-2 border-transparent">
                                                        {education.period}
                                                    </span>
                                                </div>

                                                <p className="text-foreground mb-4 text-lg font-medium border-t-2 border-black/10 pt-4">{education.description}</p>
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