import img_Fatec from '@/assets/img_Fatec.jpg'
import img_Etec from '@/assets/img_Etec.jpg'
import img_Microcamp from '@/assets/img_Microcamp.jpg'
import type { ElementType } from 'react';
import { SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiPostgresql, SiMysql, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiBootstrap, SiPrisma, SiJest, SiVite, SiShadcnui } from "react-icons/si";

interface ISchools {
    img: string,
    name: string,
    location: string,
    startDate: number,
    endDate: number,
    description: string,
}

export const Schools: ISchools[] = [
    {
        img: img_Fatec,
        name: 'Desenvolvimento de Software Multiplataforma',
        location: 'Fatec Prof. Francisco de Moura - Jacareí SP',
        description: 'Atualmente, atuo como Scrum Master em projetos acadêmicos, aplicando metodologias ágeis e auxiliando no trabalho em equipe.',
        startDate: 2025,
        endDate: 2027,
    },
    {
        img: img_Etec,
        name: 'Técnico em Desenvolvimento de Sistemas',
        location: 'ETEC Profª Ilza Nascimento Pintus - São José dos Campos SP',
        description: 'Participei de projetos práticos que me ajudaram a consolidar conhecimentos em programação e desenvolvimento web. Desenvolvi um sistema de agendamento para salões de beleza, e um aplicativo mobile de oportunidades de emprego, focado em conectar candidatos e empresas. Essas experiências me proporcionaram contato com conceitos de usabilidade, persistência de dados e integração de APIs.',
        startDate: 2023,
        endDate: 2024,
    },
    {
        img: img_Microcamp,
        name: 'Design de Games',
        location: 'Microcamp - São José dos Campos SP',
        description: 'Durante o curso tive meu primeiro contato com lógica de programação, desenvolvimento interativo e design de experiências digitais. Essa base despertou meu interesse em transformar ideias em soluções tecnológicas.',
        startDate: 2019,
        endDate: 2021,
    },
]

interface ITechnologys {
    title: string;
    icon: ElementType;
    link?: string;
}

export const Technologys: ITechnologys[] = [
    // Linguagens
    {
        icon: SiJavascript,
        title: 'JavaScript',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
        icon: SiTypescript,
        title: 'TypeScript',
        link: 'https://www.typescriptlang.org/'
    },
    {
        icon: SiHtml5,
        title: 'HTML 5',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
        icon: SiCss3,
        title: 'CSS',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },

    // Frameworks & Libs
    {
        icon: SiReact,
        title: 'React',
        link: 'https://react.dev/'
    },
    {
        icon: SiReact,
        title: 'React Native',
        link: 'https://reactnative.dev/'
    },
    {
        icon: SiVite,
        title: 'Vite',
        link: 'https://vitejs.dev/'
    },
    {
        icon: SiJest,
        title: 'Jest',
        link: 'https://jestjs.io/'
    },

    // Estilização
    {
        icon: SiTailwindcss,
        title: 'Tailwind CSS',
        link: 'https://tailwindcss.com/'
    },
    {
        icon: SiBootstrap,
        title: 'Bootstrap',
        link: 'https://getbootstrap.com/'
    },
    {
        icon: SiShadcnui,
        title: 'Shadcnui',
        link: 'https://ui.shadcn.com/'
    },

    // Backend / Full Stack
    {
        icon: SiNodedotjs,
        title: 'Node.js',
        link: 'https://nodejs.org/'
    },
    {
        icon: SiPrisma,
        title: 'Prisma',
        link: 'https://www.prisma.io/'
    },

    // Banco de Dados
    {
        icon: SiPostgresql,
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org/'
    },
    {
        icon: SiMysql,
        title: 'MySQL',
        link: 'https://www.mysql.com/'
    },

    // Controle de versão
    {
        icon: SiGit,
        title: 'Git',
        link: 'https://git-scm.com/'
    },
];
