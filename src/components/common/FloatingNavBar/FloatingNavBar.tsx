import { Grid, Link, Typography } from "@mui/material";
import { views } from "components/Navbar";
import React from "react";

function FloatingNavBar() {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      position="fixed"
      top="20%"
      columnGap={{ md: "3.5rem" }}
      sx={{
        background: "linear-gradient(242deg, #FF8BFF 16.55%, #1E9DFF 93.07%)",
        boxShadow: "3px 3px 3px 1px #1E9DFF",
        zIndex: 999,
        visibility: { xs: "hidden", md: "visible" },
      }}
      width="fit-content"
      m={4}
      borderRadius={14}
    >
      {views.map((view) => (
        <Grid
          width={40}
          height={40}
          borderRadius="50%"
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          key={view.name}
          bgcolor="white"
          m={1}
        >
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
              {view.name.substring(0, 1)}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default FloatingNavBar;
