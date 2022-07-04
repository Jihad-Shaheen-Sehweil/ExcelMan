import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const location = useLocation();

    return isAuthenticated === true ? (
        children
    ) : (
        <Navigate to="/auth" replace state={{ path: location.pathname }} />
    );
};

export default RequireAuth;
