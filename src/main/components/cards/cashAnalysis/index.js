import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import { columns } from "../../../data/columns";
import { headerRow } from "../../../data/headerRow";
import "@silevis/reactgrid/styles.css";
import "../../style.css";

const getPeople = [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
];

const subHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="outlined-read-only-input"
        label="Supervisor Name"
        defaultValue="J.Clarke"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        sx={{ fontSize: 13 }}
      />
      <TextField
        id="outlined-read-only-input"
        label="Date"
        defaultValue="15/05/23"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        sx={{ fontSize: 13 }}
      />
    </div>
  );
};

export default function CashAnalysis() {
  const [people] = React.useState(getPeople);

  const rows = [
    headerRow,
    ...people.map((person, idx) => ({
      rowId: idx,
      cells: [
        { type: "text", text: person.name },
        { type: "text", text: person.surname, className: "cells" },
      ],
    })),
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Cash Analysis
      </Typography>
      {subHeader()}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          marginTop: 1,
          overflow: "hidden",
          overflowX: "scroll",
        }}
      >
        <ReactGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
}
