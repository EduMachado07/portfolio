import {
  ArrowRight,
  Dot,
  ExternalLink,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GridBackground } from "@/components/v2/grid-background";
import { Reveal } from "@/components/v2/reveal";
import bateriaImg from "@/assets/bateria/img_bateriaCompleta.png";
import pratoImg from "@/assets/bateria/img_prato.png";
import tamborImg from "@/assets/bateria/img_tambor.png";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import {
  PURPOSE_FILTERS,
  useProjectsFilter,
  type ProjectPurpose,
} from "./projects.model";

const BADGE_IMAGES = [baquetasImg, pratoImg, tamborImg];

export const ProjectsPage = () => {
  const { search, setSearch, purpose, setPurpose, filteredProjects } =
    useProjectsFilter();

  return (
    <div className="bg-zinc-100/50">
      <GridBackground cellWidth={48} cellHeight={48}>
        <section className="relative flex flex-col items-center gap-6 overflow-hidden px-[6%] py-20 text-center md:px-[28%] md:py-28">
          <img
            src={baquetasImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 left-32 hidden w-44 rotate-[160deg] object-contain opacity-[0.25] sm:block sm:w-36"
          />
          <img
            src={bateriaImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-10 hidden w-48 rotate-[-6deg] object-contain opacity-[0.25] sm:block sm:w-64"
          />
          <img
            src={pratoImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 -right-4 hidden w-28 rotate-6 object-contain opacity-[0.25] sm:block sm:w-36"
          />
          <img
            src={tamborImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -right-10 hidden w-20 rotate-[8deg] object-contain opacity-[0.25] sm:block sm:w-28"
          />

          <span className="flex items-center gap-2 rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
            <Sparkles size={14} />
            Portfólio
          </span>

          <h1 className="text-left text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
            Projetos que saíram do papel
          </h1>

          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            Aqui estão os sistemas que carreguei do papel até a produção — cada
            um com o problema que resolvi, as decisões técnicas por trás e o
            resultado final. Se você programa, vai curtir ver o processo.
            <br />
            <span className="rounded-sm font-medium bg-blue-400/40 p-1.5">
              Se está pensando em tirar uma ideia do papel, é exatamente isso
              que eu faço.
            </span>
          </p>
        </section>
      </GridBackground>

      <main className="bg-zinc-200/50 mx-auto flex w-full flex-col gap-12 px-[6%] py-16 md:px-[20%]">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400"
            />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar projeto pelo nome"
              className="rounded-md border border-zinc-300 bg-white pl-9 text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-300 dark:bg-white dark:text-zinc-900 dark:placeholder:text-zinc-400"
            />
          </div>

          <Select
            value={purpose}
            onValueChange={(value) =>
              setPurpose(value as ProjectPurpose | "all")
            }
          >
            <SelectTrigger className="rounded-md border-zinc-300 bg-white text-zinc-900 dark:border-zinc-300 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-50 sm:w-56">
              <SelectValue placeholder="Tipo de projeto" />
            </SelectTrigger>
            <SelectContent className="border border-zinc-200 bg-white text-zinc-900 dark:bg-white dark:text-zinc-900">
              {PURPOSE_FILTERS.map((filter) => (
                <SelectItem
                  key={filter.value}
                  value={filter.value}
                  className="text-zinc-700 focus:bg-zinc-100 focus:text-zinc-950 dark:focus:bg-zinc-100 dark:focus:text-zinc-950"
                >
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={Math.min((index % 2) * 0.12, 0.24)}
                className="h-full"
              >
                <article className="group relative flex h-full min-h-[720px] flex-col gap-4 rounded-md border border-zinc-200 bg-zinc-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-h-[790px] lg:min-h-[690px]">
                  <span className="absolute -top-2 -left-2 z-10 flex size-13 -rotate-12 items-center justify-center rounded-md border border-zinc-300 bg-zinc-100/80 shadow-md">
                    <img
                      src={BADGE_IMAGES[index % BADGE_IMAGES.length]}
                      alt=""
                      aria-hidden="true"
                      className="size-10 object-contain opacity-90"
                    />
                  </span>

                  <div className="overflow-hidden rounded-md border border-zinc-200">
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={`Captura de tela do projeto ${project.title}`}
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <GridBackground cellWidth={42} cellHeight={42} style="transition-transform duration-200 group-hover:scale-105">
                        <div className="transition-transform duration-500 group-hover:scale-105 flex aspect-video w-full items-center justify-center bg-zinc-400/30 text-zinc-400">
                          {/* <Layers size={32} /> */}
                          <h2 className="text-8xl font-semibold text-zinc-400">
                            EM
                          </h2>
                        </div>
                      </GridBackground>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
                    <span className="rounded-md border border-zinc-300 px-2 py-0.5">
                      {project.purpose}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="text-xl font-bold text-zinc-950">
                    {project.title}
                  </h2>

                  <p className="line-clamp-5 flex-1 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>

                  <hr className="border-zinc-300" />

                  <div className="flex flex-wrap items-center gap-1.5">
                    <Layers size={16} />{" "}
                    {project.technologies.map((tech) => (
                      <div key={tech} className="flex items-center gap-1.5">
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-100 text-xs font-medium text-zinc-700"
                        >
                          {tech}
                        </span>
                        {tech !==
                          project.technologies[
                            project.technologies.length - 1
                          ] && <Dot />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <Link to={project.pageHref}>
                      <Button className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800">
                        Ver no portfólio
                        <ArrowRight size={16} />
                      </Button>
                    </Link>

                    <a
                      href={project.externalLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 border-zinc-300"
                      >
                        {project.externalLink.label}
                        <ExternalLink size={16} />
                      </Button>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-md border border-dashed border-zinc-300 py-16 text-center">
            <img
              src={baquetasImg}
              alt=""
              aria-hidden="true"
              className="size-10 rotate-12 object-contain opacity-40"
            />
            <p className="text-sm font-medium text-zinc-600">
              Nenhum projeto encontrado com esse filtro.
            </p>
            <p className="text-xs text-zinc-400">
              Troca o ritmo da busca e tenta de novo.
            </p>
          </div>
        )}

        <Reveal className="shadow-lg overflow-hidden rounded-2xl bg-zinc-800 opacity-10">
          <GridBackground cellWidth={32} cellHeight={32} style="opacity-10">
            <section className="relative flex flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Curtiu o que viu?
                </h2>
                <p className="text-sm text-zinc-200">
                  Tenho mais ideias na manga do que projetos aqui listados. Bora
                  conversar sobre a sua?
                </p>
              </div>

              <Link to="/contato" className="shrink-0">
                <Button className="gap-2 bg-white text-zinc-950 hover:bg-zinc-200">
                  Tenho uma ideia
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </section>
          </GridBackground>
        </Reveal>
      </main>
    </div>
  );
};
