"use client"

import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import Animated, { AnimatedItem } from "@/components/Animated"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  AppWindow, Server, Smartphone, Database, Cloud, Cog, GitBranch, ShieldCheck, 
  LayoutDashboard, Code2, Terminal, Braces 
} from "lucide-react";

import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiRust, SiExpo, SiAppwrite, SiSupabase,
  SiPostgresql, SiMongodb, SiDocker, SiVercel, SiLinux, SiNginx, SiGit, SiGithub,
  SiFigma, SiPnpm, SiThreedotjs, SiSolidity, SiWebassembly
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const allTechCategories = [
  {
    title: "Frontend",
    icon: <AppWindow className="w-6 h-6" />,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Three.js", icon: SiThreedotjs },
    ],
    color: "bg-blue-100",
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Python", icon: SiPython },
      { name: "REST APIs", icon: TbApi },
      { name: "Auth (JWT, sessions)", icon: ShieldCheck },
      { name: "Solidity", icon: SiSolidity },
      { name: "Rust", icon: SiRust },
    ],
    color: "bg-green-100",
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "NativeWind (Tailwind RN)", icon: SiTailwindcss },
    ],
    color: "bg-purple-100",
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Appwrite DB", icon: SiAppwrite },
      { name: "Supabase DB", icon: SiSupabase },
      { name: "Schema Design", icon: Database },
      { name: "Data Modeling", icon: Database },
    ],
    color: "bg-orange-100",
  },
  {
    title: "DevOps & Hosting",
    icon: <ShieldCheck className="w-6 h-6" />,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux", icon: SiLinux },
      { name: "Nginx", icon: SiNginx },
      { name: "Cloud Architecture", icon: Cloud },
    ],
    color: "bg-red-100",
  },
  {
    title: "Version Control & Workflow",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "PR Workflow", icon: GitBranch },
      { name: "Issue-driven Development", icon: GitBranch },
    ],
    color: "bg-slate-100",
  },
  {
    title: "Tooling & IDEs",
    icon: <Cog className="w-6 h-6" />,
    skills: [
      { name: "VS Code", icon: VscVscode },
      { name: "pnpm", icon: SiPnpm },
      { name: "Swagger / OpenAPI", icon: TbApi },
      { name: "Terminal", icon: Terminal },
    ],
    color: "bg-zinc-100",
  },
  {
    title: "UI / Product Design",
    icon: <LayoutDashboard className="w-6 h-6" />,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Design Systems", icon: LayoutDashboard },
      { name: "UX / Dashboards", icon: LayoutDashboard },
    ],
    color: "bg-pink-100",
  },
  {
    title: "Engineering Practices",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Component Architecture", icon: Code2 },
      { name: "Clean Folder Structure", icon: Code2 },
      { name: "Refactoring", icon: Code2 },
      { name: "Debugging", icon: Code2 },
      { name: "System Design", icon: Braces },
    ],
    color: "bg-indigo-100",
  },
  {
    title: "Learning / Experimenting",
    icon: <Braces className="w-6 h-6" />,
    skills: [
      { name: "AI Integration", icon: Braces },
      { name: "WebAssembly", icon: SiWebassembly },
      { name: "Rust", icon: SiRust },
      { name: "Solidity / Blockchain", icon: SiSolidity },
      { name: "Three.js / 3D Web", icon: SiThreedotjs },
      { name: "Cloud Architecture", icon: Cloud },
    ],
    color: "bg-yellow-100",
  },
];


export default function SkillsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t border-border">
            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in zoom-in duration-500">
                    <div className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary text-secondary font-mono text-sm uppercase tracking-wide mb-6">
                         ● Expertise
                    </div>
                    <h1 className="text-6xl md:text-8xl font-sans text-foreground mb-6">
                        Technical Proficiency
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto border-b border-border pb-4 inline-block">
                        The tools and technologies I use to build digital solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {allTechCategories.map((category, index) => (
                        <AnimatedItem key={index} delay={0.1 * index} className="h-full">
                            <div className="h-full bg-card border border-border flex flex-col hover:-translate-y-1 transition-all duration-300">
                                <div className={`p-6 border-b border-border flex items-center justify-between`}>
                                    <h2 className="text-2xl font-sans text-foreground flex items-center gap-3">
                                        <div className="p-2 bg-background border border-border text-foreground">
                                            {category.icon}
                                        </div>
                                        {category.title}
                                    </h2>
                                    <Terminal className="w-5 h-5 text-muted-foreground opacity-20" />
                                </div>
                                
                                <div className="p-6 flex-grow">
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.skills.map((skill, i) => {
                                            const Icon = skill.icon
                                            return (
                                                <div key={i} className="flex flex-col items-center justify-center p-4 border border-border bg-background hover:border-primary transition-all gap-3 text-center min-h-[100px] group">
                                                    <div className="text-4xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                                        <Icon className="w-8 h-8" />
                                                    </div>
                                                    <span className="font-mono text-xs text-foreground uppercase tracking-wide leading-tight">{skill.name}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="p-4 bg-background border-t border-border">
                                    <div className="flex gap-2 flex-wrap">
                                        {[1,2,3].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 bg-border rounded-full"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>

                {/* Additional / "Other" skills tag cloud style */}
                <AnimatedItem delay={0.6} className="mt-20">
                     <div className="bg-card text-foreground border border-border p-10 relative overflow-hidden">
                        <Braces className="absolute -right-10 -bottom-10 w-64 h-64 text-muted-foreground/10 rotate-12" />
                        
                        <h3 className="text-3xl font-sans mb-8 relative z-10 border-b border-border pb-4 inline-block">
                            Currently learning/researching
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 relative z-10">
                            {["Rust", "WebAssembly", "Three.js", "AI Integration", "Solidity", "System Design", "Cloud Architecture"].map((item, i) => (
                                <span 
                                    key={i} 
                                    className="px-4 py-2 border border-border bg-background font-mono text-sm uppercase text-foreground hover:border-primary transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                     </div>
                </AnimatedItem>

            </div>
        </div>
    )
}