import { ArrowRight, Github, Layers, Sparkles, UserRound } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { FeaturedProjects } from "./homepage_model";
import { Reveal } from "./homepage_reveal";

export const ProjectsSection = () => {
  return (
    <section className="bg-zinc-200/50 flex flex-col gap-4 py-16 lg:gap-8 lg:py-16">
      <Reveal className="flex flex-wrap items-end justify-between gap-4 px-[6%] md:px-[22%]">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
            <Sparkles size={14} />
            Projetos em destaque
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Alguns dos meus últimos trabalhos
          </h2>
        </div>

        {/* <Link
          to="/projetos"
          className="flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
        >
          Ver todos os projetos
          <ArrowRight size={16} />
        </Link> */}
      </Reveal>

      <div className="flex flex-col">
        {FeaturedProjects.map((project, index) => {
          const reversed = index % 2 === 1;
          const TypeIcon = project.typeIcon;

          return (
            <article
              key={project.slug}
              className="border-zinc-200"
            >
              <div
                className={`mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-[6%] py-16 md:py-20 lg:gap-16 lg:px-12 lg:py-24 ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* image */}
                <Reveal className="group relative w-full max-w-md shrink-0 lg:max-w-none lg:flex-1">
                  {/* <span className="absolute -top-3 -left-3 z-10 flex items-center gap-1 rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                    Destaque {String(index + 1).padStart(2, "0")}
                  </span> */}

                  <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-300/70 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-50 px-4 py-2">
                      <span className="size-2.5 rounded-full bg-red-400" />
                      <span className="size-2.5 rounded-full bg-yellow-400" />
                      <span className="size-2.5 rounded-full bg-green-400" />
                      <span className="ml-3 truncate rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[11px] text-zinc-400">
                        {project.domain}
                      </span>
                    </div>

                    <div className="relative aspect-video overflow-hidden bg-zinc-100">
                      <img
                        src={project.img}
                        alt={`Prévia do projeto ${project.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <span className="absolute -bottom-3 right-4 flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-md">
                    <TypeIcon size={13} />
                    {project.typeLabel}
                  </span>
                </Reveal>

                {/* content */}
                <Reveal className="flex w-full flex-col gap-4 lg:flex-1" delay={0.15}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    {project.year} · {project.tagline}
                  </span>

                  <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-zinc-400 bg-transparent px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2.5 border-t border-zinc-400 py-4">
                    <div className="flex items-start gap-2">
                      <UserRound size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                      <p className="text-sm text-zinc-600">
                        <span className="font-semibold text-zinc-900">Minha função: </span>
                        {project.role}
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <Layers size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {project.primaryAction.internal ? (
                      <>
                        <Link to={project.primaryAction.href}>
                          <Button className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800">
                            {project.primaryAction.label}
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                        <a href={project.githubHref} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            className="gap-2 border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
                          >
                            <Github size={16} />
                            Código
                          </Button>
                        </a>
                      </>
                    ) : (
                      <a href={project.primaryAction.href} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800">
                          <Github size={16} />
                          {project.primaryAction.label}
                        </Button>
                      </a>
                    )}
                  </div>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
