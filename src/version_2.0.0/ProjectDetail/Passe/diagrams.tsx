import { ArrowDown, ArrowRight, ArrowUp, Cpu, Database, Server, Smartphone, type LucideIcon } from "lucide-react";
import type { ISequenceStep } from "./passe.model";

interface NodeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  dark?: boolean;
}

const Node = ({ icon: Icon, title, subtitle, dark = false }: NodeProps) => (
  <div
    className={`flex items-center gap-3 rounded-lg border p-4 ${
      dark ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-950"
    }`}
  >
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-md ${
        dark ? "bg-white/10" : "bg-zinc-100"
      }`}
    >
      <Icon size={18} />
    </span>
    <span className="flex flex-col">
      <span className="text-sm font-semibold">{title}</span>
      <span className={`text-xs ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{subtitle}</span>
    </span>
  </div>
);

/** Arrow that points right on wide screens and down on phones. */
const Link = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-2 py-1 text-zinc-400 sm:flex-col sm:gap-1 sm:px-1 sm:py-0">
    <ArrowDown size={16} className="sm:hidden" />
    <ArrowRight size={16} className="hidden sm:block" />
    <span className="text-[11px] font-medium leading-tight text-zinc-500 sm:max-w-24 sm:text-center">{label}</span>
  </div>
);

export const SystemDiagram = () => (
  <figure className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
    <div className="grid grid-cols-1 items-center sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <Node icon={Smartphone} title="App mobile" subtitle="React Native + Expo" />
      <Link label="HTTPS + JWT" />
      <Node icon={Server} title="API" subtitle="Node.js + Express" dark />
      <Link label="Prisma ORM" />
      <Node icon={Database} title="PostgreSQL" subtitle="Neon, em nuvem" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <div className="hidden items-start justify-center pt-3 sm:flex">
        <span className="rounded-md border border-dashed border-zinc-300 px-2.5 py-1.5 text-center text-[11px] text-zinc-500">
          A pessoa lê o QR do terminal
          <br />
          ou aproxima a tag NFC
        </span>
      </div>
      <div className="hidden sm:block" />
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 py-2 text-zinc-400">
          <ArrowUp size={16} />
          <span className="text-[11px] font-medium text-zinc-500">HTTP + chave do terminal</span>
        </div>
        <div className="w-full">
          <Node icon={Cpu} title="Terminal de acesso" subtitle="ESP32 na catraca" />
        </div>
      </div>
    </div>

    <figcaption className="mt-5 text-xs leading-relaxed text-zinc-500">
      O app e o terminal nunca conversam entre si: os dois falam só com a API, que é a única que decide e registra.
    </figcaption>
  </figure>
);

const ACTOR_STYLE: Record<string, string> = {
  Pessoa: "bg-white text-zinc-700 border-zinc-300",
  App: "bg-zinc-100 text-zinc-800 border-zinc-300",
  API: "bg-zinc-900 text-white border-zinc-900",
  Banco: "bg-zinc-100 text-zinc-800 border-zinc-300",
  Terminal: "bg-white text-zinc-800 border-zinc-400 border-dashed",
};

const Actor = ({ name }: { name: string }) => (
  <span className={`rounded-md border px-2 py-0.5 text-xs font-medium ${ACTOR_STYLE[name] ?? ""}`}>{name}</span>
);

export const AccessSequence = ({ steps }: { steps: ISequenceStep[] }) => (
  <ol className="relative flex flex-col gap-4 border-l border-zinc-200 pl-6">
    {steps.map((step, index) => (
      <li key={step.message} className="relative">
        <span className="absolute -left-[37px] flex size-6 items-center justify-center rounded-full border border-zinc-300 bg-white text-xs font-semibold text-zinc-700">
          {index + 1}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <Actor name={step.from} />
          <ArrowRight size={14} className="text-zinc-400" />
          <Actor name={step.to} />
          <code className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs text-zinc-800">{step.message}</code>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{step.detail}</p>
      </li>
    ))}
  </ol>
);
