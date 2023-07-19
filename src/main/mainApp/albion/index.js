import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AppContext, useApp } from "../../libs/context/appContext";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ToolBar } from "../../components/toolBar";
import { DailyReport } from "../../components/tabs";
import ShiftSaleRecord from "../../components/tabs/shiftSale";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Albion = () => {
  const { user } = React.useContext(AppContext);
  console.log(user);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ToolBar />
      </Grid>
      <Grid item xs={12}>
        <Item sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            component={"div"}
            sx={{ display: "flex", fontWeight: "bold" }}
          >
            Daily report for April 2023
          </Typography>
          <Divider />
          <DailyReport />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <ShiftSaleRecord />
        </Item>
      </Grid>
    </Grid>
  );
};
