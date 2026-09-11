import { Link } from "react-router";
import { SocialMedia } from "@/lib/socialMedia";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Projetos", to: "/projetos" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" },
];

export const Footer = () => {
  const socialLinks = SocialMedia["Redes Sociais"] ?? [];

  return (
    <footer className="border-t border-dotted border-zinc-300 px-[6%] py-12 md:px-[22%]">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-end gap-1.5 text-lg font-bold tracking-tight text-zinc-950">
            Machado
            <Logo className="h-8 w-8 object-contain" />
          </Link>
          <p className="max-w-xs text-sm text-zinc-500">
            Desenvolvedor Full Stack focado em transformar ideias em produtos digitais simples e funcionais.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Navegação
          </h4>
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Redes
          </h4>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                className="flex size-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-zinc-950 hover:text-zinc-950"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Eduardo Machado. Todos os direitos reservados.</p>
        <p>Feito com React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};
