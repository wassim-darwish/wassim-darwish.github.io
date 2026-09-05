import {
  Box,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DownloadPDF } from "./common/DownloadPDF";
import { views } from "./Navbar";
import { social } from "./Hero";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box width="100%">
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="#banner">
          <Typography variant="h5" color="common.white" fontFamily="Unbounded">
            {"</Wassim>"}
          </Typography>
        </Link>
        <IconButton
          aria-label="Open navigation menu"
          aria-expanded={open}
          edge="end"
          onClick={() => setOpen(true)}
        >
          <MenuIcon sx={{ color: "common.white" }} />
        </IconButton>
      </Stack>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={300}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "26rem",
            backgroundColor: "rgba(18, 15, 23, 0.98)",
            backgroundImage: "none",
            borderLeft: "1px solid rgba(148, 137, 167, 0.14)",
          },
        }}
      >
        <Stack height="100%" justifyContent="space-between" p={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="common.white">
              {"</Wassim>"}
            </Typography>
            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon sx={{ color: "common.white" }} />
            </IconButton>
          </Stack>

          <Stack component="nav" spacing={2.5} py={4}>
            {views.map((item, index) => (
              <Link
                key={item.name}
                href={item.to}
                // Closing on navigate is what makes the anchor scroll visible.
                onClick={() => setOpen(false)}
                sx={{
                  fontSize: "1.375rem",
                  color: "secondary.main",
                  opacity: 0,
                  animation: `slideIn 400ms ease forwards ${index * 60}ms`,
                  "@keyframes slideIn": {
                    from: { opacity: 0, transform: "translateX(1.5rem)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    opacity: 1,
                    animation: "none",
                  },
                  "&:hover": { color: "common.white" },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Stack>

          <Stack spacing={2.5} alignItems="center">
            <Stack direction="row" spacing={1}>
              {social.map((item) => (
                <IconButton
                  key={item.name}
                  aria-label={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.whiteIcon}
                </IconButton>
              ))}
            </Stack>
            <DownloadPDF />
            <Typography
              variant="subtitle2"
              sx={{ opacity: 0.5, fontFamily: "Outfit" }}
            >
              © Wassim Darwish {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
