import { BookOpen, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";

const findProject = (slug: string) =>
  GithubProjects.find((project) => project.slug === slug)!;

const toDomain = (repoUrl: string) => repoUrl.replace(/^https?:\/\//, "");

export const number_projects = GithubProjects.length;

export const years_experience = new Date().getFullYear() - 2024;

export interface IFeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  img: string;
  domain: string;
  platform: "web" | "mobile";
  typeLabel: string;
  typeIcon: LucideIcon;
  role: string;
  year: number;
  technologies: string[];
  highlights: string[];
  primaryAction: { label: string; href: string; internal: boolean };
  githubHref: string;
}

const estudosDpi = findProject("estudos-dpi");
const devflow = findProject("devflow");
const etecJobs = findProject("etec-jobs");

export const FeaturedProjects: IFeaturedProject[] = [
  {
    slug: devflow.slug,
    title: devflow.title,
    tagline: "Plataforma de gestão comercial para concessionária",
    description: devflow.description,
    img: devflow.img!,
    domain: toDomain(devflow.repoUrl),
    platform: "web",
    typeLabel: "Sistema Web",
    typeIcon: Workflow,
    role: "Desenvolvimento full stack, do banco de dados às telas",
    year: devflow.year,
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    highlights: devflow.highlights.slice(0, 3),
    primaryAction: {
      label: "Ver projeto",
      href: `/projetos/${devflow.slug}`,
      internal: true,
    },
    githubHref: devflow.repoUrl,
  },
  {
    slug: estudosDpi.slug,
    title: estudosDpi.title,
    tagline: "Sistema web para organizar estudos bíblicos",
    description: estudosDpi.description,
    img: estudosDpi.img!,
    domain: toDomain(estudosDpi.repoUrl),
    platform: "web",
    typeLabel: "Projeto Pessoal",
    typeIcon: BookOpen,
    role: "Desenvolvimento solo, do zero ao deploy",
    year: estudosDpi.year,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Groq API"],
    highlights: estudosDpi.highlights.slice(0, 3),
    primaryAction: {
      label: "Ver projeto",
      href: `/projetos/${estudosDpi.slug}`,
      internal: true,
    },
    githubHref: estudosDpi.repoUrl,
  },
  {
    slug: etecJobs.slug,
    title: etecJobs.title,
    tagline: "App mobile criado em hackathon escolar",
    description: etecJobs.description,
    img: etecJobs.img!,
    domain: `${etecJobs.title} · App`,
    platform: "mobile",
    typeLabel: "App Mobile",
    typeIcon: Smartphone,
    role: "Desenvolvimento mobile em equipe, do protótipo à build final",
    year: etecJobs.year,
    technologies: ["React Native", "Expo", "JavaScript", "expo-sqlite"],
    highlights: etecJobs.highlights.slice(0, 3),
    primaryAction: {
      label: "Ver projeto",
      href: `/projetos/${etecJobs.slug}`,
      internal: true,
    },
    githubHref: etecJobs.repoUrl,
  },
];
