import React from "react";
import { useApp } from "../../libs/context/appContext";

export const Home = () => {
  const { user } = useApp();

  return <div>Home</div>;
};
