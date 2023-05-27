import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export const SellingPrice = ({ title, amount, color }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "30%",
        marginTop: 2,
        height: 150,
        textAlign: "center",
        padding: 2,
      }}
    >
      {title}
      <Divider />
      <span
        style={{
          display: "flex",
          fontWeight: "bold",
          color: color,
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {amount}
      </span>
    </Paper>
  );
};
