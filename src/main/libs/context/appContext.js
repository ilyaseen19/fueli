import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext();

const stations = [
  {
    station: "Albion",
    usRate: 130,
    products: [
      {
        product: "87",
        currentLevel: 11500,
        color: "#Fb435c",
        fullTankLevel87: 38000,
        sellingPrice: 212.10,
      },
      {
        product: "90",
        currentLevel: 14000,
        color: "#36a01f",
        fullTankLevel87: 22000,
        sellingPrice: 232.20,
      },
      {
        product: "Ado",
        currentLevel: 8000,
        color: "#2642af",
        fullTankLevel87: 22000,
        sellingPrice: 214.50,
      },
    ],
    dailyShifts: [
      {
        date: "24/25/2024",
        AM: {
          time: "6am-2pm",
          rates: {
            product1: 215.63,
            product2: 203.64,
            product3: 204.51,
          },
          attendants: [
            {
              name: "O. Thomas",
              pump: "oneAndTwo",
              drops: {
                fivethousands: [7, 5, 6, 3, 6, 2, 4, 1, 2],
                twothousands: [34],
                thousands: [21, 25, 22, 24, 16, 30, 35, 18, 2, 1],
                fivehundreds: [2, 12, 2, 4, 7, 2, 2],
                hundreds: [39, 41, 5, 40],
                fiftys: [22, 18, 18],
                coins: [],
                cheques: [],
                cCards: [113662.2],
                advance: [],
                tomCards: [],
                US: [6],
                pettyCash: [],
                misc: [],
              },
            },
            {
              name: "A. Earle",
              pump: "threeAndFourAndFiveAndSix",
              drops: {
                fivethousands: [2, 3, 8],
                twothousands: [2, 3, 8],
                thousands: [2, 3, 8],
                fivehundreds: [2, 3, 8],
                hundreds: [2, 3, 8],
                fiftys: [2, 3, 8],
                coins: [2, 3, 8],
                cheques: [],
                cCards: [200, 5000, 4500],
                advance: [200, 5000, 4500],
                tomCards: [200, 5000, 4500],
                US: [2, 3, 1],
                pettyCash: [500, 200],
                misc: [500, 200],
              },
            },
          ],
          pumps: {
            oneAndTwo: {
              openingN1:  3002208.57,
              returnN1: 0,
              openingN2: 3365191.30,
              returnN2: 0,
              openingE1: 5912023.60,
              returnE1: 0,
              openingE2: 6415442.70,
              returnE2: 0,
              closingN1: 3002950.97,
              closingN2: 3365905.82,
              closingE1: 5912657.71,
              closingE2: 6415984.00,
            },
            threeAndFour: {
              openingN3: 3572646.15,
              returnN3: 0,
              openingN4: 2873975.76,
              returnN4: 0,
              openingE3: 6787577.10,
              returnE3: 0,
              openingE4: 5084121.49,
              returnE4: 0,
              closingN3: 3573347.27,
              closingN4: 2874583.96,
              closingE3: 6788375.58,
              closingE4: 5084660.22,
            },
            fiveAndSix: {
              openingD5: 685122.32,
              returnD5: 0,
              openingD6: 3179.77,
              returnD6: 0,
              closingD5: 685381.31,
              closingD6: 3179.77,
            },
          },
          lubes: [
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
          ]
        },
        PM: {
          time: "2pm-10pm",
          rates: {
            product1: 215.63,
            product2: 203.64,
            product3: 204.51,
          },
          attendants: [
            {
              name: "M. Haughton",
              pump: "oneAndTwo",
              drops: {
                fivethousands: [2, 3, 8],
                twothousands: [2, 3, 8],
                thousands: [2, 3, 8],
                fivehundreds: [2, 3, 8],
                hundreds: [2, 3, 8],
                fiftys: [2, 3, 8],
                coins: [2, 3, 8],
                cheques: [],
                cCards: [200, 5000, 4500],
                advance: [200, 5000, 4500],
                tomCards: [200, 5000, 4500],
                US: [2, 3, 1],
                pettyCash: [500, 200],
                misc: [500, 200],
              },
            },
            {
              name: "A. Earle",
              pump: "threeAndFourAndFiveAndSix",
              drops: {
                fivethousands: [2, 3, 8],
                twothousands: [2, 3, 8],
                thousands: [2, 3, 8],
                fivehundreds: [2, 3, 8],
                hundreds: [2, 3, 8],
                fiftys: [2, 3, 8],
                coins: [2, 3, 8],
                cheques: [],
                cCards: [200, 5000, 4500],
                advance: [200, 5000, 4500],
                tomCards: [200, 5000, 4500],
                US: [2, 3, 1],
                pettyCash: [500, 200],
                misc: [500, 200],
              },
            },
          ],
          pumps: {
            oneAndTwo: {
              openingN1: 2995697.37,
              returnN1: 0,
              openingN2: 2995697.37,
              returnN2: 0,
              openingE1: 2995697.37,
              returnE1: 0,
              openingE2: 2995697.37,
              returnE2: 0,
              closingN1: 2995697.37,
              closingN2: 2995697.37,
              closingE1: 2995697.37,
              closingE2: 2995697.37,
            },
            threeAndFour: {
              openingN3: 2995697.37,
              returnN3: 0,
              openingN4: 2995697.37,
              returnN4: 0,
              openingE3: 2995697.37,
              returnE3: 0,
              openingE4: 2995697.37,
              returnE4: 0,
              closingN3: 2995697.37,
              closingN4: 2995697.37,
              closingE3: 2995697.37,
              closingE4: 2995697.37,
            },
            fiveAndSix: {
              openingD5: 0,
              returnD5: 0,
              openingD6: 685381.31,
              returnD6: 0,
              closingD5: 0,
              closingD6: 686036.35,
            },
          },
          lubes: [
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
          ]
        },
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

const attendants = [
  {
    name: "K.HUDSON",
    value: "K.HUDSON",
  },
  {
    name: "A.EARLE",
    value: "A.EARLE",
  },
  {
    name: "N.HENRY",
    value: "N.HENRY",
  },
];

const denomination = [
  5000,
  2000,
  1000,
  500,
  100,
  50,
  "coins",
  "cheque",
  "c.card",
  "advance",
  "t.card",
  "us",
];

const shift = [
  { name: "AM", lable: "AM" },
  { name: "PM", lable: "PM" },
];

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useLocalStorage("user", null);
  const [pageTitle, setTitle] = useState("dashboard");
  const [data, setData] = useState(stations);

  const routeToPage = (page) => {
    navigate(page);
  };

  const toggleTheme = () => {
    // save state to local storage

    if (theme === "dark") return setTheme("light");

    setTheme("dark");
  };

  const _handleChange = async (data) => {
    if (data.field === "attendant")
      return setData({
        ...data,
        attendant: data.value,
      });

    if (data.field === "shift")
      return setData({
        ...data,
        shift: data.value,
      });
  };

  return (
    <AppContext.Provider
      value={{
        stations,
        user,
        routeToPage,
        pageTitle,
        setTitle,
        theme,
        toggleTheme,
        attendants,
        data,
        _handleChange,
        denomination,
        shift,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
