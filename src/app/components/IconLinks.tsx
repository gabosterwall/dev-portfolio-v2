import { socialsLinks } from "@/lib/data/siteData";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";

type IconProps = {
  size?: number;
};

export function MailIcon({ size }: IconProps) {
  return (
    <Link href={socialsLinks.mail}>
      <HiMail size={size} className="hover:text-slate-200 p-0" />
    </Link>
  );
}

export function LinkedinIcon({ size }: IconProps) {
  return (
    <Link href={socialsLinks.linkedin} target="_blank" rel="noopener noreferrer">
      <SiLinkedin size={size} className="hover:text-slate-200 p-0" />
    </Link>
  );
}

export function GithubIcon({ size }: IconProps) {
  return (
    <Link href={socialsLinks.github} target="_blank" rel="noopener noreferrer">
      <FaGithub size={size} className="hover:text-slate-200 p-0" />
    </Link>
  );
}
