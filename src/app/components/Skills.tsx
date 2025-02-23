import { skillsData, certificates } from "@/lib/data/siteData";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-sm">Languages</h1>
        <div className="flex flex-wrap gap-2">
          {skillsData.languages.map((item, index) => {
            const Icon = item.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-slate-600/50 text-slate-200"
              >
                {Icon && <Icon className="text-xl" />} <span>{item.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-sm">DevOps & CI/CD</h1>
        <div className="flex flex-wrap gap-2">
          {skillsData.devOpsAndCICD.map((item, index) => {
            const Icon = item.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-slate-600/50 text-slate-200"
              >
                {Icon && <Icon className="text-xl" />} <span>{item.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-sm">Technologies & Frameworks</h1>
        <div className="flex flex-wrap gap-2">
          {skillsData.technologiesAndFrameworks.map((item, index) => {
            const Icon = item.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-slate-600/50 text-slate-200"
              >
                {Icon && <Icon className="text-xl" />} <span>{item.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-sm">Databases</h1>
        <div className="flex flex-wrap gap-2">
          {skillsData.databases.map((item, index) => {
            const Icon = item.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-slate-600/50 text-slate-200"
              >
                {Icon && <Icon className="text-xl" />} <span>{item.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-sm">Certificates</h1>
        <Link
          href={certificates.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit flex items-center gap-2 px-2 py-1 rounded-full text-sm  border border-slate-600/50 text-slate-200 hover:bg-slate-600/30 hover:text-slate-400"
        >
          {certificates.icon && <certificates.icon className="text-xl" />}
          {certificates.title}
        </Link>
      </div>
    </div>
  );
}
