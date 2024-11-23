import { NavLink } from "react-router-dom";
import { GrLogout, GrOverview } from "react-icons/gr";
import { FaCartPlus, FaHome, FaRegHeart, FaUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useUserData from "../../hooks/useUserData";
import UseAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";

const Seller = [
  {
    name: "All Products",
    icon: <AiOutlineProduct />,
    path: "/dashboard/all-products",
  },
  {
    name: "Add Product",
    icon: <MdOutlineAddShoppingCart />,
    path: "/dashboard/add-product",
  },
];
const Buyer = [
  {
    name: "Cart",
    icon: <FaCartPlus />,
    path: "/dashboard/carts",
  },
  {
    name: "Wishlist",
    icon: <FaRegHeart />,
    path: "/dashboard/wishlists",
  },
];

const MobileSidebar = ({ open, setOpen }) => {
  const userData = useUserData();

  const { LogOutUser } = UseAuth();

  const handleLogOut = () => {
    LogOutUser();
  };

  return (
    <div
      className={`bg-gray-400 min-h-screen absolute top-16 ${
        open ? "left-0 duration-700" : "-left-full duration-700"
      } border-r-2 border-slate-700 py-16 px-6 z-50`}
    >
      <ul className="flex flex-col gap-4">
        <li
          onClick={() => setOpen(false)}
          className="text-lg font-semibold btn"
        >
          <NavLink to="/" className="flex items-center gap-2">
            <FaHome size={24} />
            <p>Home</p>
          </NavLink>
        </li>

        <li
          onClick={() => setOpen(false)}
          className="text-lg font-semibold btn"
        >
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview size={24} />
            <p>Overview</p>
          </NavLink>
        </li>

        {/* ================ Buyer navigation */}
        {userData?.role === "buyer" &&
          Buyer.map((item, index) => (
            <li
              onClick={() => setOpen(false)}
              key={index}
              className="text-lg font-semibold btn"
            >
              <NavLink to={item.path} className="flex items-center gap-2">
                {item.icon}
                <p>{item.name}</p>
              </NavLink>
            </li>
          ))}

        {/* ================ Admin navigation */}
        {userData?.role === "admin" && (
          <li
            onClick={() => setOpen(false)}
            className="text-lg font-semibold btn"
          >
            <NavLink to="/dashboard/users" className="flex items-center gap-2">
              <FaUser size={24} />
              <p>Users</p>
            </NavLink>
          </li>
        )}

        {/* =============== Seller Navigation ================== */}
        {userData?.role === "seller" &&
          Seller.map((item, index) => (
            <li
              onClick={() => setOpen(false)}
              key={index}
              className="text-lg font-semibold btn"
            >
              <NavLink to={item.path} className="flex items-center gap-2">
                {item.icon}
                <p>{item.name}</p>
              </NavLink>
            </li>
          ))}

        <li className="text-lg font-semibold btn">
          <button
            onClick={handleLogOut}
            type="submit"
            className="flex items-center gap-2"
          >
            <GrLogout size={24} />
            <p>Log Out</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

MobileSidebar.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};

export default MobileSidebar;
