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
import ShiftSaleRecord from "../../components/tabs/shiftSale";
import MyModal from "../../components/modal";
import SheetModal from "../../components/modal/sheetModal";
import CashAnalysisReport from "../../components/tabs/cashAnalysis";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Albion = () => {
  const { user } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [openSheet, setOpenSheet] = React.useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ToolBar
          openModal={() => setOpen(true)}
          openSheetModal={() => setOpenSheet(true)}
        />
      </Grid>
      <Grid item xs={12}>
        <Item sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            component={"div"}
            sx={{ display: "flex", fontWeight: "bold" }}
          >
            Cash Analysis for April 2024
          </Typography>
          <Divider />
          <CashAnalysisReport />
        </Item>
      </Grid>
      <Grid item xs={12}>
        {/* <Item>
          <ShiftSaleRecord />
        </Item> */}
        <SheetModal
          open={openSheet}
          toggleSheet={() => setOpenSheet(!openSheet)}
        />
        <MyModal open={open} toggleState={() => setOpen(!open)} />
      </Grid>
    </Grid>
  );
};
