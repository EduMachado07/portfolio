import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Index } from './index';
import { HomePage } from './HomePage/page';
import { ContactPage } from './Contact/page';
import { ProjectsPage } from './ProjectsPage/page';
import { AboutPage } from './AboutPage/page';
import { EstudosDpiPage } from './ProjectDetail/EstudosDpi/page';
import { EtecJobsPage } from './ProjectDetail/EtecJobs/page';
import { DevflowCrmPage } from './ProjectDetail/DevflowCrm/page';
import { SmartEmailAgentPage } from './ProjectDetail/SmartEmailAgent/page';
import { DevflowAnalyticsPage } from './ProjectDetail/DevflowAnalytics/page';
import { GradeHorariosPage } from './ProjectDetail/GradeHorarios/page';
import { FinXPage } from './ProjectDetail/FinX/page';
import { NodeServerTemplatePage } from './ProjectDetail/NodeServerTemplate/page';
import { RecommendationSystemPage } from './ProjectDetail/RecommendationSystem/page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'projetos', element: <ProjectsPage /> },
            { path: 'projetos/estudos-dpi', element: <EstudosDpiPage /> },
            { path: 'projetos/etec-jobs', element: <EtecJobsPage /> },
            { path: 'projetos/devflow', element: <DevflowCrmPage /> },
            { path: 'projetos/smart-email-agent', element: <SmartEmailAgentPage /> },
            { path: 'projetos/devflow-analytics', element: <DevflowAnalyticsPage /> },
            { path: 'projetos/fatec-1sem', element: <GradeHorariosPage /> },
            { path: 'projetos/fin-x', element: <FinXPage /> },
            { path: 'projetos/node-server-template', element: <NodeServerTemplatePage /> },
            { path: 'projetos/recommendation-system', element: <RecommendationSystemPage /> },
            { path: 'sobre', element: <AboutPage /> },
            { path: 'contato', element: <ContactPage /> },
            {
                path: '*',
                element: (
                    <main className="flex flex-1 flex-col items-center justify-center gap-2 px-[6%] py-32 text-center">
                        <h1 className="text-2xl font-bold text-zinc-900">Página em construção</h1>
                        <p className="text-zinc-500">Essa seção ainda está sendo desenvolvida.</p>
                    </main>
                ),
            },
        ],
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
