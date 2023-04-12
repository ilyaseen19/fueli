import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Tank = ({ title, level, levelColor }) => {
  var fullTankLevel87 = 38000;
  var fullTankLevel90 = 22000;
  var fullTankLevelAdo = 22000;

  const setLevel = () => {
    if (title === "87") {
      let calc = JSON.stringify((level / fullTankLevel87) * 100) + "%";
      return calc;
    }

    if (title === "90") {
      let calc = JSON.stringify((level / fullTankLevel90) * 100) + "%";
      return calc;
    }

    if (title === "Ado") {
      let calc = JSON.stringify((level / fullTankLevel90) * 100) + "%";
      return calc;
    }
  };

  return (
    <Paper
      sx={{
        width: "30%",
        height: 320,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          height: 300,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: setLevel(),
            minHeight: 20,
            backgroundColor: levelColor,
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {level}L
        </Paper>
      </Paper>
      <Item>{title}</Item>
    </Paper>
  );
};
