import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import bateriaImg from "@/assets/bateria/img_bateriaCompleta.png";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import pratoImg from "@/assets/bateria/img_prato.png";
import tamborImg from "@/assets/bateria/img_tambor.png";
import { Reveal } from "@/components/reveal";

export const ContactSection = () => {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl bg-zinc-900 px-5 py-12 text-center sm:px-16 sm:py-16 shadow-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <img
        src={baquetasImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-8 w-12 rotate-[160deg] object-contain opacity-[0.2] invert sm:top-[-1rem] sm:left-32 w-16 sm:w-26 sm:opacity-[0.25]"
      />
      <img
        src={bateriaImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -left-2 w-14 rotate-[-6deg] object-contain opacity-[0.22] invert sm:-bottom-6 w-26 sm:w-56 sm:opacity-[0.25]"
      />
      <img
        src={pratoImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 right-4 w-9 rotate-6 object-contain opacity-[0.2] invert sm:-top-6 sm:right-8 w-14 sm:w-36 sm:opacity-[0.25]"
      />
      <img
        src={tamborImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-3 w-7 rotate-[8deg] object-contain opacity-[0.2] invert sm:-bottom-4 sm:-right-6 w-18 sm:w-28 sm:opacity-[0.25]"
      />

      <div className="relative flex flex-col items-center gap-4">
        <span className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
          <Mail size={14} />
          Disponível para novos projetos
          <span className="size-2 rounded-full bg-green-500 animate-pulse" />
        </span>

        <h2 className="max-w-lg text-2xl font-bold text-white sm:text-4xl">
          Vamos transformar sua ideia em um projeto real?
        </h2>

        <p className="max-w-md text-sm text-zinc-400">
          Me conte um pouco sobre o seu projeto e vamos conversar sobre como posso ajudar a tirá-lo do papel.
        </p>

        <Link to="/contato">
          <Button size="lg" className="mt-2 gap-2 bg-white text-zinc-950 hover:bg-zinc-200">
            Entrar em contato
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </Reveal>
  );
};
