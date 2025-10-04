import { Grid } from "@mui/material";
import Hero from "./Hero";
import Experience from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Contact from "./Contact/Contact";
import { Banner } from "./common/Banner/Banner";
import EducationSection from "./EducationSection/EducationSection";
import LanguagesSection from "./LanguageSection/LanguageSection";
import SoftSkillsSection from "./SoftSkillsSection/SoftSkillsSection";

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
      <Grid id="banner" item xs={12}>
        <Banner />
      </Grid>
      {/* <Grid item xs={12}>
        <About />
      </Grid> */}
      <Grid id="about" item xs={12}>
        <Hero />
      </Grid>
      <Grid id="education" item xs={12}>
        <EducationSection />
        <LanguagesSection />
        <SoftSkillsSection />
      </Grid>
      <Grid id="skills" item xs={12}>
        <Skills />
      </Grid>
      <Grid id="experience" item xs={12}>
        <Experience />
      </Grid>
      <Grid id="projects" item xs={12}>
        <Projects />
      </Grid>
      <Grid id="contact" item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Home;
