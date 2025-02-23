import Link from "next/link";
import { experienceData } from "@/lib/data/siteData";

export default function Experience() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      {experienceData.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <div className="md:w-1/4 mt-1 font-medium text-xs">
            <p>
              {item.startDate} — {item.endDate}
            </p>
          </div>
          <div className="h-full flex flex-col md:flex-1 gap-3">
            <h1 className="font-medium text-slate-200">
              {item.jobtitle}{" "}
              <Link
                href={item.employerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-slate-200 hover:text-slate-400"
              >
                @{item.employer}
              </Link>
            </h1>
            <p className="text-base font-normal leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
