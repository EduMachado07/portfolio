import {
  BookOpenCheck,
  Bot,
  Image as ImageIcon,
  Layers,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import screenshotsImg from "@/assets/EstudosDpi/screenshots_dpi.png";
import architectureDiagram from "@/assets/EstudosDpi/diagram_communication.png";
import tokenRefreshDiagram from "@/assets/EstudosDpi/diagram_tokenRefresh.png";

export const project = GithubProjects.find((item) => item.slug === "estudos-dpi")!;

export const HERO_IMAGE = screenshotsImg;

export const QUOTE =
  "Como alguém que estuda a Bíblia e vive anotando reflexões em lugares diferentes, eu queria um lugar só pra isso — com busca, categorias e a cara de um produto de verdade, não uma nota solta.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form + Zod",
      "TanStack Query",
      "Zustand",
      "TipTap",
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
      "bcrypt",
      "Cloudinary",
      "Groq API (LLM)",
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
    icon: Layers,
    title: "Full stack, do zero",
    description:
      "Frontend e backend em repositórios separados, arquitetados, implementados e publicados por mim — do modelo de dados no Prisma até o deploy na Vercel.",
  },
  {
    icon: ShieldCheck,
    title: "Autenticação JWT com rotação",
    description:
      "Access e refresh tokens em cookies httpOnly, com rotação a cada refresh e uma fila de requisições no frontend para lidar com 401 concorrentes sem duplicar chamadas.",
  },
  {
    icon: Bot,
    title: "Formatação de texto com IA",
    description:
      "Um botão chama a Groq (Llama 3.3 70B) pra limpar e formatar o texto do estudo em HTML seguro, já compatível com o editor rico embutido.",
  },
  {
    icon: ImageIcon,
    title: "Upload direto pra nuvem",
    description:
      "Imagens e vídeos vão da memória do servidor direto pro Cloudinary via stream, sem tocar o disco, com otimização automática de formato e qualidade.",
  },
];

export const ARCHITECTURE = {
  image: architectureDiagram,
  imageAlt: "Diagrama do fluxo Page → Model (Hook) → Service → API no frontend",
  frontend: {
    title: "Frontend: Page → Model → Service",
    description:
      "Cada tela segue o mesmo fluxo: a Page monta a página e injeta dependências, o Model (um hook próprio) concentra o estado e a lógica da tela, e o Service centraliza as chamadas HTTP atrás de uma interface. A View fica isolada, só renderizando o que o Model entrega — o que torna fácil trocar a origem dos dados sem tocar em UI.",
  },
  backend: {
    title: "Backend: Clean Architecture em camadas",
    description:
      "Entidades de domínio, repositórios (interface + implementação Postgres) e providers (upload, IA) ficam isolados por trás de interfaces. Cada caso de uso vive em sua própria pasta com DTO (validado por Zod), UseCase e Controller, montados manualmente num index.ts que funciona como composition root — sem framework de injeção de dependência, só disciplina de arquitetura.",
  },
};

export const AUTH_FLOW = {
  image: tokenRefreshDiagram,
  imageAlt: "Diagrama de sequência do fluxo de login e refresh token",
  points: [
    "Login retorna um par de tokens (access + refresh), guardados em cookies httpOnly — nunca acessíveis via JavaScript no navegador.",
    "Quando o access token expira, o servidor responde 401 e o cliente dispara um refresh automático, emitindo um novo par de tokens (rotação a cada uso).",
    "Requisições que chegam durante esse refresh entram numa fila em vez de disparar refreshes duplicados: uma única chamada resolve todas elas, com sucesso ou falha propagados juntos.",
    "Um middleware de autorização distingue os papéis Admin, Autor e Leitor — só quem tem permissão de autoria acessa criação, edição e o formatador com IA.",
  ],
};

export const AI_FEATURE = {
  icon: Sparkles,
  title: "Escrever fica mais fácil com um empurrão da IA",
  description:
    "Ao escrever um estudo, o autor pode colar um rascunho bruto e pedir pra IA organizar: a Groq recebe um prompt específico pedindo HTML limpo, restrito às tags que o editor de texto entende, corrigindo ortografia e clareza sem mudar o sentido do texto. O resultado entra direto no editor, pronto pra publicar.",
};

export const MEDIA_FEATURE = {
  icon: BookOpenCheck,
  title: "Leitura em primeiro lugar",
  description:
    "A listagem carrega os estudos aos poucos conforme o usuário rola a tela (scroll infinito), com busca e filtro por categoria já aplicados no que já foi carregado. Cada estudo ganha uma URL própria e legível, gerada a partir do título, e o tempo de leitura é calculado automaticamente a partir do tamanho do texto.",
};
