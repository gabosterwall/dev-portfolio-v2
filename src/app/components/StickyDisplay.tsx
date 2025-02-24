"use client";

import Link from "next/link";
import { GithubIcon, MailIcon, LinkedinIcon } from "./IconLinks";
import { projectUrl } from "@/lib/data/siteData";

type StickyDisplayProps = {
  visibleSection: string | null;
};

export default function StickyDisplay({ visibleSection }: StickyDisplayProps) {
  const sections = ["about", "experience", "skills", "projects"];

  const handleClick = (targetId: string) => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full h-full flex flex-col gap-4 md:gap-0 md:justify-between">
      <div className={`w-full flex flex-col gap-3 text-left`}>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-200">
          <Link href={projectUrl}>Gabriél Österwall</Link>
        </h1>
        <h2 className="text-xl md:text-2xl font-normal text-slate-300">
          Software Engineer
        </h2>
        <h3 className="text-base font-light w-1/2">
          I build efficient and scalable financial services
        </h3>
      </div>

      <div className="hidden md:flex w-full flex-col gap-4">
        {sections.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center text-center gap-3"
          >
            <span
              className={`h-[1px] transition-all duration-300 ${
                item === visibleSection
                  ? "w-16 bg-slate-200"
                  : "w-8  bg-slate-500"
              }`}
            ></span>
            <p
              onClick={() => handleClick(item)}
              className={`text-xs font-semibold uppercase cursor-pointer hover:text-slate-200 ${
                item === visibleSection ? "text-slate-200" : "text-slate-500"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center gap-5">
        <MailIcon size={30} />
        <LinkedinIcon size={20} />
        <GithubIcon size={23} />
      </div>
    </section>
  );
}
