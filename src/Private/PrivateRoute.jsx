import { Navigate, useLocation } from "react-router-dom";
import { UseAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";
const PrivateRoute = ({ children }) => {
    const { user } = UseAuth();
    const location = useLocation();
    if (user) {
        return children;
    }
  
     return <Navigate to={`/login?redirect=${location.pathname}`} />;
};

export default PrivateRoute;