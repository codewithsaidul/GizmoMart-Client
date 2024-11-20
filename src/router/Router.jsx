import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
// import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Product />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])



export default router;