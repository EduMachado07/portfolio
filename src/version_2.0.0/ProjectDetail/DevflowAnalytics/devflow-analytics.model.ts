import {
  Database,
  GitPullRequestArrow,
  MapPin,
  Puzzle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import interfaceImg from "@/assets/DevflowAnalytics/interface_prototype.png";
import classDiagram from "@/assets/DevflowAnalytics/DiagramaDeClasse.png";
import useCaseDiagram from "@/assets/DevflowAnalytics/CasoDeUso.png";
import burndownImg from "@/assets/DevflowAnalytics/burndown_sprint1.png";

export const project = GithubProjects.find((item) => item.slug === "devflow-analytics")!;

export const HERO_IMAGE = {
  src: interfaceImg,
  alt: "Protótipo de interface do mapa interativo do Devflow Analytics, com ponto de coleta selecionado",
  caption:
    "Protótipo de interface (Figma) — a aplicação roda via Docker, mas não capturei uma tela do sistema em produção pra esta página.",
};

export const QUOTE =
  "Esse projeto me tirou da zona de conforto de CRUD comum: dados científicos de verdade, vindos de campanhas de campo e estações automáticas em reservatórios de hidrelétricas, com parceria de pesquisadores do INPE, UFRJ, UFJF e IIE. Foi a primeira vez que tive que pensar em três fontes de dados bem diferentes como um problema de modelagem, não só de tela.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "Material-UI", "Recharts", "Leaflet"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL (x3)", "Redis", "Zod", "Docker"],
  },
];

export interface IHighlightCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HIGHLIGHTS: IHighlightCard[] = [
  {
    icon: Database,
    title: "Três bancos, um portal só",
    description:
      "Dados de campanhas de campo (Furnas), estações automáticas (SIMA) e do projeto Balcar vivem em três instâncias PostgreSQL separadas, cada uma com suas próprias tabelas e procedures — unificadas num único portal de consulta, com Redis fazendo cache das coordenadas do mapa.",
  },
  {
    icon: Puzzle,
    title: "Casos de uso isolados por pasta",
    description:
      "Mesmo padrão usado em outros projetos do time: cada operação do backend (buscar dados, exportar CSV, listar coordenadas) mora em sua própria pasta, com DTO validado por Zod, caso de uso e controller — sem um service genérico fazendo tudo.",
  },
  {
    icon: MapPin,
    title: "Mapa real das estações de coleta",
    description:
      "Leaflet com tiles do ArcGIS mostra os pontos de campanhas de campo e das estações automáticas espalhadas pelos reservatórios monitorados, com tooltip por ponto.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Pipeline de CI de verdade",
    description:
      "A cada push, o GitHub Actions builda frontend e backend, roda lint, e sobe a stack inteira via Docker Compose como teste de fumaça — o projeto do time com o pipeline mais completo entre os que participei.",
  },
];

export const ARCHITECTURE = {
  image: classDiagram,
  imageAlt: "Diagrama de classes: Painel, Tabela, Série Temporal, Mapa e Exportação",
  title: "Backend organizado por caso de uso",
  description:
    "O domínio do sistema gira em torno de um Painel que dá acesso a Tabela, Série Temporal e Mapa, todos podendo gerar uma Exportação. No backend, cada repositório (Furnas, SIMA, Balcar) implementa sua própria interface e conversa direto com o Postgres via funções e procedures — sem ORM, com o SQL de cada fonte de dados isolado no seu próprio pacote.",
};

export const USE_CASE = {
  image: useCaseDiagram,
  imageAlt: "Diagrama de caso de uso: pesquisador visualizando painel, tabela, mapa, séries temporais e exportando CSV",
  description:
    "Antes de escrever código, o time modelou os casos de uso do pesquisador — visualizar painel, tabela, mapa e séries temporais, e exportar os dados filtrados — o que ajudou a manter o escopo do backend alinhado ao que a interface realmente precisava consumir.",
};

export const TEAM = {
  icon: Users,
  title: "Squad de 7 na Fatec, dado científico real",
  description:
    "Projeto de equipe da Fatec (curso de DSM), com 219 commits ao longo de 3 sprints acompanhadas por burndown — em parceria com pesquisadores do INPE, UFRJ, UFJF e IIE que forneceram os dados reais de campanhas em reservatórios da Furnas Centrais Elétricas. Fiz parte do time de desenvolvimento ao longo das três sprints.",
  burndownImage: burndownImg,
  burndownAlt: "Gráfico de burndown da Sprint 1: pontos planejados vs. realizados ao longo dos dias",
};
