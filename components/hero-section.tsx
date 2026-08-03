import Link from "next/link"
import { Button } from "@/components/retroui/Button"
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { personalLinks } from "@/lib/hardcoded";
export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-20 border-b border-border">
      {/* Topographic Contour Line Motif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50 Q 25 30 50 50 T 100 50' fill='none' stroke='%23C98A3E' stroke-width='1'/%3E%3Cpath d='M0 70 Q 25 50 50 70 T 100 70' fill='none' stroke='%23C98A3E' stroke-width='0.5'/%3E%3Cpath d='M0 90 Q 25 70 50 90 T 100 90' fill='none' stroke='%23C98A3E' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E\")" }}></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary text-secondary font-mono text-sm uppercase tracking-wide">
                ● Available for New Opportunities
                </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans tracking-tighter text-foreground leading-[1] animate-in fade-in slide-in-from-bottom-8 duration-700">
              Charles Kahuho <br />
              <span className="text-muted-foreground text-4xl md:text-5xl lg:text-6xl tracking-normal block mt-4 font-body font-normal">
                Full-Stack Developer — Makueni, Kenya
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Building practical, performance-minded web and cross-platform mobile products. Focused on offline-first capabilities and resource-conscious engineering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-in fade-in slide-in-from-bottom-16 duration-1000 fill-mode-backwards">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 font-sans border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all">
                Start a Project <Mail className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/assets/resume.pdf" target="_blank">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 font-sans border border-border text-foreground hover:bg-muted transition-all">
                View Resume <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 animate-in fade-in zoom-in duration-1000 delay-300">
            <Link href={personalLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link href={personalLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all">
              <FaTwitter className="w-6 h-6" />
            </Link>
          </div>
      </div>
    </section>
  )
}