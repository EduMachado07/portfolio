import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Index from './pages/Index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Index /> },
        ]
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;