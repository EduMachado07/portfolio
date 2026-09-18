import { useMemo, useState } from "react";
import { GithubProjects, type ProjectPurpose } from "@/lib/github-projects";

export type { ProjectPurpose };

export interface IProjectListItem {
  slug: string;
  title: string;
  description: string;
  img?: string;
  technologies: string[];
  purpose: ProjectPurpose;
  year: number;
  pageHref: string;
  externalLink: { label: string; href: string };
}

const toExternalLink = (project: (typeof GithubProjects)[number]) =>
  project.liveUrl && !project.liveUrl.includes("drive.google.com")
    ? { label: "Ver site", href: project.liveUrl }
    : { label: "Ver no GitHub", href: project.repoUrl };

export const ProjectsList: IProjectListItem[] = [...GithubProjects]
  .sort((a, b) => b.year - a.year)
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    img: project.img,
    technologies: project.technologies,
    purpose: project.purpose,
    year: project.year,
    pageHref: `/projetos/${project.slug}`,
    externalLink: toExternalLink(project),
  }));

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
      const matchesSearch = project.title.toLowerCase().startsWith(term);
      const matchesPurpose = purpose === "all" || project.purpose === purpose;
      return matchesSearch && matchesPurpose;
    });
  }, [search, purpose]);

  return { search, setSearch, purpose, setPurpose, filteredProjects };
};
