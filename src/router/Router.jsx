import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home";
// import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])



export default router;