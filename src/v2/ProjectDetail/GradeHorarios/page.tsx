import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/v2/grid-background";
import { Reveal } from "@/components/v2/reveal";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import pratoImg from "@/assets/bateria/img_prato.png";
import {
  ARCHITECTURE,
  HERO_IMAGE,
  HIGHLIGHTS,
  project,
  QUOTE,
  STACK_GROUPS,
  TEAM,
} from "./grade-horarios.model";

export const GradeHorariosPage = () => {
  return (
    <div>
      <GridBackground cellWidth={52} cellHeight={52}>
        <header className="relative overflow-hidden px-[6%] py-16 md:px-[18%] md:py-20">
          <img
            src={baquetasImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-2 right-[8%] w-16 rotate-[18deg] object-contain opacity-[0.4] sm:right-[22%] sm:w-24"
          />
          <img
            src={pratoImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-[18%] hidden w-40 rotate-6 object-contain opacity-[0.4] sm:block"
          />

          <Link
            to="/projetos"
            className="relative inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>

          <div className="relative mt-6 flex flex-wrap items-center gap-2 text-xs font-medium">
            <span className="rounded-md border border-zinc-300 px-2 py-0.5 text-zinc-500">
              {project.purpose}
            </span>
            <span className="rounded-md border border-zinc-300 px-2 py-0.5 text-zinc-500">
              {project.status}
            </span>
            <span className="rounded-md border border-zinc-300 px-2 py-0.5 text-zinc-500">
              {project.systemType}
            </span>
          </div>

          <h1 className="relative mt-3 text-4xl font-bold text-zinc-950 sm:text-5xl">
            {project.title}
          </h1>

          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {project.description}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800">
                  Ver site
                  <ArrowUpRight size={16} />
                </Button>
              </a>
            )}
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github size={16} />
                Repositório frontend
              </Button>
            </a>
            {project.repoBackendUrl && (
              <a href={project.repoBackendUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github size={16} />
                  Repositório backend
                </Button>
              </a>
            )}
          </div>
        </header>
      </GridBackground>

      <main className="mx-auto flex w-full flex-col gap-20 px-[6%] py-16 md:px-[22%]">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <img
              src={HERO_IMAGE}
              alt="Telas do sistema: seleção de curso, mapa interativo de salas, grade semanal e painel da secretaria"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 md:col-span-1">
            Meu papel no time
          </h2>
          <blockquote className="border-l-2 border-zinc-300 pl-5 text-lg leading-relaxed text-zinc-700 md:col-span-2">
            {QUOTE}
          </blockquote>
        </Reveal>

        <Reveal>
          <h2 className="mb-6 text-2xl font-bold text-zinc-950">Destaques técnicos</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-zinc-200 p-5">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-100">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-1.5 font-semibold text-zinc-950">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mb-6 text-2xl font-bold text-zinc-950">Stack</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {STACK_GROUPS.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mb-2 text-2xl font-bold text-zinc-950">{ARCHITECTURE.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-zinc-600">
            {ARCHITECTURE.description}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <img
                src={ARCHITECTURE.useCaseImage}
                alt={ARCHITECTURE.useCaseAlt}
                loading="lazy"
                className="mx-auto w-full object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <img
                src={ARCHITECTURE.erImage}
                alt={ARCHITECTURE.erAlt}
                loading="lazy"
                className="mx-auto w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="rounded-lg border border-zinc-200 p-6">
          <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-900 text-white">
            <TEAM.icon size={18} />
          </div>
          <h3 className="mb-2 font-semibold text-zinc-950">{TEAM.title}</h3>
          <p className="mb-5 text-sm leading-relaxed text-zinc-600">{TEAM.description}</p>
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-4">
            <img
              src={TEAM.burndownImage}
              alt={TEAM.burndownAlt}
              loading="lazy"
              className="mx-auto w-full max-w-xl object-contain"
            />
          </div>
        </Reveal>

        <Reveal className="overflow-hidden rounded-lg bg-zinc-800 opacity-10">
          <GridBackground cellWidth={32} cellHeight={32} style="opacity-10">
            <section className="flex flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-white sm:text-2xl">Curtiu o que viu?</h2>
                <p className="text-sm text-zinc-400">
                  Bora conversar sobre o seu projeto e como posso te ajudar a tirá-lo do papel!
                </p>
              </div>
              <Link to="/contato" className="shrink-0">
                <Button className="gap-2 bg-white text-zinc-950 hover:bg-zinc-200">
                  Entrar em contato
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
