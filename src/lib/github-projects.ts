import img_finX from "@/assets/FinX/img_logo.png";
import img_etecJobs from "@/assets/img_EtecJobs.png";
import img_fatec_1sem from "@/assets/Fatec/1sem_gradeHorarios/img_logo.png";
import img_estudosDpi from "@/assets/img_estudosDpi.png";
import img_devflowCrm from "@/assets/DevflowCrm/logo.png";
import img_smartAgent from "@/assets/SmartEmailAgent/img_logo.png";

export type ProjectSystemType =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Mobile"
  | "Automação"
  | "Documentação/Estudo";

export type ProjectPurpose = "Pessoal" | "Faculdade" | "Cliente";

export type ProjectStatus = "Concluído" | "Em andamento" | "Estudo / Planejamento";

export interface IGithubProject {
  slug: string;
  title: string;
  description: string;
  img?: string;
  repoUrl: string;
  repoBackendUrl?: string;
  liveUrl?: string;
  technologies: string[];
  systemType: ProjectSystemType;
  purpose: ProjectPurpose;
  isTemplate?: boolean;
  status: ProjectStatus;
  createdAt: string;
  year: number;
  highlights: string[];
}

export const GithubProjects: IGithubProject[] = [
  {
    slug: "fin-x",
    title: "Fin X",
    description:
      "Sistema web de gestão financeira pessoal, com registro de receitas e despesas, categorização de transações e gráficos de análise semanal, mensal e anual. Os dados ficam salvos localmente no navegador, sem necessidade de criar conta.",
    img: img_finX,
    repoUrl: "https://github.com/EduMachado07/FinX",
    liveUrl: "https://fin-x-three.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "date-fns",
    ],
    systemType: "Frontend",
    purpose: "Pessoal",
    status: "Concluído",
    createdAt: "2025-01-17",
    year: 2025,
    highlights: [
      "Controle de receitas e despesas",
      "Categorização de transações",
      "Gráficos semanais, mensais e anuais",
      "Dados salvos em localStorage (sem conta)",
    ],
  },
  {
    slug: "etec-jobs",
    title: "Etec Jobs",
    description:
      "Aplicativo mobile criado durante um hackathon da Etec São José dos Campos para consultar vagas de emprego, estágio e jovem aprendiz a partir de uma API fornecida pelas empresas parceiras.",
    img: img_etecJobs,
    repoUrl: "https://github.com/EduMachado07/etecJobs",
    liveUrl:
      "https://drive.google.com/file/d/1b6FxTJDU-GvtZ0CRqPeFmiGuM87XTGCm/view?pli=1",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "Axios",
      "expo-sqlite",
      "React Navigation",
      "@expo/vector-icons",
      "React Native Animatable",
    ],
    systemType: "Mobile",
    purpose: "Faculdade",
    status: "Concluído",
    createdAt: "2025-06-29",
    year: 2025,
    highlights: [
      "Paginação de vagas",
      "Busca e filtro por tipo de vaga",
      "Tema claro/escuro",
      "Pull-to-refresh",
      "Favoritar vagas",
      "Compartilhamento de vaga",
    ],
  },
  {
    slug: "fatec-1sem",
    title: "Grade de Horários - Fatec",
    description:
      "Sistema web para a comunidade acadêmica consultar horários de aula por curso, turma, ambiente e turno, substituindo os comunicados impressos. Inclui painel administrativo para a secretaria cadastrar e importar horários via CSV.",
    img: img_fatec_1sem,
    repoUrl: "https://github.com/prjDevflow/prj_1sem_client",
    repoBackendUrl: "https://github.com/prjDevflow/prj_1sem_server",
    liveUrl: "https://prj-1sem-client.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    systemType: "Full Stack",
    purpose: "Faculdade",
    status: "Concluído",
    createdAt: "2025-05-19",
    year: 2025,
    highlights: [
      "Importação de horários via CSV",
      "Painel administrativo (CRUD)",
      "Validação de conflitos de horário",
      "Mapa interativo de salas/ambientes",
      "Exportação em PDF",
      "Projeto em equipe de 6 devs, 3 sprints",
    ],
  },
  {
    slug: "devflow",
    title: "DevFlow CRM",
    description:
      "Plataforma de gestão de leads desenvolvida em parceria com a Fatec Jacareí para a 1000 Valle Multimarcas, centralizando em um único painel os leads vindos de vários canais e unidades.",
    img: img_devflowCrm,
    repoUrl: "https://github.com/prjDevflow/prj_3dsm",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    systemType: "Full Stack",
    purpose: "Cliente",
    status: "Concluído",
    createdAt: "2026-03-24",
    year: 2026,
    highlights: [
      "Autenticação JWT com 4 níveis de acesso",
      "+25 endpoints REST",
      "Dashboards operacional e analítico",
      "Filtro temporal (semana/mês/ano/período customizado)",
      "Log de auditoria",
    ],
  },
  {
    slug: "devflow-analytics",
    title: "Devflow Analytics",
    description:
      "Plataforma web para centralizar, visualizar e analisar dados limnológicos e meteorológicos do monitoramento de balanço de carbono em reservatórios de hidrelétricas da Furnas Centrais Elétricas, em parceria com o INPE, UFRJ, UFJF e IIE. Reúne dashboards interativos, tabelas dinâmicas, mapa dos pontos de coleta e gráficos de séries temporais.",
    repoUrl: "https://github.com/prjDevflow/prj_2dsm",
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    systemType: "Full Stack",
    purpose: "Faculdade",
    status: "Concluído",
    createdAt: "2025-09-12",
    year: 2025,
    highlights: [
      "Dashboard com filtros por instituição, reservatório e período",
      "Mapa interativo dos pontos de coleta",
      "Gráficos de séries temporais com agregação por período",
      "Exportação dos dados filtrados em CSV",
      "Projeto em equipe da Fatec (DSM), 219 commits em 3 sprints",
    ],
  },
  {
    slug: "estudos-dpi",
    title: "Estudos DPI",
    description:
      "Sistema web pessoal para reunir estudos bíblicos que antes ficavam espalhados em vários apps, com criação, busca e categorização de estudos em um só lugar.",
    img: img_estudosDpi,
    repoUrl: "https://github.com/EduMachado07/estudos_dpi",
    repoBackendUrl: "https://github.com/EduMachado07/estudos_dpi_server",
    liveUrl: "https://dpi-estudos.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Hook Form",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
      "Groq API",
    ],
    systemType: "Full Stack",
    purpose: "Pessoal",
    status: "Concluído",
    createdAt: "2025-12-18",
    year: 2025,
    highlights: [
      "CRUD de estudos bíblicos com categorias",
      "Busca por título e filtro por categoria",
      "Formatação de texto assistida por IA (Groq)",
      "Autenticação JWT com refresh token em cookie httpOnly",
      "Upload de imagens via Cloudinary",
    ],
  },
  {
    slug: "node-server-template",
    title: "Node Server Template",
    description:
      "Template base de servidor Node.js com Express e TypeScript, estruturado com Clean Architecture, SOLID e DDD (entities, use cases, repositories e providers). Criado como ponto de partida reutilizável para novas APIs.",
    repoUrl: "https://github.com/EduMachado07/node_server_template",
    technologies: ["Node.js", "Express", "TypeScript", "dotenv", "ts-node-dev"],
    systemType: "Backend",
    purpose: "Pessoal",
    isTemplate: true,
    status: "Concluído",
    createdAt: "2025-08-18",
    year: 2025,
    highlights: [
      "Clean Architecture / DDD / SOLID",
      "Camadas separadas (controllers, use cases, repositories, providers)",
      "Testes unitários",
      "Template reutilizável para novas APIs",
    ],
  },
  {
    slug: "smart-email-agent",
    title: "Smart Email Agent",
    description:
      "Sistema de automação que lê, classifica e responde e-mails automaticamente com IA, usando n8n como orquestrador. Classifica cada e-mail em Responder, Agendar, Notificar ou Deletar, cria eventos no Google Calendar e envia notificações via Telegram.",
    img: img_smartAgent,
      repoUrl: "https://github.com/EduMachado07/smart_EmailAgent",
    technologies: [
      "n8n",
      "Docker",
      "Groq API",
      "Gmail API",
      "Google Calendar API",
      "Telegram Bot API",
    ],
    systemType: "Automação",
    purpose: "Pessoal",
    status: "Concluído",
    createdAt: "2026-04-12",
    year: 2026,
    highlights: [
      "Classificação automática de e-mails por IA (responder/agendar/notificar/deletar)",
      "Criação automática de evento na agenda",
      "Notificação via Telegram",
      "Execução agendada (cron)",
      "Rotulagem de e-mails processados (evita duplicidade)",
    ],
  },
  {
    slug: "recommendation-system",
    title: "Sistema de Recomendação Híbrido",
    description:
      "Estudo e planejamento de um sistema de recomendação híbrido de filmes (baseado em conteúdo + filtragem colaborativa), usando dados reais do MovieLens e metadados do TMDB. Documenta a arquitetura em fases, da prototipagem a um serviço em produção.",
    repoUrl: "https://github.com/EduMachado07/recommendation_system",
    technologies: [
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
    systemType: "Documentação/Estudo",
    purpose: "Pessoal",
    isTemplate: true,
    status: "Estudo / Planejamento",
    createdAt: "2026-05-12",
    year: 2026,
    highlights: [
      "Recomendação baseada em conteúdo (TF-IDF, embeddings)",
      "Filtragem colaborativa (SVD, ALS, NCF)",
      "Combinação híbrida com peso adaptativo",
      "Repositório é documentação de arquitetura — sem código implementado ainda",
    ],
  },
];
