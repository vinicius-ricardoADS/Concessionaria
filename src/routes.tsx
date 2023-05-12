import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
        </Route>
    )
);

export default function Router() {
    return <RouterProvider router={router} />;
}
