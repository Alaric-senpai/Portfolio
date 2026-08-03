// components/AboutSection.tsx (for homepage)
import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import { Card, CardContent } from "@/components/ui/card" // Assuming we can style this via className or allow it. Better to use className overrides.
import { User, MapPin, Briefcase, Calendar } from "lucide-react"
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
      <section id="about" className="py-24 bg-background border-t-2 border-black relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 text-center">
             <div className="px-4 py-1.5 bg-secondary/10 border border-secondary text-secondary font-mono text-sm uppercase tracking-wide mb-4">
                ● About Me
             </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">Behind The Code</h2>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed font-medium">
              A precise Full-Stack Developer focused on performance, scalability, and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <AnimatedItem delay={0.2}>
              <div className="h-full bg-card border border-border p-6 flex flex-col items-center text-center transition-all duration-200">
                  <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center mb-6 border border-secondary">
                    <span className="text-4xl font-sans text-secondary">CK</span>
                  </div>
                  <h3 className="text-2xl font-sans text-foreground mb-1">Charles Kahuho</h3>
                  <p className="text-primary font-mono mb-6 uppercase tracking-wider text-sm">Full-Stack Developer</p>
                  
                  <div className="w-full space-y-4 mb-8 text-left font-mono text-sm">
                    <div className="flex items-center justify-between p-3 bg-background/50 border border-border">
                      <span className="flex items-center text-muted-foreground"><MapPin className="w-4 h-4 mr-2"/> Location</span>
                      <span className="text-foreground">Makueni, KE</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 border border-border">
                      <span className="flex items-center text-muted-foreground"><Calendar className="w-4 h-4 mr-2"/> Exp.</span>
                      <span className="text-foreground">2+ Years</span>
                    </div>
                     <div className="flex items-center justify-between p-3 bg-background/50 border border-border">
                      <span className="flex items-center text-muted-foreground"><Briefcase className="w-4 h-4 mr-2"/> Status</span>
                      <span className="text-primary">Available</span>
                    </div>
                  </div>

                  <Link href="/about" className="w-full">
                    <Button variant="outline" className="w-full font-sans border-border text-foreground hover:bg-muted">View Full Profile</Button>
                  </Link>
              </div>
            </AnimatedItem>

            {/* Bio and Approach */}
            <AnimatedItem delay={0.4} className="md:col-span-2">
              <div className="space-y-8">
                <div className="bg-card border border-border p-8">
                  <h3 className="text-2xl font-sans text-foreground mb-4 flex items-center">
                    <span className="w-3 h-3 bg-primary mr-3"></span>
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I am a full-stack developer based in Makueni, Kenya, with over 2 years of hands-on experience building practical web and cross-platform mobile products. My journey began around age 17, figuring out how to build systems out of scrappy setups. I am currently completing my BSc in Computer Science from Dedan Kimathi University of Technology (expected Feb 2026).
                    <br/><br/>
                    I specialize in engineering performance-minded, offline-first applications designed for resource-constrained environments, leveraging tools like Next.js, React Native, and Node.js.
                  </p>
                </div>

                <div className="bg-background border border-border p-8">
                  <h3 className="text-2xl font-sans text-foreground mb-6">My Approach</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {codingApproaches.map((item, i) => (
                      <div key={i} className="flex items-center bg-card border border-border p-3">
                        <div className="w-1.5 h-1.5 bg-secondary rotate-45 mr-3"></div>
                        <span className="font-mono text-sm text-foreground">{item}</span>
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
