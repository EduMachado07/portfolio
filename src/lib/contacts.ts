import type { ElementType } from "react";
import {
    // ArrowRight,
    File,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Smartphone,
  } from "lucide-react";

interface IContact {
  title: string;
  label: string;
  icon: ElementType;
}

export const Contacts: IContact[] = [
  { title: "Cidade", label: "São José dos Campos - SP", icon: MapPin },
  { title: "Email", label: "eduardo.silvamachado07@gmail.com", icon: Mail },
  { title: "Celular", label: "(12) 98850-3575", icon: Smartphone },
];
