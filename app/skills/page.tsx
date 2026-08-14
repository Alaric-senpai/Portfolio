import Animated from "@/components/Animated"

const groups = [
  { title: "Interface", note: "Turning product ideas into clear, responsive screens.", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "JavaScript", "HTML/CSS"] },
  { title: "Systems", note: "Building the services and APIs that keep products moving.", items: ["Node.js", "Express", "Nest.js", "Laravel", "REST APIs", "Authentication", "JWT"] },
  { title: "Data", note: "Connecting applications to dependable storage and infrastructure.", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Appwrite", "Supabase", "AWS", "Vercel", "Render"] },
  { title: "Mobile", note: "Shipping cross-platform experiences from one codebase.", items: ["React Native", "Expo", "NativeWind"] },
  { title: "Practice", note: "The habits that shape how the work gets done.", items: ["Figma", "Git", "Testing", "Agile", "Performance", "SEO", "Accessibility", "Responsive design"] },
]

export default function SkillsPage() { return <main className="index-page"><section className="route-wrap index-hero"><Animated><p className="route-kicker">Skills / 02</p><h1>The tools are only useful when the thinking is clear.</h1><p className="route-lede">A practical set of technologies and working habits I use to make software that is understandable, adaptable, and ready to use.</p></Animated></section><section className="route-wrap capability-list">{groups.map((group, index) => <Animated key={group.title} delay={index * .07} className="capability-row"><span className="capability-number">0{index + 1}</span><div><h2>{group.title}</h2><p>{group.note}</p></div><div className="capability-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></Animated>)}</section></main> }
