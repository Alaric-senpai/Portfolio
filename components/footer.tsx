import Link from "next/link"
import { personalLinks } from "@/lib/hardcoded"

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-footer__lead"><span className="eyebrow">Still curious?</span><p>Good work starts with a clear conversation.</p></div>
    <div className="site-footer__links"><div><span className="footer-label">Navigate</span><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/skills">Skills</Link><Link href="/contact">Contact</Link></div><div><span className="footer-label">Elsewhere</span><a href={personalLinks.github} target="_blank" rel="noreferrer">GitHub</a><a href={personalLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={personalLinks.twitter} target="_blank" rel="noreferrer">Twitter</a></div></div>
    <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Charles Kahuho</span><Link href="/sitemap.xml">Sitemap</Link></div>
  </footer>
}
