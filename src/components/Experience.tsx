import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./constants";
import Section from "./common/Section";

const cardGradient =
  "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)";

function Experience() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggle = (index: number) =>
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );

  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience"
      subtitle="From native Android freelancing to leading a frontend team — six years across fintech, Web3, and industrial platforms in the UAE, Switzerland, and remote teams."
      maxWidth="lg"
    >
      <Box
        sx={{
          // The timeline library sizes its own padding; trim it on small screens.
          "& .vertical-timeline": { padding: { xs: "1rem 0", md: "2rem 0" } },
          "& .vertical-timeline-element-content": {
            background: cardGradient,
            color: "#f2eef7",
            padding: { xs: "1.25rem", md: "1.75rem" },
          },
          "& .vertical-timeline-element-content-arrow": {
            borderRightColor: "#642B73",
          },
        }}
      >
        <VerticalTimeline lineColor="rgba(148, 137, 167, 0.25)">
          {experiences.map((experience, index) => {
            const isOpen = expanded.includes(index);
            return (
              <VerticalTimelineElement
                key={experience.title}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: cardGradient,
                  color: "#f2eef7",
                  boxShadow: "0 24px 50px -30px rgba(0,0,0,0.95)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #642B73" }}
                date={experience.date}
                iconStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#181420",
                  border: "2px solid rgba(198, 66, 110, 0.6)",
                }}
                icon={experience.icon}
              >
                <Stack spacing={0.5}>
                  <Typography variant="h4" component="h3">
                    {experience.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Outfit", fontWeight: 600 }}
                  >
                    {experience.role}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: "Outfit", opacity: 0.8 }}
                  >
                    {experience.subtitle}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{ mt: 2, fontWeight: 300, opacity: 0.95 }}
                >
                  {experience.description}
                </Typography>

                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 2 }}
                >
                  {experience.technology.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        borderRadius: "0.5rem",
                        backgroundColor: "rgba(255,255,255,0.14)",
                        color: "#fff",
                        fontSize: "0.6875rem",
                        height: 24,
                      }}
                    />
                  ))}
                </Box>

                <Collapse in={isOpen} timeout={400} unmountOnExit>
                  <Stack spacing={2.5} mt={3}>
                    {experience.responsibilities.map((group, groupIndex) => (
                      <Stack key={group.group ?? groupIndex} spacing={1}>
                        {group.group && (
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              fontSize: "0.75rem",
                              opacity: 0.85,
                            }}
                          >
                            {group.group}
                          </Typography>
                        )}
                        <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5 }}>
                          {group.items.map((item) => (
                            <Typography
                              key={item.text}
                              component="li"
                              variant="body2"
                              sx={{ fontWeight: 300, opacity: 0.95 }}
                            >
                              {item.lead && (
                                <Box
                                  component="span"
                                  sx={{ fontWeight: 600, mr: 0.5 }}
                                >
                                  {item.lead}
                                </Box>
                              )}
                              {item.text}
                            </Typography>
                          ))}
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Collapse>

                <Box sx={{ textAlign: "right", mt: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    endIcon={
                      <ExpandMoreIcon
                        sx={{
                          transition: "transform 300ms ease",
                          transform: isOpen ? "rotate(180deg)" : "none",
                        }}
                      />
                    }
                    sx={{
                      borderColor: "rgba(255,255,255,0.6)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.12)",
                      },
                    }}
                  >
                    {isOpen ? "Hide details" : "Show details"}
                  </Button>
                </Box>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Box>
    </Section>
  );
}

export default Experience;
