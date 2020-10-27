import { AppBar, Box, Tab, Tabs, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Sources from "../components/Sources";

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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const Admin = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="#000"
        >
          <Tab label="Manage Sources" />
          <Tab label="Manage Team" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Sources />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Manage Team
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default Admin;
