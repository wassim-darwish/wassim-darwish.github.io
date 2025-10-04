import { Button, Grid, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ScrollIcon from "./icons/ScrollIcon";
import { theme } from "utils/theme";
import { experiences } from "./constants";
import { useState } from "react";

function Experience() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<number>();

  return (
    <Grid
      id="#experience"
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={7}
    >
      <Grid item textAlign="center">
        <ScrollIcon
          sx={{
            fontSize: "10rem",
            animation: "1.5s move infinite !important",
            "@keyframes move": {
              "0%": {
                opacity: 0.3,
              },
              "50%": {
                opacity: 1,
              },
              "100%": {
                opacity: 0.3,
              },
            },
          }}
        />
      </Grid>
      <Grid item mb={4}>
        <Typography
          variant="h1"
          textAlign="center"
          fontSize={{ xs: "8vw", md: "6vw" }}
        >
          Experience
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.title}
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
                color: "#dddddd",
              }}
              contentArrowStyle={{
                background:
                  "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
                borderRight:
                  "7px solid  linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
              }}
              date={experience.date}
              iconStyle={{
                display: "flex",
                flexDirection: "row",
                background:
                  "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
              icon={experience.icon}
            >
              <Typography variant="h4">{experience.title}</Typography>
              <Typography variant="h6">{experience.subtitle}</Typography>
              <Typography mt={2} fontWeight="800" variant="h6">
                Technologies:
              </Typography>
              <Typography variant="h6">{experience.technology}</Typography>
              <Typography variant="body2" my={4}>
                {experience.description}
              </Typography>

              {showDetails &&
                currentCard === index &&
                experience.responsibilities.map((responsibility, i) => (
                  <Grid
                    key={responsibility}
                    container
                    display="flex"
                    flexDirection="row"
                  >
                    <Grid item xs={1}>
                      <Typography key={responsibility} variant="h4">
                        {responsibility.includes("$") ? "" : "•"}
                      </Typography>
                    </Grid>
                    <Grid item xs={11}>
                      {responsibility.includes("$") && (
                        <Typography
                          ml={-5}
                          mt={2}
                          variant="h6"
                          color={theme.palette.grey[300]}
                          fontWeight={"900"}
                          sx={{
                            textDecoration: "underline",
                          }}
                        >
                          {responsibility.replace("$", "")}
                        </Typography>
                      )}
                      {!responsibility.includes("$") && (
                        <Grid container>
                          <Grid item>
                            <Typography variant="h6" fontWeight={"600"}>
                              {responsibility.substring(
                                0,
                                responsibility.indexOf("#")
                              )}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography key={responsibility} variant="h6">
                              {responsibility
                                .substring(
                                  responsibility.indexOf("#"),
                                  responsibility.length - 1
                                )
                                .replace("#", "")}
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                ))}

              <Grid item xs={12} textAlign="right">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 2,
                    fontWeight: "600",
                    borderColor: "#fff",
                    color: "#fff",
                  }}
                  onClick={() => {
                    setCurrentCard(index);
                    setShowDetails(
                      currentCard === index && showDetails ? false : true
                    );
                  }}
                >
                  {showDetails && currentCard === index
                    ? "Hide Details"
                    : "Show Details"}
                </Button>
              </Grid>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

export default Experience;
