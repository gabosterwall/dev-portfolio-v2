import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaBitbucket,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiApachemaven,
  SiTailwindcss,
  SiJira,
  SiSwagger,
  SiGithubactions,
  SiOpenapiinitiative,
  SiPostman,
  SiExpress,
  SiJquery,
} from "react-icons/si";
import { PiFileCSharpLight, PiFileSql } from "react-icons/pi";
import { VscAzureDevops } from "react-icons/vsc";
import {
  BiLogoSpringBoot,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { GiCamelHead } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";

import img1 from "../../../public/screenshot-dev-portfolio.png";
import img2 from "../../../public/screenshot-resume-api.png";
import img3 from "../../../public/screenshot-java-solitaire.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { TbCode } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";

export const projectData = [
  {
    src: img1,
    alt: "Screenshot of portfolio webpage.",
    title: "Developer Portfolio",
    description:
      "This website. Original design by Brittany Chiang, rebuilt and tweaked by me. Deployed to Vercel.",
    stack: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
    refUrl: "https://github.com/bchiang7",
    repoUrl: "",
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

export const skillset = {
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
    { name: "BitBucket", icon: FaBitbucket },
    { name: "Jira", icon: SiJira },
    { name: "Apache Maven", icon: SiApachemaven },
    { name: "Git", icon: FaGitAlt },
    { name: "Jenkins", icon: FaJenkins },
    { name: "Docker", icon: FaDocker },
  ],
  technologiesAndFrameworks: [
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Spring", icon: BiLogoSpringBoot },
    { name: "Apache Camel", icon: GiCamelHead },
    { name: "OpenAPI", icon: SiOpenapiinitiative },
    { name: "Swagger", icon: SiSwagger },
    { name: "Postman", icon: SiPostman },
    { name: "Node.js", icon: FaNodeJs },
    { name: "React.js", icon: FaReact },
    { name: "Express.js", icon: SiExpress },
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

export const currentEmployerUrl = "https://www.tietoevry.com/se/";

export const certificates = {
  title: "Certified SAFe® 6 Practitioner",
  url: "https://www.credly.com/badges/21f947e4-f6bb-485e-80f1-66123d569adc/public_url",
  icon: AiFillSafetyCertificate,
};

export const workData = [
  {
    jobtitle: "Solution Consultant",
    employer: "Tietoevry Fintech Sweden AB",
    employerUrl: currentEmployerUrl,
    description:
      "I design, develop, and maintain customized integrations and user interfaces for large-scale financial services applications, leveraging a microservice architecture to enhance scalability and efficiency. My work involves building and optimizing integration services using Java, Spring Boot, Apache Camel, and Apache Maven. Collaborating in a SAFe agile environment, I work closely with cross-functional teams to deliver robust, high-quality solutions. Additionally, I design and execute unit, integration, and system tests to ensure reliability and maintainability",
    startDate: "Sep 2024",
    endDate: "Present",
  },
  {
    jobtitle: "Teaching Assistant",
    employer: "Department of Informatics and Media, Uppsala University",
    employerUrl: "https://www.uu.se/en/department/informatics-and-media",
    description:
      "Delivered engaging lectures across multiple courses, including programming fundamentals, advanced programming, databases, data structures and algorithms, and web development. Additionally, I supervised individual and group projects, facilitated examinations, and provided mentorship, contributing to improved course evaluations and a more enriching learning experience for students",
    startDate: "Aug 2023",
    endDate: "Jun 2024",
  },
];
