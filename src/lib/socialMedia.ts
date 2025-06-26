import { File, Instagram, Linkedin, Github } from "lucide-react";
import type { ElementType } from "react";

interface ISocialItem {
  title: string;
  icon: ElementType;
}

export const SocialMedia: {
  [category: string]: ISocialItem[];
} = {
  "Redes Sociais": [
    {
      title: "Instagram",
      icon: Instagram,
    },
    {
      title: "LinkedIn",
      icon: Linkedin,
    },
    {
      title: "GitHub",
      icon: Github,
    },
  ],
  "Currículo": [
    {
      title: "Currículo",
      icon: File,
    },
  ],
};
