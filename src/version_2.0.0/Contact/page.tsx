import { Check, Copy, Mail } from "lucide-react";
import { GridBackground } from "@/components/grid-background";
import bateriaImg from "@/assets/bateria/img_bateriaCompleta.png";
import pratoImg from "@/assets/bateria/img_prato.png";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import tamborImg from "@/assets/bateria/img_tambor.png";
import {
  CONTACT_EMAIL,
  CONTACT_MESSAGE,
  useContactPage,
} from "./contact.model";

export const ContactPage = () => {
  const { copied, handleCopyEmail } = useContactPage();

  return (
    <GridBackground cellWidth={58} cellHeight={58}>
      <main className="relative flex flex-col items-center justify-center gap-6 overflow-hidden px-[6%] py-20 text-center sm:gap-8 h-[70dvh] md:h-[75dvh] md:px-[22%] md:py-32">
        <img
          src={baquetasImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 left-6 w-22 rotate-[160deg] object-contain opacity-[0.5] sm:left-32 sm:w-36 sm:opacity-[0.7]"
        />
        <img
          src={bateriaImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -left-8 w-36 rotate-[-6deg] object-contain opacity-[0.5] sm:-bottom-10 sm:-left-10 sm:w-64 sm:opacity-[0.7]"
        />
        <img
          src={pratoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-3 -right-6 w-24 rotate-6 object-contain opacity-[0.4] sm:-top-6 sm:-right-4 sm:w-36 sm:opacity-[0.6]"
        />
        <img
          src={tamborImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-2 -right-8 w-22 rotate-[8deg] object-contain opacity-[0.5] sm:-bottom-4 sm:-right-10 sm:w-28 sm:opacity-[0.7]"
        />

        <span className="relative flex items-center gap-2 rounded-md bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800">
          <Mail size={14} />
          Contato
        </span>

        <h1 className="relative max-w-2xl text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl md:text-5xl">
          Vamos conversar?
        </h1>

        <p className="relative max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg">
          {CONTACT_MESSAGE}
        </p>

        <div className="relative z-40 mt-2 flex w-full max-w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white py-2 pr-2 pl-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:mt-4 sm:w-auto sm:pl-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex min-w-0 items-center gap-2 text-sm font-semibold break-all text-zinc-950 sm:gap-3 sm:text-xl"
          >
            <Mail size={20} className="shrink-0 text-zinc-400" />
            {CONTACT_EMAIL}
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copiar e-mail"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            {copied ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} />
            )}
          </button>
        </div>
      </main>
    </GridBackground>
  );
};
