import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useApp } from "../../libs/context/appContext";
import { Tank } from "../../components/tank";

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
        <Grid
          item
          xs={8}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Tank title="87" level={11500} levelColor="#Ea202f" />
          <Tank title="90" level={14000} levelColor="#028923" />
          <Tank title="Ado" level={8000} levelColor="#2642af" />
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};
