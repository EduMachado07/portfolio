import {
  Accessibility,
  BadgeCheck,
  Bot,
  ClipboardList,
  Cloud,
  Cpu,
  DatabaseZap,
  FileCode2,
  GitPullRequest,
  History,
  KeyRound,
  MapPin,
  Nfc,
  Palette,
  QrCode,
  Rocket,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Timer,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import type { INavGroup } from "@/components/section-nav";

import imgInicio from "@/assets/Passe/t03-inicio.webp";
import imgAutorizacoes from "@/assets/Passe/t04-autorizacoes.webp";
import imgLeitor from "@/assets/Passe/t07-leitor.webp";
import imgValidando from "@/assets/Passe/t09-validando.webp";
import imgAutorizado from "@/assets/Passe/t10-autorizado.webp";
import imgNegadoAmbar from "@/assets/Passe/t11-negado-ambar.webp";
import imgNegadoVermelho from "@/assets/Passe/t11-negado-vermelho.webp";
import imgHistorico from "@/assets/Passe/t12-historico.webp";
import imgAdmin from "@/assets/Passe/t14-admin.webp";
import imgLocais from "@/assets/Passe/t17-locais.webp";
import imgNovaAutorizacao from "@/assets/Passe/t24-nova-autorizacao.webp";
import imgHistoricoAdmin from "@/assets/Passe/historico-admin.webp";
import imgSwaggerVisao from "@/assets/Passe/swagger-visao-geral.webp";
import imgSwaggerQr from "@/assets/Passe/swagger-validar-qr.webp";
import qrApk from "@/assets/Passe/qr-apk.svg";
import qrExpoGo from "@/assets/Passe/qr-expo-go.svg";

export const project = GithubProjects.find((item) => item.slug === "passe")!;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_GROUPS: INavGroup[] = [
  {
    id: "visao-geral",
    label: "Visão geral",
    sections: [
      { id: "desafio", label: "O desafio" },
      { id: "como-funciona", label: "Como funciona" },
    ],
  },
  {
    id: "produto",
    label: "Produto",
    sections: [
      { id: "requisitos", label: "Requisitos" },
      { id: "decisoes", label: "Decisões" },
      { id: "design", label: "Design" },
    ],
  },
  {
    id: "engenharia",
    label: "Engenharia",
    sections: [
      { id: "arquitetura", label: "Arquitetura" },
      { id: "backend", label: "Backend" },
      { id: "app", label: "App mobile" },
      { id: "iot", label: "Terminal IoT" },
      { id: "infra", label: "Infra e CI/CD" },
      { id: "fluxo", label: "Uma tentativa de acesso" },
    ],
  },
  {
    id: "processo",
    label: "Processo",
    sections: [
      { id: "forma-de-trabalho", label: "Forma de trabalho" },
      { id: "equipe", label: "Equipe" },
    ],
  },
];

export const SECTION_IDS = NAV_GROUPS.flatMap((group) => group.sections.map((section) => section.id));

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const LINKS = {
  repo: project.repoUrl,
  swagger: "https://api-acesso.blackfield-72312729.chilecentral.azurecontainerapps.io/docs",
  figma: "https://www.figma.com/design/jUGhuGVhlFvUe2cZlxgdja/Passe",
  apk: "https://drive.google.com/file/d/1M1OytRAJl5BhUIH2k1wB6q3Zz4Szizgz/view?usp=sharing",
  expoGo: "https://expo.dev/go",
};

export interface IAppDownload {
  title: string;
  platform: string;
  description: string;
  qr: string;
  href: string;
  cta: string;
}

export const APP_DOWNLOADS: IAppDownload[] = [
  {
    title: "App para Android (.apk)",
    platform: "Android",
    description: "Aponte a câmera do celular para o QR Code e baixe o .apk do Passe (versão 0.1.0, 117 MB). O Android avisa que o app não vem da Play Store: permita a instalação.",
    qr: qrApk,
    href: LINKS.apk,
    cta: "Baixar o .apk",
  },
  {
    title: "Expo Go (Android e iPhone)",
    platform: "Android e iOS",
    description: "O .apk não instala no iPhone. No iPhone, instale o Expo Go pela App Store e abra o projeto com o Expo Go, como explica o README do app.",
    qr: qrExpoGo,
    href: LINKS.expoGo,
    cta: "Baixar o Expo Go",
  },
];

export const HERO_STATS: { value: string; label: string }[] = [
  { value: "3", label: "sistemas integrados: API, app e terminal" },
  { value: "31", label: "telas desenhadas no Figma" },
  { value: "1.900+", label: "testes automatizados na API e no app" },
  { value: "10 s", label: "para o QR Code da catraca mudar" },
];

/* ------------------------------------------------------------------ */
/* Visão geral                                                         */
/* ------------------------------------------------------------------ */

export const CHALLENGE = {
  paragraphs: [
    "O desafio da ABP 2026-2 (Aprendizagem Baseada em Projetos) da Fatec Jacareí foi construir, de ponta a ponta, um controle de acesso para edifícios e condomínios em que a pessoa passa pela catraca sem cartão e sem porteiro.",
    "Ela lê com o celular o QR Code que aparece no terminal, ou aproxima uma tag NFC, e o sistema decide na hora se libera ou nega. Toda tentativa, aprovada ou negada, fica registrada.",
  ],
  parts: [
    {
      icon: Cpu,
      title: "Terminal de acesso",
      description: "ESP32 instalado na catraca: mostra o QR Code, lê tags NFC e abre ou nega a passagem.",
    },
    {
      icon: Smartphone,
      title: "App mobile",
      description: "A pessoa lê o QR e consulta as próprias autorizações; o administrador cadastra tudo.",
    },
    {
      icon: DatabaseZap,
      title: "API",
      description: "Gera os QR Codes, valida cada tentativa, manda a catraca abrir e registra o evento.",
    },
  ],
};

export const HOW_IT_WORKS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: QrCode,
    title: "O terminal mostra um QR novo",
    description: "A API gera um QR Code de uso único a cada 10 segundos e o terminal exibe no display.",
  },
  {
    icon: ScanLine,
    title: "A pessoa lê com o app",
    description: "O Passe envia o conteúdo do QR e a posição do celular para a API.",
  },
  {
    icon: ShieldCheck,
    title: "A API valida",
    description:
      "São 11 verificações em ordem: credencial, autorização, período, horário, usos restantes e distância de até 100 m do terminal.",
  },
  {
    icon: BadgeCheck,
    title: "A catraca responde",
    description: "Abre, ou mostra o motivo da negação. Cada tentativa vira exatamente um evento no histórico.",
  },
];

export const NFC_NOTE =
  "Sem o celular à mão? A pessoa aproxima uma tag NFC cadastrada no leitor do terminal e a resposta chega em até 2 segundos.";

/* ------------------------------------------------------------------ */
/* Produto                                                             */
/* ------------------------------------------------------------------ */

export interface IRequirementGroup {
  icon: LucideIcon;
  title: string;
  items: { code: string; text: string }[];
}

export const REQUIREMENT_GROUPS: IRequirementGroup[] = [
  {
    icon: ClipboardList,
    title: "Cadastros e autorizações",
    items: [
      { code: "RF01", text: "Usuários com perfis administrador, condômino e visitante; desativados, nunca excluídos" },
      { code: "RF02", text: "Edifícios, pontos de acesso (portaria, porta, catraca) e terminais, com coordenadas" },
      { code: "RF03", text: "Autorização com pessoa, local, datas, horário, número de usos e situação" },
      { code: "RF04", text: "Consulta de autorizações por pessoa, local, situação e período" },
      { code: "RF05", text: "Cancelamento com efeito imediato" },
    ],
  },
  {
    icon: History,
    title: "Histórico e conta",
    items: [
      { code: "RF06", text: "Histórico de tentativas aprovadas e negadas, com filtros" },
      { code: "RF07", text: "Login seguro, permissões por perfil e limite de tentativas" },
      { code: "RF08", text: "Cada usuário vê somente as próprias autorizações" },
    ],
  },
  {
    icon: Smartphone,
    title: "App",
    items: [
      { code: "RF09", text: "Leitura do QR Code da catraca pela câmera do celular" },
      { code: "RF10", text: "Cadastro de tags NFC e vínculo com os usuários" },
    ],
  },
  {
    icon: Cpu,
    title: "Terminal e validação",
    items: [
      { code: "RF11", text: "O terminal se identifica à API e informa posição e estado" },
      { code: "RF12", text: "QR Code gerado pela API, renovado a cada 10 s e de uso único" },
      { code: "RF13", text: "Validação do QR: autenticidade, validade, local, autorização, usos e 100 m" },
      { code: "RF14", text: "Validação por NFC com resposta em até 2 segundos" },
      { code: "RF15", text: "Liberação: a API manda o terminal abrir" },
      { code: "RF16", text: "Negação: a API manda o terminal negar, com o motivo" },
      { code: "RF17", text: "Exatamente um evento por tentativa, aprovada ou negada" },
    ],
  },
];

export const NON_FUNCTIONAL = [
  "Senhas e chaves só como hash",
  "Segredos fora do repositório",
  "Terminal autenticado por chave",
  "Eventos offline sem perda nem duplicação",
  "PostgreSQL em nuvem com migrações",
  "Código em camadas, com TDD",
  "Docker",
  "CI com build, lint e testes",
  "Deploy só depois do CI verde",
  "Acessível para pessoas idosas",
];

export interface IDecision {
  icon: LucideIcon;
  decision: string;
  reason: string;
}

export const DECISIONS: IDecision[] = [
  {
    icon: FileCode2,
    decision: "O contrato da API é lei",
    reason:
      "Antes do código, escrevemos o OpenAPI com cada rota, campo e código de motivo. API, app e terminal foram feitos em paralelo contra ele, e qualquer mudança passa por acordo da equipe.",
  },
  {
    icon: Timer,
    decision: "QR de uso único, trocado a cada 10 s",
    reason:
      "Um print ou uma foto do QR não serve para entrar depois. O código vale 15 s, o que dá margem para a leitura, e é consumido na primeira aprovação.",
  },
  {
    icon: MapPin,
    decision: "Só valida quem está a até 100 m",
    reason:
      "O app envia a posição do celular junto com o QR. Assim, uma foto do QR mandada para alguém longe da catraca não abre a passagem.",
  },
  {
    icon: ShieldCheck,
    decision: "Negar é um resultado, não um erro",
    reason:
      "Cada negação tem um código do contrato (por exemplo FORA_DO_PERIODO ou USOS_ESGOTADOS), que o app e o terminal mostram para a pessoa, e gera um evento no histórico como qualquer aprovação.",
  },
  {
    icon: DatabaseZap,
    decision: "Aprovar acontece numa transação só",
    reason:
      "Consumir o QR, gastar um uso, gravar o evento e criar o comando de abrir vão juntos. Se o evento não puder ser gravado, nada é consumido.",
  },
  {
    icon: WifiOff,
    decision: "Terminal pergunta, não escuta",
    reason:
      "O ESP32 consulta a API por HTTP e busca os comandos a cada segundo. Ele não precisa aceitar conexões de fora e funciona em qualquer Wi-Fi, até no hotspot do celular.",
  },
  {
    icon: Cloud,
    decision: "Deploy com custo zero",
    reason:
      "A equipe decidiu não gastar. A API roda no Azure Container Apps pela conta de estudante, a imagem fica no GitHub Container Registry e o banco no Neon.",
  },
];

export const DESIGN = {
  direction:
    "O app segue o Material 3 Expressive com tema escuro como padrão; o tema claro fica como opção em Minha conta.",
  reasons: [
    {
      icon: Accessibility,
      title: "Pessoas idosas",
      description: "Em testes com idosos, seguir os padrões da plataforma foi a regra que mais pesou.",
    },
    {
      icon: Timer,
      title: "Velocidade",
      description: "Nos testes do Google, o M3 Expressive deixou tarefas 20% mais rápidas.",
    },
    {
      icon: KeyRound,
      title: "Referências",
      description: "Kisi e Apple Wallet resolvem o acesso com uma tela clara e um único gesto.",
    },
  ],
  scales: [
    {
      title: "Escala da pessoa",
      detail: "Texto de 18 e botões de 60",
      description: "Usada em pé e com pressa, muitas vezes por pessoas idosas.",
    },
    {
      title: "Escala do administrador",
      detail: "Texto de 16 e botões de 48",
      description: "Usada sentado, com formulários e listas.",
    },
  ],
  palette: [
    { name: "Fundo", hex: "#121318" },
    { name: "Primária", hex: "#B5C4FF" },
    { name: "Abrir catraca", hex: "#FFD95C" },
    { name: "Autorizado", hex: "#17773F" },
    { name: "Tente de novo", hex: "#F5C518" },
    { name: "Negado", hex: "#C1272D" },
  ],
  personScreens: [
    { img: imgInicio, label: "Início" },
    { img: imgLeitor, label: "Leitor de QR Code" },
    { img: imgValidando, label: "Validando o acesso" },
    { img: imgAutorizado, label: "Acesso autorizado" },
    { img: imgNegadoAmbar, label: "Negado: tente de novo" },
    { img: imgNegadoVermelho, label: "Negado: procure a administração" },
    { img: imgAutorizacoes, label: "Minhas autorizações" },
    { img: imgHistorico, label: "Meu histórico" },
  ],
  adminScreens: [
    { img: imgAdmin, label: "Início do administrador" },
    { img: imgLocais, label: "Locais e terminais" },
    { img: imgNovaAutorizacao, label: "Nova autorização" },
    { img: imgHistoricoAdmin, label: "Histórico de acessos" },
  ],
  author: "Rafael Medeiros",
};

/* ------------------------------------------------------------------ */
/* Engenharia                                                          */
/* ------------------------------------------------------------------ */

export interface IEngineeringPart {
  id: string;
  icon: LucideIcon;
  title: string;
  owner: string;
  summary: string;
  points: string[];
  stack: string[];
}

export const BACKEND: IEngineeringPart = {
  id: "backend",
  icon: DatabaseZap,
  title: "Backend",
  owner: "Eduardo Silva Machado",
  summary:
    "API REST em Clean Architecture, feita com TDD em 20 etapas (B01 a B20), cada uma num pull request próprio.",
  points: [
    "Camadas com dependência para dentro: entidades → casos de uso → portas → infraestrutura → composição. O relógio é injetado, então regras de horário são testadas sem esperar o tempo passar.",
    "As 11 verificações do QR rodam em ordem; a primeira que falha define o motivo da negação.",
    "Segurança: senhas e chaves só como hash, limite de requisições por rota, helmet, CORS fechado e logs que escondem token e chave do terminal.",
    "Documentação viva: o Swagger é gerado do mesmo openapi.yaml que o app e o terminal seguem.",
  ],
  stack: ["Node.js 22", "TypeScript", "Express 5", "Prisma", "PostgreSQL", "Zod", "JWT", "Pino", "Vitest", "Supertest", "Docker"],
};

export const SWAGGER_SHOTS = [
  { img: imgSwaggerVisao, alt: "Swagger da API com os grupos de rotas: Health, Auth, Users, Locations, Terminals, NfcTags e Terminal" },
  { img: imgSwaggerQr, alt: "Rota POST /access/qr/validate aberta no Swagger, com as 11 verificações e o exemplo de corpo" },
];

export const APP: IEngineeringPart = {
  id: "app",
  icon: Smartphone,
  title: "App mobile",
  owner: "Pedro Henrique",
  summary:
    "App em React Native com Expo para os dois públicos: quem passa pela catraca e o administrador. Fala só com a API, nunca com o terminal.",
  points: [
    "Arquitetura Page → Model → View → Service: a tela só desenha, o Model guarda estado e regras, e o serviço entra por interface. Assim o app foi testado e usado antes de cada rota da API existir.",
    "O fluxo da pessoa (login, início, leitor, resultado) veio antes dos cadastros do administrador, porque era ele que a Review 2 cobrava.",
    "Auditoria de acessibilidade pensada em pessoas acima de 60 anos: contraste, tamanho de toque e textos grandes.",
    "Mais de 1.000 testes com Jest, Testing Library e MSW, e um .apk para Android publicado.",
  ],
  stack: ["React Native", "Expo", "Expo Router", "TypeScript", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Jest", "MSW"],
};

export const IOT: IEngineeringPart = {
  id: "iot",
  icon: Cpu,
  title: "Terminal IoT",
  owner: "Matheus Sales",
  summary:
    "O terminal da catraca é um ESP32 que mostra o QR Code, lê tags NFC e move um servo que faz o papel da catraca.",
  points: [
    "Ao ligar, fecha a catraca, avisa a API que está online (heartbeat) e passa a mostrar o QR trocado a cada 10 s.",
    "Cada pedido leva o id e a chave do terminal; uma chave errada repetidas vezes bloqueia o IP por um minuto.",
    "Resultado na hora: tela de liberado ou negado com o motivo, bipes diferentes e a catraca aberta por 5 s.",
    "Guarda o último comando visto na memória flash, para não abrir de novo depois de reiniciar, e tem um modo de bancada que simula tudo sem backend.",
  ],
  stack: ["ESP32", "C++", "PlatformIO", "Display OLED", "NFC RC522", "GPS NEO-6M", "Servo", "Buzzer e LEDs"],
};

export const INFRA = {
  summary:
    "Cada parte tem a própria pipeline no GitHub Actions, e nada chega ao develop ou ao main com CI vermelho.",
  pipeline: [
    { icon: GitPullRequest, title: "Pull request", description: "Uma etapa por branch, revisada antes do merge." },
    { icon: BadgeCheck, title: "CI", description: "Build, lint, testes e cobertura; o ruleset bloqueia o merge se falhar." },
    { icon: Rocket, title: "Imagem", description: "O CD gera a imagem Docker e publica no GHCR." },
    { icon: Cloud, title: "Homologação", description: "Azure Container Apps sobe a nova versão; o banco fica no Neon." },
  ],
  workflows: ["ci.yml (API)", "cd.yml (deploy)", "mobile-ci.yml", "terminal-ci.yml"],
};

export interface ISequenceStep {
  from: string;
  to: string;
  message: string;
  detail: string;
}

export const ACCESS_SEQUENCE: ISequenceStep[] = [
  { from: "Terminal", to: "API", message: "POST /terminal/qr", detail: "A cada 10 s o terminal pede um QR novo e mostra no display." },
  { from: "Pessoa", to: "App", message: "Lê o QR", detail: "A câmera lê o QR e o app pega a posição do celular." },
  { from: "App", to: "API", message: "POST /access/qr/validate", detail: "Envia o QR, a latitude e a longitude, com o token da pessoa." },
  { from: "API", to: "Banco", message: "11 verificações + transação", detail: "Consome o QR e um uso, grava o evento AUTORIZADO e cria o comando ABRIR." },
  { from: "Terminal", to: "API", message: "GET /terminal/commands", detail: "No próximo segundo, o terminal recebe o comando ABRIR." },
  { from: "Terminal", to: "API", message: "Abre e confirma", detail: "O servo abre por 5 s e o terminal confirma que executou o comando." },
  { from: "App", to: "Pessoa", message: "Acesso autorizado", detail: "A tela verde mostra quantas entradas ainda restam." },
];

/* ------------------------------------------------------------------ */
/* Processo                                                            */
/* ------------------------------------------------------------------ */

export const WORKFLOW: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ClipboardList,
    title: "Scrum com três sprints",
    description: "Cada sprint termina numa Review com o professor. O quadro do Trello guarda o backlog e o andamento.",
  },
  {
    icon: GitPullRequest,
    title: "Uma etapa, um PR",
    description: "O trabalho foi quebrado em etapas com ID (B01 a B20 na API, F01 a F15 no app). Cada uma tem branch, PR e commits com o ID.",
  },
  {
    icon: ShieldCheck,
    title: "TDD e testes como regra",
    description: "Teste primeiro, código depois. O desafio não aceita o projeto sem testes automatizados, e a cobertura nunca pode cair.",
  },
  {
    icon: Bot,
    title: "Documentação feita para IA",
    description: "Cada parte tem uma pasta de contexto (arquitetura, contrato, TDD e etapas) para os assistentes de IA, e um agente revisor lê cada PR antes do colega.",
  },
];

export const MILESTONES: { date: string; title: string; description: string }[] = [
  { date: "21/10", title: "Review 1", description: "Esqueleto andante: projeto, banco, CI e autenticação." },
  { date: "11/11", title: "Review 2", description: "Acesso por QR Code de ponta a ponta: terminal, app e API." },
  { date: "17/11", title: "API no ar", description: "Primeiro deploy verde no Azure, com CD a cada merge." },
];

export interface ITeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  delivered: string;
}

export const TEAM: ITeamMember[] = [
  {
    name: "Eduardo Silva Machado",
    role: "Backend, Scrum e CI/CD",
    icon: DatabaseZap,
    delivered: "API, banco, contrato OpenAPI, pipelines, deploy, documentação e organização das sprints.",
  },
  {
    name: "Pedro Henrique",
    role: "App mobile",
    icon: Smartphone,
    delivered: "App em React Native com Expo, do login ao leitor de QR, cadastros do administrador e acessibilidade.",
  },
  {
    name: "Matheus Sales",
    role: "Terminal IoT",
    icon: Nfc,
    delivered: "Montagem do hardware e firmware do ESP32: QR Code, leitor NFC, catraca e sinais.",
  },
  {
    name: "Rafael Medeiros",
    role: "Design",
    icon: Palette,
    delivered: "As 31 telas, os componentes e o protótipo no Figma, além dos diagramas UML.",
  },
];


