// app/skills/page.tsx
"use client"

import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Palette, Database, Globe, Cpu, Zap, Award, Star, CheckCircle, Phone } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { projects, skillCategories } from "@/lib/hardcoded"
import { motion } from "framer-motion"
import Link from "next/link"

const skillIcons = {
    frontend: <Code className="w-5 h-5" />,
    backend: <Server className="w-5 h-5" />,
    design: <Palette className="w-5 h-5" />,
    database: <Database className="w-5 h-5" />,
    devops: <Globe className="w-5 h-5" />,
    Mobile: <Phone className="w-5 h-5" />,
    other: <Cpu className="w-5 h-5" />
}

const skillDescriptions = {
    frontend: "Creating responsive, interactive user interfaces with modern frameworks and libraries.",
    backend: "Building robust server-side applications, APIs, and database architectures.",
    design: "Crafting intuitive user experiences with attention to detail and visual aesthetics.",
    database: "Designing efficient data models and optimizing database performance.",
    devops: "Implementing CI/CD pipelines, containerization, and cloud deployment strategies.",
    other: "Exploring emerging technologies and specialized tools to expand my capabilities."
}

const skillHighlights = [
    {
        title: "Full-Stack Development",
        description: "End-to-end application development using modern JavaScript frameworks",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Performance Optimization",
        description: "Improving application speed and efficiency through code optimization",
        icon: <Award className="w-6 h-6" />
    },
    {
        title: "Responsive Design",
        description: "Creating seamless experiences across all device sizes",
        icon: <Palette className="w-6 h-6" />
    }
]

export default function SkillsPage() {
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
                    <Animated staggerChildren={2} repeat={true}>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/10 mb-8 backdrop-blur-sm border border-violet-500/20">
                            <Code className="w-10 h-10 text-violet-400" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Skills</span>
                        </h1>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Explore my technical expertise and the tools I use to bring ideas to life.
                        </p>
                    </Animated>
                </div>

                {/* Skill Highlights */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        {skillHighlights.map((highlight, index) => (
                            <AnimatedItem key={index} delay={0.2 * index}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center mb-2">
                                                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 mr-3">
                                                    {highlight.icon}
                                                </div>
                                                <CardTitle className="text-xl text-white">{highlight.title}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-300">{highlight.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>

                {/* Skills Categories */}
                <div className="max-w-6xl mx-auto">
                    <Tabs defaultValue="frontend" className="w-full">
                        <div className="flex justify-center mb-10">
                            <TabsList className="grid w-full max-w-max grid-cols-3 h-10 md:grid-cols-7 bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 rounded-lg ">
                                {skillCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="data-[state=active]:bg-violet-500/20 data-[state=inactive]:text-teal-300  data-[state=active]:text-white rounded-md transition-all duration-300 flex items-center gap-2"
                                    >
                                        {skillIcons[category.id as keyof typeof skillIcons]}
                                        <span className="hidden sm:inline">{category.name}</span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {skillCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-0">
                                <div className="mb-8 text-center">
                                    <h2 className="text-3xl font-bold text-white mb-2">{category.name}</h2>
                                    <p className="text-slate-400 max-w-2xl mx-auto">
                                        {skillDescriptions[category.id as keyof typeof skillDescriptions]}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.skills.map((skill, i) => (
                                        <AnimatedItem key={i} delay={0.4 * i} repeat={true}>
                                            <motion.div
                                                whileHover={{ y: -10, scale: .98 }}
                                                transition={{ duration: 0.3, type: 'spring', damping: 30, stiffness: 200 }}
                                            >
                                                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                                                    <CardHeader className="pb-2">
                                                        <div className="flex justify-between items-start">
                                                            <CardTitle className="text-lg text-white">{skill.name}</CardTitle>
                                                            <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                                                                {skill.level}%
                                                            </Badge>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="space-y-4">
                                                            <Progress
                                                                value={skill.level}
                                                                className="h-2.5 bg-slate-700/50"
                                                            />

                                                            <div className="flex items-center justify-between text-sm">
                                                                <span className="text-slate-400">Proficiency</span>
                                                                <div className="flex items-center">
                                                                    {Array.from({ length: 5 }).map((_, idx) => (
                                                                        <Star
                                                                            key={idx}
                                                                            className={`w-4 h-4 ${idx < Math.floor(skill.level / 20)
                                                                                ? "text-violet-400 fill-violet-400"
                                                                                : "text-slate-600"
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap gap-2 pt-2">
                                                                {skill.level >= 80 && (
                                                                    <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                                                                        Expert
                                                                    </Badge>
                                                                )}
                                                                {skill.level >= 60 && skill.level < 80 && (
                                                                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                                                                        Advanced
                                                                    </Badge>
                                                                )}
                                                                {skill.level >= 40 && skill.level < 60 && (
                                                                    <Badge variant="outline" className="border-yellow-500/30 text-yellow-400 text-xs">
                                                                        Intermediate
                                                                    </Badge>
                                                                )}
                                                                {skill.level < 40 && (
                                                                    <Badge variant="outline" className="border-slate-500/30 text-slate-400 text-xs">
                                                                        Beginner
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        </AnimatedItem>
                                    ))}
                                </div>

                                {/* Category-specific content */}
                                <div className="mt-12">
                                    <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden">
                                        <CardContent className="p-8">
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <CheckCircle className="w-6 h-6 mr-3 text-violet-400" />
                                                Projects Using {category.name} Skills
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {projects
                                                    .filter((p) =>
                                                        p.section.some(s => s.toLowerCase().includes(category.name.toLowerCase())) ||
                                                        p.category.toLowerCase().includes(category.name.toLowerCase()) ||
                                                        p.tags.some(tag =>
                                                            category.skills.some(skill =>
                                                                skill.name.toLowerCase().includes(tag.toLowerCase()) ||
                                                                tag.toLowerCase().includes(skill.name.toLowerCase())
                                                            )
                                                        )
                                                    )
                                                    .slice(0, 4) // Limit to 4 projects per category
                                                    .map((project, idx) => (
                                                        <motion.div
                                                            key={project.id}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                            whileHover={{ y: -5 }}
                                                            className="group"
                                                        >
                                                            <Link href={`/projects/${project.id}`} className="flex no-underline items-start p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300 h-full">
                                                                {/* Project Image/Icon */}
                                                                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex-shrink-0 mr-4">
                                                                    {project.image ? (
                                                                        <img
                                                                            src={project.image}
                                                                            alt={project.title}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full flex items-center justify-center">
                                                                            {skillIcons[category.id as keyof typeof skillIcons]}
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-start justify-between mb-2">
                                                                        <h4 className="text-white font-semibold text-lg group-hover:text-violet-300 transition-colors truncate pr-2">
                                                                            {project.title}
                                                                        </h4>
                                                                        <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20 text-xs flex-shrink-0">
                                                                            {project.category}
                                                                        </Badge>
                                                                    </div>

                                                                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                                                                        {project.description}
                                                                    </p>

                                                                    {/* Technologies used */}
                                                                    <div className="flex flex-wrap gap-1 mb-3">
                                                                        {project.tags
                                                                            .filter(tag =>
                                                                                category.skills.some(skill =>
                                                                                    skill.name.toLowerCase().includes(tag.toLowerCase()) ||
                                                                                    tag.toLowerCase().includes(skill.name.toLowerCase())
                                                                                )
                                                                            )
                                                                            .slice(0, 3)
                                                                            .map((tag, tagIdx) => (
                                                                                <span
                                                                                    key={tagIdx}
                                                                                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                                                                                >
                                                                                    {tag}
                                                                                </span>
                                                                            ))
                                                                        }
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                        </motion.div>
                                                    ))
                                                }

                                                {/* No projects message */}
                                                {projects.filter((p) =>
                                                    p.section.some(s => s.toLowerCase().includes(category.name.toLowerCase())) ||
                                                    p.category.toLowerCase().includes(category.name.toLowerCase()) ||
                                                    p.tags.some(tag =>
                                                        category.skills.some(skill =>
                                                            skill.name.toLowerCase().includes(tag.toLowerCase()) ||
                                                            tag.toLowerCase().includes(skill.name.toLowerCase())
                                                        )
                                                    )
                                                ).length === 0 && (
                                                        <div className="col-span-full text-center py-8">
                                                            <div className="text-slate-600 mb-2">
                                                                {skillIcons[category.id as keyof typeof skillIcons]}
                                                            </div>
                                                            <p className="text-slate-400 text-sm">
                                                                No projects found using {category.name.toLowerCase()} skills yet.
                                                            </p>
                                                            <p className="text-slate-500 text-xs mt-1">
                                                                Check back soon for new projects!
                                                            </p>
                                                        </div>
                                                    )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}