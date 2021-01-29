import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  ButtonBase,
} from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "none",
    minHeight: "100vh",
    margin: "0 auto",
  },
  container: {
    visibility: "hidden",
  },
  heading: {
    color: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 200,
    margin: 20,
    padding: 20,
  },
  h4: {
    color: "#fff",
    margin: 10,
  },
  h3: {
    color: "#f5f5f5",
    paddingBottom: 20,
  },
  subtitle: {
    color: "#627383",
    paddingBottom: 20,
    marginRight: 30,
  },
  img: {
    height: "100%",
    width: "100%",

    borderRadius: 10,
  },
  imgGrid: {
    paddingTop: 25,
  },
  body: {
    margin: 25,
  },
  icon: {
    minHeight: 30,
    maxHeight: 30,
    minWidth: 30,
    fill: "#627383",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 20,
    marginRight: 30,
  },
  line: {
    height: 2,
    backgroundColor: "#64ffda",
    marginBottom: 15,
  },
  listTxt: {
    color: "#f5f5f5",
  },
}));

const listData = [
  {
    title: "Stock Watch",
    description:
      "A full stack application to allow a user to log their trades" +
      "and see other users trades as well. The goal was to complete" +
      "this within two weeks with the requirements being" +
      "authentication, CRUD operations, and be presentable within two" +
      "weeks. Since then, I have redone the styling from bootstrap to" +
      "material-ui for a more of a clean look.",
    tech: ["Javascript", "Node.js", "Express", "MongoDb", "Material-ui"],
    img: "../../assests/stockwatch.png",
    imgUrl: "https://stockwatchlistapp.herokuapp.com/traders",
    github: "https://github.com/acostahf/stock-watchlist",
  },
  {
    title: " E-commerce app",
    description:
      "This is a full-stack e-commerce store that I created in a team" +
      "of 3 using python and django. This was to show an artist store" +
      "and provide a way of purchasing art pieces using crud" +
      " opperation. The goal was to complete this app over a time of 2" +
      "  weeks using nothing but github, slack, and zoom to communicate" +
      " with the team.",
    tech: ["Python", "Django", "Postgress", "Bootstrap"],
    img: "../../assests/artworld.png",
    imgUrl: "https://artworld-sei.herokuapp.com/",
    github: "https://github.com/acostahf/artworld",
  },
  {
    title: "Restaurant Website",
    description:
      "This is a full-stack restaurant website built using the MERN" +
      "stack. The goal for this project was to complete and deliver a" +
      "working project in order to graduate from the course. The" +
      "requirements for this was to use the MERN stack, CRUD" +
      " operations, authentication, deploy to heroku, and finish" +
      "within two weeks. Since completion of this website I have" +
      "continued to work on the styling and implementing an online" +
      "  ordering feature.",
    tech: ["React", "Express", "MongoDb", "Node.js", "Material-ui"],
    img: "../../assests/restaurant.png",
    imgUrl: "https://restaurant-website-01.herokuapp.com/",
    github: "https://github.com/acostahf/resturant-website",
  },
];

export default function Projects() {
  const classes = useStyles();
  let projects = useRef(null);
  useEffect(() => {
    // console.log(projects);
    const heading = projects.children[0];
    const firstTxt = projects.children[1];
    const secondTxt = projects.children[2];
    const thirdTxt = projects.children[3];
    TweenMax.to(projects, 0, {
      css: { visibility: "visible" },
    });
    gsap.from([heading, firstTxt], {
      y: 100,
      duration: 2,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 1,

      scrollTrigger: {
        trigger: "#projectsTrigger",
        // markers: true,
        start: "top center",
        toggleActions: "play complete complete complete",
      },
    });
    gsap.from([secondTxt], {
      y: 100,
      duration: 2,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 2,

      scrollTrigger: {
        trigger: "#projectsTrigger2",
        // markers: true,
        start: "top center",
        toggleActions: "play complete complete complete",
      },
    });
    gsap.from([thirdTxt], {
      y: 100,
      duration: 2,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 3,
      scrollTrigger: {
        trigger: "#projectsTrigger2",
        // markers: true,
        start: "top center",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  return (
    <div className={classes.root} id="projectsTrigger">
      <Container className={classes.container}>
        <Box>
          <Grid ref={(el) => (projects = el)} container spacing={6}>
            <Grid item xs={12} sm={12} md={12} className={classes.heading}>
              <Typography variant="h4" className={classes.h4}>
                A Few Creations
              </Typography>
              <Typography className={classes.line}></Typography>
            </Grid>

            {listData.map((item) => (
              <Grid container item className={classes.body} key={item.title}>
                <Grid item xs={12} sm={12} md={6} id="projectsTrigger2">
                  <Box display="flex" flexDirection="column" key={item.title}>
                    <Typography variant="h3" className={classes.h3}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.subtitle}
                    >
                      {item.description}
                    </Typography>
                    <Grid container item xs={12} spacing={1}>
                      {item.tech.map((t) => (
                        <Grid item xs={6} key={t}>
                          <Typography
                            className={classes.listTxt}
                            variant="body1"
                          >
                            {t}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box className={classes.iconWrapper}>
                    <IconButton href={item.github}>
                      <svg
                        className={classes.icon}
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0" />
                      </svg>
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.imgGrid}>
                  <ButtonBase
                    focusRipple
                    key={item.imgUrl}
                    href={item.imgUrl}
                    className={classes.imgBox}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Box id="img">
                      <img className={classes.img} src={item.img} alt="" />
                    </Box>
                  </ButtonBase>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
