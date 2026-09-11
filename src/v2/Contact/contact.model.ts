import { useState } from "react";
import { Contacts } from "@/lib/contacts";

export const CONTACT_EMAIL =
  Contacts.find((contact) => contact.title === "Email")?.label ??
  "eduardo.silvamachado07@gmail.com";

export const CONTACT_MESSAGE =
  "Estou sempre aberto a discussões sobre tecnologia, carreira e educação. Entre em contato para mentorias, parcerias ou apenas para trocar ideias.";

export const useContactPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível, o link de e-mail continua funcionando normalmente
    }
  };

  return { copied, handleCopyEmail };
};
