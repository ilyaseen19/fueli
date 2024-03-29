import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext();

const stations = [
  {
    station: "Albion",
    products: [
      {
        product: "87",
        currentLevel: 11500,
        color: "#Fb435c",
        fullTankLevel87: 38000,
        sellingPrice: 178.2,
      },
      {
        product: "90",
        currentLevel: 14000,
        color: "#36a01f",
        fullTankLevel87: 22000,
        sellingPrice: 198.5,
      },
      {
        product: "Ado",
        currentLevel: 8000,
        color: "#2642af",
        fullTankLevel87: 22000,
        sellingPrice: 178.2,
      },
    ],
  },
  {
    station: "Barnett Street",
    products: [
      {
        product: "87",
        currentLevel: 24560,
        color: "#Fb435c",
        fullTankLevel87: 38000,
        sellingPrice: 178.2,
      },
      {
        product: "90",
        currentLevel: 10000,
        color: "#36a01f",
        fullTankLevel87: 22000,
        sellingPrice: 178.2,
      },
      {
        product: "Ulsd",
        currentLevel: 4500,
        color: "#631fa0",
        fullTankLevel87: 22000,
        sellingPrice: 208.2,
      },
    ],
  },
];

const lubes = [
  {
    grade: "Total 5w40",
    pack: "Qtr",
    openingStock: 28,
    qtRecieved: 0,
    closingStock: 25,
    sales: 3,
    unitPrice: 1290,
  },
  {
    grade: "Total 5w40",
    pack: "Qtr",
    openingStock: 28,
    qtRecieved: 0,
    closingStock: 25,
    sales: 3,
    unitPrice: 1290,
  },
  {
    grade: "Total 5w40",
    pack: "Qtr",
    openingStock: 28,
    qtRecieved: 0,
    closingStock: 25,
    sales: 3,
    unitPrice: 1290,
  },
  {
    grade: "Total 5w40",
    pack: "Qtr",
    openingStock: 28,
    qtRecieved: 0,
    closingStock: 25,
    sales: 3,
    unitPrice: 1290,
  },
  {
    grade: "Total 5w40",
    pack: "Qtr",
    openingStock: 28,
    qtRecieved: 0,
    closingStock: 25,
    sales: 3,
    unitPrice: 1290,
  },
  {
    grade: "Total 5w40",
    pack: "Qtr",
    openingStock: 28,
    qtRecieved: 0,
    closingStock: 25,
    sales: 3,
    unitPrice: 1290,
  },
];

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useLocalStorage("user", null);
  const [pageTitle, setTitle] = useState("dashboard");

  const routeToPage = (page) => {
    navigate(page);
  };

  const toggleTheme = () => {
    // save state to local storage

    if (theme === "dark") return setTheme("light");

    setTheme("dark");
  };

  return (
    <AppContext.Provider
      value={{
        stations,
        user,
        routeToPage,
        pageTitle,
        setTitle,
        lubes,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
