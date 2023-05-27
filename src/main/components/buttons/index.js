import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Tooltip from "@mui/material/Tooltip";

export const CreateReportIconButton = () => {
  return (
    <Tooltip title="Create Report">
      <IconButton
        sx={{ margin: 1 }}
        size="medium"
        tool
        aria-label="Create Report"
      >
        <NoteAddIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};
{
  /* <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton> */
}
