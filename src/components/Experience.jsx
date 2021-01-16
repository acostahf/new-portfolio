import React from "react";
import { Box, Card, Container, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "10%",
    height: "50%",
  },
  vtabs: {
    flexGrow: 1,
    backgroundColor: "none",
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.root}>
      <Box className={classes.box1}>
        <div className={classes.vtabs}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs "
            className={classes.tabs}
          >
            <Tab label="Nimorah" {...a11yProps(0)} />
            <Tab label="Cipollina" {...a11yProps(1)} />
            <Tab label="General Assembly" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography
              p={20}
              variant="h6"
              component="h6"
              className={classes.tabText}
            >
              Front end developer @ Nimorah
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography
              p={20}
              variant="h2"
              component="h2"
              className={classes.tabText}
            >
              Server @ Cipollina
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </div>
      </Box>
    </Container>
  );
}
