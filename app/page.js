import NavBar from "./components/NavBar";

const sections = ["about", "experience", "projects"];

const experiences = [
  {
    role: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    period: "2020 — Present",
    summary:
      "Build and maintain critical components used by customers, migrate legacy codebases for better performance, partner with designers to deliver pixel-perfect flows.",
    tech: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    role: "Frontend Engineer",
    company: "Hike",
    period: "2016 — 2020",
    summary:
      "Designed and developed the group chat experience for messaging apps used by millions of users and added new features and pushed daily patches.",
  },
  {
    role: "Software Engineer",
    company: "Cadence Design Systems",
    period: "2014 — 2016",
    summary:
      "Built a robust notification system for medium-large scale enterprises helping them monitor system status with notifications on any channel.",
  },
  {
    role: "Web Developer",
    company: "Deloitte",
    period: "2013 — 2014",
    summary:
      "Built and maintained UI for enterprise clients. This resulted in better performance and improved UX and UI design. Exposed REST APIs for complex BI systems.",
  },
];

const projects = [
  {
    title: "Design System - Internal Capabilities",
    description:
      "Reusable components, tokens, patterns, and documentation that enabled teams to ship consistent experiences faster across the product surface area.",
    tech: ["React", "CSS Modules", "Storybook", "Figma"],
  },
  {
    title: "SEO Management Platform",
    description:
      "Multi-view dashboards with friendly UX, sleek UI and elegant multi-page workflows for collaborating with teams on SEO wins.",
    tech: ["Next.js", "Node.js", "REST"],
  },
  {
    title: "Quant",
    description:
      "Experiment tracking and reporting tool built with a huge focus on clean UI and highly interactive data visualisation.",
    tech: ["React", "D3", "Analytics"],
  },
];

const quickInfo = ["Accessible UIs", "Pixel-perfect", "Engineer"];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="shell">
        <section className="about-panel" id="about">
          <div className="about-header">
            <p className="role-pill">Front End Engineer</p>
            <h1>Brittany Chiang</h1>
            <h2>I build accessible, pixel-perfect digital experiences for the web.</h2>
            <p className="muted">
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend design with
              robust engineering. I love the intersection of design and development, and creating accessible, inclusive,
              and performant experiences that combine thoughtful UX/UI with robust engineering under the hood.
            </p>
            <p className="muted">
              Currently, I'm a Senior Front End Engineer at <strong>Klaviyo</strong>, specializing in accessibility.
              I do everything from strategy to execution and maintenance of UX components and patterns across Klaviyo's
              frontend codebase to empower our users with accessible designs and robust practices to deliver inclusive
              experiences for all users.
            </p>
            <div className="button-row">
              <a className="btn" href="mailto:hello@alexd.work">
                Hire Me
              </a>
              <a className="ghost-btn" href="#experience">
                Access my experience
              </a>
            </div>
          </div>

          <div className="divider" />

          <div className="nav-links">
            <p className="muted">Navigation</p>
            <ul>
              {sections.map((section) => (
                <li key={section}>
                  <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="quick-info">
            {quickInfo.map((info) => (
              <span className="pill" key={info}>
                {info}
              </span>
            ))}
          </div>
        </section>

        <section className="content">
          <section className="section" id="experience">
            <div className="section-header">
              <p className="eyebrow">EXPERIENCE</p>
            </div>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <header>
                    <p className="period">{item.period}</p>
                    <h4>{item.role}</h4>
                    <p className="company">{item.company}</p>
                  </header>
                  <p className="muted">{item.summary}</p>
                  {item.tech && (
                    <div className="tag-row">
                      {item.tech.map((tag) => (
                        <span className="pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <div className="section-header">
              <p className="eyebrow">PROJECTS</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="muted">{project.description}</p>
                  <h4>{project.title}</h4>
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
        </section>
      </main>
    </>
  );
}
