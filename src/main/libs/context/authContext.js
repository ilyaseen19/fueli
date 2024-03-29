import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate("/home");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const routeToPage = (page) => {
    navigate(page);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      routeToPage,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
