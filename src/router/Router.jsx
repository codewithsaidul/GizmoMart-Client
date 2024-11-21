import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Overview from "../pages/Dashboard/Overview";
// import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // ================= Dashboard =================
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Add your dashboard routes here
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },

      // ============ Seller Routes ============
      // {
      //   path: "/dashboard/my-product",
      //   element: (
      //     <SellerRoute>
      //       <MyProducts />
      //     </SellerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/add-product",
      //   element: (
      //     <SellerRoute>
      //       <AddProducts />
      //     </SellerRoute>
      //   ),
      // },
    ],
  },

]);

export default router;
