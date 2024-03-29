import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { CreateReportIconButton } from "../buttons";
import { YearMonth } from "../dates";
import BasicSelect from "../selects";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ToolBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 3,
        // backgroundColor: "white",
        borderRadius: 3
      }}
    >
      <BasicSelect />
      <YearMonth />
      <CreateReportIconButton />
    </Box>
  );
};
