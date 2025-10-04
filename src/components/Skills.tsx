import { ColorSharp } from "assets";
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Grid, Typography } from "@mui/material";
import ScrollIcon from "./icons/ScrollIcon";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      title: "Frontend",
      desc: "Proficient in React, React Native, Redux, and Axios for building responsive web and mobile applications.",
      src: meter1,
    },
    {
      title: "Backend",
      desc: "Experienced with Node.js and Express.js for creating scalable RESTful APIs.",
      src: meter2,
    },
    {
      title: "Database",
      desc: "Skilled in MongoDB and transitioning to Supabase for efficient data management.",
      src: meter3,
    },
    {
      title: "Authentication",
      desc: "Implemented secure authentication mechanisms using JWT and other best practices.",
      src: meter1,
    },
    {
      title: "Real-time Data",
      desc: "Utilized Socket.io for real-time updates and notifications.",
      src: meter2,
    },
    {
      title: "Development Tools",
      desc: "Familiar with Docker for containerization, Postman for API testing, and Git for version control.",
      src: meter2,
    },
    {
      title: "Testing",
      desc: "Knowledgeable in using Jest and Enzyme for unit and integration testing.",
      src: meter2,
    },
  ];

  return (
    <Grid
      id="#skills"
      container
      sx={{
        background: `transparent url('${ColorSharp}') no-repeat`,
      }}
      height="100vh"
      justifyContent="center"
    >
      <Grid item mb={10}>
        <ScrollIcon
          sx={{
            fontSize: "10rem",
            animation: "1.5s move infinite !important",
            "@keyframes move": {
              "0%": {
                opacity: 0.3,
              },
              "50%": {
                opacity: 1,
              },
              "100%": {
                opacity: 0.3,
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={12} textAlign="center" gap={4}>
        <Grid item my={4}>
          <Typography variant="h1">Skills</Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography
            variant="h6"
            px={{ xs: 3, md: 0 }}
            maxWidth={{ xs: 300, md: 500 }}
          >
            Proficient in developing{" "}
            <strong>responsive web and mobile applications</strong>
            using React and React Native. Experienced in creating scalable
            backends with Node.js and Express.js. Skilled in managing databases
            with MongoDB and Supabase.
          </Typography>
        </Grid>
        <Grid item xs={12} mt={10}>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
          >
            {skills.map((skill) => (
              <Grid item key={skill.title} textAlign="center">
                <img src={skill.src} alt={skill.title} />
                <Typography variant="h4">{skill.title}</Typography>
                <Typography variant="body2" px={10}>
                  {skill.desc}
                </Typography>
              </Grid>
            ))}
          </Carousel>
        </Grid>
      </Grid>
      {/* <img
        className="background-image-left"
        src={ColorSharp}
        alt="color sharp"
      /> */}
    </Grid>
  );
};
