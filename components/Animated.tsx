"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type React from "react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

type AnimatedProps = { children: React.ReactNode; className?: string; delay?: number; stagger?: boolean; isContainer?: boolean; repeat?: boolean; id?: string }

export default function Animated({ children, className, delay = 0, stagger = false, isContainer = false, id }: AnimatedProps) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const items = isContainer && stagger ? ref.current?.children : ref.current
    if (!items) return
    gsap.fromTo(items, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: .8, delay, stagger: isContainer && stagger ? .1 : 0, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } })
  }, { scope: ref })
  return <div ref={ref} id={id} className={cn(className)}>{children}</div>
}

export function AnimatedItem({ children, className }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={cn("reveal", className)}>{children}</div>
}
