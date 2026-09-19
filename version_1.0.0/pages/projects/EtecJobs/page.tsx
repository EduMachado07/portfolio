import ComponentTitle from "@/components/title"
import { Projects } from "@/lib/projects"
import { SocialMedia } from "@/lib/socialMedia"
import { CornerDownRight, Download, Smartphone, SquareArrowOutUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import wall from '@/assets/EtecJobs/wall.png'
import { Features, Process } from "./info"
import BackButton from "@/components/backButton"

const Page = () => {
    return (
        <main className="flex-1 flex flex-col items-start md:gap-12 gap-8">
            <BackButton />
            <section className='bg-[#222] md:px-[4vw] shadow-md dark:shadow-zinc-800 -mt-8'>
                <img src={wall} alt="sorry, internal problems" className='w-full object-cover' />
            </section>

            {/* ABOUT PROJECT */}
            <section className='px-[4vw] md:px-[12vw] flex flex-col md:gap-8 gap-4' >
                <ComponentTitle value={Projects[1].title} />
                <p className="dark:text-zinc-50 text-zinc-800 md:text-xl text-lg font-supreme md:w-5/6 text-pretty">
                    {Projects[1].description}
                </p>
                <div className='flex max-md:flex-col gap-4 md:w-5/6 justify-between'>
                    {/* PROJECT TYPE */}
                    <p className="dark:text-zinc-50 text-zinc-800 font-supreme md:text-lg flex flex-col md:gap-2">
                        <span className="font-supreme-bold md:text-xl text-lg dark:text-[#3399FF] text-[#226EBA]">Tipo de projeto:</span>
                        {Projects[1].purpose} / {Projects[1].systemType}
                    </p>
                    {/* FOR */}
                    <p className="dark:text-zinc-50 text-zinc-800 font-supreme md:text-lg flex flex-col md:gap-2.5 gap-1">
                        <span className="font-supreme-bold md:text-xl text-lg dark:text-[#3399FF] text-[#226EBA]">Para:</span>
                        <a href='https://github.com/EduMachado07/FinX' target='_blank' className='flex items-center gap-1.5'><Smartphone size={20} />App Mobile</a>
                    </p>
                    {/* CATEGORY */}
                    <p className="dark:text-zinc-50 text-zinc-800 font-supreme md:text-lg flex flex-col md:gap-2">
                        <span className="font-supreme-bold md:text-xl text-lg dark:text-[#3399FF] text-[#226EBA]">Categoria:</span>
                        Hackathon Acadêmico
                    </p>
                    {/* TECHNOLOGYS */}
                    <p className="dark:text-zinc-50 text-zinc-800 w-70 font-supreme md:text-lg flex flex-col md:gap-2">
                        <span className="font-supreme-bold md:text-xl text-lg dark:text-[#3399FF] text-[#226EBA]">Tecnologias utilizadas:</span>
                        JavaScrypt, React Native, Expo
                    </p>
                    {/* LINKS */}
                    <p className="dark:text-zinc-50 text-zinc-800 font-supreme md:text-lg flex flex-col md:gap-2.5 gap-1">
                        <span className="font-supreme-bold md:text-xl text-lg dark:text-[#3399FF] text-[#226EBA]">Links:</span>
                        <a href={'https://drive.google.com/file/d/1b6FxTJDU-GvtZ0CRqPeFmiGuM87XTGCm/view'} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><Download size={20} />Download App</a>
                        <a href={Projects[1].linkGithub} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />GitHub</a>
                    </p>
                </div>
                <p className="dark:text-zinc-50 text-zinc-800 font-supreme md:text-lg flex flex-col md:gap-3 gap-2 md:w-4/6">
                    <span className="font-chubbo-bold md:text-2xl text-xl text-orange-400/90">Motivo</span>
                    <span>
                        Este projeto foi desenvolvido durante um Hackathon promovido pelos professores da ETEC, com o objetivo de criar uma aplicação mobile para facilitar o acesso a vagas de emprego divulgadas pela instituição.
                    </span>
                    <span>
                        Embora tenha sido criado em um curto período, dediquei atenção especial à usabilidade e à experiência do usuário. Se você tiver qualquer feedback — seja sobre funcionalidades, interface ou estrutura de código — ficarei muito feliz em receber! Toda sugestão é bem-vinda para meu crescimento como desenvolvedor.
                    </span>
                    <div className='flex max-md:flex-col md:gap-12 gap-2'>
                        <span className='font-supreme-bold md:-mr-4 text-orange-400/90'>Fale comigo:</span>
                        <Link to='/contact' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />Email</Link>
                        <a href={SocialMedia["Redes Sociais"][1].link} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />LinkedIn</a>
                        <a href={SocialMedia["Redes Sociais"][0].link} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />Instagram</a>
                    </div>

                </p>
            </section >

            {/* MY ROLE */}
            <section className='dark:bg-[#222] bg-[#fafafa] md:py-12 py-4 px-[4vw] md:px-[12vw] shadow-md dark:shadow-zinc-800 flex flex-col md:gap-4 gap-2'>
                <h1 className="font-chubbo-bold md:text-3xl text-2xl dark:text-[#3399FF] text-[#226EBA]">Meu Papel</h1>
                <p className="dark:text-zinc-50 text-zinc-800 md:text-lg font-supreme md:w-5/6 text-pretty">
                    Atuei ativamente no desenvolvimento do aplicativo, sendo responsável por grande parte da codificação. Sugeri e implementei funcionalidades importantes, como o modo claro e escuro e o compartilhamento de vagas, com o objetivo de melhorar a experiência do usuário. Utilizei a plataforma Expo para facilitar o desenvolvimento, testes e edição do código durante o processo.
                </p>

                <h1 className="font-chubbo-bold md:text-3xl text-2xl dark:text-[#3399FF] text-[#226EBA] mt-2">Processo</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-2">
                    {Process.map((step, index) => (
                        <div key={index} className="flex flex-col dark:bg-[#0d0d0d] bg-[#efefef] px-4 md:py-6 py-4 rounded-md md:gap-2">
                            <h1
                                className={`font-chubbo-bold md:text-xl text-lg ${index === 3 || index === 5 ? 'dark:text-yellow-300/90 text-yellow-500/90' : 'dark:text-zinc-50 text-zinc-800'
                                    }`}
                            >
                                {step.step}
                            </h1>
                            <p className="dark:text-zinc-50 text-zinc-800 md:text-lg font-supreme text-pretty">{step.description}</p>
                        </div>
                    ))}
                </section>
            </section>

            <section className='px-[4vw] md:px-[12vw] flex flex-col md:gap-8 gap-4' >
                <h1 className="font-chubbo-bold md:text-3xl text-2xl dark:text-[#3399FF] text-[#226EBA]">Funcionalidades</h1>
                <div className="dark:text-zinc-50 text-zinc-800 flex flex-col md:gap-6 gap-2">
                    {Features.map((feature) => (
                        <div className="flex flex-col md:gap-2 gap-1 mt-1">
                            <p className="dark:text-zinc-200 text-xl font-chubbo-bold w-5/6 text-pretty">
                                {feature.feature}
                            </p>
                            <span className="md:ml-8 ml-4 flex md:gap-4 gap-2 font-supreme">
                                <CornerDownRight />
                                {feature.description}
                            </span>
                            {!!feature.options && (
                                <div className="md:ml-8 ml-4 flex flex-col gap-2 font-supreme">
                                    {feature.options.map((option, i) => (
                                        <span className="md:ml-8 ml-4 flex md:gap-4 gap-2">
                                            <CornerDownRight />
                                            <p key={i}>{option}</p>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section >
        </main>
    )
}

export default Page