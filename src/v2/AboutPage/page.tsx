import {
  ArrowRight,
  Briefcase,
  Camera,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/v2/grid-background";
import { Reveal } from "@/components/v2/reveal";
import imgPerfil from "@/assets/perfil.jpeg";
import bateriaImg from "@/assets/bateria/img_bateriaCompleta.png";
import pratoImg from "@/assets/bateria/img_prato.png";
import tamborImg from "@/assets/bateria/img_tambor.png";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import {
  HERO_BADGES,
  HERO_PARAGRAPHS,
  HERO_TAGLINE,
  HERO_TITLE,
  MUSIC_SECTION,
  SKILL_CATEGORIES,
  SKILL_LEVELS_MAX,
  TIMELINE,
} from "./about.model";

export const AboutPage = () => {
  return (
    <div className="bg-zinc-100/50">
      <GridBackground cellWidth={48} cellHeight={48}>
        <section className="relative flex flex-col-reverse items-center gap-12 overflow-hidden px-[6%] py-20 md:flex-row md:px-[15%] md:py-28">
          <Reveal className="flex flex-1 flex-col items-center gap-5 text-center md:items-start md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <p className="flex items-center gap-1.5 rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700">
                <MapPin size={14} />
                {HERO_BADGES.location}
              </p>
              <p className="flex items-center gap-1.5 rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">
                <GraduationCap size={14} />
                {HERO_BADGES.academic}
              </p>
            </div>

            <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {HERO_TAGLINE}
              <img
                src={pratoImg}
                alt=""
                aria-hidden="true"
                className="size-6.5 object-contain opacity-70"
              />
            </p>

            <h1 className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
              {HERO_TITLE}
            </h1>

            {HERO_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
              <Link to="/projetos">
                <Button className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800">
                  Ver Projetos
                  <ArrowRight size={16} />
                </Button>
              </Link>

              <Link to="/contato">
                <Button variant="outline" className="gap-2 border-zinc-300">
                  <Mail size={16} />
                  Falar comigo
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="shrink-0">
            <div className="relative">
              <img
                src={imgPerfil}
                alt="Foto de perfil de Eduardo Machado"
                className="size-64 rounded-2xl object-cover shadow-lg sm:size-80"
              />

              <span className="absolute -top-4 -left-4 flex size-12 -rotate-12 items-center justify-center rounded-full border border-zinc-300 bg-white p-2.5 shadow-sm">
                <img
                  src={tamborImg}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain opacity-70"
                />
              </span>
            </div>
          </Reveal>
        </section>
      </GridBackground>

      <main className="mx-auto flex w-full flex-col gap-20 px-[6%] py-16 md:px-[15%]">
        <Reveal className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 px-6 py-10 text-center sm:px-12 sm:py-14 md:text-left">
          <img
            src={bateriaImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-14 hidden w-72 rotate-[-6deg] object-contain opacity-[0.12] sm:block"
          />
          <img
            src={baquetasImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 left-10 hidden w-28 rotate-[150deg] object-contain opacity-[0.15] sm:block"
          />

          <span className="mx-auto flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300 md:mx-0">
            <Sparkles size={14} />
            {MUSIC_SECTION.badge}
          </span>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {MUSIC_SECTION.title}
          </h2>

          <div className="flex flex-col gap-3">
            {MUSIC_SECTION.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <section className="flex flex-col gap-10">
          <Reveal className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
              <GraduationCap size={14} />
              Trajetória
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
              Da Etec até aqui
            </h2>
          </Reveal>

          <ol className="relative flex flex-col gap-12">
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[27px] hidden w-px bg-zinc-300 sm:block"
            />

            {TIMELINE.map((item, index) => {
              const TypeIcon =
                item.type === "academic" ? GraduationCap : Briefcase;

              return (
                <Reveal key={item.id} delay={Math.min(index * 0.06, 0.3)}>
                  <li className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 shadow-sm">
                      <TypeIcon size={22} className="text-zinc-700" />
                    </span>

                    <div className="flex flex-1 flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col gap-1.5">
                        <span className="w-fit rounded-md border border-zinc-300 bg-white px-2 py-0.5 text-xs font-semibold text-zinc-600">
                          {item.period}
                        </span>
                        <h3 className="text-lg font-bold text-zinc-950">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-zinc-500">
                          {item.place}
                        </p>
                        <p className="max-w-lg text-sm leading-relaxed text-zinc-600">
                          {item.description}
                        </p>
                      </div>

                      <div className="relative mx-auto -rotate-3 sm:mx-0">
                        <div className="flex size-24 shrink-0 items-center justify-center rounded-md border-2 border-dashed border-zinc-300 bg-white text-zinc-300">
                          {item.img ? (
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-full w-full rounded-md object-cover"
                            />
                          ) : (
                            <Camera size={22} />
                          )}
                        </div>
                        <img
                          src={baquetasImg}
                          alt=""
                          aria-hidden="true"
                          className="pointer-events-none absolute -top-3 -right-3 w-8 rotate-45 object-contain opacity-60"
                        />
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </section>

        <section className="flex flex-col gap-10">
          <Reveal className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
              <Sparkles size={14} />
              Caixa de ferramentas
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
              Stacks & tecnologias
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_CATEGORIES.map((category, index) => {
              const CategoryIcon = category.icon;

              return (
                <Reveal
                  key={category.title}
                  delay={Math.min((index % 3) * 0.08, 0.24)}
                >
                  <div className="flex h-full flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                    <div className="flex items-center gap-2.5">
                      <i className="flex size-9 items-center justify-center rounded-lg bg-zinc-200">
                        <CategoryIcon size={18} />
                      </i>
                      <h3 className="text-base font-bold text-zinc-950">
                        {category.title}
                      </h3>
                    </div>

                    <ul className="flex flex-col gap-3">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="text-sm text-zinc-700">
                            {skill.name}
                          </span>
                          <span className="flex shrink-0 items-center gap-1">
                            {Array.from({ length: SKILL_LEVELS_MAX }).map(
                              (_, pipIndex) => (
                                <span
                                  key={pipIndex}
                                  aria-hidden="true"
                                  className={`size-2.5 rounded-xs ${
                                    pipIndex < skill.level
                                      ? "bg-zinc-950"
                                      : "border border-zinc-300"
                                  }`}
                                />
                              ),
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <Reveal className="overflow-hidden rounded-2xl shadow-lg">
          <GridBackground cellWidth={32} cellHeight={32} style="opacity-10">
            <section className="relative flex flex-col items-center justify-between gap-6 bg-zinc-900 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Bora conversar?
                </h2>
                <p className="text-sm text-zinc-300">
                  Se curtiu minha trajetória (ou meu ritmo na bateria), fico à
                  disposição pra trocar uma ideia.
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
