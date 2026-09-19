import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Briefcase, Home, Mail, Menu, User, X } from "lucide-react";
import { Logo } from "./logo";
import { ScrollProgressBar } from "./scroll-progress-bar";

const NAV_LINKS = [
  { label: "Início", to: "/", icon: Home },
  { label: "Projetos", to: "/projetos", icon: Briefcase },
  { label: "Sobre", to: "/sobre", icon: User },
  { label: "Contato", to: "/contato", icon: Mail },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 backdrop-blur-md">
      <ScrollProgressBar />

      <div className="flex items-center justify-between px-[6%] py-2 md:px-[22%]">
        <Link to="/" className="flex items-end gap-1.5 text-2xl font-bold tracking-tight text-zinc-950">
          Machado
          <Logo className="size-10 object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex rounded-2xl border border-gray-200 py-2.5 px-6">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center overflow-hidden rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-500 ${
                    isActive
                      ? "border border-zinc-400 bg-zinc-100 text-zinc-900 px-6"
                      : "border border-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={16} className="shrink-0" />
                    <span
                      className={`overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${
                        isActive ? "ml-3 max-w-[8rem] opacity-100" : "max-w-0 opacity-0"
                      }`}
                    >
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md border border-zinc-200 p-2 text-zinc-700 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-zinc-200 bg-white px-[6%] py-4 md:hidden">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-zinc-100 text-zinc-950"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
                  }`
                }
              >
                <Icon size={18} />
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
};
