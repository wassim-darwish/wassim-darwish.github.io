import {
  AppBar,
  Box,
  Grid,
  Link,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { theme } from "utils/theme";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { DownloadPDF } from "./common/DownloadPDF";

export const views = [
  {
    to: "#about",
    name: "About",
  },
  // {
  //   to: "#hero",
  //   name: "Hero",
  // },
  {
    to: "#skills",
    name: "Skills",
  },
  {
    to: "#experience",
    name: "Experience",
  },
  {
    to: "#projects",
    name: "Projects",
  },
  {
    to: "#education",
    name: "Education",
  },
  {
    to: "#contact",
    name: "Contact",
  },
];

export default function Navbar() {
  const [transition, setTransition] = useState<boolean>(false);

  function HideOnScroll({ children }: { children: React.ReactElement }) {
    const trigger = useScrollTrigger({
      target: window ? window : undefined,
    });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const mobileSize = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <Box
      sx={{
        marginTop: "10vw",
      }}
    >
      <HideOnScroll>
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "primary.main",
          }}
        >
          <Slide
            direction="down"
            in={transition}
            mountOnEnter
            unmountOnExit
            timeout={1300}
          >
            <Toolbar
              disableGutters
              sx={{
                height: "5rem",
                marginX: { xs: 0, md: "5%" },
              }}
            >
              <Grid container>
                {mobileSize ? (
                  <Grid item xs={12}>
                    <MobileMenu />
                  </Grid>
                ) : (
                  <Grid
                    container
                    item
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={2}>
                      <Typography variant="h4" color="white">
                        {"</Wassim>"}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      item
                      justifyContent="flex-end"
                      xs={12}
                      md={6.8}
                      lg={7}
                      columnGap={{ md: "3.5rem" }}
                    >
                      {views.map((view) => (
                        <Grid width="fit-content" item key={view.name}>
                          <Link href={view.to}>
                            <Typography
                              variant="subtitle1"
                              color="secondary.main"
                              sx={{
                                ":hover": {
                                  color: "#ffffff",
                                  fontWeight: "600",
                                },
                              }}
                            >
                              {view.name}
                            </Typography>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={3.2}
                      lg={2.5}
                      columnGap="1.5rem"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Grid item>
                        <DownloadPDF />
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Toolbar>
          </Slide>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  );
}
