import { Box, Card, CardContent, Chip } from "@mui/material";
import { MyCV } from "components/constants/cv";
import { GradientText } from "components/GradientText";

/** Soft-skill chips, rendered alongside Languages inside the Education section. */
const SoftSkillsSection = () => {
  return (
    <Card elevation={0} sx={{ height: "100%" }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <GradientText
          text="Soft Skills"
          component="h3"
          fontSize={{ xs: "1.125rem", md: "1.25rem" }}
          fontWeight={600}
        />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2.5 }}>
          {MyCV.soft_skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                borderRadius: "999px",
                px: 0.5,
                fontSize: { xs: "0.75rem", md: "0.8125rem" },
                color: "common.white",
                backgroundColor: "rgba(148, 137, 167, 0.1)",
                border: "1px solid rgba(148, 137, 167, 0.2)",
                transition: "all 250ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "rgba(198, 66, 110, 0.6)",
                  backgroundColor: "rgba(198, 66, 110, 0.16)",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SoftSkillsSection;
