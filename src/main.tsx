import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import About from './components/about/About';
import { HelmetProvider } from 'react-helmet-async';
import Contact from './components/contact/Contact';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>,
)
