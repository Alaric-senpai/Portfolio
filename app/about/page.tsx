// app/about/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, User, Download, Mail, Code, Palette, Zap, Award, ChevronRight } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const codingApproaches = [
    { title: "User-centered design", icon: <User className="w-5 h-5" /> },
    { title: "Clean, maintainable code", icon: <Code className="w-5 h-5" /> },
    { title: "Performance optimization", icon: <Zap className="w-5 h-5" /> },
    { title: "Accessibility first", icon: <Award className="w-5 h-5" /> },
    { title: "Readable code", icon: <Code className="w-5 h-5" /> },
    { title: "Writing Reusable code", icon: <Palette className="w-5 h-5" /> }
]

const experienceData = [
    {
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        period: "2021 - Present",
        description:
            "Led the frontend development team in building a SaaS platform with React and TypeScript. Improved performance by 40% and implemented CI/CD pipelines.",
        achievements: [
            "Reduced load time by 40%",
            "Implemented CI/CD pipelines",
            "Led team of 5 developers"
        ]
    },
    {
        role: "Full-Stack Developer",
        company: "WebSolutions",
        period: "2018 - 2021",
        description:
            "Developed and maintained multiple client projects using Next.js, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX.",
        achievements: [
            "Built 15+ client projects",
            "Improved user engagement by 35%",
            "Mentored 3 junior developers"
        ]
    },
    {
        role: "Junior Developer",
        company: "StartupX",
        period: "2016 - 2018",
        description:
            "Assisted in building MVPs for early-stage startups. Worked with React, Express, and PostgreSQL to create scalable applications.",
        achievements: [
            "Contributed to 8+ MVPs",
            "Learned full-stack development",
            "Gained startup experience"
        ]
    },
]

const educationData = [
    {
        degree: "B.S. Computer Science",
        school: "Dedan Kimathi University Of Technology",
        period: "2022 - Present",
        description:
            "Pursuing a degree in Computer Science with a focus on Web development. Maintaining a 3.8 GPA while working part-time as a developer.",
        achievements: [
        ]
    },
]

const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2022" },
    { name: "Google Cloud Professional", issuer: "Google Cloud", date: "2021" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB University", date: "2021" },
    { name: "React Advanced Certification", issuer: "Meta", date: "2020" },
]

const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    {name: "Mobile Development", level:65},
    { name: "UI/UX Design", level: 75 },
    { name: "Database Management", level: 80 },
    { name: "DevOps & Deployment", level: 70 },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23a855f7&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <Animated>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/10 mb-8 backdrop-blur-sm border border-violet-500/20">
                            <User className="w-10 h-10 text-violet-400" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Me</span>
                        </h1>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Discover my journey, skills, and experiences that have shaped me as a developer and designer.
                        </p>
                    </Animated>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left Column - Profile Card */}
                    <AnimatedItem delay={0.2} className="lg:col-span-1">
                        <motion.div
                            className="relative"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-violet-500/20 overflow-hidden h-full shadow-2xl">
                                <CardContent className="p-0">
                                    {/* Profile Image with Glow Effect */}
                                    <div className="relative aspect-square bg-gradient-to-tr from-violet-500/10 to-purple-500/10 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border border-violet-500/30 shadow-lg">
                                                <div className="w-52 h-52 rounded-full bg-slate-900 flex items-center justify-center text-7xl font-bold text-violet-300">
                                                    CK
                                                </div>
                                            </div>
                                        </div>
                                        {/* Decorative elements */}
                                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                                            <Zap className="w-4 h-4 text-violet-400" />
                                        </div>
                                        <div className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <Code className="w-4 h-4 text-purple-400" />
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">Charles</h3>
                                            <p className="text-violet-300 text-lg">Full-Stack Developer</p>
                                        </div>

                                        <div className="space-y-5">
                                            <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                                                <h3 className="text-lg font-medium text-slate-300">Location</h3>
                                                <span className="text-slate-300">Nyeri, CA</span>
                                            </div>
                                            <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                                                <h3 className="text-lg font-medium text-slate-300">Experience</h3>
                                                <span className="text-slate-300">2+ Years</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-medium text-slate-300">Availability</h3>
                                                <span className="flex items-center">
                                                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                                                    <span className="text-green-400">Available</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-violet-500/40">
                                                <Download className="w-5 h-5 mr-2" />
                                                Download Resume
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full border-violet-500/30 text-violet-300 hover:bg-violet-500/10 transition-all duration-300"
                                                asChild
                                            >
                                                <Link href="/contact">
                                                    <Mail className="w-5 h-5 mr-2" />
                                                    Contact Me
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatedItem>

                    {/* Right Column - Tabs */}
                    <AnimatedItem delay={0.4} className="lg:col-span-2">
                        <Tabs defaultValue="bio" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 min-h-12 bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 rounded-lg p-1">
                                <TabsTrigger value="bio" className="data-[state=active]:bg-violet-500/20 data-[state=active]:text-white data-[state=active]:shadow-inner rounded-md data-[state=inactive]:text-teal-400  transition-all duration-300">
                                    Bio
                                </TabsTrigger>
                                <TabsTrigger value="experience" className="data-[state=active]:bg-violet-500/20 data-[state=active]:text-white data-[state=active]:shadow-inner data-[state=inactive]:text-teal-400 rounded-md  transition-all duration-300">
                                    Experience
                                </TabsTrigger>
                                <TabsTrigger value="education" className="data-[state=active]:bg-violet-500/20 data-[state=active]:text-white data-[state=active]:shadow-inner rounded-md data-[state=inactive]:text-teal-400 transition-all duration-300">
                                    Education
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="bio" className="mt-10 space-y-10">
                                {/* Bio Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 rounded-2xl p-8 shadow-xl"
                                >
                                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                                        <User className="w-8 h-8 mr-3 text-violet-400" />
                                        My Story
                                    </h3>
                                    <div className="space-y-6 text-slate-300 text-lg">
                                        <p>
                                            I'm a passionate Full-Stack Developer with over 2 years of experience building web applications that solve real-world problems. My journey in tech began when I built my first website at 18, and I've been hooked ever since.
                                        </p>
                                        <p>
                                            I specialize in creating robust, scalable applications using modern technologies like Angular, Next.js, and Nest.js. My approach combines clean code principles with thoughtful UX design to deliver exceptional digital experiences.
                                        </p>
                                        <p>
                                            When I'm not coding, you'll find me exploring new technologies, mentoring junior developers. I believe in continuous learning and pushing the boundaries of what's possible with code.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Skills Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 rounded-2xl p-8 shadow-xl"
                                >
                                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                                        <Code className="w-8 h-8 mr-3 text-violet-400" />
                                        My Skills
                                    </h3>

                                    <div className="space-y-6">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-300 font-medium">{skill.name}</span>
                                                    <span className="text-violet-300 font-medium">{skill.level}%</span>
                                                </div>
                                                <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Approach Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 rounded-2xl p-8 shadow-xl"
                                >
                                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                                        <Zap className="w-8 h-8 mr-3 text-violet-400" />
                                        My Approach to Development
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {codingApproaches.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                                whileHover={{ y: -5 }}
                                                className="flex items-start p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300"
                                            >
                                                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 mr-4">
                                                    {item.icon}
                                                </div>
                                                <span className="text-slate-300 font-medium">{item.title}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="experience" className="mt-10">
                                <div className="space-y-12">
                                    {experienceData.map((job, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.2 }}
                                            className="relative"
                                        >
                                            {/* Timeline line */}
                                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 to-purple-500/50"></div>

                                            <div className="flex items-start">
                                                {/* Timeline dot */}
                                                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 border-4 border-slate-900 shadow-lg">
                                                    <Briefcase className="w-6 h-6 text-white" />
                                                </div>

                                                {/* Content */}
                                                <div className="ml-8 flex-1">
                                                    <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                                                        <CardContent className="p-8">
                                                            <div className="flex flex-wrap justify-between items-start mb-4">
                                                                <div>
                                                                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                                                                    <div className="flex items-center text-violet-300 mt-1">
                                                                        <Briefcase className="w-4 h-4 mr-2" />
                                                                        {job.company}
                                                                    </div>
                                                                </div>
                                                                <span className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm font-medium">
                                                                    {job.period}
                                                                </span>
                                                            </div>

                                                            <p className="text-slate-300 mb-6 text-lg">{job.description}</p>

                                                            <div>
                                                                <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
                                                                <ul className="space-y-2">
                                                                    {job.achievements.map((achievement, idx) => (
                                                                        <li key={idx} className="flex items-center text-slate-300">
                                                                            <ChevronRight className="w-4 h-4 mr-2 text-violet-400 flex-shrink-0" />
                                                                            {achievement}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="education" className="mt-10 space-y-12">
                                {/* Education */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    {/* Timeline line */}
                                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 to-purple-500/50"></div>

                                    <div className="flex items-start">
                                        {/* Timeline dot */}
                                        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 border-4 border-slate-900 shadow-lg">
                                            <GraduationCap className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="ml-8 flex-1">
                                            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                                                <CardContent className="p-8">
                                                    <div className="flex flex-wrap justify-between items-start mb-4">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white">{educationData[0].degree}</h3>
                                                            <div className="flex items-center text-violet-300 mt-1">
                                                                <GraduationCap className="w-4 h-4 mr-2" />
                                                                {educationData[0].school}
                                                            </div>
                                                        </div>
                                                        <span className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm font-medium">
                                                            {educationData[0].period}
                                                        </span>
                                                    </div>

                                                    <p className="text-slate-300 mb-6 text-lg">{educationData[0].description}</p>

                                                    <div>
                                                        <h4 className="text-white font-medium mb-3">Achievements:</h4>
                                                        <ul className="space-y-2">
                                                            {educationData[0].achievements.map((achievement, idx) => (
                                                                <li key={idx} className="flex items-center text-slate-300">
                                                                    <ChevronRight className="w-4 h-4 mr-2 text-violet-400 flex-shrink-0" />
                                                                    {achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Certifications */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 rounded-2xl p-8 shadow-xl"
                                >
                                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                                        <Award className="w-8 h-8 mr-3 text-violet-400" />
                                        Certifications
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {certifications.map((cert, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                                whileHover={{ y: -5 }}
                                                className="bg-slate-800/30 border border-slate-700/50 hover:border-violet-500/30 rounded-xl p-6 transition-all duration-300"
                                            >
                                                <div className="flex items-start">
                                                    <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 mr-4">
                                                        <Award className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold text-lg mb-1">{cert.name}</h4>
                                                        <p className="text-slate-400 text-sm">{cert.issuer}</p>
                                                        <p className="text-violet-300 text-sm mt-2">{cert.date}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </AnimatedItem>
                </div>
            </div>
        </div>
    )
}