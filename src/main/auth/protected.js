import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../libs/context/authContext";

const Protected = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
