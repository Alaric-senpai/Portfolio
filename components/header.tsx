"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [["Home", "/"], ["About", "/about"], ["Skills", "/skills"], ["Projects", "/projects"], ["Contact", "/contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="floating-nav-wrap"><div className="archive-nav"><Link href="/" className="mark" onClick={() => setOpen(false)}>the<b>charles</b><span className="mark-dot" /></Link><nav className="nav-links" aria-label="Primary navigation">{items.map(([label, href]) => <Link href={href} key={href} className={cn(pathname === href && "nav-active")}>{label}</Link>)}</nav><span className="nav-status">available <i aria-hidden="true" /></span><button className="nav-menu-button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{items.map(([label, href], index) => <Link href={href} key={href} onClick={() => setOpen(false)} className={pathname === href ? "nav-active" : ""}><span>0{index + 1}</span>{label}</Link>)}</nav>}</div></header>;
}
