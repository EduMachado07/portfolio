import imgPerfil from '@/assets/perfil.jpg'

const Index = () => {
    return (
        <main>
            <section className='flex dark:bg-[#222] rounded-lg overflow-hidden'>
                <div className='w-2/5'>
                    <img src={imgPerfil} alt="" />
                </div>
                <div className='w-3/5 p-8 flex flex-col gap-2'>
                    <p>Olá, meu nome é Eduardo Machado !</p>
                    <h1>Desenvolvedor Full-Stack Apaixonado Pela Tecnologia</h1>
                    <p>BIOGRAFIA...</p>
                </div>
            </section>
        </main>
    )
}

export default Index