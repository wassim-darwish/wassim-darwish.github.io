import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { MyCV } from "components/constants/cv";
import { GradientText } from "components/GradientText";

/**
 * Language proficiency block. Rendered inside the Education section rather than
 * as a standalone section, so the "background" content reads as one unit.
 */
const LanguagesSection = () => {
  return (
    <Card elevation={0} sx={{ height: "100%" }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <GradientText
          text="Languages"
          component="h3"
          fontSize={{ xs: "1.125rem", md: "1.25rem" }}
          fontWeight={600}
        />
        <Stack spacing={2.5} mt={2}>
          {MyCV.languages.map((language) => (
            <Box key={language.name}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
                flexWrap="wrap"
                gap={1}
              >
                <Typography variant="h6" sx={{ fontFamily: "Outfit" }}>
                  {language.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="secondary.main"
                  sx={{ fontFamily: "Outfit" }}
                >
                  {language.level}
                </Typography>
              </Stack>
              {language.detail.length > 0 && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 0.75,
                  mt: 1.25,
                }}
              >
                {language.detail.map((entry) => (
                  <Stack
                    key={entry.skill}
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      px: 1.25,
                      py: 0.75,
                      borderRadius: "0.5rem",
                      backgroundColor: "rgba(148, 137, 167, 0.08)",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="secondary.main"
                      sx={{ fontFamily: "Outfit" }}
                    >
                      {entry.skill}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontFamily: "Outfit", fontWeight: 600 }}
                    >
                      {entry.level}
                    </Typography>
                  </Stack>
                ))}
              </Box>
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LanguagesSection;
