import imgPerfil from "@/assets/perfil.jpg";

import { SocialMedia } from "@/lib/socialMedia";
import { Button } from "./ui/button";
import { Contacts } from "@/lib/contacts";
import { Link } from 'react-router-dom';

const Presentation = () => {
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
    <section className="flex max-md:flex-col max-md:items-center gap-6 dark:bg-[#222] bg-[#fafafa] rounded-lg overflow-hidden shadow-lg shadow-zinc-200 dark:shadow-zinc-900 md:p-8 p-4">
      {/* IMG PROFILE */}
      <div className=" md:w-2/6 w-7/10 h-full p-4 border-4 border-zinc-600 dark:border-zinc-400 rounded-full">
        <img
          src={imgPerfil}
          alt="img perfil"
          className="w-full h-full object-cover rounded-full shadow-xl"
        />
      </div>
      {/* ABOUT ME */}
      <section className="md:w-4/6 w-full flex flex-col md:gap-4 gap-2">
        <p className="dark:text-zinc-50 text-zinc-800 font-chubbo text-base">
          Olá, meu nome é Eduardo Machado!
        </p>
        <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-3xl text-2xl text-pretty">
          Desenvolvedor Full Stack Apaixonado Pela Tecnologia
        </h1>
        <p className="text-zinc-800 dark:text-zinc-200 md:text-base font-supreme text-pretty">
          Tenho {calcularIdade('2007-01-22')} anos e sou um Desenvolvedor Full Stack apaixonado por tecnologia e pelo seu impacto na vida das pessoas. Gosto de criar projetos com foco em experiências de usuário
          dinâmicas, com interfaces limpas, modernas e funcionais. Desde o
          primeiro contato com o JavaScript, me encantei pela linguagem e venho
          explorando cada vez mais seu potencial no desenvolvimento de soluções
          web.
          <br />
          <br />
          Atualmente, estou em busca da minha primeira oportunidade profissional
          na área, onde eu possa aplicar meus conhecimentos, aprender com novos
          desafios e contribuir com projetos de impacto. <Link to='/about' className="underline underline-offset-2 font-supreme-bold">Saber mais</Link>
        </p>
        <hr />

        {/* CONTACTS */}
        <section className="flex flex-col md:gap-4 gap-2">
          <h1 className="text-zinc-900 dark:text-zinc-50 font-chubbo">Contato</h1>
          <section className="flex max-md:flex-col md:gap-8 gap-4 justify-between py-1 md:px-4 px-2">
            {Contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col md:gap-1.5 gap-0.5 basis-1/3"
                >
                  <div className="flex items-end gap-2 text-zinc-900 dark:text-zinc-50">
                    <Icon className='w-[22px]' />
                    <p className="font-semibold font-supreme max-md:text-sm">{item.title}</p>
                  </div>
                  <a className="text-zinc-700 dark:text-zinc-300 font-supreme">{item.label}</a>
                </div>
              );
            })}
          </section>
        </section>

        {/* SOCIAL MEDIA and CURRICULUM */}
        <section className="flex gap-20">
          {Object.entries(SocialMedia).map(([category, items]) => (
            <div key={category} className="flex flex-col md:gap-4 gap-2">
              <h1 className="text-zinc-900 dark:text-zinc-50 font-semibold font-chubbo">{category}</h1>
              <section className="flex md:gap-8 gap-3">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a href={item.link} target="_blank">
                      <Button
                        key={index}
                        variant="nothing"
                        size="social"
                        className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 border-2 border-zinc-600 dark:border-zinc-400 rounded-md py-2.5 px-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-300 dark:hover:shadow-zinc-700"
                      >
                        <Icon size={20} />
                        <p className="font-semibold text-sm font-supreme max-md:hidden">{item.title}</p>
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
