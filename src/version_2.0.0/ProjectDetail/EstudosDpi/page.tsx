import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Github,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/grid-background";
import { Reveal } from "@/components/reveal";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import tamborImg from "@/assets/bateria/img_tambor.png";
import {
  AI_FEATURE,
  ARCHITECTURE,
  AUTH_FLOW,
  HERO_IMAGE,
  HIGHLIGHTS,
  MEDIA_FEATURE,
  project,
  QUOTE,
  STACK_GROUPS,
} from "./estudos-dpi.model";

export const EstudosDpiPage = () => {
  return (
    <div>
      <GridBackground cellWidth={52} cellHeight={52}>
        <header className="relative overflow-hidden px-[6%] py-16 md:px-[18%] md:py-20">
          <img
            src={baquetasImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-2 right-[8%] sm:right-[22%] w-16 rotate-[18deg] object-contain opacity-[0.4] sm:w-24"
          />
          <img
            src={tamborImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-[18%] hidden w-46 rotate-[-6deg] object-contain opacity-[0.4] sm:block"
          />

          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
            <span className="rounded-md bg-zinc-100 border border-zinc-300 px-2 py-0.5">
              {project.purpose}
            </span>
            <span className="rounded-md bg-zinc-100 border border-zinc-300 px-2 py-0.5">
              {project.status}
            </span>
            <span className="flex bg-zinc-100 border border-zinc-300 items-center px-2 py-0.5 rounded-md gap-1">
              <Calendar size={12} />
              {project.year}
            </span>
          </div>

          <h1 className="mt-3 text-4xl font-bold text-zinc-950 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href={project.repoBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github size={16} />
                  Repositório backend
                </Button>
              </a>
            )}
          </div>
        </header>
      </GridBackground>

      <main className="mx-auto flex w-full flex-col gap-20 px-[6%] py-6 md:py-16 md:px-[22%]">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <img
              src={HERO_IMAGE}
              alt="Telas do Estudos DPI: listagem, criação de estudo e leitura, em desktop e mobile"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 md:col-span-1">
            Por que existe
          </h2>
          <blockquote className="border-l-2 border-zinc-300 pl-5 text-lg leading-relaxed text-zinc-700 md:col-span-2">
            {QUOTE}
          </blockquote>
        </Reveal>

        <Reveal>
          <h2 className=" mb-6 text-2xl font-bold text-zinc-950">
            Destaques técnicos
          </h2>
          <div className="px-[2%] grid grid-cols-1 gap-8 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-zinc-200 p-5"
                >
                  <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-100">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-1.5 font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
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
          <h2 className="mb-6 text-2xl font-bold text-zinc-950">Arquitetura</h2>
          <div className="mb-6 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <img
              src={ARCHITECTURE.image}
              alt={ARCHITECTURE.imageAlt}
              loading="lazy"
              className="mx-auto w-full max-w-md object-contain"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-zinc-950">
                {ARCHITECTURE.frontend.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {ARCHITECTURE.frontend.description}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-zinc-950">
                {ARCHITECTURE.backend.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {ARCHITECTURE.backend.description}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mb-2 text-2xl font-bold text-zinc-950">
            Autenticação e segurança
          </h2>
          <p className="mb-6 text-sm text-zinc-500">
            O fluxo de login e renovação de sessão, na prática:
          </p>
          <div className="mb-6 overflow-hidden rounded-lg border border-zinc-200 bg-white p-6">
            <img
              src={AUTH_FLOW.image}
              alt={AUTH_FLOW.imageAlt}
              loading="lazy"
              className="mx-auto w-full max-w-2xl object-contain"
            />
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {AUTH_FLOW.points.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 rounded-lg border border-zinc-200 p-4 text-sm leading-relaxed text-zinc-600"
              >
                <ShieldCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-zinc-400"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-6">
            <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-900 text-white">
              <AI_FEATURE.icon size={18} />
            </div>
            <h3 className="mb-2 font-semibold text-zinc-950">
              {AI_FEATURE.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {AI_FEATURE.description}
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-6">
            <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-900 text-white">
              <MEDIA_FEATURE.icon size={18} />
            </div>
            <h3 className="mb-2 font-semibold text-zinc-950">
              {MEDIA_FEATURE.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {MEDIA_FEATURE.description}
            </p>
          </div>
        </Reveal>

        <Reveal className="overflow-hidden rounded-lg bg-zinc-800 opacity-10">
          <GridBackground cellWidth={32} cellHeight={32} style='opacity-10'>
            <section className="flex flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Curtiu o que viu?
                </h2>
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
