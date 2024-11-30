import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { token, getRole } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const userRole = getRole();
  if (requiredRole && userRole !== requiredRole) {

    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
