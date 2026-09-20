// import { ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../../public/my_logo.png'

interface ILinks {
    name: string,
    to: string
}
const links: ILinks[] = [
    { name: 'Home', to: '/home', },
    { name: 'Projetos', to: '/projects', },
    { name: 'Sobre mim', to: '/about', },
    // { name: 'Artigos', to: '/article', },
    { name: 'Contato', to: '/contact', },
]

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="flex items-center justify-end px-[4vw] md:px-[12vw] py-6 md:text-lg text-base font-medium font-supreme">
            {/* <img src={logo} alt="sorry, internal problems" className='size-12' /> */}
            <ul className="flex md:gap-8 gap-4">
                {links.map((item, index) => {
                    const isActive = location.pathname.startsWith(item.to);

                    return (
                        <Link
                            key={index}
                            to={item.to}
                            className={`transition-transform duration-200 hover:-translate-y-1 ${isActive ? 'dark:text-zinc-50 text-zinc-900 font-supreme-bold' : 'text-zinc-900 dark:hover:text-zinc-50 dark:text-zinc-400'}`}>
                            {item.name}
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar