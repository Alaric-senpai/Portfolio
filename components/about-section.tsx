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
             <div className="px-4 py-1 bg-accent border-2 border-black text-black font-black mb-4 transform -rotate-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                About Me
             </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase">Behind The Code</h2>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed font-medium">
              A precise Full-Stack Developer focused on performance, scalability, and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <AnimatedItem delay={0.2}>
              <div className="h-full bg-card border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center text-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200">
                  <div className="w-32 h-32 rounded-full bg-secondary border-2 border-black flex items-center justify-center mb-6">
                    <span className="text-4xl font-black text-secondary-foreground">CK</span>
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-1 uppercase">Charles</h3>
                  <p className="text-muted-foreground font-bold mb-6 uppercase tracking-wider text-sm">Full-Stack Developer</p>
                  
                  <div className="w-full space-y-4 mb-8 text-left font-medium">
                    <div className="flex items-center justify-between p-2 bg-accent/10 rounded border border-black/5">
                      <span className="flex items-center text-muted-foreground"><MapPin className="w-4 h-4 mr-2"/> Location</span>
                      <span className="font-medium">Nyeri, KE</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-accent/10 rounded border border-black/5">
                      <span className="flex items-center text-muted-foreground"><Calendar className="w-4 h-4 mr-2"/> Exp.</span>
                      <span className="font-medium">2+ Years</span>
                    </div>
                     <div className="flex items-center justify-between p-2 bg-accent/10 rounded border border-black/5">
                      <span className="flex items-center text-muted-foreground"><Briefcase className="w-4 h-4 mr-2"/> Status</span>
                      <span className="font-bold text-green-600">Available</span>
                    </div>
                  </div>

                  <Link href="/about" className="w-full">
                    <Button variant="outline" className="w-full">View Full Profile</Button>
                  </Link>
              </div>
            </AnimatedItem>

            {/* Bio and Approach */}
            <AnimatedItem delay={0.4} className="md:col-span-2">
              <div className="space-y-8">
                <div className="bg-card border-2 border-black p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-3 border border-black"></span>
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I am a Full-Stack Developer with over 2 years of experience engineering web applications that solve complex real-world problems. My journey began at 17, fueled by a curiosity for how the digital world operates, and has evolved into a continuous pursuit of coding excellence.
                    <br/><br/>
                    I specialize in architecting robust, scalable applications using modern technologies. My philosophy combines clean, maintainable code with intuitive, user-centric design to deliver digital experiences that are not just functional, but exceptional.
                  </p>
                </div>

                <div className="bg-secondary border-2 border-black p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-bold text-foreground mb-6">My Approach</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {codingApproaches.map((item, i) => (
                      <div key={i} className="flex items-center bg-background border border-black/10 p-3 rounded-md">
                        <div className="w-2 h-2 bg-primary rotate-45 mr-3"></div>
                        <span className="font-medium text-foreground">{item}</span>
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