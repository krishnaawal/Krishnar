import Link from "next/link";

const services = [
  ["01", "Frontend development", "Fast, responsive interfaces that feel as good as they look."],
  ["02", "Visual design", "Brand systems, social content, and graphics with a clear point of view."],
  ["03", "Digital growth", "Practical SEO, content, and marketing systems that help brands move."],
];

const projects = [
  { name: "Artree Nepal", type: "Brand / Web", tone: "from-lime-300 via-emerald-300 to-cyan-300", mark: "AN" },
  { name: "Plumeria", type: "E-commerce", tone: "from-fuchsia-300 via-rose-300 to-orange-200", mark: "PL" },
  { name: "GharBazaar", type: "Property platform", tone: "from-sky-300 via-indigo-300 to-violet-300", mark: "GB" },
  { name: "ShoePasal", type: "Retail / Commerce", tone: "from-amber-200 via-orange-300 to-red-300", mark: "SP" },
  { name: "Pokhara Pizza", type: "Food / Local", tone: "from-yellow-200 via-lime-300 to-green-300", mark: "PP" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Krishna Rawal home"><span className="brand-dot" />krishna<span className="muted">.rawal</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#about">about</Link><Link href="/projects">projects</Link><Link href="/#notes">notes</Link><Link href="/#contact" className="nav-cta">let&apos;s talk ↗</Link>
        </nav>
        <details className="mobile-menu"><summary>menu</summary><div><Link href="/#about">about</Link><Link href="/projects">projects</Link><Link href="/#notes">notes</Link><Link href="/#contact">let&apos;s talk ↗</Link></div></details>
      </header>

      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> available for select work · kathmandu, nepal</p>
          <h1>Designing digital<br /><span>things that matter.</span></h1>
          <p className="hero-intro">I&apos;m Krishna — a BCA student, frontend developer and visual designer blending code, creativity, and curiosity to build better online experiences.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/projects">see my work <span>↗</span></Link><Link className="text-link" href="/#about">more about me <span>↓</span></Link></div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core"><span>KR</span></div><div className="orbit-label label-one">&lt; / &gt;</div><div className="orbit-label label-two">BCA ’26</div><div className="orbit-label label-three">01—∞</div></div>
      </section>

      <div className="ticker" aria-label="areas of focus"><div>FRONTEND DEVELOPMENT <span>✳</span> VISUAL DESIGN <span>✳</span> DIGITAL GROWTH <span>✳</span> FRONTEND DEVELOPMENT <span>✳</span> VISUAL DESIGN <span>✳</span> DIGITAL GROWTH <span>✳</span></div></div>

      <section className="section shell" id="about"><div className="section-heading"><p className="eyebrow">/ about</p><p className="section-number">01 / 03</p></div><div className="about-grid"><h2>Curious by default.<br /><em>Creative by choice.</em></h2><div className="about-copy"><p>I&apos;m currently pursuing my Bachelor&apos;s in Computer Applications, while working on websites and digital identities that help small businesses show up with confidence.</p><p>My sweet spot is where thoughtful design meets useful technology. I like asking why, learning how, and making the answer feel simple.</p><Link className="text-link" href="/#contact">let&apos;s build something <span>↗</span></Link></div></div></section>

      <section className="section section-services shell"><div className="section-heading"><p className="eyebrow">/ what i do</p><p className="section-number">02 / 03</p></div><div className="service-list">{services.map(([number, title, body]) => <div className="service-row" key={number}><span className="service-num">{number}</span><h3>{title}</h3><p>{body}</p><span className="service-arrow">↗</span></div>)}</div></section>

      <section className="section shell" id="notes"><div className="section-heading"><p className="eyebrow">/ selected work</p><Link className="text-link" href="/projects">view all projects <span>↗</span></Link></div><div className="project-grid">{projects.slice(0, 3).map((project) => <Link className="project-card" href="/projects" key={project.name}><div className={`project-art bg-gradient-to-br ${project.tone}`}><span className="project-mark">{project.mark}</span><span className="project-caption">case study ↗</span></div><div className="project-meta"><h3>{project.name}</h3><span>{project.type}</span></div></Link>)}</div></section>

      <section className="contact shell" id="contact"><p className="eyebrow">/ have a project in mind?</p><h2>Let&apos;s make something<br /><span>worth scrolling for.</span></h2><a className="contact-email" href="mailto:info@krishnar.com.np">info@krishnar.com.np <span>↗</span></a></section>

      <footer className="site-footer shell"><span>© 2026 Krishna Rawal</span><span>built with curiosity <b>✳</b></span><div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin ↗</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">instagram ↗</a></div></footer>
    </main>
  );
}
