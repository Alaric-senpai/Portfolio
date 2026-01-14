import Link from "next/link"
import { Button } from "@/components/retroui/Button"
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { personalLinks } from "@/lib/hardcoded";
export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Abstract Minimalist Background Shapes for Visual Interest */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-block px-4 py-1.5 bg-secondary border-2 border-black/5 rounded-full text-sm font-bold text-secondary-foreground shadow-sm uppercase tracking-wide">
                Available for New Opportunities
                </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.9] uppercase animate-in fade-in slide-in-from-bottom-8 duration-700">
              Charles Kahuho <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 text-5xl md:text-7xl lg:text-8xl tracking-normal block mt-2">
                Full-Stack Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Building accessible, high-performance web applications with meaningful impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-in fade-in slide-in-from-bottom-16 duration-1000 fill-mode-backwards">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-xl px-10 py-6 font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                Start a Project <Mail className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            <Link href="/assets/resume.pdf" target="_blank">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-xl px-10 py-6 font-black uppercase border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:bg-accent transition-all">
                View Resume <ExternalLink className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 animate-in fade-in zoom-in duration-1000 delay-300">
            <Link href={personalLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-black hover:scale-110 transition-all">
              <FaGithub className="w-8 h-8" />
            </Link>
            <Link href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 hover:scale-110 transition-all">
              <FaLinkedinIn className="w-8 h-8" />
            </Link>
            <Link href={personalLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-sky-500 hover:scale-110 transition-all">
              <FaTwitter className="w-8 h-8" />
            </Link>
          </div>
      </div>
    </section>
  )
}