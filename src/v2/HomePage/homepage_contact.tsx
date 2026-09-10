import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./homepage_reveal";

export const ContactSection = () => {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl bg-zinc-900 px-8 py-16 text-center sm:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative flex flex-col items-center gap-4">
        <span className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
          <Mail size={14} />
          Disponível para novos projetos
          <span className="size-2 rounded-full bg-green-500 animate-pulse" />
        </span>

        <h2 className="max-w-lg text-3xl font-bold text-white sm:text-4xl">
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
