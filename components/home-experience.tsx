"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, MoveRight } from "lucide-react";
import { projects } from "@/lib/hardcoded";

gsap.registerPlugin(ScrollTrigger);

export default function HomeExperience() {
  const root = useRef<main>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-label, .hero-title, .hero-copy, .hero-actions", { y: 28, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
      gsap.from(".hero-note", { x: 24, opacity: 0, duration: 0.8, delay: 0.35, ease: "power3.out" });
      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((element) => {
        gsap.from(element, { y: 36, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="clean-home">
      <section className="clean-hero page-width">
        <div className="hero-main">
          <p className="intro-label"><span className="status-dot" /> Independent designer & developer</p>
          <h1 className="hero-title">Digital products with <em>clarity</em> and character.</h1>
          <p className="hero-copy">I&apos;m Charles Kahuho, a product-minded developer creating thoughtful websites, apps, and brand systems for people building what&apos;s next.</p>
          <div className="hero-actions"><Link href="#work" className="button button-primary">View selected work <ArrowUpRight size={16} /></Link><Link href="/contact" className="inline-link">Start a conversation <MoveRight size={16} /></Link></div>
        </div>
        <aside className="hero-note"><span className="note-line" /><p>Based in Kenya<br />Working worldwide</p><p className="note-small">Available for select<br />projects in 2026</p></aside>
      </section>

      <div className="statement-band"><div className="page-width statement-inner"><span>01</span><p>Useful things should feel good to use.</p><span className="statement-rule" /></div></div>

      <section className="about-strip page-width section-reveal"><div className="section-label">About</div><div className="about-content"><h2>Design and engineering, in the same room.</h2><div><p>I help ambitious teams turn rough ideas into clear, useful digital experiences. My work lives where strategy, interface design, and reliable code overlap.</p><Link href="/about" className="text-link">More about Charles <ArrowUpRight size={15} /></Link></div></div></section>

      <section className="work-section page-width section-reveal" id="work"><div className="section-top"><div><div className="section-label">Selected work</div><h2>A few things I&apos;ve made.</h2></div><Link href="/projects" className="text-link">View all projects <ArrowUpRight size={15} /></Link></div><div className="clean-projects">{projects.filter((project) => project.featured).slice(0, 4).map((project, index) => <Link href={`/projects/${project.id}`} key={project.id} className="clean-project"><div className={`project-color project-color-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={23} /></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.description}</p></div><span>{project.category}</span></div></Link>)}</div></section>

      <section className="services-section page-width section-reveal"><div className="section-label">Capabilities</div><div className="services-layout"><h2>From first thought<br />to <em>final detail.</em></h2><div className="service-list"><div><span>01</span><p>Product design & direction</p><Check size={17} /></div><div><span>02</span><p>Websites & digital platforms</p><Check size={17} /></div><div><span>03</span><p>Frontend engineering</p><Check size={17} /></div><div><span>04</span><p>Brand systems & launch support</p><Check size={17} /></div></div></div></section>

      <section className="closing-section page-width section-reveal"><div className="closing-label">Have a good idea?</div><h2>Let&apos;s make it<br /><em>real.</em></h2><Link href="/contact" className="button button-primary">Get in touch <ArrowUpRight size={16} /></Link><div className="closing-foot"><span>thecharles.tech</span><span>© 2026 Charles Kahuho</span></div></section>
    </main>
  );
}


