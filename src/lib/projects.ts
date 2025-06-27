import img_finX from '@/assets/img_FinX.png'

interface IProjects {
  img: string;
  title: string;
  description: string;
  linkProject: string;
  type: (
    | "Full Stack"
    | "Frontend"
    | "Backend"
    | "Landing Page"
    | "Pessoal"
    | "Escolar"
    | "Cliente"
    | "JavaScript"
    | "TypeScript"
    | "React Native"
    | "Mobile"
    | "Node.js"
  )[];
}

export const Projects: IProjects[] = [
  {
    img: img_finX,
    title: "Fin X",
    description: "descrição do projeto...",
    linkProject: "/",
    type: ["Frontend", "TypeScript", "Pessoal"],
  },
  {
    img: "",
    title: "Etec Jobs",
    description: "descrição do projeto...",
    linkProject: "/",
    type: ["Frontend", "React Native", "Escolar"],
  },
  {
    img: "",
    title: "Sistema de Gerenciamento de Agenda Escolar",
    description: "descrição do projeto...",
    linkProject: "/",
    type: ["Full Stack", "Pessoal"],
  },
  {
    img: "",
    title: "Fin X",
    description: "descrição do projeto...",
    linkProject: "/",
    type: ["Full Stack", "Pessoal"],
  },
];
