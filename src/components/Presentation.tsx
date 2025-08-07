import imgPerfil from "@/assets/perfil.jpg";

import { SocialMedia } from "@/lib/socialMedia";
import { Button } from "./ui/button";
import { Contacts } from "@/lib/contacts";
import { Link, useLocation } from 'react-router-dom';

const Presentation = () => {
  const location = useLocation();

  const isActive = location.pathname === '/home';

  const calcularIdade = (dataNascimento: string) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  };

  return (
    <section className="flex gap-6 dark:bg-[#222] rounded-lg overflow-hidden shadow-lg dark:shadow-zinc-900 p-8">
      {/* IMG PROFILE */}
      <div className="w-2/6 h-full p-4 border-4 dark:border-zinc-400 rounded-full">
        <img
          src={imgPerfil}
          alt="img perfil"
          className="w-full h-full object-cover rounded-full shadow-xl"
        />
      </div>
      <section className="w-4/6 flex flex-col gap-4">
        {/* ABOUT ME */}
        <p className="dark:text-zinc-50 font-chubbo text-lg">
          Olá, meu nome é Eduardo Machado!
        </p>
        <h1 className="text-[#3399FF] font-chubbo-bold text-3xl">
          Desenvolvedor Full Stack Apaixonado Pela Tecnologia
        </h1>
        <p className="dark:text-zinc-200 font-supreme">
          Tenho {calcularIdade('2007-01-22')} anos e sou um Desenvolvedor Full Stack apaixonado por tecnologia e pelo seu impacto na vida das pessoas. Gosto de criar projetos com foco em experiências de usuário
          dinâmicas, com interfaces limpas, modernas e funcionais. Desde o
          primeiro contato com o JavaScript, me encantei pela linguagem e venho
          explorando cada vez mais seu potencial no desenvolvimento de soluções
          web.
          <br />
          <br />
          Atualmente, estou em busca da minha primeira oportunidade profissional
          na área, onde eu possa aplicar meus conhecimentos, aprender com novos
          desafios e contribuir com projetos de impacto. {isActive ? <Link to='/about' className="underline underline-offset-2 font-supreme-bold">Saber mais</Link> : ''}
        </p>
        <hr />

        {/* CONTACTS */}
        <section className="flex flex-col gap-4">
          <h1 className="dark:text-zinc-50 font-chubbo">Contato</h1>
          <section className="flex gap-8 justify-between py-1 px-4">
            {Contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col gap-1.5 dark:text-zinc-50 basis-1/3"
                >
                  <div className="flex items-end gap-2">
                    <Icon />
                    <p className="font-semibold font-supreme">{item.title}</p>
                  </div>
                  <a className="dark:text-zinc-300 font-supreme">{item.label}</a>
                </div>
              );
            })}
          </section>
        </section>

        {/* SOCIAL MEDIA and CURRICULUM */}
        <section className="flex gap-20">
          {Object.entries(SocialMedia).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <h1 className="dark:text-zinc-50 font-semibold font-chubbo">{category}</h1>
              <section className="flex gap-8">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a href={item.link} target="_blank">
                      <Button
                        key={index}
                        variant="nothing"
                        size="social"
                        className="flex items-center gap-2 dark:text-zinc-50 border-2 dark:border-zinc-400 rounded-md py-2.5 px-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-800"
                      >
                        <Icon size={20} />
                        <p className="font-semibold text-sm font-supreme">{item.title}</p>
                      </Button>
                    </a>
                  );
                })}
              </section>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Presentation;
