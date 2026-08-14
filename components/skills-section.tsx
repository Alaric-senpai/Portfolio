"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Animated, { AnimatedItem } from "@/components/Animated"
import { skillCategories } from "@/lib/hardcoded"

export default function SkillsSection() {
  return <Animated repeat isContainer stagger><section id="skills" className="work-section">
    <div className="section-head"><div><div className="section-label"><span>04</span><span>Toolkit</span></div><h2 className="display-copy mt-6 mb-0">Tools I use to make things <mark>work.</mark></h2></div><p>Less tool collecting.<br />More useful products.</p></div>
    <Tabs defaultValue="frontend" className="w-full"><TabsList className="mb-10 flex h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b border-border bg-transparent p-0">{skillCategories.map((category) => <TabsTrigger key={category.id} value={category.id} className="rounded-none border-b-2 border-transparent px-3 py-3 font-mono text-xs uppercase data-[state=active]:border-primary data-[state=active]:bg-transparent">{category.name}</TabsTrigger>)}</TabsList>{skillCategories.map((category) => <TabsContent key={category.id} value={category.id}><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{category.skills.map((skill, index) => { const Icon = skill.icon; return <AnimatedItem key={skill.name} delay={index * .05}><div className="flex items-center gap-4 border border-border bg-card p-5 transition-transform hover:-translate-y-1"><Icon className="text-primary" /><span className="font-sans text-lg">{skill.name}</span></div></AnimatedItem> })}</div></TabsContent>)}</Tabs>
  </section></Animated>
}
