import {
  Drawer,
  IconButton,
  Stack,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DownloadPDF } from "./common/DownloadPDF";
import { views } from "./Navbar";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px="5%"
        >
          <Typography variant="h5" color="white">
            {"</Wassim>"}
          </Typography>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon sx={{ color: "common.white" }} />
          </IconButton>
        </Stack>
      </Grid>
      <Drawer variant="persistent" anchor="right" open={open}>
        <Grid
          container
          flexDirection="column"
          justifyContent="space-between"
          p="7% 5% 3% 5%"
          width="100vw"
          height="100vh"
        >
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            height="fit-content"
          >
            <Grid item xs={6}>
              <Typography variant="h4" color="white">
                {"</Wassim>"}
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <IconButton onClick={handleDrawerClose} sx={{ padding: 0 }}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container item height="fit-content" rowGap="1.5rem">
            {views.map((item) => (
              <Grid item xs={12} key={item.name}>
                <Link fontSize="1.25rem" href={item.to}>
                  {item.name}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid container item height="fit-content" rowGap="1.5rem">
            <Grid item xs={12} textAlign="center">
              <DownloadPDF />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography
                variant="subtitle2"
                sx={{
                  opacity: 0.5,
                  fontFamily: "Outfit",
                }}
              >
                ©Wassim Darwish {new Date().getFullYear()} Copyright
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </Grid>
  );
};

export default MobileMenu;
