import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './pages/LayoutPage';
import Index from './pages/IndexPage';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import FinX from './pages/projects/FinX/page';
import EtecJobs from './pages/projects/EtecJobs/page';
import PrimarySem from './pages/projects/Fatec/primarySem/page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Navigate to='/home' />, },
            { path: 'home', element: <Index />, },
            { path: 'projects', element: <Projects /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            // projects
            { path: 'projects/fin-x', element: <FinX /> },
            { path: 'projects/etec-jobs', element: <EtecJobs /> },
            { path: 'projects/fatec-1sem', element: <PrimarySem /> },
        ]
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;