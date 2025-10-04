import { Box, Grid, Typography, Card, CardContent, Zoom } from "@mui/material";
import useOnScreen from "hooks/useOnScreen";
import { useRef } from "react";
import { MyCV } from "components/constants/cv";

const LanguagesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const languages = MyCV.languages;

  return (
    <Box ref={ref} id="languages" sx={{ mt: 10, mb: 8 }}>
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
            Languages
          </Typography>

          <Grid
            container
            justifyContent="center"
            spacing={3}
            px={{ xs: 2, md: 6 }}
          >
            {Object.entries(languages).map(([lang, value]) => (
              <Grid item xs={12} md={4} key={lang}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": { boxShadow: "0 6px 12px rgba(0,0,0,0.15)" },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {lang}
                    </Typography>
                    {typeof value === "string" ? (
                      <Typography variant="body2" color="text.secondary">
                        {value}
                      </Typography>
                    ) : (
                      Object.entries(value).map(([skill, level]) => (
                        <Typography
                          key={skill}
                          variant="body2"
                          color="text.secondary"
                        >
                          {skill.replaceAll("_", " ")}: {level}
                        </Typography>
                      ))
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

export default LanguagesSection;
