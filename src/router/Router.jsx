import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Overview from "../pages/Dashboard/Overview";
import AdminRoute from "./privateRoute/AdminRoute";
import AllUser from "../pages/Dashboard/AllUser";
import SellerRoute from "./privateRoute/SellerRoute";
import AddProducts from "../pages/Dashboard/AddProducts";
import MyProducts from "../pages/Dashboard/MyProducts";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import Products from "../pages/Products";
import Carts from "../pages/Carts";
import Wishlists from "../pages/Wishlists";
import ProductDetails from "../pages/ProductDetails";
// import App from "../App";

const token = localStorage.getItem("access-token");
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
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }),
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

      // ============ User Route ==================
      {
        path: "/dashboard/carts",
        element: <Carts />,
      },
      {
        path: "/dashboard/wishlists",
        element: <Wishlists />,
      },

      // ============ Admin Route ==================
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },

      // ============ Seller Routes ============
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/update-product/:id",
        element: (
          <SellerRoute>
            <UpdateProduct />
          </SellerRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }),
      },
    ],
  },
]);

export default router;
