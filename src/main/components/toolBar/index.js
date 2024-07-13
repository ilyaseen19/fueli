import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { MyButtonWithIcon, MyIconButton } from "../buttons";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
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

export const ToolBar = ({ openModal, openSheetModal }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 3,
        borderRadius: 3,
      }}
    >
      {/* <YearMonth /> */}
      <MyButtonWithIcon
        color="success"
        trigger={openSheetModal}
        title="Create Sheet"
        variant="outlined"
        icon={<NoteAddIcon fontSize="medium" />}
      />
      <MyButtonWithIcon
        trigger={openModal}
        title="Create Drop"
        variant="outlined"
        icon={<WaterDropOutlinedIcon fontSize="medium" />}
      />
    </Box>
  );
};
