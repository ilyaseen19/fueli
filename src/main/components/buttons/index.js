import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const MyIconButton = ({ trigger, title, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        sx={{ margin: 1 }}
        size="medium"
        aria-label={title}
        onClick={trigger}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const MyButtonWithIcon = ({ trigger, title, icon, variant, color }) => {
  return (
    <Button
      sx={{ m: 1 }}
      endIcon={icon}
      variant={variant}
      size="small"
      color={color}
      onClick={trigger}
    >
      {title}
    </Button>
  );
};

export { MyIconButton, MyButtonWithIcon };
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
