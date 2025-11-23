const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const experiences = [
  {
    company: "Klaviyo",
    role: "Senior Frontend Engineer, Accessibility",
    period: "2021 — Present",
    summary:
      "Focusing on inclusive product surfaces, design system foundations, and accessible workflows across the growth platform.",
    tags: ["Javascript", "Typescript", "React", "Storybook"],
  },
  {
    company: "Upstatement",
    role: "Lead Engineer",
    period: "2018 — 2021",
    summary:
      "Guided product teams for clients from startups to Fortune 100 companies, building performant marketing and editorial experiences.",
    tags: ["Next.js", "Design Systems", "Strategy"],
  },
  {
    company: "Freelance",
    role: "Frontend Engineer",
    period: "2014 — 2018",
    summary:
      "Partnered with agencies and product studios to craft bespoke interfaces, interactive visuals, and component libraries.",
    tags: ["Vue", "Sass", "Animation", "Accessibility"],
  },
];

const projects = [
  {
    title: "Spotify Profile",
    description:
      "A rich dashboard for exploring your Spotify listening history with top artists, tracks, and saved playlists.",
    tech: ["React", "Express", "Heroku"],
    link: "https://github.com/",
  },
  {
    title: "Build a Spotify Playlist",
    description:
      "Generate personalized playlists with audio feature filters and collaborative, shareable exports.",
    tech: ["React", "Node", "Spotify API"],
    link: "https://github.com/",
  },
  {
    title: "Pod Access GraphQL",
    description:
      "A TypeScript GraphQL server that exposes podcast metadata with caching, pagination, and testing coverage.",
    tech: ["Typescript", "GraphQL", "Jest"],
    link: "https://github.com/",
  },
  {
    title: "Guideline Design System",
    description:
      "Reusable UI foundations with accessibility baked in: tokens, primitives, and documentation for product teams.",
    tech: ["React", "Styled Components", "Accessibility"],
    link: "https://github.com/",
  },
];

export default function Home() {
  return (
    <main className="layout">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Brittany Chiang</p>
          <h1>Front End Engineer</h1>
          <p className="lede">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <nav className="side-nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="side-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@alexd.work">Email</a>
        </div>
      </aside>

      <div className="content">
        <section className="panel" id="about">
          <p className="eyebrow">About</p>
          <p>
            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that elevate the
            user experience on the web. My favorite work sits at the intersection of thoughtful storytelling and
            performant engineering.
          </p>
          <p>
            Currently, I’m a Senior Frontend Engineer at Klaviyo, specializing in building inclusive design systems and
            workflows that scale with global teams.
          </p>
          <p>
            In the past, I’ve had the opportunity to develop software across a variety of settings — from advertising
            agencies and large corporations to start-ups and small digital product studios.
          </p>
          <p>
            In my spare time, I’m usually climbing, playing tennis, hanging out with my cats, or running around Hyrule
            searching for Korok seeds.
          </p>
        </section>

        <section className="panel" id="experience">
          <p className="eyebrow">Experience</p>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-card">
                  <h3>
                    {item.role} · {item.company}
                  </h3>
                  <p className="muted">{item.summary}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span className="pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <p className="eyebrow">Projects</p>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-line" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.description}</p>
                  <div className="tag-row">
                    {project.tech.map((tag) => (
                      <span className="pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a className="subtle-link" href={project.link} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
