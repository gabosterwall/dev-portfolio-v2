import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJenkins,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiApachemaven,
  SiTailwindcss,
  SiSwagger,
  SiGithubactions,
  SiOpenapiinitiative,
  SiPostman,
  SiJquery,
  SiHibernate,
} from "react-icons/si";
import { PiFileCSharpLight, PiFileSql } from "react-icons/pi";
import { VscAzureDevops } from "react-icons/vsc";
import {
  BiLogoSpringBoot,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { TbCode } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";

import img1 from "../../../public/screenshot-dev-portfolio.png";
import img2 from "../../../public/screenshot-resume-api.png";
import img3 from "../../../public/screenshot-java-solitaire.png";

export const projectUrl =
  process.env.NEXT_PUBLIC_PROJECT_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  "#";

export const projectData = [
  {
    src: img1,
    alt: "Screenshot of portfolio webpage.",
    title: "Developer Portfolio",
    description:
      "This website. Original design by Brittany Chiang, rebuilt and tweaked by me. Deployed to Vercel.",
    stack: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
    refUrl: "https://github.com/bchiang7",
    repoUrl: "https://github.com/gabosterwall/dev-portfolio-v2",
    repoIcon: TbCode,
  },
  {
    src: img2,
    alt: "Screenshot of api docs.",
    title: "Resume API",
    description:
      "A RESTful API of my resume. Features JSON Web Tokens for authentication and authorization, CRUD operations, an OpenAPI specification, Swagger integration for auto-generated documentation. Deployed to Render.",
    stack: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "Swagger",
      "MongoDB",
      "Render",
    ],
    url: "https://resume-api-y1zl.onrender.com/api-docs/",
    linkIcon: LiaExternalLinkAltSolid,
    repoUrl: "https://github.com/gabosterwall/resume-api",
    repoIcon: TbCode,
  },
  {
    src: img3,
    alt: "Screenshot of java solitaire game.",
    title: "Napoleon's Tomb",
    description:
      "A patience game built with Java and Swing. This implementation utilizes one deck of card, instead of the usual double-deck.",
    stack: ["Java", "Swing"],
    repoUrl: "https://github.com/gabosterwall/solitaire_java_swing",
    repoIcon: TbCode,
  },
];

export const skillsData = {
  languages: [
    { name: "Java", icon: FaJava },
    { name: "C#", icon: PiFileCSharpLight },
    { name: "Python", icon: FaPython },
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "JavaScript", icon: BiLogoJavascript },
    { name: "SQL", icon: PiFileSql },
  ],
  devOpsAndCICD: [
    { name: "Github Actions", icon: SiGithubactions },
    { name: "Azure DevOps", icon: VscAzureDevops },
    { name: "Maven", icon: SiApachemaven },
    { name: "Git", icon: FaGitAlt },
    { name: "Jenkins", icon: FaJenkins },
    { name: "Docker", icon: FaDocker },
  ],
  technologiesAndFrameworks: [
    { name: "Spring", icon: BiLogoSpringBoot },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Hibernate", icon: SiHibernate },
    { name: "OpenAPI", icon: SiOpenapiinitiative },
    { name: "Swagger", icon: SiSwagger },
    { name: "Postman", icon: SiPostman },
    { name: "Node.js", icon: FaNodeJs },
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "JQuery", icon: SiJquery },
    { name: "Tailwind", icon: SiTailwindcss },
  ],
  databases: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
};

export const socialsLinks = {
  github: "https://github.com/gabosterwall",
  linkedin: "https://www.linkedin.com/in/gabosterwall/",
  mail: "mailto:gabosterwall@gmail.com",
};

export const departmentSpecificData = {
  name: "Tietoevry Banking",
  url: "https://www.tietoevry.com/en/banking/",
};

export const certificates = {
  title: "Certified SAFe® 6 Practitioner",
  url: "https://www.credly.com/badges/21f947e4-f6bb-485e-80f1-66123d569adc/public_url",
  icon: AiFillSafetyCertificate,
};

export const experienceData = [
  {
    jobtitle: "Solution Consultant",
    employer: "Tietoevry Fintech Sweden AB",
    employerUrl: "https://www.tietoevry.com/se/",
    description:
      "My work involves designing, developing and maintaining integration services, including RESTful and SOAP APIs, while ensuring code quality through unit testing, system testing, and log analysis for troubleshooting. I actively participate in code reviews, as well as mob and pair programming, to foster knowledge sharing and maintain high development standards. Working within cross-functional Agile teams in a SAFe Agile Release Train, I contribute to delivering secure, scalable solutions that effectively meet business needs.",
    startDate: "Sep 2024",
    endDate: "Present",
  },
  {
    jobtitle: "Teaching Assistant",
    employer: "Department of Informatics and Media, Uppsala University",
    employerUrl: "https://www.uu.se/en/department/informatics-and-media",
    description:
      "Delivered engaging lectures across multiple courses, including programming, databases, data structures, algorithms, and web development. Additionally, I supervised individual and group projects, facilitated examinations, and provided mentorship, contributing to improved course evaluations and a more enriching learning experience for students.",
    startDate: "Aug 2023",
    endDate: "Jun 2024",
  },
];
