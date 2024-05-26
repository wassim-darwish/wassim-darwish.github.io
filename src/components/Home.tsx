import { Grid } from "@mui/material";
import About from "./About";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflowX: "hidden" }}
    >
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item key="#about">
        <About />
      </Grid>
      <Grid item key="#hero">
        <Hero />
      </Grid>

      {/* <Grid container item>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default Home;
