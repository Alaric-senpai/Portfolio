"use client"

import Link from "next/link"
import { ArrowUpRight, Download, Mail, BriefcaseBusiness, GraduationCap } from "lucide-react"
import Animated from "@/components/Animated"

const facts = [
  ["Based in", "Makueni, Kenya"],
  ["Focus", "Web and mobile applications"],
  ["Experience", "2+ years"],
  ["Currently", "BSc Computer Science"],
]

const timeline = [
  { marker: "2025", title: "Software Developer Intern / Attaché", place: "Department of ICT", copy: "A practical attachment working alongside senior engineers on internal applications, maintenance, troubleshooting, and collaborative development workflows." },
  { marker: "2026", title: "BSc Computer Science", place: "Dedan Kimathi University of Technology", copy: "Building a strong foundation in computer science while connecting algorithms and theory to practical software engineering." },
]

export default function AboutPage() {
  return <main className="profile-page">
    <section className="profile-hero route-wrap">
      <Animated><p className="route-kicker">About / 01</p><h1>A developer who likes to understand the whole picture.</h1><p className="route-lede">I build web and mobile applications from Makueni, Kenya — taking ideas from a rough problem to a thoughtful, working product.</p></Animated>
    </section>
    <section className="route-wrap profile-grid">
      <Animated className="profile-aside"><div className="initials">CK</div><p className="aside-label">Charles Kahuho</p><p className="aside-role">Full-stack developer</p><Link className="solid-action" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link><a className="quiet-action" href="/Charles-Kahuho-CV.pdf" download><Download size={16} /> Download CV</a></Animated>
      <Animated delay={.1} className="profile-content"><div className="facts-grid">{facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="profile-copy"><p>I started building software by taking things apart and figuring out how they worked. That curiosity grew into a practice focused on useful, resilient products rather than technology for its own sake.</p><p>My work spans frontend, backend, and mobile development. I pay close attention to the conditions a product has to survive in, including offline-first and low-bandwidth environments.</p><p>Alongside freelance work, I am completing my Computer Science degree at Dedan Kimathi University of Technology.</p></div></Animated>
    </section>
    <section className="route-wrap timeline-section"><Animated><p className="route-kicker">A short record</p><h2>Experience & education</h2></Animated><div className="timeline-list">{timeline.map((item, index) => <Animated key={item.title} delay={index * .08} className="timeline-item"><span className="timeline-marker">{item.marker}</span><div><p className="timeline-place">{item.place}</p><h3>{item.title}</h3><p>{item.copy}</p></div></Animated>)}</div></section>
  </main>
}
