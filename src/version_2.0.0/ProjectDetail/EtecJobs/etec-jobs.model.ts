import {
  Database,
  Moon,
  Rocket,
  Share2,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import wallImg from "@/assets/EtecJobs/wall.png";

export const project = GithubProjects.find((item) => item.slug === "etec-jobs")!;

export const HERO_IMAGE = wallImg;

export const QUOTE =
  "Foi meu primeiro projeto mobile de verdade: time de três pessoas, prazo de hackathon e uma API que a gente só conheceu no dia. Apresentamos o protótipo pra todos os grupos do evento e fomos escolhidos como equipe vencedora — o que só aumentou a régua, porque vieram novos requisitos pra implementar antes da entrega final.";

export const WINNER_BADGE = "Vencedor do hackathon";
export const WINNER_ICON = Trophy;

export const TIMELINE: { step: string; description: string }[] = [
  {
    step: "1. Desafio",
    description:
      "Recebemos os requisitos do hackathon e a API com as vagas, fornecida pelos professores do desafio.",
  },
  {
    step: "2. Protótipo e apresentação",
    description:
      "Em uma semana, construímos a primeira versão funcional e apresentamos o app pra todos os grupos participantes.",
  },
  {
    step: "3. Equipe vencedora",
    description:
      "Fomos escolhidos como a equipe vencedora do desafio, entre os grupos que apresentaram.",
  },
  {
    step: "4. Novos requisitos",
    description:
      "A vitória veio com mais responsabilidade: recebemos sugestões e novas demandas dos avaliadores pra evoluir o app.",
  },
  {
    step: "5. Ajustes e entrega final",
    description:
      "Implementamos os ajustes pedidos e geramos a build final em .apk, disponibilizada para instalação na escola.",
  },
];

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "App",
    items: [
      "React Native",
      "Expo",
      "JavaScript",
      "React Navigation",
      "Axios",
    ],
  },
  {
    label: "Dispositivo",
    items: [
      "expo-sqlite",
      "React Native Animatable",
      "@expo/vector-icons",
      "Context API",
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
    icon: Database,
    title: "Favoritos que funcionam offline",
    description:
      "Sem backend próprio: as vagas favoritadas ficam num banco SQLite embarcado no próprio celular (expo-sqlite), com um mini CRUD de salvar, listar e remover direto no dispositivo.",
  },
  {
    icon: Moon,
    title: "Tema claro e escuro em tempo real",
    description:
      "Um switch no cabeçalho alterna o tema em toda a navegação — lista, cards, modais e o botão flutuante — sem recarregar a tela, controlado por um Context global.",
  },
  {
    icon: Rocket,
    title: "Prototipado sob o relógio do hackathon",
    description:
      "App inteiro construído e publicado direto no Expo Snack durante as horas do evento — da tela de splash ao build final em .apk — sem abrir mão de navegação, paginação e persistência local.",
  },
  {
    icon: Share2,
    title: "Cards animados e fluxo de favoritar",
    description:
      "Cada vaga entra na lista com uma animação de fade-in-up, abre um modal com os detalhes completos e confirma visualmente quando é favoritada ou compartilhada.",
  },
];

export const ARCHITECTURE = {
  title: "Como o app é organizado",
  description:
    "Um único Stack Navigator liga quatro telas — Splash, lista de vagas, Favoritos e Sobre — todas dentro de um único Context Provider que guarda o tema, a paginação e os favoritos em memória. A tela principal de vagas concentra sua própria pasta (busca, cards, botão de atalhos), com os estilos de cada área isolados em módulos próprios. Uma arquitetura enxuta, pensada pra três pessoas conseguirem trabalhar em paralelo dentro do prazo de um hackathon sem pisar no código umas das outras.",
  points: [
    "Navegação: Splash → Vagas (lista + busca + filtro) → Favoritos / Sobre",
    "Estado global único via Context API (tema, paginação, favoritos)",
    "Paginação e busca por tipo de vaga consumindo a API fornecida no desafio",
    "Persistência local isolada num módulo próprio de acesso ao SQLite",
  ],
};

export const TEAM = {
  icon: Users,
  title: "Um desafio, três desenvolvedores",
  description:
    "Construído em equipe durante um hackathon promovido pela Etec São José dos Campos, com uma API de vagas fornecida pelas empresas parceiras do desafio. A tela “Sobre” do próprio app credita o time e os orientadores — um lembrete de que, além do código, o projeto também foi um exercício de dividir escopo e prazo com outras pessoas.",
};

export const JOB_TYPES = ["Emprego", "Estágio", "Jovem Aprendiz"];
