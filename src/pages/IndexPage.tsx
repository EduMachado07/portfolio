import { Card } from "@/components/Card";
import Presentation from "@/components/Presentation";
import { Projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Contact from "@/components/contact";
import { SiJavascript, SiNodedotjs, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";
import type { ElementType } from "react";

type Skill = {
    icon: ElementType;
    title: string;
};

const Skills: Skill[] = [
    {
        icon: SiTypescript,
        title: 'TypeScript',
    },
    {
        icon: SiJavascript,
        title: 'JavaScript',
    },
    {
        icon: SiReact,
        title: 'React',
    },
    {
        icon: SiNodedotjs,
        title: 'Node.js',
    },
    {
        icon: SiTailwindcss,
        title: 'Tailwind CSS',
    },
    {
        icon: SiShadcnui,
        title: 'Shadcnui',
    },
];

const IndexPage = () => {
    return (
        <main className="flex-1 flex flex-col gap-10 pb-12 px-[12vw]">
            {/* PRESENTATION */}
            <Presentation />

            {/* SKILLS */}
            <div className="flex justify-between -mb-4">
                <h1 className="text-[#3399FF] font-chubbo-bold text-2xl">Mais Utilizados</h1>

                <Link to='/about'>
                    <Button size={'default'} variant={"link"} className="group">
                        Ver todas
                        <ArrowRight className="transition-transform duration-200 transform -translate-x-1 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
            <section className="flex justify-center gap-12">
                {
                    Skills.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <section className="flex flex-col gap-4 items-center w-28">
                                <div
                                    key={index}
                                    className="dark:bg-[#222] shadow-sm dark:shadow-zinc-900 w-22 h-28 rounded-full flex justify-center items-center gap-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
                                >
                                    <Icon size={46} />
                                </div>
                                <p className="text-lg font-supreme-bold">
                                    {tech.title}
                                </p>
                            </section>
                        );
                    })
                }
            </section>

            {/* PROJECTS */}
            <div className="flex justify-between -mb-4">
                <h1 className="text-[#3399FF] font-chubbo-bold text-2xl">Melhores Projetos</h1>

                <Link to='/projects'>
                    <Button size={'default'} variant={"link"} className="group">
                        Ver todos
                        <ArrowRight className="transition-transform duration-200 transform -translate-x-1 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Projects.slice(0, 3).map((item, index) => (
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
            </section>

            {/* CONTACT */}
            <h1 className="text-[#3399FF] font-chubbo-bold text-2xl -mb-4">Fale Comigo</h1>
            <Contact />
        </main>
    );
};

export default IndexPage;
