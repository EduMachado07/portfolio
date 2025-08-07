import Contact from '@/components/contact'

const ContactPage = () => {
    return (
        <main className='px-[12vw] flex-1 flex flex-col gap-8 pb-12'>
            <h1 className="text-[#3399FF] font-chubbo-bold text-5xl">Fale Comigo</h1>
            <Contact />
        </main>
    )
}

export default ContactPage