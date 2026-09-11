import { useMemo, useState } from "react";
import { Projects } from "@/lib/projects";
import imgEstudosDpi from "@/assets/img_estudosDpi.png";
import imgDevflowCrm from "@/assets/devflow_crm/logo.png";

export type ProjectPurpose = "Pessoal" | "Faculdade" | "Cliente";

export interface IProjectListItem {
  slug: string;
  title: string;
  description: string;
  img: string;
  technologies: string[];
  purpose: ProjectPurpose;
  year: number;
  pageHref: string;
  externalLink: { label: string; href: string };
}

const PURPOSE_BY_SLUG: Record<string, ProjectPurpose> = {
  "fin-x": "Pessoal",
  "etec-jobs": "Faculdade",
  "fatec-1sem": "Faculdade",
};

const libProjects: IProjectListItem[] = Projects.map((project) => ({
  slug: project.linkPageProject,
  title: project.title,
  description: project.description,
  img: project.img,
  technologies: project.technologies,
  purpose: PURPOSE_BY_SLUG[project.linkPageProject] ?? "Pessoal",
  year: project.year,
  pageHref: `/projetos/${project.linkPageProject}`,
  externalLink: project.linkProject.includes("github.com")
    ? { label: "Ver no GitHub", href: project.linkGithub }
    : { label: "Ver site", href: project.linkProject },
}));

const devflowProject: IProjectListItem = {
  slug: "devflow",
  title: "DevFlow CRM",
  description:
    "Plataforma de gestão de leads desenvolvida em parceria com a Fatec Jacareí para a 1000 Valle Multimarcas, centralizando em um único painel os leads vindos de vários canais e unidades.",
  img: imgDevflowCrm,
  technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
  purpose: "Cliente",
  year: 2025,
  pageHref: "/projetos/devflow",
  externalLink: {
    label: "Ver no GitHub",
    href: "https://github.com/prjDevflow/prj_3dsm",
  },
};

const estudosDpiProject: IProjectListItem = {
  slug: "estudos-dpi",
  title: "Estudos DPI",
  description:
    "Sistema web pessoal para reunir estudos bíblicos que antes ficavam espalhados em vários apps, com criação, busca e categorização de estudos em um só lugar.",
  img: imgEstudosDpi,
  technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  purpose: "Pessoal",
  year: 2025,
  pageHref: "/projetos/estudos-dpi",
  externalLink: {
    label: "Ver no GitHub",
    href: "https://github.com/EduMachado07/estudos_dpi",
  },
};

const allProjects: IProjectListItem[] = [
  ...libProjects,
  devflowProject,
  estudosDpiProject,
];

export const ProjectsList: IProjectListItem[] = [...allProjects].sort(
  (a, b) => b.year - a.year,
);

export const PURPOSE_FILTERS: { label: string; value: ProjectPurpose | "all" }[] = [
  { label: "Todos os tipos", value: "all" },
  { label: "Pessoal", value: "Pessoal" },
  { label: "Faculdade", value: "Faculdade" },
  { label: "Cliente", value: "Cliente" },
];

export const useProjectsFilter = () => {
  const [search, setSearch] = useState("");
  const [purpose, setPurpose] = useState<ProjectPurpose | "all">("all");

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase();

    return ProjectsList.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(term);
      const matchesPurpose = purpose === "all" || project.purpose === purpose;
      return matchesSearch && matchesPurpose;
    });
  }, [search, purpose]);

  return { search, setSearch, purpose, setPurpose, filteredProjects };
};
