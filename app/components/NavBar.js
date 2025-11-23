"use client";

import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects"];

export default function NavBar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Brittany Chiang</div>
        <ul>
          {sections.map((section) => (
            <li key={section} className={active === section ? "active" : ""}>
              <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            </li>
          ))}
        </ul>
        <a className="btn" href="mailto:hello@alexd.work">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
