import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Tank } from "../../components/tank";
import { SellingPrice } from "../../components/sellingPrice";
import Paper from "@mui/material/Paper";
import { AppContext } from "../../libs/context/appContext";
import Divider from "@mui/material/Divider";

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
      <Grid
        item
        xs={5.5}
        sx={{ display: "flex", flexDirection: "column", marginRight: 5 }}
      >
        <Item>Current {stations[0].station} Tank Levels</Item>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          {stations[0].products.map((prd, index) => {
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
      <Divider orientation="vertical" flexItem />
      <Grid
        item
        xs={5.5}
        sx={{ display: "flex", flexDirection: "column", marginLeft: 3 }}
      >
        <Item>Current {stations[1].station} Tank Levels</Item>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          {stations[1].products.map((prd, index) => {
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
      <Grid item xs={5.5} sx={{ display: "flex", flexDirection: "column", marginRight: 5 }}>
        <Item>Current {stations[0].station} Selling Price</Item>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {stations[0].products.map((prd, ind) => {
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
      <Divider orientation="vertical" flexItem />
      <Grid item xs={5.5} sx={{ display: "flex", flexDirection: "column", marginLeft: 3 }}>
        <Item>Current {stations[1].station} Selling Price</Item>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {stations[1].products.map((prd, ind) => {
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
    </Grid>
  );
};
