import { Grid, Typography, Box, useMediaQuery, Slide } from "@mui/material";
import rectangleBackgroundLeft from "../assets/rectangleBackgroundLeft.svg";
import rectangleBackgroundLeftMobile from "../assets/rectangleBackgroundLeftMobile.svg";
import { GradientText } from "./GradientText";
import { theme } from "../utils/theme";
import { useRef } from "react";
import useOnScreen from "hooks/useOnScreen";

const About = () => {
  const mobileSize = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        backgroundSize: "100%",
        zIndex: -999,
        alignItems: "center",
        py: 26,
        mt: -22,
      }}
      ref={ref}
    >
      <Grid container gap={8} justifyContent="center">
        <Grid item mb={4}>
          <Typography
            variant="h1"
            textAlign="center"
            fontSize={{ xs: "8vw", md: "6vw" }}
          >
            Developer
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          id="about"
          px={{ xs: "5%", md: 0 }}
          justifyContent="center"
          alignItems={{ xs: "flex-end", md: "center" }}
          py={{ xs: "8vw", md: "8vw" }}
          sx={{
            background: {
              xs: `transparent url('${rectangleBackgroundLeftMobile}') no-repeat`,
              md: `transparent url('${rectangleBackgroundLeft}') no-repeat`,
            },
            backgroundSize: "100%",
          }}
        >
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={800}
          >
            <Grid
              container
              item
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent={{ xs: "center", md: "flex-start" }}
              xs={12}
              md={7}
              gap={1.6}
              mt={{ xs: 2, md: -16.5 }}
            >
              {"<h1/>"}
              <Grid item>
                <Typography variant="h4">Hey</Typography>
              </Grid>
              <Grid
                item
                display="flex"
                alignItems="flex-end"
                mb={{ xs: "0.001rem", md: 0 }}
              >
                <GradientText
                  text="I'm Wassim"
                  fontSize={{ xs: "7vw", md: "3.25vw" }}
                />
                <Typography variant="h4" mb="3.25%">
                  .
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">Full-Stack Developer</Typography>
              </Grid>
              {"<h1/>"}
            </Grid>
          </Slide>
          {!mobileSize && (
            <Slide
              direction="left"
              in={isVisible}
              mountOnEnter
              unmountOnExit
              timeout={800}
            >
              <Grid item xs={4} mt={-8}>
                <Typography variant="h4" color="secondary.main" maxWidth="70%">
                  Let's bring your vision to life with cutting-edge development
                  and seamless execution.
                </Typography>
              </Grid>
            </Slide>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
