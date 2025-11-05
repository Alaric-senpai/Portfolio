// components/AboutSection.tsx (for homepage)
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import Link from "next/link"

const codingApproaches = [
  "User-centered design",
  "Clean, maintainable code",
  "Performance optimization",
  "Accessibility first",
  "Readable code",
  "Writing Reusable code"
]

export default function AboutSection() {
  return (
    <Animated
      repeat={false}
      delay={0.5}
      isContainer
      stagger
      duration={1.5}
    >
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <User className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            <p className="max-w-2xl text-slate-400">
              A passionate Full-Stack Developer with expertise in modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <AnimatedItem delay={0.2}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-violet-500/20 overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border border-violet-500/30 mb-6">
                    <div className="text-4xl font-bold text-violet-300">CK</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Charles</h3>
                  <p className="text-slate-400 mb-4">Full-Stack Developer</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-slate-300">Nyeri, CA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Experience:</span>
                      <span className="text-slate-300">2+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-green-400">Available</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                    asChild
                  >
                    <Link href="/about">View Full Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedItem>

            {/* Bio and Approach */}
            <AnimatedItem delay={0.4} className="md:col-span-2">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-violet-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-slate-300 mb-4">
                    I'm a passionate Full-Stack Developer with over 2 years of experience building web applications that solve real-world problems. My journey began when I built my first website at 18, and I've been hooked ever since.
                  </p>
                  <p className="text-slate-300">
                    I specialize in creating robust, scalable applications using modern technologies. My approach combines clean code principles with thoughtful UX design to deliver exceptional digital experiences.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-violet-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">My Approach</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {codingApproaches.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>
    </Animated>
  )
}