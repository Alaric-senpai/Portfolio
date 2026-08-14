import Link from "next/link"
import {personalLinks} from "@/lib/hardcoded"
export default function Footer(){return <footer className="site-footer"><div><span>DevCharles / Independent developer</span><p>Built in Makueni.<br/>Available everywhere.</p></div><div><Link href="/contact">Start a project ↗</Link><br/><a href={personalLinks.github}>GitHub ↗</a><br/><a href={personalLinks.linkedin}>LinkedIn ↗</a></div><small>© {new Date().getFullYear()} Charles Kahuho</small></footer>}
