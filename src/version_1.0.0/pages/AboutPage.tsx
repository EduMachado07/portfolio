import { Calendar, ChevronDown, MapPin } from "lucide-react";
import { Schools, Technologys } from "@/lib/carrer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutPage = () => {

    const [numberSchools, setNumberSchools] = useState<number>(1);

    return (
        <main className="px-[4vw] md:px-[12vw] flex-1 flex flex-col md:gap-8 gap-4">
            <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-5xl text-4xl">Sobre mim</h1>
            <p className="dark:text-zinc-50 text-zinc-900 md:text-lg font-supreme md:w-3/5 text-pretty">
                Conheça um pouco mais sobre <span className="font-supreme-bold">Eduardo Machado</span>.
                <br />
                Encontre aqui a minha trajetória como desenvolvedor, minha formação acadêmica, as minhas paixões no universo da tecnologia, além de recomendações pessoais para desenvolvedores.
            </p>

            <section className="dark:bg-[#222] bg-[#fafafa] rounded-lg overflow-hidden shadow-lg dark:shadow-zinc-900 md:p-8 p-4">
                {/* <img
                    src={imgPerfil}
                    alt="Foto de Eduardo Machado"
                    className="w-50 h-62 object-cover float-left mr-6 mb-6 rounded-md"
                /> */}
                <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold text-xl">Minha Jornada</h1>

                <p className="dark:text-zinc-200 text-zinc-900 md:text-lg font-supreme text-pretty mt-4">
                    Tenho 18 anos e sou um Desenvolvedor Full Stack apaixonado por tecnologia e pelo seu impacto na vida das pessoas. Gosto de criar projetos com foco em experiências de usuário dinâmicas, com interfaces limpas, modernas e funcionais. Desde o primeiro contato com o JavaScript, me encantei pela linguagem e venho explorando cada vez mais seu potencial no desenvolvimento de soluções web.
                </p>
                <p className="dark:text-zinc-200 text-zinc-900 md:text-lg font-supreme text-pretty mt-4">
                    Minha jornada começou com um curso de Design de Games entre 2019 e 2021, onde descobri meu interesse pela lógica e pela construção de experiências interativas. Em seguida, aprofundei meus conhecimentos no curso técnico em Desenvolvimento de Sistemas na Etec, participando de projetos práticos como um sistema de agendamento para salões de beleza e um app mobile de oportunidades de emprego — experiências que reforçaram meu propósito de usar a tecnologia para resolver problemas reais.
                </p>
                <p className="dark:text-zinc-200 text-zinc-900 md:text-lg font-supreme text-pretty mt-4">
                    Atualmente, curso Desenvolvimento de Sistemas Multiplataformas na Fatec de Jacareí, onde atuo como Scrum Master em projetos acadêmicos. Estou em busca da minha primeira oportunidade profissional na área, com o objetivo de aplicar meus conhecimentos, crescer com novos desafios e contribuir com soluções que façam a diferença.
                </p>
            </section>

            <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-2xl text-xl">Formação Acadêmica</h1>
            <section className="relative flex flex-col gap-8 md:pl-14 pl-4 md:border-l-6 border-l-4 dark:border-[#3399FF] border-[#226EBA] pt-4 md:mx-20 mx-4">
                <AnimatePresence initial={false}>
                    {Schools.slice(0, numberSchools).map((school, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="relative"
                        >
                            {/* Marcador */}
                            <div className="absolute md:-left-19 -left-8 top-12 md:size-8 size-6 rounded-full bg-[#efefef] dark:bg-[#0d0d0d] md:border-4 border-3 border-zinc-600 dark:border-[#f1f1f1] shadow-lg z-10" />
                            <div className="absolute md:-left-8 -left-0 md:top-16 top-14 w-2/4 border-zinc-600 dark:border-[#f1f1f1] border-2 z-10" />

                            <main>
                                <div className="flex flex-col gap-2 text-zinc-50">
                                    <div className="mb-4">
                                        <h1 className="dark:text-zinc-50 text-zinc-700 font-chubbo-bold md:text-lg">{school.startDate}</h1>
                                        <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-xl text-base line-clamp-1">{school.name}</h1>
                                    </div>
                                    <section className="flex max-md:flex-col gap-6">
                                        <img
                                            src={school.img}
                                            alt="img school"
                                            className="md:w-55 md:h-30 h-38 object-cover rounded-md shadow-sm"
                                        />
                                        <div className="flex flex-col gap-2">
                                            <div className="flex max-md:flex-col md:gap-6 gap-2 text-base font-supreme">
                                                <div className="max-md:text-sm flex items-center gap-1 text-zinc-800 dark:text-zinc-50">
                                                    <Calendar size={20} /> {school.startDate} - {school.endDate}
                                                </div>
                                                <div className="max-md:text-sm flex md:items-center items-start gap-1 text-pretty text-zinc-800 dark:text-zinc-50">
                                                    <MapPin size={20} /> {school.location}
                                                </div>
                                            </div>
                                            <p className="md:w-4/5 font-supreme md:text-base text-zinc-800 dark:text-zinc-50">{school.description}</p>
                                        </div>
                                    </section>
                                </div>
                            </main>
                        </motion.section>
                    ))}
                </AnimatePresence>
                <div className="text-left">
                    <Button
                        className="w-fit"
                        size="sm"
                        variant="link"
                        onClick={() => {
                            const isShowingAll = numberSchools >= Schools.length;
                            setNumberSchools(isShowingAll ? 1 : Schools.length);
                        }}
                    >
                        {numberSchools >= Schools.length ? "Ver menos" : "Ver mais"}
                        <ChevronDown
                            className={`transition-transform duration-300 ${numberSchools >= Schools.length ? "rotate-180" : ""}`}
                        />
                    </Button>
                </div>
            </section>

            <h1 className="text-[#3399FF] font-chubbo-bold md:text-2xl text-xl">Minhas Habilidades</h1>
            <section className="md:mx-20 grid grid-cols-4 md:grid-cols-5 md:gap-8 gap-4">
                {
                    Technologys.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <a
                                href={tech.link}
                                target="_blank"
                                key={index}
                                className="dark:bg-[#222] bg-[#fafafa] text-zinc-800 dark:text-zinc-100 shadow-sm shadow-zinc-300 dark:shadow-zinc-900 rounded-lg p-4 flex justify-center items-center gap-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
                            >
                                <Icon className="text-3xl" />
                                <p className="text-xl max-md:hidden">
                                    {tech.title}
                                </p>
                            </a>
                        );
                    })
                }
            </section>
        </main>
    )
}

export default AboutPage