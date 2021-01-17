import React from "react";
import { Box, Container, Typography, Tabs, Tab } from "@material-ui/core";
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
    maxHeight: "50vh",
    backgroundColor: "#fff",
  },
  vtabs: {
    flexGrow: 1,
    backgroundColor: "none",
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "visible",
  },
  tabpanel: {
    overflow: "auto",
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.box1}>
          <div class="GlassBox">
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
                <Tab label="General Assembly" {...a11yProps(1)} />
              </Tabs>
              <TabPanel className={classes.tabpanel} value={value} index={0}>
                My position here is to gain experience working with a team to
                create applications for our clients to their needs. I
                communicate with the back-end developer to create components
                that the user can use.
              </TabPanel>
              <TabPanel className={classes.tabpanel} value={value} index={1}>
                Participated in a full-time immersive Software Engineering
                course, completing in-class projects, and personal projects
                focused on real-world applications of web development principles
                and best practices.
              </TabPanel>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}
