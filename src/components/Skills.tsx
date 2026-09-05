import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import { MyCV } from "./constants/cv";
import Section from "./common/Section";
import Reveal from "./common/Reveal";
import { GradientText } from "./GradientText";

export const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Skills & Tools"
      subtitle="Six years of full-stack delivery across fintech and Web3 — from design systems and component libraries on the frontend, to APIs, databases, and on-chain integrations behind them."
    >
      <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="stretch">
        {MyCV.skill_groups.map((group, index) => (
          <Grid item xs={12} sm={6} lg={4} key={group.title}>
            <Reveal delay={index * 70} sx={{ height: "100%" }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 350ms ease, box-shadow 350ms ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(198, 66, 110, 0.55)",
                    boxShadow: "0 24px 48px -30px rgba(198, 66, 110, 0.9)",
                  },
                  // Gradient hairline along the top edge of each card.
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "0 0 auto 0",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #642B73, #C6426E)",
                    opacity: 0.8,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack spacing={1.5}>
                    <GradientText
                      text={group.title}
                      component="h3"
                      fontSize={{ xs: "1.125rem", md: "1.25rem" }}
                      fontWeight={600}
                    />
                    <Typography
                      variant="body2"
                      color="secondary.main"
                      sx={{ fontWeight: 300, minHeight: { md: "4.5rem" } }}
                    >
                      {group.summary}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.75,
                        pt: 0.5,
                      }}
                    >
                      {group.items.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          sx={{
                            borderRadius: "0.5rem",
                            backgroundColor: "rgba(148, 137, 167, 0.1)",
                            border: "1px solid rgba(148, 137, 167, 0.18)",
                            color: "common.white",
                            fontSize: "0.75rem",
                            transition:
                              "background-color 250ms ease, border-color 250ms ease",
                            "&:hover": {
                              backgroundColor: "rgba(198, 66, 110, 0.18)",
                              borderColor: "rgba(198, 66, 110, 0.5)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
