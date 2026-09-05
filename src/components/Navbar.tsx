import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { useMemo } from "react";
import { theme } from "utils/theme";
import MobileMenu from "./MobileMenu";
import { DownloadPDF } from "./common/DownloadPDF";
import useActiveSection from "hooks/useActiveSection";

export const views = [
  { to: "#banner", name: "Home", id: "banner" },
  { to: "#about", name: "About", id: "about" },
  { to: "#skills", name: "Skills", id: "skills" },
  { to: "#experience", name: "Experience", id: "experience" },
  { to: "#projects", name: "Projects", id: "projects" },
  { to: "#education", name: "Education", id: "education" },
  { to: "#contact", name: "Contact", id: "contact" },
];

export default function Navbar() {
  const mobileSize = useMediaQuery(theme.breakpoints.down("md"));
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 });

  const sectionIds = useMemo(() => views.map((view) => view.id), []);
  const active = useActiveSection(sectionIds);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (t) => t.zIndex.appBar + 1,
          backgroundColor: scrolled
            ? "rgba(18, 15, 23, 0.82)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(148, 137, 167, 0.14)"
            : "1px solid transparent",
          transition:
            "background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "4rem", md: "4.75rem" },
              gap: { md: 1.5, lg: 2 },
            }}
          >
            {mobileSize ? (
              <MobileMenu />
            ) : (
              <>
                <Link
                  href="#banner"
                  sx={{ flexShrink: 0, "&:hover": { opacity: 0.85 } }}
                >
                  <Typography
                    variant="h4"
                    color="common.white"
                    sx={{ fontSize: { md: "1.125rem", lg: "1.375rem" } }}
                  >
                    {"</Wassim>"}
                  </Typography>
                </Link>

                <Stack
                  direction="row"
                  component="nav"
                  aria-label="Main navigation"
                  spacing={{ md: 1.75, lg: 3.5 }}
                  sx={{ flexGrow: 1, justifyContent: "center", minWidth: 0 }}
                >
                  {views.map((view) => {
                    const isActive = active === view.id;
                    return (
                      <Link
                        key={view.name}
                        href={view.to}
                        aria-current={isActive ? "true" : undefined}
                        sx={{
                          position: "relative",
                          fontSize: { md: "0.75rem", lg: "0.875rem" },
                          whiteSpace: "nowrap",
                          color: isActive ? "common.white" : "secondary.main",
                          fontWeight: isActive ? 600 : 500,
                          py: 0.5,
                          "&:hover": { color: "common.white" },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            height: "2px",
                            width: isActive ? "100%" : "0%",
                            borderRadius: "2px",
                            background:
                              "linear-gradient(90deg, #642B73, #C6426E)",
                            transition: "width 300ms ease",
                          },
                          "&:hover::after": { width: "100%" },
                        }}
                      >
                        {view.name}
                      </Link>
                    );
                  })}
                </Stack>

                <Box sx={{ flexShrink: 0 }}>
                  <DownloadPDF />
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Spacer matching the fixed AppBar height. */}
      <Box sx={{ height: { xs: "4rem", md: "4.75rem" } }} />
    </>
  );
}
