import { currentEmployerUrl } from "@/lib/data/siteData";

export default function About() {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <p>
        I&apos;m a software engineer based in Stockholm, Sweden, with a passion
        for tackling complex challenges and building efficient, scalable
        systems. While I enjoy crafting sleek frontends, I really prefer backend
        development, where the real magic happens.
      </p>
      <p>
        Currently, I&apos;m working at{" "}
        <a
          href={currentEmployerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-200 hover:text-slate-300"
        >
          TietoEVRY
        </a>{" "}
        as a solution consultant. Most recently, I contributed as a full-stack
        developer to build a test data management tool that centralizes,
        structures and simplifies data accessability.
      </p>
      <p>
        In my spare time, I&apos;m usually reading, battling it out on the
        badminton court, or getting lost in my favorite music. When I’m not
        coding, reading, or playing, I’m hanging out with my partner or friends.
      </p>
    </div>
  );
}
