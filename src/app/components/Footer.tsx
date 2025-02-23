import { GithubIcon, LinkedinIcon, MailIcon } from "./IconLinks";

export default function Footer() {
  return (
    <footer className="md:hidden w-full flex mt-6 py-2 items-center justify-center gap-4 text-center bg-[#070d1b]">
      <p>Connect with me! </p>
      <div className="flex gap-3 items-center">
        <LinkedinIcon />
        <GithubIcon />
        <MailIcon size={20}/>
      </div>
    </footer>
  );
}
