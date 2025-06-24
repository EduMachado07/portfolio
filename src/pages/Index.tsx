import imgPerfil from "@/assets/perfil.jpg";
import {
  File,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
import type { ReactNode } from "react";

interface IContact {
  title: string;
  label: string;
  icon: ReactNode;
}
interface ISocialMedia {
  title: string;
  link: string;
  icon: ReactNode;
}

const socialMedia: ISocialMedia[] = [
  {
    title: "Instagram",
    link: "São José dos Campos - SP",
    icon: <Instagram size={20} />,
  },
  { title: "GitHub", link: "(12) 98850-3575", icon: <Github size={20} /> },
  {
    title: "LinkedIn",
    link: "eduardo.silvamachado07@gmail.com",
    icon: <Linkedin size={20} />,
  },
  //   { title: "Discord", link: "eduardo.silvamachado07@gmail.com", icon: <Mail /> },
];
const contact: IContact[] = [
  { title: "Cidade", label: "São José dos Campos - SP", icon: <MapPin /> },
  { title: "Email", label: "eduardo.silvamachado07@gmail.com", icon: <Mail /> },
  { title: "Celular", label: "(12) 98850-3575", icon: <Smartphone /> },
];

const Index = () => {
  return (
    <main>
      <section className="flex dark:bg-[#222] rounded-lg overflow-hidden">
        <section className="w-2/6">
          <img src={imgPerfil} alt="" />
        </section>
        <section className="w-4/6 p-8 flex flex-col gap-4">
          <p className="text-[#0D7DFF] font-semibold text-lg">
            Olá, meu nome é Eduardo Machado!
          </p>
          <h1 className="text-[#0D7DFF] font-bold text-3xl">
            Desenvolvedor Full Stack Apaixonado Pela Tecnologia
          </h1>
          <p className="dark:text-zinc-50 text-pretty">
            Tenho 18 anos e sou um Desenvolvedor Full Stack movido pela paixão
            por tecnologia e pela forma como ela transforma e facilita o dia a
            dia das pessoas. Gosto de criar projetos com foco em experiências de
            usuário dinâmicas, com interfaces limpas, modernas e funcionais.
            Desde o primeiro contato com o JavaScript, me encantei pela
            linguagem e venho explorando cada vez mais seu potencial no
            desenvolvimento de soluções web.
            <br />
            <br />
            Atualmente, estou em busca da minha
            primeira oportunidade profissional na área, onde eu possa aplicar
            meus conhecimentos, aprender com novos desafios e contribuir com
            projetos de impacto.
          </p>
          <hr />

          {/* CONTATO */}
          <div className="flex flex-col gap-4">
            <h1 className="text-zinc-50 font-semibold">Contato</h1>
            <section className="flex gap-8 justify-between py-1 px-4">
              {contact.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1.5 text-zinc-50 basis-1/3"
                >
                  <div className="flex items-end gap-2">
                    {item.icon}
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <a className="text-zinc-300">{item.label}</a>
                </div>
              ))}
            </section>
          </div>

          {/* REDES SOCIAIS */}
          <section className="flex gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-zinc-50 font-semibold">Redes Sociais</h1>
              <section className="flex gap-8">
                {socialMedia.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-zinc-50 border-2 rounded-lg py-2.5 px-4"
                  >
                    <div className="flex items-end gap-2">
                      {item.icon}
                      <p className="font-semibold text-sm">{item.title}</p>
                    </div>
                    {/* <a className="text-zinc-300">{item.label}</a> */}
                  </div>
                ))}
              </section>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-zinc-50 font-semibold">Currículo</h1>
              <section className="flex gap-8">
                <div className="flex flex-col gap-2 text-zinc-50 border-2 rounded-lg py-2.5 px-4">
                  <div className="flex items-end gap-2">
                    <File size={20} />
                    <p className="font-semibold text-sm">Ver arquivo</p>
                  </div>
                  {/* <a className="text-zinc-300">{item.label}</a> */}
                </div>
              </section>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Index;
