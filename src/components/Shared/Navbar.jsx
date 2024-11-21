import { Link, NavLink } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import UseAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = UseAuth();

  return (
    <header className="bg-base-100 border-b-2 py-2">
      <div className="navbar px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* ============ Mobile Navigation */}
            <ul
              tabIndex={0}
              className="flex flex-col gap-6 items-center justify-center dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-8 px-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                      : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                      : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                      : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                      : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                  }
                >
                  Contact US
                </NavLink>
              </li>
            </ul>
          </div>

          <a
            href="/"
            className="text-xl sm:text-4xl font-bold text-primary cursor-pointer"
          >
            GizmoMart
          </a>
        </div>

        {/* =========== Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                    : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                    : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                    : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-primary hover:text-primary duration-500 hover:duration-500"
                    : "text-xl font-medium text-slate-600 hover:text-primary duration-500 hover:duration-500"
                }
              >
                Contact US
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <UserDropDown />
          ) : (
            <button className="py-2 px-4 border-2 text-base border-primary bg-transparent rounded-xl sm:text-xl font-bold text-primary duration-700 hover:text-white hover:bg-primary hover:duration-700">
              <Link to="/register">Sign Up</Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
