
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Palette, Database, Globe, Cpu } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { skillCategories } from "@/lib/hardcoded"

export default function SkillsSection() {


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
            <div className="flex overflow-x-scroll justify-center ">
              <TabsList className="bg-midnight-800/50 border border-violet-500/20 h-auto flex-nowrap oveflow-scroll w-max">
                {skillCategories.map((category) => {
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-violet-500/20 px-4 py-2 flex items-center gap-2 text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, i) => {
                    const Icon = skill.icon
                    return (
                      <AnimatedItem
                        delay={0.1 * i}
                        key={i}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-violet-500/20 hover:bg-violet-500/5 transition-all duration-300"
                      >
                        <div className="p-3 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 text-violet-400 group-hover:text-violet-300 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-white font-medium text-lg">{skill.name}</h4>
                      </AnimatedItem>
                    )
                  })}
                </div>

              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Animated>
  )
}
