import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CashAnalysis from "../../cards/cashAnalysis";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const tabIndex = [
  { day: 1, am: {}, pm: {} },
  { day: 2, am: {}, pm: {} },
  { day: 3, am: {}, pm: {} },
  { day: 4, am: {}, pm: {} },
  { day: 5, am: {}, pm: {} },
  { day: 6, am: {}, pm: {} },
  { day: 7, am: {}, pm: {} },
  { day: 8, am: {}, pm: {} },
  { day: 9, am: {}, pm: {} },
  { day: 10, am: {}, pm: {} },
  { day: 11, am: {}, pm: {} },
  { day: 12, am: {}, pm: {} },
  { day: 13, am: {}, pm: {} },
  { day: 14, am: {}, pm: {} },
  { day: 15, am: {}, pm: {} },
  { day: 16, am: {}, pm: {} },
  { day: 17, am: {}, pm: {} },
  { day: 18, am: {}, pm: {} },
  { day: 19, am: {}, pm: {} },
  { day: 20, am: {}, pm: {} },
  { day: 21, am: {}, pm: {} },
  { day: 22, am: {}, pm: {} },
  { day: 23, am: {}, pm: {} },
  { day: 24, am: {}, pm: {} },
  { day: 25, am: {}, pm: {} },
  { day: 26, am: {}, pm: {} },
  { day: 27, am: {}, pm: {} },
  { day: 28, am: {}, pm: {} },
  { day: 29, am: {}, pm: {} },
  { day: 30, am: {}, pm: {} },
  { day: 31, am: {}, pm: {} },
];

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function DailyReport() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ p: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        aria-label="full width tabs example"
      >
        {tabIndex.map((tab, index) => {
          return (
            <Tab label={tab.day} key={index} {...a11yProps(index)} wrapped />
          );
        })}
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabIndex.map((panel, index) => {
          return (
            <TabPanel
              key={index}
              value={value}
              index={index}
              dir={theme.direction}
            >
              <CashAnalysis />
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Box>
  );
}
