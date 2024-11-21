import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading";
import UseAuth from "../../hooks/UseAuth"
import PropTypes from "prop-types";


const PrivateRoute = ( { children } ) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (user) {
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace />
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute