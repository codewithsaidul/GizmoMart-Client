import { Link } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import UserDropDown from "../Shared/UserDropDown";

const DashNavbar = () => {
  const { user } = UseAuth();
  const userData = useUserData();
  console.log(userData);
  return (
    <div className="bg-white shadow-md px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold ml-4">GizmoMart</h1>

        <div >
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

export default DashNavbar;
