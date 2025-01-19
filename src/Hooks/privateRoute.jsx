import { Navigate } from "react-router-dom";
import { UseAuth } from "./useAuth";

const privateRoute = ({ children }) => {
    const { user } = UseAuth();
    if (user) {
        return children;
    }

    return <Navigate to="/" />;
};

export default privateRoute;