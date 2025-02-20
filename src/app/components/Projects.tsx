import { projectData } from "@/lib/data/siteData";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col gap-20 md:gap-14">
      {projectData.map((item) => (
        <div
          key={item.alt}
          className="w-full flex flex-col gap-4"
        >
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="w-fit md:w-1/3 h-full md:bg-slate-300/20 rounded-sm">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={200}
                className="md:border border-slate-500 w-2/3 md:w-auto h-auto rounded-sm md:transition-all md:duration-300 md:-translate-x-[6px] md:-translate-y-[6px] md:hover:translate-x-0 md:hover:translate-y-0 shadow-md shadow-slate-600/50 md:shadow-none"
              />
            </div>
            <div className="flex flex-col h-full md:w-2/3 gap-2">
              <div className="flex items-center gap-4">
                <h2 className="font-medium text-slate-200">{item.title}</h2>
                <div className="flex items-center gap-2">
                  {item.url && (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full px-2 py-0.5 border text-xs text-slate-200 border-slate-200 hover:border-slate-400 hover:text-slate-400"
                    >
                      View
                      {item.linkIcon && <item.linkIcon className="text-base" />}
                    </Link>
                  )}
                  {item.repoUrl && (
                    <Link
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full px-2 py-0.5 border text-xs text-slate-200 border-slate-200 hover:border-slate-400 hover:text-slate-400"
                    >
                      Repo
                      {item.repoIcon && <item.repoIcon className="text-base" />}
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            {item.stack.map((subItem, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs bg-slate-600/50 text-slate-200"
              >
                {subItem}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
