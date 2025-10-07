import HeroCanvas from "./components/HeroCanvas";
import NavBar from "./components/NavBar";

const skills = [
  "Creative Frontend Engineering",
  "Design Systems & Accessibility",
  "Interactive Prototyping",
  "Product Strategy",
  "3D & Motion Design",
  "Technical Storytelling",
];

const projects = [
  {
    title: "Nebula Atlas",
    description:
      "A cosmic data explorer that turns millions of telemetry points into immersive constellations to surface product insights instantly.",
    stack: ["Next.js", "Three.js", "WebGL"],
    link: "https://example.com",
  },
  {
    title: "Pulseboard",
    description:
      "Executive dashboard for realtime health metrics with adaptive layouts and streaming WebSocket pipelines.",
    stack: ["Next.js", "Edge Functions", "D3"],
    link: "https://example.com",
  },
  {
    title: "Aurora Rooms",
    description:
      "Digital art residency experience blending WebAR lighting, audio-reactive shaders, and collaborative moodboards.",
    stack: ["React", "Three.js", "Tone.js"],
    link: "https://example.com",
  },
];

const experience = [
  {
    title: "Lead Creative Technologist · Northwind",
    period: "2021 — Present",
    description:
      "Shaped multi-platform brand experiences, launched award-winning interactive narratives, and mentored a team of hybrid designers.",
  },
  {
    title: "Senior Frontend Engineer · Velocity",
    period: "2018 — 2021",
    description:
      "Scaled a design system across 12 product squads, improved Core Web Vitals by 40%, and pioneered immersive product tours.",
  },
  {
    title: "Experience Designer · Polygon Studio",
    period: "2015 — 2018",
    description:
      "Crafted VR/AR prototypes, produced experiential microsites, and harmonized design + engineering workflows.",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="hero" id="hero">
          <HeroCanvas />
          <div className="hero-content">
            <span className="badge">Creative Developer & Experience Designer</span>
            <h1>Crafting ambient digital worlds</h1>
            <p>
              I design and engineer sensorial interfaces that feel alive. From immersive prototypes to polished production builds,
              I connect storytelling, systems thinking, and delightful craft.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#projects">
                View projects
              </a>
              <a className="btn" href="mailto:hello@alexd.work">
                Email me
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container grid">
            <div className="card">
              <h2 className="section-title">About</h2>
              <p className="section-subtitle">
                I blend code, design, and narrative to craft memorable product experiences. I love translating complex ideas into expressive, accessible interfaces.
              </p>
            </div>
            <div className="card">
              <h3>Currently exploring</h3>
              <ul className="grid">
                <li>Real-time collaboration patterns</li>
                <li>Spatial computing storytelling</li>
                <li>Generative lighting design systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Capabilities</h2>
              <p className="section-subtitle">
                A left-right brain toolkit for shipping bold ideas with polish.
              </p>
              <div className="section-grid">
                {skills.map((skill) => (
                  <div className="badge" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container grid">
            <div className="card">
              <h2 className="section-title">Selected work</h2>
              <p className="section-subtitle">
                A snapshot of experiments and product stories that pushed pixels — and perspectives.
              </p>
            </div>
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <div className="badge">{project.stack.join(" · ")}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="btn" href={project.link} target="_blank" rel="noreferrer">
                  Explore case study
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="container card">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experience.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <span>{item.period}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container grid">
            <div className="card">
              <h2 className="section-title">Let’s build something resonant</h2>
              <p className="section-subtitle">
                Tell me about your next story to ship. I’ll bring the strategy, prototyping, and polish.
              </p>
            </div>
            <div className="card contact-card">
              <form>
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Tell me about the dream" required />
                <button className="btn" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">© {new Date().getFullYear()} Alex Doe. Crafted with curiosity.</div>
      </footer>
    </>
  );
}
