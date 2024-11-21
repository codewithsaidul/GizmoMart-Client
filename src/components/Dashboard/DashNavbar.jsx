import { Link } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";
import UserDropDown from "../Shared/UserDropDown";
import PropTypes from "prop-types";

const DashNavbar = ({ handleSidebar }) => {
  const { user } = UseAuth();

  return (
    <div className="bg-white shadow-md px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-1">
          <button onClick={handleSidebar}>
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
          </button>
          <h1 className="text-2xl font-bold ml-4">GizmoMart</h1>
        </div>

        <div>
          {user ? (
            <UserDropDown />
          ) : (
            <button className="py-2 px-4 border-2 text-base border-primary bg-transparent rounded-xl sm:text-xl font-bold text-primary duration-700 hover:text-white hover:bg-primary hover:duration-700">
              <Link to="/register">Sign Up</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


DashNavbar.propTypes = {
  handleSidebar: PropTypes.func
};
export default DashNavbar;
