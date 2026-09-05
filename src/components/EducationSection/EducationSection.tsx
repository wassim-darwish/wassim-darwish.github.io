import { Card, CardContent, Grid, Link, Stack, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { MyCV } from "components/constants/cv";
import Section from "components/common/Section";
import Reveal from "components/common/Reveal";
import LanguagesSection from "components/LanguageSection/LanguageSection";
import SoftSkillsSection from "components/SoftSkillsSection/SoftSkillsSection";

const year = (date: string) => new Date(date).getFullYear();

const EducationSection = () => {
  return (
    <Section
      id="education"
      eyebrow="Background"
      title="Education & Strengths"
      subtitle="Formal grounding in information technology and telecommunications, plus the languages and working habits I bring to a team."
    >
      <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="stretch">
        {MyCV.education.map((edu, index) => (
          <Grid item xs={12} md={6} key={edu.degree}>
            <Reveal delay={index * 80} sx={{ height: "100%" }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  transition:
                    "transform 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 350ms ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(198, 66, 110, 0.55)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <SchoolOutlinedIcon
                      sx={{ color: "#C6426E", fontSize: "1.75rem", mt: 0.25 }}
                    />
                    <Stack spacing={0.75}>
                      <Typography variant="h4" component="h3">
                        {edu.degree}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="secondary.main"
                        sx={{ fontFamily: "Outfit" }}
                      >
                        {edu.institution}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="secondary.main"
                        sx={{ fontFamily: "Outfit" }}
                      >
                        {edu.location} · {year(edu.start_date)} –{" "}
                        {year(edu.end_date)}
                      </Typography>
                      {edu.website && (
                        <Link
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            fontSize: "0.8125rem",
                            width: "fit-content",
                            color: "#C6426E",
                            "&:hover": { color: "#fff" },
                          }}
                        >
                          Visit website →
                        </Link>
                      )}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>
        ))}

        <Grid item xs={12} md={7}>
          <Reveal delay={160} sx={{ height: "100%" }}>
            <LanguagesSection />
          </Reveal>
        </Grid>
        <Grid item xs={12} md={5}>
          <Reveal delay={220} sx={{ height: "100%" }}>
            <SoftSkillsSection />
          </Reveal>
        </Grid>
      </Grid>
    </Section>
  );
};

export default EducationSection;
