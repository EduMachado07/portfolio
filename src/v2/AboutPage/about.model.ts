import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Boxes,
  Database,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const HERO_BADGES = {
  location: "São José dos Campos, SP",
  academic: "Graduando · Fatec Jacareí",
};

export const HERO_TAGLINE = "Desenvolvedor Full Stack & Baterista";

export const HERO_TITLE = "Eduardo Machado";

export const HERO_PARAGRAPHS = [
  "Sou desenvolvedor Full Stack em formação pela Fatec Jacareí, em Desenvolvimento de Software Multiplataforma, com o técnico em Desenvolvimento de Sistemas já concluído pela Etec São José dos Campos. Gosto de entregar de ponta a ponta: React e TypeScript no front-end, Node.js e Express no back-end, PostgreSQL com Prisma ORM, autenticação JWT e a documentação de tudo isso — sem deixar nenhuma parte pra trás.",
  "Já atuei como desenvolvedor full stack em um CRM para cliente real dentro de uma equipe Scrum de 6 pessoas, ajudei a construir uma plataforma de análise de dados ambientais em parceria com a Furnas e o INPE, e hoje mantenho em produção uma aplicação própria, do banco de dados à interface. No caminho, também venci um hackathon de 7 dias desenvolvendo um app mobile em React Native.",
  "Fora do código, bateria é o meu outro ritmo — literalmente.",
];

export const MUSIC_SECTION = {
  badge: "Fora do teclado",
  title: "Bateria é o meu outro ritmo",
  paragraphs: [
    "Toco bateria há uns 5 anos. Começou assistindo meu irmão mais velho tocar: eu ficava tentando acertar o tempo batucando com as mãos, as pernas e estalos de dedo, até que ele me deu minha única aula de verdade — o resto eu aprendi sozinho, tocando na igreja e estudando drum covers.",
    "Nunca toquei em uma banda, mas há uns 3 anos toco na IEQ Dom Pedro I — aliás, o nome por trás do meu projeto Estudos DPI. Hoje já me considero um baterista bom, com bastante espaço (e vontade) de melhorar ainda mais.",
  ],
};

export type TimelineType = "academic" | "professional";

export interface ITimelineItem {
  id: string;
  period: string;
  type: TimelineType;
  title: string;
  place: string;
  description: string;
  img?: string;
}

export const TIMELINE: ITimelineItem[] = [
  {
    id: "etec",
    period: "dez/2024",
    type: "academic",
    title: "Técnico em Desenvolvimento de Sistemas",
    place: "Etec São José dos Campos",
    description:
      "Concluí o técnico que me abriu as portas pra programação — da lógica ao primeiro projeto em equipe.",
  },
  {
    id: "fatec-inicio",
    period: "2025",
    type: "academic",
    title: "Início da Fatec Jacareí",
    place: "Tecnologia em Desenvolvimento de Software Multiplataforma",
    description:
      "Comecei a graduação com conclusão prevista para dez/2027, unindo o que aprendo em sala com projetos reais em equipe a cada semestre.",
  },
  {
    id: "etec-jobs",
    period: "jun/2025",
    type: "professional",
    title: "1º lugar no hackathon da Etec — Etec Jobs",
    place: "Etec São José dos Campos",
    description:
      "Em 7 dias, desenvolvi com React Native um app Android de vagas de emprego, estágio e jovem aprendiz, vencendo entre 5 equipes.",
  },
  {
    id: "devflow-analytics",
    period: "set/2025",
    type: "professional",
    title: "Devflow Analytics — 2º semestre Fatec",
    place: "Parceria com Furnas, INPE, UFRJ, UFJF e IIE",
    description:
      "Ajudei a construir uma plataforma full stack para análise de dados limnológicos e meteorológicos do monitoramento de carbono em reservatórios de hidrelétricas.",
  },
  {
    id: "estudos-dpi",
    period: "dez/2025 – mar/2026",
    type: "professional",
    title: "Estudos DPI em produção",
    place: "Projeto próprio",
    description:
      "Coloquei no ar, sozinho, uma aplicação full stack para organizar estudos bíblicos, com formatação de texto assistida por IA e autenticação JWT completa.",
  },
  {
    id: "devflow-crm",
    period: "2026",
    type: "professional",
    title: "DevFlow CRM — 3º semestre Fatec",
    place: "1000 Valle Multimarcas, em parceria com a Fatec Jacareí",
    description:
      "Integrei o front-end aos mais de 25 endpoints REST do CRM de uma revenda multi-lojas, dentro de uma equipe Scrum de 6 pessoas.",
  },
  {
    id: "fatec-formatura",
    period: "Previsto: dez/2027",
    type: "academic",
    title: "Formatura na Fatec Jacareí",
    place: "Tecnologia em Desenvolvimento de Software Multiplataforma",
    description:
      "A meta que fecha essa fase: virar Tecnólogo em Desenvolvimento de Software Multiplataforma.",
  },
];

export const SKILL_LEVELS_MAX = 5;

export interface ISkill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface ISkillCategory {
  title: string;
  icon: LucideIcon;
  skills: ISkill[];
}

export const SKILL_CATEGORIES: ISkillCategory[] = [
  {
    title: "Linguagens & Fundamentos",
    icon: Blocks,
    skills: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "HTML & CSS", level: 5 },
      { name: "POO & Arquitetura em camadas", level: 4 },
      { name: "Python", level: 3 },
    ],
  },
  {
    title: "Front-end",
    icon: Layers,
    skills: [
      { name: "React", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "shadcn/ui", level: 4 },
      { name: "Vite", level: 4 },
      { name: "Axios", level: 4 },
      { name: "React Native / Expo", level: 3 },
      { name: "React Query", level: 3 },
      { name: "Recharts", level: 3 },
      { name: "Material UI", level: 3 },
      { name: "Formulários (React Hook Form + Zod)", level: 3 },
      { name: "Zustand", level: 3 },
      { name: "Framer Motion", level: 2 },
    ],
  },
  {
    title: "Back-end",
    icon: Boxes,
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express", level: 5 },
      { name: "APIs REST", level: 5 },
      { name: "JWT & RBAC", level: 4 },
      { name: "Cloudinary", level: 2 },
      { name: "FastAPI", level: 1 },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "Prisma ORM", level: 4 },
      { name: "SQL", level: 4 },
      { name: "SQLite", level: 3 },
      { name: "NoSQL", level: 2 },
    ],
  },
  {
    title: "Infra & Processos",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Docker", level: 4 },
      { name: "Deploy (Vercel)", level: 4 },
      { name: "Docker Compose", level: 3 },
      { name: "Swagger", level: 3 },
      { name: "Scrum", level: 3 },
    ],
  },
  {
    title: "Qualidade & Manutenção",
    icon: ShieldCheck,
    skills: [
      { name: "Depuração e correção de bugs", level: 4 },
      { name: "Documentação técnica", level: 4 },
      { name: "Testes de API (MSW)", level: 3 },
      { name: "Testes unitários", level: 3 },
    ],
  },
  {
    title: "IA & Automação",
    icon: Sparkles,
    skills: [
      { name: "n8n", level: 3 },
      { name: "Integração com LLMs (Groq)", level: 3 },
      { name: "Prompt Engineering", level: 3 },
      { name: "Machine Learning (scikit-learn, PyTorch, Faiss)", level: 1 },
    ],
  },
  {
    title: "Em aprofundamento",
    icon: Rocket,
    skills: [
      { name: "Next.js", level: 2 },
      { name: "NestJS", level: 2 },
    ],
  },
];
