import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Animated, { AnimatedItem } from "@/components/Animated"

const TeckStack:string[]=[
  "Angular", "Next.js", "Firebase", "Appwrite","Tailwind","ExpressJs","NestJS",
  "PHP","Laravel","Typecript","Javascript","HTML", "CSS" 
]

export default function Component() {
  return (
    <Animated
    delay={1}
    direction={'up'}
    type={'fade'}
    duration={1.5}
    isContainer
    stagger
    id="hero"
    repeat={true}
     className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}

      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23a855f7&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
                <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
                Available for work
              </div>
              
              <h1 className="text-5xl flex flex-row gap-4 lg:text-7xl font-bold text-white leading-tight">
                Hey, I&apos;m{" "}
                <AnimatedItem direction="left" type="slide" duration={2} >
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Charles
                </span>
                </AnimatedItem>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
                Full-Stack Developer & UI/UX Enthusiast
              </h2>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                I craft digital experiences that blend beautiful design with robust functionality. 
                Passionate about creating solutions that make a difference, one line of code at a time.
              </p>
            </div>
            
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {TeckStack.map((tech, index) => (
                <AnimatedItem
                delay={0.2 * index} 
                  key={index}
                  direction="up"

                  className="px-3 py-1 mb-2 bg-midnight-800/50 border border-violet-500/20 rounded-full text-violet-300 text-sm font-medium hover:bg-violet-500/10 transition-colors"
                >
                  {tech}
                </AnimatedItem>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/Alaric-senpai", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: ExternalLink, href: "#", label: "Portfolio" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="p-3 bg-midnight-800/50 border border-violet-500/20 rounded-lg text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 hover:text-violet-200 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right side - Visual */}
          <AnimatedItem type="slide" direction="left" delay={1}>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Floating code blocks */}
              <div className="absolute -top-8 -left-8 bg-midnight-800/80 backdrop-blur-sm border border-violet-500/20 rounded-lg p-4 text-sm font-mono text-violet-300 shadow-xl animate-float">
                <div className="text-purple-400">const</div>
                <div className="text-violet-300">developer = </div>
                <div className="ml-4 text-slate-300">passion: true</div>
                <div className="text-violet-300"></div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-midnight-800/80 backdrop-blur-sm border border-violet-500/20 rounded-lg p-4 text-sm font-mono text-violet-300 shadow-xl animate-float-delayed">
                <div className="text-purple-400">function</div>
                <div className="text-violet-300">buildAmazing()  </div>
                <div className="ml-4 text-slate-300">return magic ✨</div>
                <div className="text-violet-300"></div>
              </div>
              
              {/* Main profile area */}
              <div className="relative bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 shadow-2xl">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-violet-500/30">
                  <Image
                    src="/assets/profile.png"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="rounded-full border-2 border-violet-400/50"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-violet-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          </AnimatedItem>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-violet-300 animate-bounce">
        <div className="w-6 h-10 border-2 border-violet-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </Animated>
  )
}
