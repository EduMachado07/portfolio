import Contact from '@/components/contact'

const ContactPage = () => {
    return (
        <main className='px-[4vw] md:px-[12vw] flex-1 flex flex-col md:gap-8 gap-4'>
            <h1 className="text-[#3399FF] font-chubbo-bold md:text-5xl text-4xl">Fale Comigo</h1>
            <Contact />
        </main>
    )
}

export default ContactPage