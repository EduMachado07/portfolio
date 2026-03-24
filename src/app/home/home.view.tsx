import { Button } from "@/components/ui/button";
import { Globe, Highlighter, KeyRound, Zap } from "lucide-react";
import img_DpiEstudos from "../../assets/DpiEstudos/imgProject_Note.png";
import img_EtecJobs from "../../assets/EtecJobs/imgProject_Cell.png";
import { SectionProject } from "@/components/SectionProject";
import Contact from "@/components/contact";
import { Typograph } from "@/components/Typograph";
import { Link } from "react-router";

const IndexPage = () => {
  return (
    <main className="flex-1 flex flex-col items-center md:gap-16 gap-8 px-[4vw] md:px-[12vw]">
      {/* <Presentation /> */}

      {/* <div className="flex justify-between -mb-6">
                <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-2xl text-xl">Principais Tecnologias</h1>

                <Link to='/about' className="">
                    <Button size={'default'} variant={"link"} className="group max-md:hidden">
                        Ver todas
                        <ArrowRight className="transition-transform duration-200 transform -translate-x-1 group-hover:translate-x-1" />
                    </Button>
                    <Button size={'default'} variant={"link"} className="md:hidden">
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
            <section className="flex md:justify-center justify-start md:gap-12 gap-4 overflow-x-auto flex-nowrap text-zinc-800 dark:text-zinc-200">
                {
                    Skills.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <section className="flex flex-col gap-2 items-center md:w-28 w-22 flex-shrink-0 my-2">
                                <div
                                    key={index}
                                    className="dark:bg-[#222] bg-[#fafafa] shadow-sm shadow-zinc-200 dark:shadow-zinc-900 md:w-20 w-14 md:h-24 h-18 rounded-full flex justify-center items-center gap-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
                                >
                                    <Icon size={28} className="md:size-[40px]" />
                                </div>
                                <p className="text-sm md:text-lg font-supreme-bold">
                                    {tech.title}
                                </p>
                            </section>
                        );
                    })
                }
            </section> */}

      {/* PROJECTS */}
      <Typograph.Title text="Projetos" />
      {/* <div className="flex justify-between -mb-6">

        <Link to="/projects">
          <Button
            size={"default"}
            variant={"link"}
            className="group max-md:hidden"
          >
            Ver todos
            <ArrowRight className="transition-transform duration-200 transform -translate-x-1 group-hover:translate-x-1" />
          </Button>
          <Button size={"default"} variant={"link"} className="md:hidden">
            <ArrowRight />
          </Button>
        </Link>
      </div> */}

      <SectionProject.Root>
        <SectionProject.Details
          details={["2025", "TypeScript", "Fullstack", "Client"]}
          title="Estudos Dom Pedro I - Um sistema web de estudos bíblicos"
          description="Um sistema que transforma anotações normalmente feitas em diversos aplicativos diferentes em um sistema único, que permite registrar pensamentos, interpretações e referências de forma organizada e acessível aos leitores."
        >
          <SectionProject.Flag
            title="Textos mais bonitos"
            Flag={Highlighter}
            goal="Formatação de texto integrado com inteligência artificial"
          />
          <SectionProject.Flag
            title="Autenticação segura e praticidade"
            Flag={KeyRound}
            goal="Renovação de tokens com processo de Refresh Token"
          />

          <div className="flex gap-2">
            <Button size={"lg"} variant={"outline"} className="rounded-full">
              Saber Mais
            </Button>
            <a href="https://dpi-estudos.vercel.app/" target="_blank">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="rounded-full"
              >
                Abrir Sistema
              </Button>
            </a>
          </div>
        </SectionProject.Details>
        <SectionProject.Image img={img_DpiEstudos} />
      </SectionProject.Root>

      <SectionProject.Root>
        <SectionProject.Image img={img_EtecJobs} />
        <SectionProject.Details
          details={[
            "2024",
            "JavaScript",
            "React Native",
            "Mobile",
            "Hackathon",
          ]}
          title="Etec Jobs - App Android para divulgação e procura de vagas de emprego"
          description="Sistema desenvolvido para o Hackathon Etec 2024, com o objetivo de criar um aplicativo Android para a divulgação e procura de vagas de emprego, conectando candidatos a oportunidades de trabalho de forma eficiente e acessível."
        >
          <SectionProject.Flag
            title="Conexão direta entre candidatos e oportunidades"
            Flag={Globe}
            goal="Facilita o encontro entre empregadores e empregados."
          />
          <SectionProject.Flag
            title="Experiência rápida e intuitiva"
            Flag={Zap}
            goal="Usuários encontram oportunidades de trabalho em poucos passos."
          />

          <div className="flex gap-2">
            <Link to="/projects/etec-jobs">
              <Button size={"lg"} variant={"outline"} className="rounded-full">
                Saber Mais
              </Button>
            </Link>
            <a href="https://drive.google.com/file/d/1b6FxTJDU-GvtZ0CRqPeFmiGuM87XTGCm/view" target="_blank">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="rounded-full"
              >
                Fazer Download
              </Button>
            </a>
          </div>
        </SectionProject.Details>
      </SectionProject.Root>

      {/* <section className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
        {Projects.slice(0, 1).map((item, index) => (
          <Card.Root key={index}>
            <Card.Image linkProject={item.linkProject} img={item.img} />
            <Card.Details
              type={[item.systemType, ...item.technologies, item.purpose]}
              title={item.title}
              description={item.description}
              linkProject={`/projects/${item.linkPageProject}`}
              year={item.year}
            />
          </Card.Root>
        ))}
      </section> */}

      <hr className="w-1/4 bg-zinc-500" />

      {/* CONTACT */}
      <Typograph.Title text="Fale Comigo" />

      <Contact />
    </main>
  );
};

export default IndexPage;
