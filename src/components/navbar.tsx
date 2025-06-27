import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ILinks {
    name: string,
    to: string
}
const links: ILinks[] = [
    {
        name: 'Projetos',
        to: '/',
    },
    {
        name: 'Sobre mim',
        to: '/',
    },
    // {
    //     name: 'Artigos',
    //     to: '/',
    // },
    {
        name: 'Contato',
        to: '/',
    },
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6 text-lg font-medium font-supreme">
            <Link to='/' className="flex items-center gap-2 dark:hover:text-zinc-50 dark:text-zinc-400">
                <ChevronLeft />
                Home
            </Link>
            {/* <div className="size-12"><img src={logo} alt="" /></div> */}
            <ul className="flex gap-8">
                {links.map((item, index) => (
                    <Link key={index} to={item.to} className='dark:hover:text-zinc-50 dark:text-zinc-400 transition-transform duration-200 hover:-translate-y-1'>{item.name}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar