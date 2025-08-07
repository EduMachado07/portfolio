type IProcess = {
    step: string,
    description: string
}

export const Process: IProcess[] = [
    {
        step: '1. Desafio',
        description: 'Recebemos os requisitos e a API fornecida com as vagas.'
    },
    {
        step: '2. Análise e Planejamento',
        description: 'Entendemos os requisitos do sistema, planejamos as funcionalidades e a estrutura da aplicação.'
    },
    {
        step: '3. Implementação',
        description: 'Desenvolvimento das telas principais de listagem e detalhes das vagas, com foco em UX simples e funcionalidade clara'
    },
    {
        step: '4. Protótipo Apresentado & Vitória',
        description: 'Apresentamos a primeira versão funcional para os avaliadores, e Fomos escolhidos como a equipe vencedora.'
    },
    {
        step: '5. Novos Requisitos e Ajustes',
        description: 'Recebemos sugestões e novas demandas e implementamos ajustes no app.'
    },
    {
        step: '6. Apresentação Final & Build Final',
        description: 'Entregamos a versão refinada da aplicação, e geramos a build final no formato .apk para distribuição na escola.'
    },
]

type IFeatures = {
    feature: string,
    description: string,
    options?: string[]
}

export const Features: IFeatures[] = [
    {
        feature: 'Paginação',
        description: 'As vagas são organizadas em páginas, facilitando a navegação mesmo com grande volume de dados.',
    },
    {
        feature: 'Busca com Filtros',
        description: 'Permite buscar vagas pelo nome e filtrar por tipo:',
        options: ["Estágio", "Emprego", "Jovem Aprendiz"]
    },
    {
        feature: 'Compartilhamento de Vagas',
        description: 'Cada vaga pode ser compartilhada facilmente por meio das opções nativas do dispositivo.',
    },
    {
        feature: 'Favoritar Vagas',
        description: 'Usuários podem salvar suas vagas favoritas para acessar mais tarde com praticidade.',
    },
    {
        feature: 'Modo Claro e Noturno',
        description: 'O aplicativo se adapta automaticamente ao tema do sistema, oferecendo suporte aos temas:',
        options: ["Claro", "Noturno"]
    },
];
