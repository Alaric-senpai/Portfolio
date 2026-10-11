"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const items = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname  = usePathname()

  return (
    <header className="archive-nav">
      <Link href="/" className="mark">
        the<b>charles</b>
      </Link>
      <nav className="nav-links">
        {items.map(([label, href]) => (
          <Link href={href} key={href} className={cn(pathname == href ? 'nav-active font-bold color': null)
          }>
            {label}
          </Link>
        ))}
      </nav>
      <span className="nav-status">open to work</span>
      <button
        className="md:hidden font-mono text-xs uppercase"
        onClick={() => setOpen(!open)}
      >
        {open ? "close" : "menu"}
      </button>
      {open && (
        <nav className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-5 font-mono text-xs uppercase md:hidden">
          {items.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
