import { Stack } from "@mui/material";
import Hero from "./Hero";
import Experience from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Contact from "./Contact/Contact";
import { Banner } from "./common/Banner/Banner";
import EducationSection from "./EducationSection/EducationSection";

/**
 * Each section owns its own id, vertical rhythm, and container width, so this
 * file stays a plain running order rather than a layout grid.
 */
const Home = () => {
  return (
    <Stack component="main" width="100%" sx={{ overflowX: "clip" }}>
      <Banner />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <EducationSection />
      <Contact />
    </Stack>
  );
};

export default Home;
