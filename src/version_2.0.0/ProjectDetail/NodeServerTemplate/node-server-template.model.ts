import {
  Boxes,
  FlaskConical,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";

export const project = GithubProjects.find(
  (item) => item.slug === "node-server-template",
)!;

export const QUOTE =
  "Toda vez que eu começava uma API do zero, repetia a mesma estrutura de pastas e as mesmas decisões de arquitetura. Esse template resolve isso de vez: uma base pronta com Clean Architecture, SOLID e DDD, pra eu — ou qualquer outro dev — clonar e já começar escrevendo regra de negócio, não boilerplate.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Stack",
    items: ["Node.js", "Express", "TypeScript", "dotenv", "ts-node-dev"],
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
    title: "Clean Architecture de verdade",
    description:
      "Domínio isolado de infraestrutura: entidades e regras de negócio não sabem nada sobre Express, banco de dados ou qualquer detalhe externo.",
  },
  {
    icon: Workflow,
    title: "SOLID aplicado, não só citado",
    description:
      "Cada caso de uso depende de abstrações — interfaces de repository e provider — nunca de implementação concreta. Troca o banco ou o serviço de e-mail sem tocar na regra de negócio.",
  },
  {
    icon: FlaskConical,
    title: "Testado desde a base",
    description:
      "Casos de uso com specs unitários, garantindo que a lógica de negócio continue funcionando conforme o projeto cresce em cima do template.",
  },
  {
    icon: ShieldCheck,
    title: "Os detalhes que ninguém lembra de configurar",
    description:
      "Tratamento de erro centralizado, variáveis de ambiente e scripts de dev já prontos — o que normalmente fica pra depois, aqui já vem resolvido.",
  },
];

export const STRUCTURE_TREE = `src/
├── entities/            # regras de negócio puras, sem dependência de framework
├── useCases/
│   └── <caso-de-uso>/
│       ├── controller.ts
│       ├── useCase.ts
│       ├── dto.ts
│       └── useCase.spec.ts
├── repositories/        # contratos de acesso a dados
├── providers/           # integrações externas (e-mail, storage, etc.)
├── app.ts               # configuração do Express e middlewares
├── routes.ts            # mapeamento das rotas para os controllers
└── server.ts            # ponto de entrada da aplicação`;

export const STRUCTURE_LAYERS: { name: string; description: string }[] = [
  {
    name: "entities",
    description: "O coração do domínio — regras de negócio que não mudam se você trocar o Express por outro framework.",
  },
  {
    name: "useCases",
    description: "Um caso de uso por pasta, sempre com controller, DTO e o teste correspondente lado a lado.",
  },
  {
    name: "repositories",
    description: "Contratos de acesso a dados. A implementação concreta (Prisma, TypeORM, o que for) fica isolada atrás da interface.",
  },
  {
    name: "providers",
    description: "Qualquer integração externa — e-mail, upload, fila — entra aqui atrás de uma interface, nunca chamada direto no caso de uso.",
  },
];

export const GETTING_STARTED: { step: string; description: string }[] = [
  {
    step: "1. Clone",
    description: "git clone no repositório e entre na pasta do projeto.",
  },
  {
    step: "2. Instale",
    description: "npm install (ou yarn) pra baixar as dependências.",
  },
  {
    step: "3. Configure",
    description: "Copie o .env de exemplo e ajuste as variáveis de ambiente.",
  },
  {
    step: "4. Suba o servidor",
    description: "npm run dev sobe a API com hot-reload via ts-node-dev.",
  },
  {
    step: "5. Comece a construir",
    description: "Siga o padrão de controller + useCase + DTO + spec pra criar seu primeiro caso de uso.",
  },
];

export const WHEN_TO_USE: string[] = [
  "APIs com vida longa, que vão ganhar feature em cima de feature por meses ou anos",
  "Times com mais de uma pessoa mexendo no mesmo código ao mesmo tempo",
  "Regras de negócio que mudam com frequência e precisam de teste automatizado",
  "Projetos onde você já sabe que vai trocar peças — banco, provedor de e-mail, fila — no meio do caminho",
];

export const WHEN_TO_AVOID: string[] = [
  "MVP ou prova de conceito que só precisa validar uma ideia rápido",
  "CRUD simples, sem regra de negócio real por trás",
  "Hackathon ou protótipo com prazo de horas",
  "Projeto solo pequeno, sem expectativa real de crescer",
];

export interface ITradeOff {
  title: string;
  description: string;
}

export const TRADE_OFFS: ITradeOff[] = [
  {
    title: "Mais arquivos por feature",
    description:
      "Um caso de uso simples já nasce com controller, DTO, use case e spec — quatro arquivos pra um CRUD que em Express puro seria uma rota só.",
  },
  {
    title: "Curva de entrada maior",
    description:
      "Quem nunca viu Clean Architecture ou DDD leva um tempo pra entender por que uma entidade não pode depender de um repository, e não o contrário.",
  },
  {
    title: "Mais lento até o primeiro endpoint",
    description:
      "Da criação do projeto até o primeiro endpoint funcionando, esse setup é mais lento que um app.get() direto — o ganho aparece depois, na manutenção.",
  },
];

export const TIPS: string[] = [
  "Não comece com todas as camadas se o projeto for pequeno — adicione conforme a dor de manutenção for aparecendo",
  "Não force DDD tático (value objects, agregados) num domínio que é só CRUD disfarçado",
  "Use este template como ponto de partida de estudo, não como cópia obrigatória — adapte pro contexto real do projeto",
];

export const GUIDE_VIDEO = {
  youtubeId: "vAV4Vy4jfkc",
  title: "Princípios SOLID em uma API REST com Node.js e TypeScript",
  channel: "Code/Drops #44",
  watchUrl: "https://youtu.be/vAV4Vy4jfkc",
  description:
    "Foi este vídeo que me mostrou como aplicar os princípios SOLID na prática dentro de uma API Node.js com TypeScript — não só a teoria, mas as decisões de pasta e de dependência que fazem sentido no dia a dia. Boa parte da organização deste template (camadas separadas, interfaces entre elas, testes isolados) nasceu assistindo e replicando o que é mostrado aqui.",
};
