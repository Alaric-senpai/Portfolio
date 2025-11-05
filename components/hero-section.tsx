import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Code, Palette, Zap, Rocket } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import Image from "next/image"
import Animated, { AnimatedItem } from "@/components/Animated"
import { Imperial_Script } from "next/font/google"
import { cn } from "@/lib/utils"
import { personalLinks, TeckStack } from "@/lib/hardcoded"

const imperial = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ['latin'],
  weight: ['400']
})

export default function HeroSection() {
  return (
    <Animated
      delay={0.5}
      direction={'up'}
      type={'fade'}
      duration={1.5}
      isContainer
      stagger
      id="hero"
      repeat={false}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Dynamic background with gradient animation */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23a855f7&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        {[
          { icon: Code, top: '10%', left: '5%', delay: 0, size: 24 },
          { icon: Palette, top: '20%', right: '10%', delay: 1.5, size: 28 },
          { icon: Zap, top: '70%', left: '8%', delay: 2.5, size: 22 },
          { icon: Rocket, top: '80%', right: '15%', delay: 3.5, size: 26 }
        ].map(({ icon: Icon, top, left, right, delay, size }, index) => (
          <AnimatedItem
            key={index}
            delay={delay}
            className={`absolute ${top ? `top-[${top}]` : ''} ${left ? `left-[${left}]` : ''} ${right ? `right-[${right}]` : ''} text-violet-500/20 animate-float`}
          >
            <Icon className={`w-${size} h-${size}`} />
          </AnimatedItem>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Status badge */}
              <AnimatedItem delay={0.3}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
                  Available for new projects
                </div>
              </AnimatedItem>

              {/* Main heading */}
              <div className="space-y-2">
                <AnimatedItem delay={0.5}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Hello, I'm
                  </h1>
                </AnimatedItem>
                <AnimatedItem delay={0.7} direction="left" type="slide">
                  <h1 className={cn("text-5xl md:text-6xl lg:text-7xl font-bold leading-tight", imperial.className)}>
                    <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                      Charles
                    </span>
                  </h1>
                </AnimatedItem>
              </div>

              {/* Subtitle with typing effect simulation */}
              <AnimatedItem delay={0.9}>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                    Full-Stack Developer
                  </h2>
                  <div className="h-8 w-1 bg-violet-400 animate-pulse"></div>
                </div>
              </AnimatedItem>

              {/* Description */}
              <AnimatedItem delay={1.1}>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  I transform ideas into exceptional digital experiences. With expertise in modern web technologies,
                  I build scalable applications that combine stunning design with powerful functionality.
                </p>
              </AnimatedItem>
            </div>

            {/* Tech stack with improved layout */}
            <div className="space-y-4">
              <AnimatedItem delay={1.3}>
                <h3 className="text-slate-400 font-medium">Tech Stack</h3>
              </AnimatedItem>
              <div className="flex flex-wrap gap-2">
                {TeckStack.map((tech, index) => (
                  <AnimatedItem
                    delay={1.5 + (0.1 * index)}
                    key={index}
                    direction="up"
                    className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 rounded-full text-violet-300 text-sm font-medium hover:bg-violet-500/10 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </AnimatedItem>
                ))}
              </div>
            </div>

            {/* CTA Buttons with improved styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AnimatedItem delay={1.7}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-105"
                >
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </AnimatedItem>

              <AnimatedItem delay={1.9}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </AnimatedItem>
            </div>

            {/* Social Links with improved design */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: FaGithub, href: personalLinks.github, label: "GitHub", color: "hover:text-gray-400" },
                { icon: FaLinkedin, href: personalLinks.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: FaTwitter, href: personalLinks.twitter, label: "Twitter", color: "hover:text-blue-400" },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <AnimatedItem
                  key={label}
                  delay={2.1 + (0.2 * index)}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center p-3 bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 rounded-lg text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 ${color} transition-all duration-300 group hover:scale-110 hover:-translate-y-1`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </AnimatedItem>
              ))}
            </div>
          </div>

          {/* Right side - Enhanced Visual */}
          <AnimatedItem type="slide" direction="right" delay={1.2}>
            <div className="relative flex justify-center items-center">
              {/* Decorative circles */}
              <div className="absolute w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

              {/* Main profile card with glassmorphism */}
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-8 shadow-2xl w-full max-w-md">
                {/* Profile image with decorative frame */}
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                  <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-violet-500/30 shadow-xl">
                    <Image
                      src="/assets/profile.png"
                      alt="Profile"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Profile details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Charles Developer</h3>
                  <p className="text-violet-300 mb-4">Full-Stack Specialist</p>

                  {/* Stats */}
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">3+</div>
                      <div className="text-sm text-slate-400">Years Exp.</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">10+</div>
                      <div className="text-sm text-slate-400">Projects</div>
                    </div>
                    {/* <div className="text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-slate-400">Satisfaction</div>
                    </div> */}
                  </div>

                  {/* Decorative code snippet */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 rounded-lg p-3 text-left font-mono text-sm text-slate-300 mb-4">
                    <div className="text-purple-400">const</div>
                    <div className="text-violet-300">developer = &#123;</div>
                    <div className="ml-4 text-slate-300">skills: ['Full-Stack', 'UI/UX'],</div>
                    <div className="ml-4 text-slate-300">available: <span className="text-green-400">true</span></div>
                    <div className="text-violet-300">&#125;</div>
                  </div>
                </div>
              </div>

              {/* Floating code blocks */}
              <div className="absolute top-10 right-10 bg-slate-800/70 backdrop-blur-sm border border-violet-500/20 rounded-lg p-4 text-sm font-mono text-violet-300 shadow-xl animate-float">
                <div className="text-purple-400">function</div>
                <div className="text-violet-300">createMagic() &#123;</div>
                <div className="ml-4 text-slate-300">return '✨';</div>
                <div className="text-violet-300">&#125;</div>
              </div>

              <div className="absolute bottom-10 left-10 bg-slate-800/70 backdrop-blur-sm border border-violet-500/20 rounded-lg p-4 text-sm font-mono text-violet-300 shadow-xl animate-float-delayed">
                <div className="text-purple-400">if</div>
                <div className="text-violet-300">(idea) &#123;</div>
                <div className="ml-4 text-slate-300">build();</div>
                <div className="text-violet-300">&#125;</div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-violet-300 text-sm mb-2 animate-pulse">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-violet-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </Animated>
  )
}