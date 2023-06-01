import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Tank } from "../../components/tank";
import { SellingPrice } from "../../components/sellingPrice";
import Paper from "@mui/material/Paper";
import { AppContext } from "../../libs/context/appContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  const { stations } = React.useContext(AppContext);

  return (
    <Grid container spacing={2}>
      {stations.map((sta, index) => {
        return (
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column" }}
            key={index}
          >
            <Item>Current {sta.station} Tank Levels</Item>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              {sta.products.map((prd, index) => {
                return (
                  <Tank
                    key={index}
                    title={prd.product}
                    level={prd.currentLevel}
                    levelColor={prd.color}
                  />
                );
              })}
            </span>
          </Grid>
        );
      })}
      {stations.map((station, index) => {
        return (
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column" }}
            key={index}
          >
            <Item>Current {station.station} Selling Price</Item>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {station.products.map((prd, ind) => {
                return (
                  <SellingPrice
                    title={prd.product}
                    color={prd.color}
                    amount={prd.sellingPrice}
                    key={ind}
                  />
                );
              })}
            </span>
          </Grid>
        );
      })}
    </Grid>
  );
};
