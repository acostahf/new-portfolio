import React, { useRef, useEffect } from "react";
import { Box, Container, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
    padding: "10%",
    margin: "0 auto",

    // backgroundColor: "#fff",
  },
  vtabs: {
    // backgroundColor: "#06394a",
    color: "#627383",

    display: "flex",
    height: 224,

    padding: 15,
    margin: 20,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "visible",
    color: "#64ffda",
  },
  tabpanel: {
    overflow: "auto",
    padding: 5,
  },
  h4: {
    color: "#fff",
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
        </Box>

        <Box className={classes.vtabs}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs "
            className={classes.tabs}
          >
            <Tab label="Freelance " {...a11yProps(0)} />
            <Tab label="Nimorah" {...a11yProps(1)} />
            <Tab label="General Assembly" {...a11yProps(2)} />
          </Tabs>
          <TabPanel className={classes.tabpanel} value={value} index={0}>
            Currently I am a freelance developer creating websites, email
            templates, fixing issues with clients applications.
          </TabPanel>
          <TabPanel className={classes.tabpanel} value={value} index={1}>
            I was a front end developer for Nimorah. Developed components for
            client websites primarily using HTML, CSS, VUE, Laravel.`
          </TabPanel>
          <TabPanel className={classes.tabpanel} value={value} index={2}>
            Participated in a full-time immersive Software Engineering course,
            completing in-class projects, and personal projects focused on
            real-world applications of web development principles and best
            practices.
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
