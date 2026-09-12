import { BookOpen, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { Projects } from "@/lib/projects";
import imgEstudosDpi from "../../assets/img_estudosDpi.png";
import imgDevflowCrm from "../../assets/DevflowCrm/logo.png";
import {GithubProjects} from "@/lib/github-projects"

const etecJobs = Projects.find((project) => project.linkPageProject === "etec-jobs")!;

export const number_projects = GithubProjects.length

export const years_experience = new Date().getFullYear() - 2024

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

export const FeaturedProjects: IFeaturedProject[] = [
   {
    slug: "estudos-dpi",
    title: "Estudos DPI",
    tagline: "Sistema web para organizar estudos bíblicos",
    description:
      "Sistema web pessoal para reunir estudos bíblicos que antes ficavam espalhados em vários apps, com criação, busca e categorização de estudos em um só lugar.",
    img: imgEstudosDpi,
    domain: "github.com/EduMachado07/estudos_dpi",
    platform: "web",
    typeLabel: "Projeto Pessoal",
    typeIcon: BookOpen,
    role: "Desenvolvimento solo, do zero ao deploy",
    year: 2025,
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    highlights: ["Autenticação JWT", "Formatação assistida por IA", "100% responsivo"],
    primaryAction: {
      label: "Ver repositório",
      href: "https://github.com/EduMachado07/estudos_dpi",
      internal: false,
    },
    githubHref: "https://github.com/EduMachado07/estudos_dpi",
  },
  {
    slug: "devflow",
    title: "DevFlow CRM",
    tagline: "Plataforma de gestão comercial para concessionária",
    description:
      "Plataforma de gestão de leads desenvolvida em parceria com a Fatec Jacareí para a 1000 Valle Multimarcas, centralizando em um único painel os leads vindos de vários canais e unidades.",
    img: imgDevflowCrm,
    domain: "github.com/prjDevflow/prj_3dsm",
    platform: "web",
    typeLabel: "Sistema Web",
    typeIcon: Workflow,
    role: "Desenvolvimento full stack, do banco de dados às telas",
    year: 2025,
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    highlights: ["+25 endpoints REST", "4 níveis de acesso", "Dashboard em tempo real"],
    primaryAction: {
      label: "Ver repositório",
      href: "https://github.com/prjDevflow/prj_3dsm",
      internal: false,
    },
    githubHref: "https://github.com/prjDevflow/prj_3dsm",
  },
  {
    slug: "etec-jobs",
    title: etecJobs.title,
    tagline: "App mobile criado em hackathon escolar",
    description: etecJobs.description,
    img: etecJobs.img,
    domain: "Etec Jobs · App",
    platform: "mobile",
    typeLabel: "App Mobile",
    typeIcon: Smartphone,
    role: "Desenvolvimento mobile em equipe, do protótipo à build final",
    year: etecJobs.year,
    technologies: etecJobs.technologies,
    highlights: ["Busca com filtros", "Favoritar vagas", "Modo claro e noturno"],
    primaryAction: {
      label: "Ver projeto",
      href: `/projetos/${etecJobs.linkPageProject}`,
      internal: true,
    },
    githubHref: etecJobs.linkGithub,
  },
];
