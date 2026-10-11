import Link from "next/link";
import Hero3D from "./hero-3d";

export default function HeroSection() {
  return (
    <section className="new-hero" id="top">
      <div className="new-hero-top"><span>CK / 01—06</span><span>Independent digital maker</span></div>
      <div className="new-hero-grid">
        <div className="new-hero-copy">
          <p className="eyebrow">Charles Kahuho · Nairobi / Makueni</p>
          <h1>Ideas<br /><span>in motion.</span></h1>
          <p className="hero-lede">I design and engineer expressive digital products where sharp code meets playful worlds.</p>
          <div className="hero-actions"><Link href="/projects" className="hero-button">Explore the work <span>↗</span></Link><Link href="/contact" className="hero-text-link">Let&apos;s make something</Link></div>
        </div>
        <Hero3D />
      </div>
      <div className="new-hero-bottom"><span>Scroll to wander ↓</span><span>Available for select collaborations <i /></span></div>
    </section>
  );
}
