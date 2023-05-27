import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useApp } from "../../libs/context/appContext";
import Divider from "@mui/material/Divider";
import { Tank } from "../../components/tank";
import { SellingPrice } from "../../components/sellingPrice";
import { ToolBar } from "../../components/toolBar";
import { DailyReport } from "../../components/tabs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Albion = () => {
  const { user } = useApp();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ display: "flex", flexDirection: "column" }}>
          <Item>Current Tank Levels</Item>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <Tank title="87" level={11500} levelColor="#Fb435c" />
            <Tank title="90" level={14000} levelColor="#36a01f" />
            <Tank title="Ado" level={8000} levelColor="#2642af" />
          </span>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
          <Item>Current Selling Price</Item>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SellingPrice title="87" color="#Ea202f" amount={189.25} />
            <SellingPrice title="90" color="#028923" amount={215.2} />
            <SellingPrice title="Ado" color="#2642af" amount={218.25} />
          </span>
        </Grid>
        <Grid item spacing={2} xs={12}>
          <ToolBar />
        </Grid>
        <Grid item spacing={2} xs={12}>
          <Item sx={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontWeight: "bold" }}>
              Daily report for April 2023
            </div>
            <Divider />
            <DailyReport />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
