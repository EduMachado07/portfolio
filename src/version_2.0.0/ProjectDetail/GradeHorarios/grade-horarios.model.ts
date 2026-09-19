import {
  FileSpreadsheet,
  MapPinned,
  ShieldAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
import { GithubProjects } from "@/lib/github-projects";
import screenshotsImg from "@/assets/Fatec/1sem_gradeHorarios/pages.png";
import useCaseDiagram from "@/assets/Fatec/1sem_gradeHorarios/UML.png";
import erDiagram from "@/assets/Fatec/1sem_gradeHorarios/databaseConceitual.png";
import burndown1 from "@/assets/Fatec/1sem_gradeHorarios/burndownSprint1.png";

export const project = GithubProjects.find((item) => item.slug === "fatec-1sem")!;

export const HERO_IMAGE = screenshotsImg;

export const QUOTE =
  "Aqui eu fui Scrum Master, não só desenvolvedor — minha função era organizar as sprints, acompanhar o backlog no Trello e destravar o time, além de colocar a mão na massa (fechei a segunda maior quantidade de commits do grupo). Aprendi que manter um projeto de 6 pessoas andando é tão trabalho quanto escrever o código em si.";

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "html2pdf.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "node-postgres (pg)", "Multer"],
  },
];

export interface IHighlightCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HIGHLIGHTS: IHighlightCard[] = [
  {
    icon: FileSpreadsheet,
    title: "Planilha substitui a base inteira",
    description:
      "Cada CSV enviado (cursos, turmas, salas, professores, disciplinas ou aulas) roda um parser próprio linha a linha, valida se as referências existem e substitui por completo os dados daquela tabela — sem depender de nenhuma biblioteca de importação.",
  },
  {
    icon: ShieldAlert,
    title: "Conflito de horário barrado na hora",
    description:
      "Ao cadastrar uma aula manualmente, o sistema confere turma, professor e sala contra o mesmo dia e horário antes de salvar — barrando o cadastro se qualquer um dos três já estiver ocupado.",
  },
  {
    icon: MapPinned,
    title: "Mapa é a planta baixa de verdade",
    description:
      "Em vez de uma biblioteca de mapas, cada andar é a planta baixa real do prédio com botões posicionados sobre cada sala — clicar abre um modal com a ocupação daquele ambiente na semana.",
  },
  {
    icon: Users,
    title: "Site inteiro sem framework",
    description:
      "Múltiplas páginas HTML carregadas dinamicamente por um loader de conteúdo feito à mão — sem React, Vue ou build step — e exportação da grade em PDF renderizada direto no navegador com html2pdf.js.",
  },
];

export const ARCHITECTURE = {
  useCaseImage: useCaseDiagram,
  useCaseAlt: "Diagrama de caso de uso: administrador, coordenador e professor/aluno interagindo com o sistema",
  erImage: erDiagram,
  erAlt: "Diagrama conceitual do banco de dados, com as entidades de curso, turma, sala, professor e aula",
  title: "Backend direto ao ponto",
  description:
    "Rotas Express chamam funções de serviço que conversam direto com o PostgreSQL via SQL parametrizado — sem ORM. O modelo final girou em torno de oito tabelas (Professor, Disciplina, Curso, Turma, Sala, Semana, Horário e Aula), com Aula funcionando como a tabela fato que liga turma, disciplina, professor, sala, dia e horário numa só linha.",
};

export const TEAM = {
  icon: Users,
  title: "Squad de 6, papéis definidos, 3 sprints reais",
  description:
    "Time de seis desenvolvedores com Product Owner e Scrum Master definidos — papel que assumi, junto com o desenvolvimento. Três sprints completas, cada uma com backlog, retrospectiva e burndown documentados, sprint tracking feito no Trello.",
  burndownImage: burndown1,
  burndownAlt: "Gráfico de burndown da Sprint 1: pontos planejados vs. realizados ao longo dos dias",
};
