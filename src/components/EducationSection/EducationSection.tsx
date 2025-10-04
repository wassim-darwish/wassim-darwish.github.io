import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import { theme } from "utils/theme";
import useOnScreen from "hooks/useOnScreen";
import { useRef } from "react";
import { MyCV } from "components/constants/cv";

const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box ref={ref} id="education" sx={{ mt: 10, mb: 8 }}>
      <Zoom in={isVisible} timeout={800}>
        <Box>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary"
            fontWeight={600}
            mb={4}
            fontSize={{ xs: "8vw", md: "3vw" }}
          >
            Education
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            px={{ xs: 2, md: 6 }}
          >
            {MyCV.education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 4,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {edu.degree}
                    </Typography>
                    <Typography color="text.secondary">
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      {edu.location}
                    </Typography>
                    <Typography variant="body2" mt={0.5}>
                      {new Date(edu.start_date).getFullYear()} –{" "}
                      {new Date(edu.end_date).getFullYear()}
                    </Typography>
                    {edu.website && (
                      <Typography
                        variant="body2"
                        mt={1}
                        color="primary"
                        component="a"
                        href={edu.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Website
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Zoom>
    </Box>
  );
};

export default EducationSection;
