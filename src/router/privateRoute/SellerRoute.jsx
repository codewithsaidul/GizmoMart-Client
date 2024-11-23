import { Navigate, useLocation } from "react-router-dom";

import Loading from "../../components/Shared/Loading";
import PropTypes from "prop-types";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";


const SellerRoute = ( { children } ) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if (loading || !userData?.role) {
        return <Loading />
    }

    if (user && userData?.role === "seller") {
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace />
}

SellerRoute.propTypes = {
    children: PropTypes.node
}


export default SellerRoute