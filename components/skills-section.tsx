import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Palette, Database, Globe, Cpu } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"

export default function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: Code,
      skills: [
        { name: "Angular", level: 65 },
        { name: "Next.js", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "HTML/CSS", level: 75 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Express", level: 80 },
        { name: "NestJs", level: 75 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      id: "design",
      name: "Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 55 },
        { name: "Responsive Design", level: 90 },
        { name: "Prototyping", level: 50 },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Appwrite", level: 70 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      id: "deployment",
      name: "Deployment",
      icon: Globe,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 95 },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: Cpu,
      skills: [
        { name: "Git", level: 90 },
        { name: "Testing", level: 80 },
        { name: "Agile", level: 85 },
        { name: "Performance", level: 80 },
        { name: "SEO", level: 75 },
        { name: "Accessibility", level: 85 },
      ],
    },
  ]

  return (
    <Animated
    repeat
    delay={1.5}
    isContainer 
    stagger
    duration={1.5}
    >
      <section id="skills" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <Code className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            <p className="max-w-2xl text-slate-400">
              My technical skills and areas of expertise that I've developed over the years.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-midnight-800/50 border border-violet-500/20 h-auto flex-wrap">
                {skillCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-violet-500/20 px-4 py-2 flex items-center gap-2 text-white"
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {category.skills.map((skill, i) => (
                    <AnimatedItem  delay={0.2 * i}   key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-medium">{skill.name}</h4>
                        <span className="text-violet-300 text-sm">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-midnight-800/50"
                        indicatorClassName="bg-gradient-to-r from-violet-500 to-purple-500"
                      />
                    </AnimatedItem>
                  ))}
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-midnight-800/50 border border-violet-500/20 flex items-center justify-center p-4"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-void-900 to-midnight-900 rounded flex items-center justify-center">
                        <div className="text-violet-300 text-4xl font-bold opacity-30">{category.name.charAt(0)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Animated>
  )
}
