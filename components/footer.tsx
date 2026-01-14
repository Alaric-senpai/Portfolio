"use client"

import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import { Github, Linkedin, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t-2 border-black pt-16 pb-8">
      
      {/* Scroll to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="icon"
          className="rounded-full w-12 h-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#home" className="flex items-center space-x-2 group w-fit">
               <div className="w-8 h-8 bg-primary border border-black rounded flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">C</span>
               </div>
              <span className="text-xl font-black tracking-tight text-foreground">Charles.dev</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Full-stack developer specializing in building exceptional digital experiences. Currently focused on
              building accessible, human-centered products.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/Alaric-senpai", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 bg-secondary border border-black rounded-md text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Skills", href: "/skills" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary font-medium hover:underline decoration-2 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <span className="block text-foreground font-semibold">Email:</span>
                contact@devcharles.me
              </li>
              <li className="text-muted-foreground">
                <span className="block text-foreground font-semibold">Phone:</span>
                +254 797810469
              </li>
              <li className="text-muted-foreground">
                <span className="block text-foreground font-semibold">Location:</span>
                Nyeri, KE
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground font-medium">
          <p>© {currentYear} Charles.dev. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
