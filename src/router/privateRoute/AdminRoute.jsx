import { Navigate, useLocation } from "react-router-dom";

import Loading from "../../components/Shared/Loading";
import PropTypes from "prop-types";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";


const AdminRoute = ( { children } ) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if (loading || !userData?.role) {
        return <Loading />
    }

    if (user && userData?.role === "admin") {
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace />
}

AdminRoute.propTypes = {
    children: PropTypes.node
}


export default AdminRoute