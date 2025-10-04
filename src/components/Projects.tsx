import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ColorSharp2, ProjectImg1, ProjectImg2, ProjectImg3 } from "assets";
import { Grid, Typography } from "@mui/material";
import { Tab } from "react-bootstrap";
import ScrollIcon from "./icons/ScrollIcon";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjectImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjectImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjectImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjectImg3,
    },
  ];

  return (
    <Grid
      id="#projects"
      container
      justifyContent="center"
      px={{ xs: 1, md: 10 }}
      sx={{
        background: `transparent url('${ColorSharp2}') no-repeat`,
        backgroundPosition: "right",
      }}
      mt={20}
    >
      <Grid item mb={10}>
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
      <Grid item xs={12} textAlign="center">
        <TrackVisibility>
          {({ isVisible }) => (
            <Grid
              container
              alignItems="center"
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
              display="flex"
              flexDirection="column"
            >
              {/* <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  > */}
              <Grid item>
                <Typography variant="h1">Projects</Typography>
              </Grid>
              <Grid item xs={12} md={6} mb={10} mt={2}>
                <Typography variant="body2">
                  Led the development of innovative applications, utilizing
                  expertise in both frontend and backend technologies.
                  Successfully integrated complex systems and ensured seamless
                  user experiences across various platforms. Demonstrated strong
                  problem-solving skills and the ability to adapt to new
                  technologies and methodologies. Continuously focused on
                  optimizing performance and maintaining high standards of
                  security and scalability.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav> */}
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Grid container textAlign="center">
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Grid>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Grid>
              {/* </div> */}
            </Grid>
          )}
        </TrackVisibility>
      </Grid>
    </Grid>
  );
};
