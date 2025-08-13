import React from 'react'
import BackButton from "@/components/backButton";
import ComponentTitle from "@/components/title";
import { Projects } from "@/lib/projects";
import { SocialMedia } from "@/lib/socialMedia";
import {
  LaptopMinimal,
  Smartphone,
  SquareArrowOutUpRight,
  Square,
} from "lucide-react";
import { Link } from "react-router-dom";
import wall from "@/assets/Fatec/primarySem/pages.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import burndown1 from "@/assets/Fatec/primarySem/burndownSprint1.png";
import burndown2 from "@/assets/Fatec/primarySem/burndownSprint2.png";
import burndown3 from "@/assets/Fatec/primarySem/burndownSprint3.png";

const Page = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="flex-1 flex flex-col items-start md:gap-14 gap-10">
      <BackButton />

      {/* ABOUT PROJECT */}
      <section className="px-[4vw] md:px-[12vw] flex flex-col md:gap-8 gap-4 -mt-10">
        <ComponentTitle value={Projects[2].title} />
        <p className="dark:text-zinc-200 md:text-xl text-lg font-supreme md:w-5/6 text-pretty">
          {Projects[2].description}
        </p>
        <div className="flex max-md:flex-col gap-4 md:w-5/6 justify-between">
          {/* PROJECT TYPE */}
          <p className="text-zinc-200 font-supreme md:text-lg flex flex-col md:gap-2">
            <span className="font-supreme-bold md:text-xl text-lg text-[#3399FF]">
              Tipo de projeto:
            </span>
            {Projects[2].purpose} / {Projects[2].systemType}
          </p>
          {/* FOR */}
          <p className="text-zinc-200 font-supreme md:text-lg flex flex-col md:gap-2.5 gap-1">
            <span className="font-supreme-bold md:text-xl text-lg text-[#3399FF]">
              Para:
            </span>
            <a
              href="https://github.com/EduMachado07/FinX"
              target="_blank"
              className="flex items-center gap-1.5"
            >
              <LaptopMinimal size={20} />
              Desktop
            </a>
            <a
              href="https://github.com/EduMachado07/FinX"
              target="_blank"
              className="flex items-center gap-1.5"
            >
              <Smartphone size={20} />
              Mobile
            </a>
          </p>
          {/* CATEGORY */}
          <p className="md:w-50 text-zinc-200 font-supreme md:text-lg flex flex-col md:gap-2 text-pretty">
            <span className="font-supreme-bold md:text-xl text-[#3399FF]">
              Categoria:
            </span>
            Aprendizado Baseado em Projetos - ABP
          </p>
          {/* TECHNOLOGYS */}
          <p className="text-zinc-200 md:w-70 font-supreme md:text-lg flex flex-col md:gap-2">
            <span className="font-supreme-bold md:text-xl text-lg text-[#3399FF]">
              Tecnologias utilizadas:
            </span>
            HTML, CSS, JavaScrypt, Node.js, PostgreSQL
          </p>
          {/* LINKS */}
          <p className="text-zinc-200 font-supreme md:text-lg flex flex-col md:gap-2.5 gap-1">
            <span className="font-supreme-bold md:text-xl text-lg text-[#3399FF]">
              Links:
            </span>
            <a
              href={Projects[2].linkProject}
              target="_blank"
              className="underline underline-offset-4 flex items-center gap-1.5"
            >
              <SquareArrowOutUpRight size={20} />
              Site
            </a>
            <a
              href={Projects[2].linkGithub}
              target="_blank"
              className="underline underline-offset-4 flex items-center gap-1.5"
            >
              <SquareArrowOutUpRight size={20} />
              GitHub
            </a>
          </p>
        </div>
        <p className="text-zinc-200 font-supreme text-lg flex flex-col md:gap-3 gap-2 md:w-4/6 text-pretty">
          <span className="font-chubbo-bold md:text-2xl text-xl text-orange-400/90">
            Motivo
          </span>
          <span>
            Este projeto foi desenvolvido como parte de um trabalho acadêmico da
            faculdade, com o objetivo de aplicar na prática os conhecimentos
            sobre metodologias ágeis — em especial o Scrum — e o processo
            completo de desenvolvimento de sistemas.
          </span>
          <span>
            Ao longo do projeto, buscamos simular a dinâmica real entre cliente
            e desenvolvedor, trabalhando em equipe para entender necessidades,
            definir requisitos, dividir tarefas e entregar valor em ciclos. A
            proposta não era apenas construir uma aplicação funcional, mas
            também vivenciar o relacionamento profissional e a colaboração entre
            membros da equipe, além de fortalecer habilidades técnicas e de
            comunicação.
          </span>
          <div className="flex max-md:flex-col md:gap-12 gap-2">
            <span className="font-supreme-bold md:-mr-4 text-orange-400/90">
              Fale comigo:
            </span>
            <Link
              to="/contact"
              className="underline underline-offset-4 flex items-center gap-1.5"
            >
              <SquareArrowOutUpRight size={20} />
              Email
            </Link>
            <a
              href={SocialMedia["Redes Sociais"][1].link}
              target="_blank"
              className="underline underline-offset-4 flex items-center gap-1.5"
            >
              <SquareArrowOutUpRight size={20} />
              LinkedIn
            </a>
            <a
              href={SocialMedia["Redes Sociais"][0].link}
              target="_blank"
              className="underline underline-offset-4 flex items-center gap-1.5"
            >
              <SquareArrowOutUpRight size={20} />
              Instagram
            </a>
          </div>
        </p>
        {/* IMG PROJECT */}
        <p className="font-supreme-bold md:text-xl text-lg text-[#3399FF] md:-mb-4 -mb-2">
          Imagens do Projeto
        </p>
        <img
          src={wall}
          alt="sorry, internal problems"
          className="md:w-9/10 rounded-sm object-cover"
        />
        {/* PRODUCT BACKLOG */}
        <p className="font-chubbo-bold md:text-3xl text-2xl text-[#3399FF]">
          Requisitos
        </p>
        <div className="md:w-9/10 flex flex-col md:gap-8 gap-6">
          <h2 className="-mb-6 font-supreme-bold md:text-xl text-lg">
            Requisitos Funcionais
          </h2>
          <ul className="flex flex-col gap-1 font-supreme md:text-lg list-disc list-inside">
            <li>
              RF01 – Fazer a ingestão de dados no sistema a partir de uma fonte
              tal como um arquivo CSV.
            </li>
            <li>
              RF02 – (opcional) Fazer o gerenciamento dos dados do sistema
              (CRUD) através da interface da aplicação, permitindo que a
              secretaria acadêmica/coordenação altere os dados por meio de uma
              tela da aplicação.
            </li>
            <li>
              RF03 – Garantir que o cadastro ou a ingestão de dados satisfaça as
              regras básicas de alocação da faculdade (ex.: duas turmas
              diferentes não podem ser alocadas na mesma sala, e um professor
              não pode ter duas turmas no mesmo horário).
            </li>
            <li>
              RF04 – Permitir que o sistema exporte relatórios/mapas de
              ambientes e horários em formato PDF.
            </li>
            <li>
              RF05 – Permitir consultas no sistema (ex.: por turma e turno) para
              apoiar a gestão da faculdade.
            </li>
          </ul>

          <h2 className="-mb-6 font-supreme-bold md:text-xl text-lg">
            Requisitos Não Funcionais
          </h2>
          <ul className="flex flex-col gap-1 font-supreme md:text-lg list-disc list-inside">
            <li>
              RNF01 – Exibir um mapa de salas com a opção interativa para
              visualizar a situação do ambiente (ex. aulas alocadas ao longo dos
              turnos do dia).
            </li>
            <li>
              RNF02 – Garantir que o sistema seja responsivo, mantendo um layout
              consistente em dispositivos móveis e preservando a arquitetura de
              informação da interface.
            </li>
          </ul>

          <h2 className="-mb-6 font-supreme-bold md:text-xl text-lg">
            Restrições
          </h2>
          <ul className="flex flex-col gap-1 font-supreme md:text-lg list-disc list-inside">
            <li>
              R01 – O sistema deve ser prototipado e validado utilizando o
              Figma.
            </li>
            <li>
              R02 – Deve seguir o catálogo de tecnologias do semestre:
              <ul className="flex flex-col gap-1 md:ml-10 ml-4 md:mt-1">
                {[
                  "Ser codificado usando HTML, CSS e JavaScript;",
                  "Utilizar o SGBD PostgreSQL;",
                  "Implementar o servidor utilizando JavaScript;",
                  "Manter a documentação e projeto em um repositório público do GitHub;",
                  "Utilizar alguma ferramenta de controle de tarefas.",
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-2">
                    - <span>{text}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* MY ROLE and DELIVERABLES */}
      <section className="bg-[#222] md:py-12 py-4 px-[4vw] md:px-[12vw] shadow-md dark:shadow-zinc-800 flex flex-col md:gap-4 gap-2">
        <h1 className="font-chubbo-bold md:text-3xl text-2xl text-[#3399FF]">
          Meu Papel
        </h1>
        <p className="italic font-supreme md:text-lg">"Scrum Master"</p>
        <p className="dark:text-zinc-200 md:text-lg font-supreme md:w-5/6 text-pretty">
          Atuei como Scrum Master no projeto, sendo responsável por organizar as
          tarefas da equipe, planejar as reuniões e garantir que todos os
          membros estivessem alinhados e produtivos. Utilizei o Trello para
          estruturar o quadro de atividades, facilitando a visualização do
          progresso e a priorização das entregas. As reuniões foram conduzidas
          de forma prática e objetiva, diretamente em sala de aula. Além disso,
          fui o responsável pela documentação geral do sistema, registrando as
          decisões, funcionalidades e o processo de desenvolvimento adotado.
        </p>
        {/* DELIVERABLES */}
        <h1 className="font-chubbo-bold md:text-3xl text-2xl text-[#3399FF]">
          Entregas
        </h1>
        <section className="md:w-5/6 flex flex-wrap max-md:gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <p className="font-supreme-bold text-xl -mb-4">
              Sprint 1 - 15 de Abril
            </p>
            <ul className="flex flex-col gap-0.5 font-supreme text-lg">
              <li>Protótipo do projeto no Figma</li>
              <li>Páginas principais - HTML e CSS</li>
              <li>Modelo UML</li>
              <li>Vídeo da sprint 1</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-supreme-bold text-xl -mb-4">
              Sprint 2 - 15 de Maio
            </p>
            <ul className="flex flex-col gap-0.5 font-supreme text-lg">
              <li>Modelo banco de dados</li>
              <li>Mapa Interativo</li>
              <li>Páginas da secretaria - HTML, CSS e JS</li>
              <li>Rotas para cadastro de dados via CSV - Node.js</li>
              <li>Vídeo da sprint 2</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-supreme-bold text-xl -mb-4">
              Sprint 3 - 10 de junho
            </p>
            <ul className="flex flex-col gap-0.5 font-supreme text-lg">
              <li className="font-supreme-bold text-yellow-300">
                Projeto final
              </li>
              <li>Deploy - cliente e servidor</li>
              <li>Vídeo da sprint 3</li>
            </ul>
          </div>
        </section>
        <h1 className="font-chubbo-bold md:text-3xl text-2xl text-[#3399FF]">
          Progresso
        </h1>
        <Carousel setApi={setApi} orientation="horizontal" className="md:w-5/6 md:px-20">
          <CarouselContent className="flex items-center">
            <CarouselItem className="">
              <img
                src={burndown1}
                alt="sorry, internal problems"
                className="w-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="">
              <img
                src={burndown2}
                alt="sorry, internal problems"
                className="w-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="">
              <img
                src={burndown3}
                alt="sorry, internal problems"
                className="w-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="md:ml-20 max-md:hidden" />
          <CarouselNext className="md:mr-20 max-md:hidden" />
          <div className="text-muted-foreground text-center text-lg relative mt-2">
            <span className="dark:bg-[#222] relative z-10 px-2">
              Sprint {current} de {count}
            </span>
          </div>
        </Carousel>
      </section>

      <section className="w-full md:h-[70vh] px-[4vw] md:px-[12vw] flex flex-col md:gap-8 gap-4">
        <h1 className="font-chubbo-bold md:text-3xl text-2xl text-[#3399FF]">
          Resumo do Projeto
        </h1>
        <iframe
          src="https://www.youtube.com/embed/rOdlD7Mfv7E"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="md:w-4/5 md:h-full h-50"
        ></iframe>
      </section>
    </main>
  );
};

export default Page;
