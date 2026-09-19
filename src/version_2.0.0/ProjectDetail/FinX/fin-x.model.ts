import {
  EyeOff,
  LineChart,
  ServerOff,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import screenshotsImg from "@/assets/FinX/screenshots_mosaic.png";
import processImg from "@/assets/FinX/process.png";
import foldersImg from "@/assets/FinX/folders.png";
import categoriesImg from "@/assets/FinX/categorys.png";

export const project = GithubProjects.find((item) => item.slug === "fin-x")!;

export const HERO_IMAGE = screenshotsImg;

export const QUOTE =
  "Queria um app de finanças sem fricção: abrir e já lançar um gasto, sem criar conta, sem esperar um backend responder. Foi um exercício de simplicidade — decidir o que NÃO construir (login, servidor, banco de dados) pra entregar rápido o que realmente importava.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Stack",
    items: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "Zustand",
      "React Hook Form + Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Framer Motion",
      "date-fns",
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
    icon: ServerOff,
    title: "Sem servidor, sem conta",
    description:
      "Todos os dados ficam no localStorage do navegador — sem backend, sem login, sem espera. Abriu o app, já dá pra lançar uma transação.",
  },
  {
    icon: Wallet,
    title: "Máscara de moeda feita à mão",
    description:
      "O campo de valor formata em Real enquanto o usuário digita e converte de volta pra número no envio — sem biblioteca de máscara, só um formatador próprio.",
  },
  {
    icon: LineChart,
    title: "Gráficos recalculados na hora",
    description:
      "Cada ação (adicionar, remover, limpar) recalcula na hora os quatro recortes usados nos gráficos — mensal, semanal, do mês atual e por categoria — prontos pra renderizar sem lógica extra na tela.",
  },
  {
    icon: EyeOff,
    title: "Privacidade de um clique",
    description:
      "Um ícone de olho no cabeçalho esconde o saldo total na hora, pra quem quiser dar uma olhada no app sem expor o número pra quem está por perto.",
  },
];

export const ARCHITECTURE = {
  image: foldersImg,
  imageAlt: "Estrutura de pastas do projeto: assets, components, context, lib e routes",
  title: "Um estado só, sem boilerplate",
  description:
    "Todo o estado da aplicação vive num único hook Zustand — transações, receitas, despesas e os quatro conjuntos de dados já prontos pra cada gráfico — sem middleware de persistência: cada ação escreve direto no localStorage. É uma store enxuta de propósito, fácil de ler de cima a baixo, do tamanho que o projeto pede.",
};

export const CHARTS = {
  image: categoriesImg,
  imageAlt: "Gráfico de transações de julho agrupadas por categoria",
  title: "Recharts por trás dos números",
  description:
    "Os gráficos de visão anual, semanal e por categoria usam Recharts (via o wrapper de charts do shadcn/ui) em três formatos — linha, barra e radial — todos alimentados pelos dados já agregados na store, sem processamento extra no componente de tela.",
};

export const PROCESS_IMAGE = processImg;
