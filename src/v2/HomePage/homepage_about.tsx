import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import imgPerfil from "../../assets/perfil.jpeg";
import pratoImg from "@/assets/bateria/img_prato.png";
import tamborImg from "@/assets/bateria/img_baquetas.png";
import { Button } from "@/components/ui/button";
import { SocialMedia } from "@/lib/socialMedia";
import { Reveal } from "@/components/v2/reveal";

const linkedinLink = SocialMedia["Redes Sociais"].find(
  (item) => item.title === "LinkedIn",
)?.link;

export const AboutSection = () => {
  return (
    <main className="flex flex-col-reverse items-center justify-between gap-16 border-x-2 border-dotted px-6 py-20 lg:flex-row lg:gap-8 lg:pt-28">
      <Reveal className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <p className="bg-zinc-200 flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full">
            <MapPin size={14} />
            São José dos Campos, SP
          </p>
          <p className="border border-zinc-300 flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full">
            <GraduationCap size={14} />
            Graduando
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Desenvolvedor Full Stack & Baterista
          <img
            src={pratoImg}
            alt=""
            aria-hidden="true"
            className="size-6.5 object-contain opacity-70"
          />
        </p>

        <h1 className="text-5xl font-bold leading-tight text-zinc-950 sm:text-6xl">
          Eduardo Machado
        </h1>

        <p className="max-w-md text-base leading-relaxed text-zinc-600 sm:text-lg">
          Transformo ideias em produtos digitais funcionais, do planejamento ao
          deploy. Gosto de resolver problemas reais com código simples, bem
          pensado e que funciona.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
          <Link to="/projetos">
            <Button
              size="lg"
              className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800"
            >
              <Laptop size={22} />
              Ver Projetos
              <ArrowRight size={18} />
            </Button>
          </Link>

          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </a>
          )}
        </div>
      </Reveal>

      <Reveal
        className="flex flex-col justify-center items-center gap-10"
        delay={0.15}
      >
        <div className="relative">
          <img
            src={imgPerfil}
            alt="Foto de perfil"
            className="rounded-2xl shadow-lg aspect-square object-cover size-72 sm:size-84"
          />

          <span className="absolute -bottom-5 -right-5 flex items-center justify-center gap-2 rounded-lg border bg-zinc-50 border-zinc-300 p-5 text-xs text-zinc-950">
            {/* <Mail size={14} /> */}
            Disponível para novos projetos
            <span className="size-2.5 rounded-full bg-green-600 animate-pulse" />
          </span>

          <span className="absolute -top-4 -left-4 flex size-12 -rotate-12 items-center justify-center rounded-full border border-zinc-300 bg-white p-2.5 shadow-sm">
            <img
              src={tamborImg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain opacity-70"
            />
          </span>
        </div>

        <div className="flex flex-row gap-4">
          <section className="w-44 sm:w-56 border border-zinc-300 rounded-xl p-5 flex flex-row gap-3 items-center">
            <i className="bg-zinc-200 p-2 rounded-lg">
              <Laptop size={22} />
            </i>
            <div>
              {/* fazer contagem projetos */}
              <h4 className="text-xl font-bold">8</h4>
              <p className="text-xs text-zinc-500">Projetos Desenvolvidos</p>
            </div>
          </section>

          <section className="w-44 sm:w-56 border border-zinc-300 rounded-xl p-5 flex flex-row gap-3 items-center">
            <i className="bg-zinc-200 p-2 rounded-lg">
              <BriefcaseBusiness size={22} />
            </i>
            <div>
              {/* fazer calculo anos experiencia (atual - 2024) */}
              <h4 className="text-xl font-bold">2+</h4>
              <p className="text-xs text-zinc-500">Anos de Experiência</p>
            </div>
          </section>
        </div>
      </Reveal>
    </main>
  );
};
