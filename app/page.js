import NavBar from "./components/NavBar";

const experiences = [
  {
    company: "Northwind Studio",
    role: "Lead Product Engineer",
    period: "2021 — Present",
    summary:
      "Designing and building immersive marketing platforms, shaping the design system, and mentoring designers learning to ship production-grade React.",
  },
  {
    company: "Velocity Labs",
    role: "Senior Frontend Engineer",
    period: "2018 — 2021",
    summary:
      "Scaled UI performance initiatives, delivered interactive storytelling campaigns, and partnered with product to translate complex workflows into calm experiences.",
  },
  {
    company: "Polygon Studio",
    role: "Experience Designer",
    period: "2015 — 2018",
    summary:
      "Prototyped AR/VR concepts, built award-winning microsites, and unified brand + engineering across experiential launches.",
  },
];

const projects = [
  {
    title: "Lumen Atlas",
    description:
      "A data-rich storytelling surface that turns telemetry into living constellations. Built for executives to browse trends without friction.",
    tech: ["Next.js", "Three.js", "D3"],
    link: "https://example.com",
  },
  {
    title: "Pulseboard",
    description:
      "Realtime operations console with adaptive layouts, streaming pipelines, and a humane alerting model.",
    tech: ["Edge Functions", "React", "WebSockets"],
    link: "https://example.com",
  },
  {
    title: "Auralynx",
    description:
      "Audio-reactive visuals for live performances with generative shaders, lighting cues, and collaborative moodboards.",
    tech: ["WebGL", "Tone.js", "GSAP"],
    link: "https://example.com",
  },
];

const skills = [
  "Creative frontend engineering",
  "Design systems & accessibility",
  "Rapid prototyping",
  "Interactive storytelling",
  "Data visualization",
  "3D & motion design",
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="page">
        <section className="intro" id="about">
          <p className="eyebrow">Hi, my name is</p>
          <h1>Alex Doe.</h1>
          <h2>I build thoughtful digital experiences.</h2>
          <p className="lede">
            I’m a product-focused engineer crafting immersive, accessible interfaces. From design systems to
            narrative-rich prototypes, I translate complex ideas into calm, performant experiences.
          </p>
          <div className="cta-row">
            <a className="btn" href="mailto:hello@alexd.work">
              Say hello
            </a>
            <a className="ghost-btn" href="#projects">
              View work
            </a>
          </div>
          <div className="pill-row">
            <span className="pill">Currently at Northwind Studio</span>
            <span className="pill">Open for select collaborations</span>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h3>Places I’ve crafted interfaces</h3>
          </div>
          <div className="stacked-cards">
            {experiences.map((item) => (
              <article className="line-card" key={item.company}>
                <header>
                  <div>
                    <p className="eyebrow">{item.company}</p>
                    <h4>{item.role}</h4>
                  </div>
                  <span className="period">{item.period}</span>
                </header>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <p className="eyebrow">Selected work</p>
            <h3>Interactive stories and product surfaces</h3>
            <p className="muted">A few highlights from recent collaborations and experiments.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <header>
                  <h4>{project.title}</h4>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View ↗
                  </a>
                </header>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tech.map((tag) => (
                    <span className="pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-header">
            <p className="eyebrow">Toolkit</p>
            <h3>What I’m comfortable with</h3>
            <p className="muted">
              A mix of engineering, design, and storytelling skills that help ship experiences from sketch to scale.
            </p>
          </div>
          <div className="tag-grid">
            {skills.map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h3>Let’s make something meaningful</h3>
            <p className="muted">
              I’m always excited to collaborate on thoughtful products, immersive storytelling, and design systems.
            </p>
          </div>
          <div className="cta-row">
            <a className="btn" href="mailto:hello@alexd.work">
              Start a conversation
            </a>
            <a className="ghost-btn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
