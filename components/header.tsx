"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <header className="topbar">
    <Link href="/" className="wordmark" aria-label="DevCharles home">dev<i>charles</i></Link>
    <nav className="main-nav" aria-label="Main navigation">
      {navItems.map((item) => { const href = item === "Home" ? "/" : `/${item.toLowerCase()}`; return <Link key={item} href={href} className={cn(pathname === href && "text-primary")}>{item}</Link> })}
    </nav>
    <div className="availability"><span className="status-dot" /> available for select work</div>
    <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="absolute left-0 right-0 top-full flex flex-col gap-5 border-b border-border bg-background p-6 font-mono text-xs uppercase lg:hidden">{navItems.map((item) => { const href = item === "Home" ? "/" : `/${item.toLowerCase()}`; return <Link key={item} href={href} onClick={() => setOpen(false)} className={cn(pathname === href && "text-primary")}>{item}</Link> })}</nav>}
  </header>
}
