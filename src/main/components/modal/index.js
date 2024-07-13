import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import BasicSelect from "../selects";
import { AppContext } from "../../libs/context/appContext";
import { MyButtonWithIcon } from "../buttons";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1.5,
  p: 2,
};

export default function MyModal({ open, toggleState }) {
  const { attendants, data, _handleChange, denomination, shift } =
    React.useContext(AppContext);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggleState}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                width: 800,
                display: "flex",
                flexDirection: "column",
                overFlow: "hidden",
                overFlowX: "scroll",
              }}
            >
              <Box sx={{ display: "flex", mb: 3 }}>
                <BasicSelect
                  label="Select Attendant"
                  handleChange={(value) =>
                    _handleChange({ value, field: "attendant" })
                  }
                  data={attendants}
                  value={data.attendant}
                  width={200}
                />
              </Box>
              <Box sx={{ display: "flex", mb: 3 }}>
                {denomination.map((item, index) => {
                  return (
                    <TextField
                      key={index}
                      id="filled-basic"
                      label={item}
                      variant="filled"
                      sx={{ width: 100, marginRight: 1 }}
                    />
                  );
                })}
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <MyButtonWithIcon
                color="error"
                title="Cancel"
                icon={<CancelOutlinedIcon />}
                variant="outlined"
                trigger={toggleState}
              />
              <MyButtonWithIcon
                title="Add Drop"
                icon={<SendOutlinedIcon />}
                variant="outlined"
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
