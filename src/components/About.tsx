import { Grid, Typography, Box, Slide } from "@mui/material";
import { useRef } from "react";

const About = () => {
  // const mobileSize = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundSize: "100%",
        zIndex: -999,
      }}
      ref={ref}
    >
      <Grid
        container
        item
        xs={12}
        id="about"
        px={{ xs: "5%", md: 0 }}
        justifyContent="center"
        alignItems={{ xs: "flex-end", md: "center" }}
        py={{ xs: "32vw", md: "8vw" }}
      >
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={800}
        >
          <Grid
            container
            item
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
            // xs={12}
            // md={7}
            columnGap={{
              xs: "0.4rem",
              sm: "0.6rem",
              md: "0.65rem",
              xl: "0.75rem",
            }}
            mt={{ xs: "-12%", md: "-6%" }}
          >
            <Grid item>
              <Typography variant="h1" noWrap>
                About me
              </Typography>
            </Grid>
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
};

export default About;
