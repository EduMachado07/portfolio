import {
  FileText,
  Network,
  NotebookPen,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";

export const project = GithubProjects.find(
  (item) => item.slug === "recommendation-system",
)!;

export const QUOTE =
  "Sempre quis entender sistemas de recomendação além do tutorial de cosine similarity. Esse projeto é o meu mergulho nisso: documentei a arquitetura completa de um recomendador híbrido de filmes, dos dados reais do MovieLens até um serviço em produção, antes de escrever a primeira linha de código — pra implementar com um plano sólido, não testando na sorte.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Planejado",
    items: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "scikit-surprise",
      "PyTorch",
      "sentence-transformers",
      "Faiss",
      "PostgreSQL",
      "Redis",
      "Celery",
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
    icon: FileText,
    title: "Content-based bem fundamentado",
    description:
      "TF-IDF nos metadados do TMDB e embeddings via sentence-transformers pra resolver o cold start de usuários novos.",
  },
  {
    icon: Network,
    title: "Colaborativo em três abordagens",
    description:
      "Da memória (KNN) ao SVD e ALS, até redes neurais (NCF) — pra capturar padrões que o conteúdo sozinho não pega.",
  },
  {
    icon: SlidersHorizontal,
    title: "Peso adaptativo entre os dois mundos",
    description:
      "Um parâmetro α ajusta dinamicamente quanto pesa conteúdo vs. colaborativo, conforme o histórico do usuário cresce.",
  },
  {
    icon: NotebookPen,
    title: "Arquitetura antes do código",
    description:
      "Hoje o repositório é o documento de planejamento completo — a implementação é a próxima etapa.",
  },
];
