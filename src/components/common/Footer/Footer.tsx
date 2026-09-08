import { Box, Container, Divider, Link, Stack } from "@mui/material";
import { CopyRights, Logo, SocialLinks, VisitorCount } from "./components";
import { footerBackground } from "assets";
import { views } from "components/Navbar";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        mt: { xs: 4, md: 8 },
        borderTop: "1px solid rgba(148, 137, 167, 0.14)",
        background: `transparent url(${footerBackground}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        <Stack spacing={{ xs: 3.5, md: 4 }} alignItems="center">
          <Logo />

          <Stack
            direction="row"
            component="nav"
            aria-label="Footer navigation"
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            {views.map((view) => (
              <Link
                key={view.name}
                href={view.to}
                sx={{
                  fontSize: { xs: "0.8125rem", md: "0.875rem" },
                  color: "secondary.main",
                  "&:hover": { color: "common.white" },
                }}
              >
                {view.name}
              </Link>
            ))}
          </Stack>

          <SocialLinks />

          <Divider
            flexItem
            sx={{ borderColor: "rgba(148, 137, 167, 0.14)", width: "100%" }}
          />

          <Stack spacing={1.25} alignItems="center">
            <CopyRights />
            <VisitorCount />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
export default Footer;
