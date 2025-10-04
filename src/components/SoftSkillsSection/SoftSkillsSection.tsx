import { Box, Grid, Typography, Chip, Zoom } from "@mui/material";
import { useRef } from "react";
import useOnScreen from "hooks/useOnScreen";
import { MyCV } from "components/constants/cv";

const SoftSkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <Box ref={ref} id="soft-skills" sx={{ mt: 10, mb: 8 }}>
      <Zoom in={isVisible} timeout={800}>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color="primary"
            fontWeight={600}
            mb={4}
            fontSize={{ xs: "8vw", md: "3vw" }}
          >
            Soft Skills
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            px={{ xs: 2, md: 6 }}
          >
            {MyCV.soft_skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  label={skill}
                  color="secondary"
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    borderRadius: "20px",
                    padding: "4px 8px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "#fff",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Zoom>
    </Box>
  );
};

export default SoftSkillsSection;
