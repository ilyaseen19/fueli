import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", null);
  const [pageTitle, setTitle] = useState("dashboard");

  const routeToPage = (page) => {
    navigate(page);
  };

  const switchPage = (page) => {
    setTitle(page);
  };

  const value = useMemo(
    () => ({
      user,
      routeToPage,
      pageTitle,
      setTitle,
      switchPage,
    }),
    [user, pageTitle]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  return useContext(AppContext);
};
