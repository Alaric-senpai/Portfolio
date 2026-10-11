"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToonCharacter from "./toon-character";
import { projects } from "@/lib/hardcoded";

gsap.registerPlugin(ScrollTrigger);

const marquee = "CHARLES KAHUHO — DIGITAL WORLDS — THECHARLES.TECH — ";

export default function HomeExperience() {
  const root = useRef<main>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-kicker, .home-title-line, .home-copy, .home-actions", { y: 70, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" });
      gsap.from(".character-wrap", { scale: 0.7, opacity: 0, rotate: -8, duration: 1.4, ease: "elastic.out(1, .5)", delay: 0.25 });
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
        gsap.from(element, { y: 80, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%" } });
      });
      gsap.to(".marquee-track", { xPercent: -25, duration: 18, repeat: -1, ease: "none" });
      gsap.to(".orbit-sticker", { rotation: 360, duration: 18, repeat: -1, ease: "none" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="fresh-home">
      <section className="home-hero" id="top">
        <div className="hero-scribble">01 / hello, hello</div>
        <div className="hero-split">
          <div className="hero-words">
            <p className="home-kicker">Creative developer / Nairobi–Makueni</p>
            <h1 className="home-title"><span className="home-title-line">I make</span><span className="home-title-line title-accent">the internet</span><span className="home-title-line">feel alive.</span></h1>
            <p className="home-copy">Charles Kahuho is a designer and engineer building expressive digital products, curious brands, and tiny worlds worth getting lost in.</p>
            <div className="home-actions"><Link href="#work" className="pill-button">See the work <span>↘</span></Link><Link href="/contact" className="text-arrow">Have a good idea? <span>Let&apos;s talk →</span></Link></div>
          </div>
          <div className="character-wrap"><div className="character-label label-one">hi, I&apos;m Charlie</div><div className="character-label label-two">drag your eyes around</div><ToonCharacter /><div className="orbit-sticker">DESIGN · CODE · PLAY ·</div></div>
        </div>
        <div className="hero-bottom"><span>Scroll, there&apos;s more ↓</span><span>Available for select collaborations <i /></span></div>
      </section>
      <div className="marquee"><div className="marquee-track">{marquee.repeat(4)}</div></div>
      <section className="story-section reveal-up" id="about"><div className="section-number">02 / the point of view</div><div className="story-grid"><h2>Serious about<br /><em>feeling.</em></h2><div><p className="big-copy">The best digital work has a pulse. It can be useful and still make you smile. I bring art direction, interaction design, and full-stack craft together to make that happen.</p><p className="muted-copy">From the first sketch to the last shipped pixel, I care about the small moments that turn a screen into an experience.</p></div></div></section>
      <section className="work-section" id="work"><div className="section-heading reveal-up"><div className="section-number">03 / selected worlds</div><h2>Recent <em>work</em></h2><p>Things I&apos;ve designed, engineered, and shipped into the wild.</p></div><div className="project-cards">{projects.filter((p) => p.featured).slice(0, 4).map((project, index) => <Link href={`/projects/${project.id}`} className={`project-card project-card-${index + 1} reveal-up`} key={project.id}><span className="card-index">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.description}</p><span className="card-link">Open case study ↗</span></div><div className="card-shape" /></Link>)}</div></section>
      <section className="manifesto reveal-up"><div className="section-number">04 / the recipe</div><div className="manifesto-line"><span>Good work is</span><strong>useful</strong><span>and</span><strong>unexpected.</strong></div><div className="manifesto-bottom"><p>Brand systems, websites, mobile apps, and playful experiments for people with something to say.</p><Link href="/services" className="pill-button pill-dark">What I can do <span>↗</span></Link></div></section>
      <section className="home-contact reveal-up" id="contact"><div className="section-number">05 / over to you</div><h2>Let&apos;s make<br /><em>something weird.</em></h2><Link href="/contact" className="contact-button">Start a conversation <span>↗</span></Link><div className="contact-foot"><span>thecharles.tech</span><span>© 2026 Charles Kahuho</span></div></section>
    </main>
  );
}
