import { Box, Link, Stack, Tooltip } from "@mui/material";
import { useMemo } from "react";
import { views } from "components/Navbar";
import useActiveSection from "hooks/useActiveSection";

/**
 * Vertical dot rail pinned to the right edge on large screens. Purely a
 * navigation convenience, so it's hidden below md rather than duplicated there.
 */
function FloatingNavBar() {
  const sectionIds = useMemo(() => views.map((view) => view.id), []);
  const active = useActiveSection(sectionIds);

  return (
    <Stack
      component="nav"
      aria-label="Section navigation"
      spacing={1.5}
      sx={{
        position: "fixed",
        right: { md: "1.25rem", lg: "1.75rem" },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1200,
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        p: 1,
        borderRadius: "999px",
        border: "1px solid rgba(148, 137, 167, 0.16)",
        backgroundColor: "rgba(18, 15, 23, 0.6)",
        backdropFilter: "blur(10px)",
      }}
    >
      {views.map((view) => {
        const isActive = active === view.id;
        return (
          <Tooltip key={view.name} title={view.name} placement="left" arrow>
            <Link
              href={view.to}
              aria-label={view.name}
              aria-current={isActive ? "true" : undefined}
              sx={{ display: "flex", p: 0.25 }}
            >
              <Box
                sx={{
                  width: isActive ? 10 : 8,
                  height: isActive ? 10 : 8,
                  borderRadius: "50%",
                  background: isActive
                    ? "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)"
                    : "rgba(148, 137, 167, 0.45)",
                  boxShadow: isActive
                    ? "0 0 0 4px rgba(198, 66, 110, 0.18)"
                    : "none",
                  transition: "all 300ms ease",
                  "&:hover": { background: "#C6426E", transform: "scale(1.2)" },
                }}
              />
            </Link>
          </Tooltip>
        );
      })}
    </Stack>
  );
}

export default FloatingNavBar;
