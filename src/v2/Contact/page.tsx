import { Check, Copy, Mail } from "lucide-react";
import { GridBackground } from "@/components/v2/grid-background";
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
      <main className="h-[75dvh] relative flex flex-col items-center gap-8 overflow-hidden px-[6%] py-24 text-center md:px-[22%] md:py-32">
        <img
          src={baquetasImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 left-32 hidden w-44 rotate-[160deg] object-contain opacity-[0.7] sm:block sm:w-36"
        />
        <img
          src={bateriaImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -left-10 hidden w-48 rotate-[-6deg] object-contain opacity-[0.7] sm:block sm:w-64"
        />
        <img
          src={pratoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-4 hidden w-28 rotate-6 object-contain opacity-[0.6] sm:block sm:w-36"
        />
        <img
          src={tamborImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -right-10 hidden w-20 rotate-[8deg] object-contain opacity-[0.7] sm:block sm:w-28"
        />

        <span className="flex items-center gap-2 rounded-full bg-zinc-300 px-3 py-1 text-xs font-medium text-zinc-800">
          <Mail size={14} />
          Contato
        </span>

        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
          Vamos conversar?
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {CONTACT_MESSAGE}
        </p>

        <div className="z-40 mt-4 flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white pr-2 pl-6 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-3 text-lg font-semibold text-zinc-950 sm:text-xl"
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
