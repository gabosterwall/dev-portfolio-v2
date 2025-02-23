import { departmentSpecificData } from "@/lib/data/siteData";

export default function About() {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <p>
        I&apos;m a software engineer based in Stockholm, Sweden, with a passion
        for solving complex challenges and building efficient, scalable systems.
        While I enjoy crafting sleek frontends, I&apos;m most drawn to backend
        development—where the real magic happens.
      </p>
      <p>
        Currently, I&apos;m working at{" "}
        <a
          href={departmentSpecificData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-200 hover:text-slate-300"
        >
          {departmentSpecificData.name}
        </a>{" "}
        as a Solution Consultant, helping to build and optimize financial
        services for large-scale applications. My focus is on scalability,
        efficiency, and modernizing architectures for seamless integrations.
      </p>
      <p>
        When I&apos;m not programming, you&apos;ll find me reading, battling it
        out on the badminton court, or getting lost in my favorite music. I also
        love spending time with my partner and friends.
      </p>
    </div>
  );
}
