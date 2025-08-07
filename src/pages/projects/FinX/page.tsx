// import wall from '@/assets/FinX/video_FinX.mp4'
import mainPage from '@/assets/FinX/mainPage.png'
import register from "@/assets/FinX/register.png"
import historic from "@/assets/FinX/historic.png"
import categorys from "@/assets/FinX/categorys.png"
import graphics from "@/assets/FinX/graphics.gif"
import process from '@/assets/FinX/process.png'
import ComponentTitle from '@/components/title'
import { LaptopMinimal, Smartphone, SquareArrowOutUpRight } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import React from 'react'
import { Link } from 'react-router-dom'
import { SocialMedia } from '@/lib/socialMedia'
import { Projects } from '@/lib/projects'
import BackButton from '@/components/backButton'

const Page = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <main className="flex-1 flex flex-col gap-14 pb-12">
            <BackButton />
            {/* ABOUT PROJECT */}
            <section className='px-[12vw] flex flex-col gap-8 -mt-12'>
                <img src={mainPage} alt="sorry, internal problems" className='w-full rounded-sm shadow-lg dark:shadow-zinc-80' />
                <ComponentTitle value='Fin-X' />
                <p className="dark:text-zinc-50 text-xl font-supreme w-5/6 text-pretty">
                    {Projects[0].description} <a target='_blank' href="https://fin-x-three.vercel.app/" className='underline underline-offset-4 font-supreme-bold'>Experimente!</a>
                </p>
                <div className='flex w-5/6 justify-between'>
                    {/* PROJECT TYPE */}
                    <p className="font-supreme text-lg flex flex-col gap-2">
                        <span className="font-supreme-bold text-xl text-[#3399FF]">Tipo de projeto:</span>
                        {Projects[0].purpose} / {Projects[0].systemType}
                    </p>
                    {/* FOR */}
                    <p className="font-supreme text-lg flex flex-col gap-2.5">
                        <span className="font-supreme-bold text-xl text-[#3399FF]">Para:</span>
                        <a href='https://fin-x-three.vercel.app/' target='_blank' className='flex items-center gap-1.5'><LaptopMinimal size={20} />Desktop</a>
                        <a href='https://github.com/EduMachado07/FinX' target='_blank' className='flex items-center gap-1.5'><Smartphone size={20} />Mobile</a>
                    </p>
                    {/* CATEGORY */}
                    <p className="font-supreme text-lg flex flex-col gap-2">
                        <span className="font-supreme-bold text-xl text-[#3399FF]">Categoria:</span>
                        Finanças / Produtividade
                    </p>
                    {/* TECHNOLOGYS */}
                    <p className="w-70 font-supreme text-lg flex flex-col gap-2">
                        <span className="font-supreme-bold text-xl text-[#3399FF]">Tecnologias utilizadas:</span>
                        TypeScrypt, React, Vite, Tailwind, Shadcn/ui, Vercel
                    </p>
                    {/* LINKS */}
                    <p className="font-supreme text-lg flex flex-col gap-2.5">
                        <span className="font-supreme-bold text-xl text-[#3399FF]">Links:</span>
                        <a href={Projects[0].linkProject} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />Site Fin-X</a>
                        <a href={Projects[0].linkGithub} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />GitHub</a>
                    </p>
                </div>
                <p className="font-supreme text-lg flex flex-col gap-3 w-4/6">
                    <span className="font-chubbo-bold text-2xl text-orange-400/90">Motivo</span>
                    <span>
                        Este projeto faz parte do meu portfólio pessoal. Desenvolvi com foco no aprendizado e evolução como desenvolvedor, mas também pensando em entregar uma experiência simples e útil para quem quiser utilizá-lo.
                    </span>
                    <span>
                        Se você tiver qualquer feedback — seja sobre funcionalidades, usabilidade, código ou estrutura — ficarei muito feliz em receber! Toda sugestão é bem-vinda para que eu continue melhorando como profissional.
                    </span>
                    <div className='flex gap-12'>
                        <span className='font-supreme-bold -mr-4 text-orange-400/90'>Fale comigo:</span>
                        <Link to='/contact' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />Email</Link>
                        <a href={SocialMedia["Redes Sociais"][1].link} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />LinkedIn</a>
                        <a href={SocialMedia["Redes Sociais"][0].link} target='_blank' className='underline underline-offset-4 flex items-center gap-1.5'><SquareArrowOutUpRight size={20} />Instagram</a>
                    </div>

                </p>
            </section>

            {/* FEATURES */}
            <section className='bg-[#222] py-12 px-[12vw] shadow-lg dark:shadow-zinc-800 flex flex-col gap-4'>
                <h1 className="font-chubbo-bold text-3xl text-[#3399FF]">Funcionalidades</h1>
                <section className='px-14'>
                    <Carousel setApi={setApi} orientation='horizontal'>
                        <CarouselContent className=''>
                            {/* 01. Cadastro de Receitas e Despesas */}
                            <CarouselItem className='flex items-center gap-14 px-8'>
                                <div className='w-2/4 flex flex-col gap-4 py-2'>
                                    <h1 className="font-supreme-bold text-2xl">01. Cadastro de Receitas e Despesas</h1>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty">
                                        O sistema permite que o usuário registre manualmente todas as suas movimentações financeiras, sejam receitas ou despesas.
                                        Cada transação inclui:
                                    </p>
                                    <ul className='list-disc pl-5 font-supreme text-lg'>
                                        <li>Descrição</li>
                                        <li>Valor</li>
                                        <li>Data</li>
                                        <li>Categoria</li>
                                        <li>Tipo - ( Receita | Despesa )</li>
                                    </ul>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty italic">
                                        Essa estrutura permite um controle preciso sobre as finanças pessoais e auxilia na organização mensal.
                                    </p>
                                </div>
                                <img src={register} alt="sorry, internal problems" className='w-2/4 object-cover rounded-md' />
                            </CarouselItem>
                            {/* 02. Categorização das Transações */}
                            <CarouselItem className='flex items-center gap-14 px-8'>
                                <div className='w-2/4 flex flex-col gap-4 py-2'>
                                    <h1 className="font-supreme-bold text-2xl dark:text-zinc-50">02. Categorização das Transações</h1>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty">
                                        Cada transação pode ser associada a uma categoria personalizada, facilitando a análise dos gastos e receitas por área da vida financeira.
                                    </p>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty">
                                        A categorização ajuda o usuário a visualizar onde está gastando mais e a identificar possíveis excessos ou oportunidades de economia. Essa estrutura é essencial para o planejamento financeiro inteligente.
                                    </p>
                                </div>
                                <img src={categorys} alt="sorry, internal problems" className='w-2/4 rounded-md' />
                            </CarouselItem>
                            {/* 03. Histórico das Transações Armazenado Localmente */}
                            <CarouselItem className='flex items-center gap-14 px-8'>
                                <div className='w-2/4 flex flex-col gap-4 py-2'>
                                    <h1 className="font-supreme-bold text-2xl text-pretty text-zinc-50">03. Histórico das Transações Armazenado Localmente</h1>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty">
                                        Todas as transações são salvas diretamente no navegador do usuário, por meio do localStorage, garantindo que os dados estejam disponíveis mesmo após fechar e reabrir o site.
                                    </p>
                                    <ul className='list-disc pl-5 font-supreme text-lg'>
                                        <li>Evita a necessidade de criar conta ou fazer login</li>
                                        <li>Os dados ficam disponíveis apenas para aquele navegador e dispositivo</li>
                                        <li>Preserva a privacidade do usuário</li>
                                    </ul>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty italic">
                                        Essa abordagem torna o sistema leve e acessível, ideal para quem quer praticidade e controle sem complexidade.
                                    </p>
                                </div>
                                <img src={historic} alt="sorry, internal problems" className='w-2/4 object-cover rounded-md' />
                            </CarouselItem>
                            {/* 04. Gráficos e Estatísticas (Anual, Mensal e Semanal) */}
                            <CarouselItem className='flex items-center gap-8 px-8'>
                                <div className='w-2/4 flex flex-col gap-4 py-2'>
                                    <h1 className="font-supreme-bold text-2xl text-zinc-50 text-balance">04. Gráficos e Estatísticas (Anual, Mensal e Semanal)</h1>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty">
                                        O sistema permite que o usuário registre manualmente todas as suas movimentações financeiras, sejam receitas ou despesas.
                                    </p>
                                    <ul className='list-disc pl-5 font-supreme text-lg text-pretty'>
                                        <li><span className='font-supreme-bold'>Semanal:</span> Ideal para acompanhar gastos diários e pequenas metas.</li>
                                        <li><span className='font-supreme-bold'>Mensal:</span> Para analisar o comportamento financeiro ao longo de cada mês.</li>
                                        <li><span className='font-supreme-bold'>Anual:</span> Para ver o panorama completo da evolução financeira no ano.</li>
                                    </ul>
                                    <p className="dark:text-zinc-50 text-lg font-supreme text-pretty italic">
                                        Os gráficos auxiliam nas tomadas de decisões mais conscientes sobre economia, cortes ou investimentos.
                                    </p>
                                </div>
                                <img src={graphics} alt="sorry, internal problems" className='w-2/4 object-cover rounded-md' />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <div className="text-muted-foreground mb-6 text-center text-lg relative">
                            <span className='dark:bg-[#222] relative z-10 px-2'>{current} de {count}</span>
                            <hr className='border-2 bg-muted-foreground absolute left-1/2 top-1/2 w-40 -translate-x-1/2' />
                        </div>
                    </Carousel>
                </section>
            </section>

            {/* HOW CAN I and PROCESS */}
            <section className='px-[12vw] flex flex-col gap-6'>
                <h1 className="font-supreme-bold text-xl text-orange-400/90 -mb-4">Desafio</h1>
                <h1 className="font-chubbo-bold text-3xl text-[#3399FF]">Como Posso...</h1>
                <ul className="list-disc pl-5 font-supreme text-xl">
                    <li className='mt-1.5'>Como posso <span className='font-supreme-bold'>facilitar o uso de um sistema de gestão financeira?</span></li>
                    <li className='mt-1.5'>Como posso <span className='font-supreme-bold'>conscientizar os usuários da importância do controle financeiro?</span></li>
                    <li className='mt-1.5'>Como posso <span className='font-supreme-bold'>influenciar o usuário a criar hábitos financeiros saudáveis?</span></li>
                </ul>
                <h1 className="font-chubbo-bold text-3xl text-[#3399FF]">Processo</h1>
                <img src={process} alt="sorry, internal problems" className='w-4/5 object-cover rounded-md' />

                <p className="font-supreme text-lg flex flex-col gap-3 w-4/6">
                    Sinta-se à vontade para usar este projeto como quiser: melhorar sua vida financeira ou até mesmo para os estudos a fim de se tornar um desenvolvedor. Se for a segunda opção, Deus te abençoe😅
                </p>
            </section>

            {/* AREA FOR DEVS */}
            {/* <section className='px-[12vw] flex flex-col gap-6'>
                <h1 className="font-supreme-bold text-2xl text-orange-400/90 -mb-4">Área Dev</h1>
            </section> */}
        </main>
    )
}

export default Page