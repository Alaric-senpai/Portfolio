import Animated from "./Animated"
import Link from 'next/link'
export default function HeroSection() {
  return (
    <section className="masthead" id="top">
      <div className="mast-meta">
        <span>DevCharles / 2026</span>
        <span>Makueni, Kenya</span>
      </div>
      <Animated>
        <h1 className="mast-title">
          I make
          <br />
          <em>useful</em> things
          <br />
          for the web.
        </h1>
        <p className="mast-intro">
          Charles Kahuho is a full-stack developer building clear, capable
          digital products for people with something worth making.
        </p>
      </Animated>
      <div className="  flex items-end flex-col justify-items-end  my-7">
       <Link
        href="/assets/kahuho_charles_resume.pdf"
        target="_blank"
        className="bg-primary text-white p-4 border-2 border-transparent hover:border-white"
      >
        See Resume
      </Link>
        
      </div>
      <div className="mast-foot">
        <span>Selected work ↓</span>
        <span>Available for thoughtful collaborations</span>
      </div>

    </section>
  );
}
