import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Check, Download, Figma, FileCode2, Github, Nfc, Smartphone, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/grid-background";
import { Reveal } from "@/components/reveal";
import { SectionChips, SectionSidebar } from "@/components/section-nav";
import { useActiveSection } from "@/lib/use-active-section";
import baquetasImg from "@/assets/bateria/img_baquetas.png";
import coverImg from "@/assets/Passe/capa.webp";
import { AccessSequence, SystemDiagram } from "./diagrams";
import {
  ACCESS_SEQUENCE,
  APP,
  APP_DOWNLOADS,
  BACKEND,
  CHALLENGE,
  DECISIONS,
  DESIGN,
  HERO_STATS,
  HOW_IT_WORKS,
  INFRA,
  IOT,
  LINKS,
  MILESTONES,
  NAV_GROUPS,
  NFC_NOTE,
  NON_FUNCTIONAL,
  project,
  REQUIREMENT_GROUPS,
  SECTION_IDS,
  SWAGGER_SHOTS,
  TEAM,
  WORKFLOW,
  type IEngineeringPart,
} from "./passe.model";

const CONTAINER = "mx-auto w-full max-w-6xl px-[6%] lg:px-10";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, intro, children }: SectionProps) => (
  <section id={id} className="scroll-mt-32 lg:scroll-mt-24">
    <Reveal>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">{intro}</p>}
      <div className="mt-8">{children}</div>
    </Reveal>
  </section>
);

const IconCard = ({ icon: Icon, title, children }: { icon: IEngineeringPart["icon"]; title: string; children: ReactNode }) => (
  <div className="rounded-lg border border-zinc-200 bg-white/60 p-5">
    <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-100">
      <Icon size={18} />
    </div>
    <h3 className="mb-1.5 font-semibold text-zinc-950">{title}</h3>
    <div className="text-sm leading-relaxed text-zinc-600">{children}</div>
  </div>
);

const StackChips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((tech) => (
      <span key={tech} className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white">
        {tech}
      </span>
    ))}
  </div>
);

const PhoneGallery = ({ title, screens }: { title: string; screens: { img: string; label: string }[] }) => (
  <div>
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">{title}</h3>
    <ul className="-mx-[6%] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[6%] pb-4 lg:mx-0 lg:px-0">
      {screens.map((screen) => (
        <li key={screen.label} className="w-36 shrink-0 snap-start sm:w-40">
          <div className="overflow-hidden rounded-[1.4rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-md">
            <img
              src={screen.img}
              alt={`Tela do app: ${screen.label}`}
              loading="lazy"
              className="aspect-[390/844] w-full rounded-[1rem] object-cover"
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium text-zinc-600">{screen.label}</p>
        </li>
      ))}
    </ul>
  </div>
);

const EngineeringPart = ({ part, children }: { part: IEngineeringPart; children?: ReactNode }) => {
  const Icon = part.icon;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-md bg-zinc-900 text-white">
          <Icon size={18} />
        </span>
        <p className="text-sm text-zinc-500">
          Responsável: <span className="font-medium text-zinc-800">{part.owner}</span>
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {part.points.map((point) => (
          <li key={point} className="rounded-lg border border-zinc-200 bg-white/60 p-4 text-sm leading-relaxed text-zinc-600">
            {point}
          </li>
        ))}
      </ul>
      {children}
      <StackChips items={part.stack} />
    </div>
  );
};

const AppDownloads = () => (
  <section
    aria-labelledby="experimente-o-app"
    className="relative mt-10 rounded-xl bg-zinc-950 p-6 text-white shadow-lg sm:p-8"
  >
    <div className="flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-md bg-white/10">
        <Smartphone size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Experimente o app</p>
        <h2 id="experimente-o-app" className="text-xl font-bold sm:text-2xl">
          Leia o QR Code com o celular
        </h2>
      </div>
    </div>

    <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      {APP_DOWNLOADS.map((item) => (
        <li key={item.title} className="flex flex-col gap-5 rounded-lg border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-center rounded-lg bg-white p-3 sm:self-auto"
          >
            <img src={item.qr} alt={`QR Code: ${item.cta}`} className="size-36 sm:size-32" />
          </a>
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-md border border-white/15 px-2 py-0.5 text-xs font-medium text-zinc-300">
              {item.platform}
            </span>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              <Download size={14} />
              {item.cta}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export const PassePage = () => {
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div>
      <GridBackground cellWidth={52} cellHeight={52}>
        <header className={`relative overflow-hidden py-16 md:py-20 ${CONTAINER}`}>
          <img
            src={baquetasImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-2 right-[8%] w-16 rotate-[18deg] object-contain opacity-[0.4] sm:w-24"
          />

          <Link
            to="/projetos"
            className="relative inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>

          <div className="relative mt-6 flex flex-wrap items-center gap-2 text-xs font-medium">
            {[project.purpose, project.status, "API + App + IoT", String(project.year)].map((tag) => (
              <span key={tag} className="rounded-md border border-zinc-300 bg-zinc-100 px-2 py-0.5 text-zinc-500">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="relative mt-3 text-4xl font-bold text-zinc-950 sm:text-6xl">{project.title}</h1>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {project.description}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-3">
            <a href={LINKS.repo} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-zinc-950 text-white hover:bg-zinc-800">
                <Github size={16} />
                Ver repositório
              </Button>
            </a>
            <a href={LINKS.swagger} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <FileCode2 size={16} />
                Swagger da API
              </Button>
            </a>
            <a href={LINKS.figma} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Figma size={16} />
                Protótipo no Figma
              </Button>
            </a>
            <a href={LINKS.apk} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                App para Android
              </Button>
            </a>
          </div>

          <AppDownloads />

          <dl className="relative mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-zinc-200 bg-white/70 p-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-zinc-950">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-10 overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <img
              src={coverImg}
              alt="Três telas do app Passe: início com o botão Abrir catraca, leitor de QR Code e acesso autorizado"
              className="w-full object-cover"
            />
          </div>
        </header>
      </GridBackground>

      <SectionChips groups={NAV_GROUPS} activeId={activeId} />

      <div className={`grid grid-cols-1 gap-14 py-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:py-16 ${CONTAINER}`}>
        <aside>
          <SectionSidebar groups={NAV_GROUPS} activeId={activeId} />
        </aside>

        <main className="flex min-w-0 max-w-3xl flex-col gap-24">
          {/* ---------------- Visão geral ---------------- */}
          <Section id="desafio" eyebrow="Visão geral" title="O desafio">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-zinc-700">
              {CHALLENGE.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CHALLENGE.parts.map((part) => (
                <IconCard key={part.title} icon={part.icon} title={part.title}>
                  {part.description}
                </IconCard>
              ))}
            </div>
          </Section>

          <Section
            id="como-funciona"
            eyebrow="Visão geral"
            title="Como funciona"
            intro="Do QR na catraca até a passagem aberta, em quatro passos."
          >
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HOW_IT_WORKS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="relative rounded-lg border border-zinc-200 bg-white/60 p-5">
                    <span className="absolute right-4 top-4 text-3xl font-bold text-zinc-200">{index + 1}</span>
                    <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-zinc-900 text-white">
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-1.5 font-semibold text-zinc-950">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600">{step.description}</p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-4 flex items-start gap-3 rounded-lg border border-dashed border-zinc-300 p-4 text-sm leading-relaxed text-zinc-600">
              <Nfc size={18} className="mt-0.5 shrink-0 text-zinc-500" />
              {NFC_NOTE}
            </p>
          </Section>

          {/* ---------------- Produto ---------------- */}
          <Section
            id="requisitos"
            eyebrow="Produto"
            title="Requisitos"
            intro="O desafio trouxe 17 requisitos funcionais e uma lista de não funcionais. Sem testes automatizados, o projeto não é aceito."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {REQUIREMENT_GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="rounded-lg border border-zinc-200 bg-white/60 p-5">
                    <div className="mb-4 flex items-center gap-2.5">
                      <Icon size={18} className="text-zinc-500" />
                      <h3 className="font-semibold text-zinc-950">{group.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {group.items.map((item) => (
                        <li key={item.code} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                          <span className="mt-0.5 h-fit shrink-0 rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-zinc-500">
                            {item.code}
                          </span>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">Não funcionais</h3>
            <div className="flex flex-wrap gap-2">
              {NON_FUNCTIONAL.map((item) => (
                <span key={item} className="rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-xs font-medium text-zinc-600">
                  {item}
                </span>
              ))}
            </div>
          </Section>

          <Section
            id="decisoes"
            eyebrow="Produto"
            title="Decisões"
            intro="As escolhas que mais moldaram o sistema, e o porquê de cada uma."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DECISIONS.map((item) => (
                <IconCard key={item.decision} icon={item.icon} title={item.decision}>
                  {item.reason}
                </IconCard>
              ))}
            </div>
          </Section>

          <Section id="design" eyebrow="Produto" title="Design" intro={DESIGN.direction}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {DESIGN.reasons.map((reason) => (
                <IconCard key={reason.title} icon={reason.icon} title={reason.title}>
                  {reason.description}
                </IconCard>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DESIGN.scales.map((scale) => (
                <div key={scale.title} className="rounded-lg border border-zinc-200 bg-white/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{scale.title}</p>
                  <p className="mt-2 text-lg font-semibold text-zinc-950">{scale.detail}</p>
                  <p className="mt-1 text-sm text-zinc-600">{scale.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-10">
              <PhoneGallery title="Fluxo da pessoa" screens={DESIGN.personScreens} />
              <PhoneGallery title="Administrador" screens={DESIGN.adminScreens} />
            </div>

            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">Cores que contam a história</h3>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {DESIGN.palette.map((color) => (
                <li key={color.hex}>
                  <span className="block h-12 rounded-md border border-zinc-200" style={{ backgroundColor: color.hex }} />
                  <span className="mt-1.5 block text-xs font-medium text-zinc-700">{color.name}</span>
                  <span className="block font-mono text-[11px] text-zinc-400">{color.hex}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-zinc-500">
              Design de <span className="font-medium text-zinc-800">{DESIGN.author}</span>.{" "}
              <a href={LINKS.figma} target="_blank" rel="noopener noreferrer" className="font-medium text-zinc-900 underline underline-offset-4">
                Abrir as 31 telas no Figma
              </a>
            </p>
          </Section>

          {/* ---------------- Engenharia ---------------- */}
          <Section
            id="arquitetura"
            eyebrow="Engenharia"
            title="Arquitetura"
            intro="Três partes independentes, cada uma com sua pasta no monorepo, sua pipeline e seu responsável, ligadas por um único contrato."
          >
            <SystemDiagram />
          </Section>

          <Section id="backend" eyebrow="Engenharia" title="Backend" intro={BACKEND.summary}>
            <EngineeringPart part={BACKEND}>
              <div className="flex flex-col gap-4">
                {SWAGGER_SHOTS.map((shot) => (
                  <div key={shot.alt} className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
                    <img src={shot.img} alt={shot.alt} loading="lazy" className="w-full" />
                  </div>
                ))}
                <a
                  href={LINKS.swagger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-zinc-900 underline underline-offset-4"
                >
                  Abrir o Swagger em homologação
                  <ArrowRight size={14} />
                </a>
              </div>
            </EngineeringPart>
          </Section>

          <Section id="app" eyebrow="Engenharia" title="App mobile" intro={APP.summary}>
            <EngineeringPart part={APP} />
          </Section>

          <Section id="iot" eyebrow="Engenharia" title="Terminal IoT" intro={IOT.summary}>
            <EngineeringPart part={IOT} />
          </Section>

          <Section id="infra" eyebrow="Engenharia" title="Infra e CI/CD" intro={INFRA.summary}>
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-4">
              {INFRA.pipeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="relative rounded-lg border border-zinc-200 bg-white/60 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Icon size={16} className="text-zinc-500" />
                      <span className="text-sm font-semibold text-zinc-950">{step.title}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-600">{step.description}</p>
                    {index < INFRA.pipeline.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="absolute -right-[11px] top-1/2 hidden -translate-y-1/2 rounded-full bg-gray-100 text-zinc-400 sm:block"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Workflow size={16} className="text-zinc-400" />
              {INFRA.workflows.map((workflow) => (
                <code key={workflow} className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-xs text-zinc-700">
                  {workflow}
                </code>
              ))}
            </div>
          </Section>

          <Section
            id="fluxo"
            eyebrow="Engenharia"
            title="Uma tentativa de acesso"
            intro="O caminho de um acesso por QR Code, do display da catraca até a tela verde no celular."
          >
            <AccessSequence steps={ACCESS_SEQUENCE} />
          </Section>

          {/* ---------------- Processo ---------------- */}
          <Section
            id="forma-de-trabalho"
            eyebrow="Processo"
            title="Forma de trabalho"
            intro="Quatro pessoas, três frentes em paralelo e um prazo de semestre. O processo foi o que manteve tudo encaixando."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WORKFLOW.map((item) => (
                <IconCard key={item.title} icon={item.icon} title={item.title}>
                  {item.description}
                </IconCard>
              ))}
            </div>

            <h3 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-widest text-zinc-400">Marcos</h3>
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {MILESTONES.map((milestone) => (
                <li key={milestone.title} className="rounded-lg border border-zinc-200 bg-white/60 p-4">
                  <p className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                    <Check size={13} className="text-zinc-900" />
                    {milestone.date}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-950">{milestone.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">{milestone.description}</p>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="equipe" eyebrow="Processo" title="Equipe" intro="Equipe DevFlow, Fatec Jacareí.">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TEAM.map((member) => {
                const Icon = member.icon;
                return (
                  <li key={member.name} className="flex gap-4 rounded-lg border border-zinc-200 bg-white/60 p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-zinc-900 text-white">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-950">{member.name}</p>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">{member.role}</p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{member.delivered}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>


          <Reveal className="overflow-hidden rounded-lg bg-zinc-900">
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
    </div>
  );
};
