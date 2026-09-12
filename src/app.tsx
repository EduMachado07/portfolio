import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Index } from './v2';
import { HomePage } from './v2/HomePage/page';
import { ContactPage } from './v2/Contact/page';
import { ProjectsPage } from './v2/ProjectsPage/page';
import { AboutPage } from './v2/AboutPage/page';
// import Layout from './pages/LayoutPage';
// import Index from './pages/IndexPage';
// import Projects from './pages/ProjectsPage';
// import Contact from './pages/ContactPage';
// import About from './pages/AboutPage';
// import FinX from './pages/projects/FinX/page';
// import EtecJobs from './pages/projects/EtecJobs/page';
// import PrimarySem from './pages/projects/Fatec/primarySem/page';

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <Layout />,
    //     children: [
    //         { index: true, element: <Navigate to='/home' />, },
    //         { path: 'home', element: <Index />, },
    //         { path: 'projects', element: <Projects /> },
    //         { path: 'about', element: <About /> },
    //         { path: 'contact', element: <Contact /> },
    //         // projects
    //         { path: 'projects/fin-x', element: <FinX /> },
    //         { path: 'projects/etec-jobs', element: <EtecJobs /> },
    //         { path: 'projects/fatec-1sem', element: <PrimarySem /> },
    //     ]
    // },
    {
        path: '/',
        element: <Index />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'projetos', element: <ProjectsPage /> },
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