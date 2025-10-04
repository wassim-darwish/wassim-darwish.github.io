import { Grid } from "@mui/material";
import Hero from "./Hero";
import Experience from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Contact from "./Contact/Contact";
import { Banner } from "./common/Banner/Banner";

const Home = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflowX: "hidden" }}
      gap={4}
    >
      <Grid item xs={12}>
        <Banner />
      </Grid>
      {/* <Grid item xs={12}>
        <About />
      </Grid> */}
      <Grid item xs={12}>
        <Hero />
      </Grid>
      <Grid item xs={12}>
        <Skills />
      </Grid>
      <Grid item xs={12}>
        <Experience />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Home;
