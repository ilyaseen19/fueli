import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AppContext } from "../../../libs/context/appContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShiftSaleRecord() {
  const [value, setValue] = React.useState(0);
  const { lubes } = React.useContext(AppContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="AM SHIFT" {...a11yProps(0)} />
          <Tab label="PM SHIFT" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          spacing={2}
          sx={{ overflow: "hidden", overflowX: "scroll", display: "flex" }}
        >
          <Grid item sx={{ marginRight: 4 }}>
            <Box sx={{ marginBottom: 2, borderColor: "divider" }}>
              <span style={{ fontWeight: "bold" }}>Gas Sales</span>
              <Box
                sx={{
                  border: 1,
                  marginBottom: 2,
                  borderColor: "divider",
                  width: 600,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    borderBottom: 0.5,
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    90/P#
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    1
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    2
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    3
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    4
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
              </Box>

              <Box sx={{ border: 1, marginBottom: 2, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    borderBottom: 0.5,
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    87/P#
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    1
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    2
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    3
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    4
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
              </Box>

              <Box sx={{ border: 1, marginBottom: 2, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    borderBottom: 0.5,
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    DE/P#
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    1
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    2
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Closing M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Opening M.R
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Diff Meter
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    Ret To Tank
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "10%",
                    }}
                  >
                    Sales
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ borderColor: "divider" }}>
              <span style={{ fontWeight: "bold" }}>Tank Reconciliation</span>
              <Box sx={{ border: 1, marginBottom: 2, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 1,
                    fontSize: 11,
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "8%",
                    }}
                  >
                    Prdct
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Opening STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    QT Recieved
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Closing STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    TNK Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    PMP Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    Var
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "8%",
                    }}
                  >
                    90
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Opening STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    QT Recieved
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Closing STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    TNK Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    PMP Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    Var
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "8%",
                    }}
                  >
                    87
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Opening STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    QT Recieved
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Closing STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    TNK Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    PMP Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    Var
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "8%",
                    }}
                  >
                    DE
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Opening STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    QT Recieved
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "18%",
                    }}
                  >
                    Closing STK
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    TNK Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    PMP Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      padding: 0.5,
                      width: "15%",
                    }}
                  >
                    Var
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Box sx={{ marginBottom: 2, borderColor: "divider" }}>
              <span style={{ fontWeight: "bold" }}>Lubes Sales</span>
              <Box sx={{ border: 1, marginBottom: 2, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    borderBottom: 0.5,
                    fontSize: 14,
                    width: 700,
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "30%",
                      fontWeight: "bold",
                    }}
                  >
                    Grade
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Pack
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    OP Stock
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Rcvd
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Cl Stock
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Sales
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    U Price
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Value
                  </Box>
                </Box>
                {lubes.map((lube, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderBottom: 0.5,
                        borderColor: "divider",
                        fontSize: 14,
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "30%",
                          textAlign: "left",
                        }}
                      >
                        {lube.grade}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.pack}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.openingStock}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.qtRecieved}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.closingStock}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.sales}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.unitPrice}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: "10%",
                        }}
                      >
                        {lube.sales * lube.unitPrice}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box sx={{ borderColor: "divider" }}>
              <span style={{ fontWeight: "bold" }}>Daily Summary</span>
              <Box sx={{ border: 1, marginBottom: 2, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderColor: "divider",
                    borderBottom: 0.5,
                    fontSize: 14,
                    width: 700,
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      fontWeight: "bold",
                    }}
                  >
                    Item
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Volume
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Unit Price
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                      fontWeight: "bold",
                    }}
                  >
                    Value
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    UNLEADED 90
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    145751
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    215.5
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    UNLEADED 87
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    145751
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    215.5
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    DIESEL
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    145751
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    215.5
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    1. FUEL TURNOVER
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    2. LUBRICANTS TURNOVER
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    3. OTHER TURNOVER
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    4. TOTAL TURNOVER (1+2+3)
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    5. ADVANCE CARD SALES
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    6. CREDIT CARD SALES
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    7. CHEQUE SALES
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    8. THEORIC CASH BALANCE (4-5-6-7)
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    9. REAL CASH BALANCE
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: 0.5,
                    borderColor: "divider",
                    fontSize: 11,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    10. DIFFERENCE (9-8)
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    -
                  </Box>
                  <Box
                    sx={{
                      borderColor: "divider",
                      borderRight: 1,
                      padding: 0.5,
                      width: "20%",
                    }}
                  >
                    314093.40
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ borderColor: "divider" }}>
              <span style={{ fontWeight: "bold" }}>Shortage/Overage</span>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderColor: "divider",
                  borderBottom: 0.5,
                  fontSize: 14,
                  width: 700,
                  border: 1,
                  marginBottom: 2,
                }}
              >
                {[
                  { attendant: "K.HUDSON", value: -2345 },
                  { attendant: "A.EARLE", value: +0.2 },
                  { attendant: "S.WINDOLF", value: +23 },
                ].map((att, index) => {
                  return (
                    <span key={index}>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          borderBottom: 1,
                          padding: 0.5,
                          width: 100,
                          fontWeight: "bold",
                        }}
                      >
                        {att.attendant}
                      </Box>
                      <Box
                        sx={{
                          borderColor: "divider",
                          borderRight: 1,
                          padding: 0.5,
                          width: 100,
                        }}
                      >
                        {att.value}
                      </Box>
                    </span>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        PM SHIFT
      </TabPanel>
    </Box>
  );
}
