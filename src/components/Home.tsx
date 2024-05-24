import { Grid } from "@mui/material";
import About from "./About";

const Home = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflowX: "hidden" }}
    >
      {/* <Grid container item>
        <TopBar />
      </Grid> */}
      {/* <Grid item>
        <Hero />
      </Grid> */}
      <Grid item>
        <About />
      </Grid>
      {/* <Grid container item>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default Home;
