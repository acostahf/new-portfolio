import React, { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavigateNextOutlined } from "@material-ui/icons";

gsap.registerPlugin(ScrollTrigger);

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
          <div>{children}</div>
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
    // flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "80vh",
    margin: "0 auto",

    // backgroundColor: "#fff",
  },
  vtabs: {
    // backgroundColor: "#06394a",
    color: "#627383",
    display: "flex",
    minHeight: 300,
    padding: 15,
    margin: 20,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "visible",
    color: "#f5f5f5",
    padding: 24,
  },
  tabpanel: {
    overflow: "auto",
    width: "100%",
  },
  h4: {
    color: "#f5f5f5",
    margin: 20,
  },
  heading: {
    margin: 20,
    padding: 20,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 2,
    backgroundColor: "#64ffda",
    marginBottom: 15,
  },
  list: {
    padding: 0,
  },
  icon: {
    color: "#64ffda",
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  let experience = useRef(null);
  useEffect(() => {
    TweenMax.to(experience, 0, {
      css: { visibility: "visible" },
    });

    gsap.from(experience, {
      y: 100,
      duration: 2,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 1,

      scrollTrigger: {
        trigger: "#experienceTrigger",
        // markers: true,
        start: "top center",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root} id="experienceTrigger">
      <Container ref={(el) => (experience = el)}>
        <Box className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            Where I've Worked
          </Typography>
          <Typography className={classes.line}></Typography>
        </Box>

        <Box className={classes.vtabs}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            // aria-label="Vertical tabs "
            className={classes.tabs}
          >
            <Tab label="Freelance " {...a11yProps(0)} />
            <Tab label="Nimaroh" {...a11yProps(1)} />
            <Tab label="General Assembly" {...a11yProps(2)} />
          </Tabs>
          <TabPanel className={classes.tabpanel} value={value} index={0}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Fix issues with a clients existing website primarily using
                  JavaScript, Vue.js, HTML, and CSS.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Develop email templates for clients and test for
                  responsiveness and compatibility with multiple email
                  providers.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Work on existing projects to develop into a service for future
                  clients using the MERN stack.
                </ListItemText>
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel className={classes.tabpanel} value={value} index={1}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Developed components for clients websites while learning the
                  stacks that were used as in Vue.js and Laravel.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Test responsiveness of the components to ensure a positive ui
                  experience.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Work closely with the other developer to work on multiple
                  websites being developed by the company to insure deadlines
                  were met.
                </ListItemText>
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel className={classes.tabpanel} value={value} index={2}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <NavigateNextOutlined />
                </ListItemIcon>
                <ListItemText>
                  Participated in a full-time immersive Software Engineering
                  course, completing in-class projects, and personal projects
                  focused on real-world applications of web development
                  principles and best practices.
                </ListItemText>
              </ListItem>
            </List>
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
