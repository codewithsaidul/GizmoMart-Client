import avatar from "../../assets/avatar.png"
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";


const UserDropDown = () => {

    const { user, LogOutUser } = UseAuth();

    const handleLogOut = () => {
        LogOutUser();
    }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
            <img src={`${user?.photoURL ? user.photoURL : avatar}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-100 rounded-box z-[1] w-52 pl-6 p-2 shadow"
      >
        <li>
          <Link to="/dashboard/overview">Dashboard</Link>
        </li>
        <li className="mt-4">
          <button onClick={handleLogOut} className="btn btn-primary btn-outline btn-sm">Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;