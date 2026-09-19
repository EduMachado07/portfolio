import {
  Ban,
  Bot,
  Calendar,
  MessagesSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import workflowImg from "@/assets/SmartEmailAgent/exampleN8N.png";
import telegramImg from "@/assets/SmartEmailAgent/exampleTelegram.png";
import calendarImg from "@/assets/SmartEmailAgent/exampleCalendar.png";

export const project = GithubProjects.find((item) => item.slug === "smart-email-agent")!;

export const HERO_IMAGE = workflowImg;

export const QUOTE =
  "Cansei de abrir a caixa de entrada só pra decidir o que fazer com cada e-mail. Quis ver até onde dava pra automatizar essa triagem de verdade — não só filtrar por remetente, mas fazer uma IA ler o conteúdo e decidir a ação certa.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Automação",
    items: ["n8n", "Docker"],
  },
  {
    label: "Integrações",
    items: ["Groq API (LLM)", "Gmail API", "Google Calendar API", "Telegram Bot API"],
  },
];

export interface IHighlightCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HIGHLIGHTS: IHighlightCard[] = [
  {
    icon: Workflow,
    title: "Orquestração 100% visual",
    description:
      "Todo o fluxo roda no n8n, self-hosted via Docker — sem servidor próprio pra manter, só os nós conectados: gatilho, filtro, chamada de IA e as ações finais.",
  },
  {
    icon: Bot,
    title: "Quem decide é a IA",
    description:
      "Cada e-mail novo é enviado pra Groq (Llama 3.3 70B), que devolve um resumo e a ação a tomar: responder, agendar, notificar ou deletar — sem regras fixas de palavra-chave.",
  },
  {
    icon: Ban,
    title: "Sem processar duas vezes",
    description:
      "Antes de classificar, o fluxo filtra e-mails que já têm a etiqueta de processado; depois de decidir, marca o e-mail — garantindo que cada mensagem passe pela IA uma única vez.",
  },
  {
    icon: Calendar,
    title: "Ação de verdade, não só aviso",
    description:
      "Dependendo da decisão da IA, o fluxo cria o evento direto no Google Calendar ou dispara um aviso no Telegram — a automação termina com algo feito, não só um alerta.",
  },
];

export const FLOW_STEPS: { step: string; description: string }[] = [
  {
    step: "1. Gatilho agendado",
    description: "Todo dia às 7h, o fluxo acorda sozinho (Schedule Trigger) e dispara a rotina.",
  },
  {
    step: "2. Busca os e-mails",
    description: "Consulta as 10 mensagens mais recentes da caixa de entrada via Gmail API.",
  },
  {
    step: "3. Ignora o que já viu",
    description: "Remove da lista qualquer e-mail que já tenha a etiqueta de processado.",
  },
  {
    step: "4. Pergunta pra IA",
    description: "Envia assunto, remetente e trecho do corpo pra Groq, pedindo resumo e ação.",
  },
  {
    step: "5. Age e marca",
    description: "Executa a ação decidida (notificar, agendar, responder ou deletar) e etiqueta o e-mail como processado.",
  },
];

export const RESULTS_GALLERY = {
  telegram: {
    image: telegramImg,
    alt: "Notificações do agente chegando no Telegram: e-mail importante, e-mail que precisa de resposta e evento marcado",
  },
  calendar: {
    image: calendarImg,
    alt: "Evento criado automaticamente no Google Calendar a partir de um e-mail de convite para entrevista",
  },
};

export const NOTIFY_ICON = MessagesSquare;
