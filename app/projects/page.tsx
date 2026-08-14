"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search, ArrowUpRight, RotateCcw } from "lucide-react"
import { projects } from "@/lib/hardcoded"
import Animated from "@/components/Animated"

const categories = ["All", "Web App", "Mobile App", "Backend", "UI/UX"]

export default function ProjectsPage() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => projects.filter((project) => {
    const haystack = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase()
    return (category === "All" || project.category === category) && haystack.includes(query.toLowerCase())
  }), [category, query])

  return <main className="archive-page">
    <section className="archive-intro wrap">
      <Animated><p className="eyebrow">Selected work / 2021—present</p><h1>Things I&apos;ve<br /><em>put into the world.</em></h1><p className="intro-copy">A working archive of products, experiments, and systems built with care. Each one started as a problem worth staying with.</p></Animated>
    </section>
    <section className="wrap archive-toolbar"><label className="search-line"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the archive" /></label><div className="filter-row">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "filter active" : "filter"}>{item}</button>)}{(query || category !== "All") && <button className="filter reset" onClick={() => { setQuery(""); setCategory("All") }}><RotateCcw size={14} /> Reset</button>}</div></section>
    <section className="wrap archive-list" aria-live="polite">{filtered.map((project, index) => <Animated key={project.id} delay={index * .06}><Link href={`/projects/${project.id}`} className="archive-row"><span className="row-index">{String(index + 1).padStart(2, "0")}</span><span className="row-title">{project.title}<small>{project.description}</small></span><span className="row-meta">{project.category}<br />{project.status}</span><ArrowUpRight className="row-arrow" /></Link></Animated>)}{filtered.length === 0 && <p className="empty-copy">No work matches that search yet.</p>}</section>
  </main>
}
