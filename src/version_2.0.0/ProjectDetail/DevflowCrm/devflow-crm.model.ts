import {
  BarChart3,
  Boxes,
  Plug,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import screenshotsImg from "@/assets/DevflowCrm/screenshots_mosaic.png";
import classDiagram from "@/assets/DevflowCrm/UML-Classe.png";
import authDiagram from "@/assets/DevflowCrm/autenticacao.png";

export const project = GithubProjects.find((item) => item.slug === "devflow")!;

export const HERO_IMAGE = screenshotsImg;

export const QUOTE =
  "Entrei nesse projeto num squad de 6 pessoas com PO e Scrum Master dedicados — meu primeiro contato real com sprints, backlog e um cliente esperando entregas. Minha função foi integrar: conectar as APIs do backend às telas do frontend, caçar e corrigir os erros que só aparecem na integração, e testar o sistema de ponta a ponta. Um trabalho full stack no sentido literal — trafegando pelas duas pontas o tempo todo.";

export const TEAM = {
  icon: Users,
  title: "Squad de 6, papéis definidos, cliente real",
  description:
    "Time formado por PO, Scrum Master, um desenvolvedor frontend, um desenvolvedor backend, um responsável pelo banco de dados e eu como integrador full stack, em parceria com a Fatec Jacareí para a 1000 Valle Multimarcas. O projeto rodou em sprints com burndown acompanhado — meu papel foi ligar as pontas: conectar API e frontend, resolver os erros de integração e testar os fluxos antes de cada entrega.",
};

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Recharts",
      "MSW",
      "Axios",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Jest + Supertest",
      "Docker",
    ],
  },
];

export interface IHighlightCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HIGHLIGHTS: IHighlightCard[] = [
  {
    icon: Boxes,
    title: "Um comando, três serviços",
    description:
      "Frontend, backend e banco sobem juntos via Docker Compose — cada módulo de domínio (leads, clientes, equipes, papéis...) isolado em sua própria pasta com controller, service e repository.",
  },
  {
    icon: ShieldCheck,
    title: "Permissões em duas camadas",
    description:
      "Quatro papéis fixos (Atendente, Gerente, Gerente Geral, Administrador) controlam o acesso básico via middleware, com um sistema de permissões dinâmico por cima — capacidades configuráveis guardadas no banco, não só um enum travado no código.",
  },
  {
    icon: BarChart3,
    title: "Dois dashboards, uma agregação só",
    description:
      "Uma única consulta ao Prisma alimenta os painéis operacional e analítico — funil de vendas, leads por origem/loja/equipe, motivos de perda e ranking de atendentes, tudo com filtro de período (semana, mês, ano ou personalizado).",
  },
  {
    icon: Plug,
    title: "Minha parte: ligar API e frontend",
    description:
      "Depois que os endpoints saíam do backend, eu conectava eles às telas do frontend, caçava os erros que só apareciam na integração e testava os fluxos de ponta a ponta antes de cada entrega pro cliente.",
  },
];

export const ARCHITECTURE = {
  image: classDiagram,
  imageAlt: "Diagrama de classes do domínio: Lead, Cliente, Negociação, Histórico e Log do sistema",
  title: "Backend modular, por domínio",
  description:
    "Dez módulos de domínio (auth, leads, clientes, equipes, lojas, origens, papéis, usuários, dashboard e logs), cada um com sua própria camada de controller, service e repository, mais um PrismaClient único compartilhado entre eles. As regras de negócio de lead, negociação e histórico ficam isoladas do resto do sistema, comunicando-se por interfaces de repositório — o que deixa claro onde mexer quando uma regra muda sem afetar os outros módulos.",
};

export const AUTH_FLOW = {
  image: authDiagram,
  imageAlt: "Diagrama de sequência do login: Frontend, API, AuthService e banco de dados",
  points: [
    "Login autentica e-mail e senha contra o banco e devolve um JWT com id, papel (role) e validade — sem sessão guardada no servidor.",
    "Um middleware de autorização lê o papel do token e bloqueia rotas que exigem um nível de acesso maior.",
    "O mesmo papel também filtra os dados: a query de leads muda conforme quem está logado, sem precisar de tela ou endpoint separado por papel.",
    "Um teste de ponta a ponta (Jest + Supertest) cobre o fluxo inteiro — login, criação de lead, abertura de negociação e a regra que impede duas negociações ativas ao mesmo tempo.",
  ],
};
