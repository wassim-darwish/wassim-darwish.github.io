import { useMemo, useState } from "react";
import { Chip, Grid, Stack } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import Section from "./common/Section";
import Reveal from "./common/Reveal";
import {
  ProjectCategory,
  projectCategories,
  projects,
} from "./constants/projects";

export const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      subtitle="A cross-section of what I've shipped: DeFi staking dashboards, Web3 game platforms, trading apps, and multi-stakeholder operations tooling."
    >
      <Reveal>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          mb={{ xs: 4, md: 5 }}
        >
          {projectCategories.map((category) => {
            const active = filter === category;
            return (
              <Chip
                key={category}
                label={category}
                onClick={() => setFilter(category)}
                sx={{
                  cursor: "pointer",
                  px: 1,
                  borderRadius: "999px",
                  fontSize: { xs: "0.75rem", md: "0.8125rem" },
                  color: active ? "#fff" : "secondary.main",
                  border: "1px solid",
                  borderColor: active
                    ? "transparent"
                    : "rgba(148, 137, 167, 0.25)",
                  background: active
                    ? "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)"
                    : "transparent",
                  transition: "all 250ms ease",
                  "&:hover": {
                    background: active
                      ? "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)"
                      : "rgba(148, 137, 167, 0.12)",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Reveal>

      <Grid container spacing={{ xs: 2.5, md: 3.5 }} alignItems="stretch">
        {visible.map((project, index) => (
          <Grid item xs={12} sm={6} lg={4} key={`${project.title}-${filter}`}>
            <Reveal delay={index * 80} sx={{ height: "100%" }}>
              <ProjectCard {...project} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
