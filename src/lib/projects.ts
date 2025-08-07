import img_finX from '@/assets/FinX/main.png'
import img_etecJobs from '@/assets/img_EtecJobs.png'
import img_fatec_1sem from '@/assets/img_Fatec_1sem.png'

interface IProjects {
  img: string;
  title: string;
  description: string;
  linkProject: string;
  linkPageProject: string;
  linkGithub: string;
  systemType: "Frontend" | "Backend" | "Full Stack" | "Landing Page";
  technologies: ("JavaScript" | "TypeScript" | "React Native" | "Node.js" | "HTML")[];
  purpose: "Pessoal" | "Escolar" | "Cliente";
  year: number
}

export const Projects: IProjects[] = [
  {
    img: img_finX,
    title: "Fin X",
    description: "Um sistema web de gestão financeira desenvolvido para pessoas comuns que desejam ter mais controle sobre suas finanças. Meu objetivo é facilitar o controle financeiro pessoal e, além disso, conscientizar os usuários sobre a importância da gestão e do planejamento do dinheiro para as suas vidas.",
    linkProject: "https://fin-x-three.vercel.app/",
    linkPageProject: "fin-x",
    year: 2025,
    systemType: 'Frontend',
    purpose: 'Pessoal',
    technologies: ['TypeScript'],
    linkGithub: 'https://github.com/EduMachado07/FinX'
  },
  {
    img: img_etecJobs,
    title: "Etec Jobs",
    description: "Aplicação mobile desenvolvida durante um evento de Hackathon organizado pelos professores da intuição de ensino da ETEC. Para o desafio foi fornecido uma API que consulta as vagas enviadas pelas empresas, e tinha como objetivo principal, criar um aplicativo para permitir a visaulização dessas vagas sejam elas emprego, estágio ou jovem aprendiz.",
    linkProject: "https://github.com/EduMachado07/etecJobs",
    linkPageProject: "etec-jobs",
    year: 2024,
    systemType: 'Frontend',
    purpose: 'Escolar',
    technologies: ['React Native'],
    linkGithub: 'https://github.com/EduMachado07/etecJobs'
  },
  {
    img: img_fatec_1sem,
    title: "Grade de Horários - Fatec",
    description: "O projeto consiste em um sistema web desenvolvido para facilitar a visualização dos horários de aula da comunidade acadêmica. A plataforma permite a consulta por curso, turma, ambiente (como salas e laboratórios) e turno (diurno ou noturno), eliminando a necessidade de comunicados impressos a cada alteração. Com isso, o sistema promove maior praticidade, agilidade e organização na divulgação dos horários.",
    linkProject: "https://prj-1sem-client.vercel.app/",
    linkPageProject: "fatec-1sem",
    year: 2025,
    systemType: 'Full Stack',
    purpose: 'Escolar',
    technologies: ['HTML', 'JavaScript', 'Node.js',],
    linkGithub: 'https://github.com/prjDevflow/prj_1sem_client'
  },
  // {
  //   img: img_etecJobs,
  //   title: "Sistema de Autenticação (servidor)",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius lobortis molestie. Duis viverra gravida ultricies. Curabitur vel leo nec urna ultricies dapibus ullamcorper nec erat. Praesent ullamcorper, nunc a consectetur convallis, sapien ligula fringilla velit, ut luctus mauris justo hendrerit tellus.",
  //   linkProject: "https://prj-1sem-client.vercel.app/",
  //   linkPageProject: "fatec-1sem",
  //   year: 2025,
  //   systemType: 'Backend',
  //   purpose: 'Pessoal',
  //   technologies: ['Node.js', 'TypeScript']
  // },
];
