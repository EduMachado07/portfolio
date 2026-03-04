import { ElementType } from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  icon: ElementType;
  title: string;
};

export const Skills: Skill[] = [
  {
    icon: SiTypescript,
    title: "TypeScript",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
  },
  {
    icon: SiReact,
    title: "React",
  },
  {
    icon: SiNodedotjs,
    title: "Node.js",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
  },
  {
    icon: SiShadcnui,
    title: "Shadcnui",
  },
];