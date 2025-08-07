import { Card } from '@/components/Card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Projects } from '@/lib/projects'
import { SocialMedia } from '@/lib/socialMedia'
import { CircleX, Search } from 'lucide-react'
import { useState } from 'react'

const ProjectsPage = () => {

    const systemTypes = Array.from(new Set(Projects.map(p => p.systemType)));
    const purposes = Array.from(new Set(Projects.map(p => p.purpose)));
    const technologies = Array.from(new Set(Projects.flatMap(p => p.technologies)))

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"recent" | "oldest" | null>("recent");

    const filteredProjects = Projects.filter((item) => {
        const titleMatch = item.title.toLowerCase().startsWith(searchTerm);

        const allTags = [item.systemType, ...item.technologies, item.purpose];
        const filterMatch = selectedFilter
            ? allTags.includes(selectedFilter as typeof allTags[number])
            : true;

        return titleMatch && filterMatch;
    });

    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (sortOrder === "recent") return b.year - a.year;
        if (sortOrder === "oldest") return a.year - b.year;
        return 0;
    });

    return (
        <main className='px-[12vw] flex-1 flex flex-col gap-8 pb-12'>
            <h1 className="text-[#3399FF] font-chubbo-bold text-5xl">Projetos</h1>
            <p className="dark:text-zinc-50 text-lg font-supreme w-4/5 text-pretty">
                Explore aqui todo o meu portfólio de projetos. Cada projeto possui detalhamento do sistema, os processos realizados e demontrações dos meus trabalhos. <span className='font-supreme-bold'>Aproveite!</span>
                <br />
                <span className='font-supreme'>
                    Ou acesse meu {" "}
                    <a
                        href={SocialMedia["Redes Sociais"].find(item => item.title === "GitHub")?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-supreme-bold text-[#3399FF] underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    {" "} com todos os meus projetos.
                </span>
            </p>

            {/* SEARCH AND FILTER */}
            <section className='flex gap-8 items-center'>
                {/* SEARCH */}
                <div className="relative w-2/5">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                    <Input
                        type="text"
                        placeholder="Buscar projeto"
                        className="px-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    />
                    {
                        searchTerm &&
                        <button
                            type="button"
                            onClick={() => setSearchTerm("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-red-400 transition-colors"
                        >
                            <CircleX size={20} />
                        </button>
                    }
                </div>
                {/* FILTER */}
                <Select
                    value={selectedFilter ?? 'all'}
                    onValueChange={(value) => setSelectedFilter(value === 'all' ? null : value)}
                >
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Filtrar" />
                    </SelectTrigger>
                    <SelectContent className='h-80'>
                        <SelectItem value='all'>Todos</SelectItem>
                        {/* Sistema */}
                        <SelectGroup>
                            <SelectLabel>Sistema</SelectLabel>
                            {systemTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectGroup>

                        {/* Tecnologias */}
                        <SelectGroup>
                            <SelectLabel>Tecnologias</SelectLabel>
                            {technologies.map((tech) => (
                                <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                            ))}
                        </SelectGroup>

                        {/* Tipo */}
                        <SelectGroup>
                            <SelectLabel>Projeto</SelectLabel>
                            {purposes.map((purpose) => (
                                <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {/* ORDER */}
                <Select
                    value={sortOrder ?? undefined}
                    onValueChange={(value) => setSortOrder(value as "recent" | "oldest")}
                >
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="recent">Mais recente</SelectItem>
                        <SelectItem value="oldest">Menos recente</SelectItem>
                    </SelectContent>
                </Select>
            </section>

            {/* PROJECTS */}
            {
                sortedProjects.length > 0 ? (
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sortedProjects.map((item, index) => (
                            <Card.Root key={index}>
                                <Card.Image linkProject={item.linkProject} img={item.img} />
                                <Card.Details
                                    type={[item.systemType, ...item.technologies, item.purpose]}
                                    title={item.title}
                                    description={item.description}
                                    linkProject={item.linkPageProject}
                                    year={item.year}
                                />
                            </Card.Root>
                        ))}
                    </section>
                ) : (
                    <div className='text-center'>
                        <p className='dark:text-zinc-50 text-lg font-supreme-bold'>Opsss... Nenhum projeto encontrado.</p>
                    </div>
                )
            }
        </main>
    )
}

export default ProjectsPage