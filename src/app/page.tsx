"use client";

import { useState, useEffect } from "react";
import StickyDisplay from "./components/StickyDisplay";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              window.history.replaceState(null, "", `/#${entry.target.id}`);
            }, 300);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="md:w-1/2 md:h-screen md:sticky md:top-0 px-6 md:px-12 py-12 md:py-[8%]">
        <StickyDisplay visibleSection={visibleSection} />
      </div>

      <div className="w-full md:w-1/2 flex flex-col px-4 md:px-0 md:pr-12 pb-[8%] ">
        <section
          id="about"
          className="w-full md:min-h-screen flex flex-col gap-2 md:gap-0 py-8 md:pt-[16%] font-normal text-foreground leading-relaxed"
        >
          <h1 className="md:hidden sticky top-0 bg-[#0a1226]/80 backdrop-blur-sm flex font-medium text-slate-200 py-4">
            About
          </h1>
          <About />
        </section>
        <section
          id="experience"
          className="w-full flex flex-col min-h-screen gap-2 md:gap-0 py-8 md:py-[16%] text-base font-light "
        >
          <h1 className="md:hidden sticky top-0 bg-[#0a1226]/80 backdrop-blur-sm flex font-medium text-slate-200 py-4">
            Experience
          </h1>
          <Experience />
        </section>
        <section
          id="skills"
          className="w-full flex flex-col min-h-screen gap-2 md:gap-0 py-8 md:py-[16%] text-base font-light"
        >
          <h1 className="md:hidden sticky top-0 bg-[#0a1226]/80 backdrop-blur-sm flex font-medium text-slate-200 py-4 mt-6">
            Skills
          </h1>
          <Skills />
        </section>
        <section
          id="projects"
          className="w-full flex flex-col min-h-screen gap-2 md:gap-0 pt-8 md:pt-[16%]"
        >
          <h1 className="md:hidden sticky top-0 bg-[#0a1226]/80 backdrop-blur-sm flex font-medium text-slate-200 py-4 mt-6">
            Projects
          </h1>
          <Projects />
        </section>
      </div>
    </>
  );
}
