import { File, Instagram, Linkedin, Github } from "lucide-react";
import type { ElementType } from "react";
import curriculo from '/my_curriculo.pdf'

interface ISocialItem {
  title: string;
  icon: ElementType;
  link: string;
}

export const SocialMedia: {
  [category: string]: ISocialItem[];
} = {
  "Redes Sociais": [
    {
      title: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/du_machdo/"
    },
    {
      title: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/eduardo-machado-dev/"
    },
    {
      title: "GitHub",
      icon: Github,
      link: "https://github.com/EduMachado07"
    },
  ],
  "Currículo": [
    {
      title: "Currículo",
      icon: File,
      link: curriculo
    },
  ],
};
