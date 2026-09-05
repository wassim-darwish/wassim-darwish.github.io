import { Box, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import heroWaves from "../assets/wave.png";
import { profileImage } from "images";
import LinkedinIcon from "./icons/LinkedinIcon";
import LinkedinIconGradient from "./icons/LinkedinGradientIcon";
import GmailIcon from "./icons/GmailIcon";
import GmailIconGradient from "./icons/GmailIconGradient";
import WhatsappIcon from "./icons/WhatsappIcon";
import WhatsappIconGradient from "./icons/WhatsappIconGradient";
import GithubIcon from "./icons/GithubIcon";
import GithubIconGradient from "./icons/GithubIconGradient";
import { useState } from "react";
import { MyCV } from "./constants/cv";
import Section from "./common/Section";
import Reveal from "./common/Reveal";
import { GradientText } from "./GradientText";

export const social = [
  {
    name: "Gmail",
    href: `mailto:${MyCV.personal_info.email}`,
    whiteIcon: <GmailIcon sx={{ fontSize: "2.25rem" }} />,
    gradientIcon: <GmailIconGradient sx={{ fontSize: "2.25rem" }} />,
  },
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=00963997048181&text=Hi%20Wassim%2C%20I%27d%20like%20to%20talk%20about%20a%20project",
    whiteIcon: <WhatsappIcon sx={{ fontSize: "1.75rem" }} />,
    gradientIcon: <WhatsappIconGradient sx={{ fontSize: "1.75rem" }} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wassim-darwish-b5564a187/",
    whiteIcon: <LinkedinIcon sx={{ fontSize: "2rem" }} />,
    gradientIcon: <LinkedinIconGradient sx={{ fontSize: "2rem" }} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/wassim-darwish",
    whiteIcon: <GithubIcon sx={{ fontSize: "1.75rem" }} />,
    gradientIcon: <GithubIconGradient sx={{ fontSize: "1.75rem" }} />,
  },
];

const Hero = () => {
  const [hoverOver, setHoverOver] = useState("");

  return (
    <Box sx={{ position: "relative" }}>
      {/* Decorative wave, pinned behind the content so it can't push layout around. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: "auto 0 0 0",
          height: { xs: "60vw", md: "45vw" },
          backgroundImage: `url('${heroWaves}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "bottom center",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Section id="about" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          rowSpacing={{ xs: 5, md: 6 }}
          columnSpacing={{ xs: 0, sm: 3, md: 5 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={5} lg={4}>
            <Reveal direction="right" scale={0.94}>
              <Box
                sx={{
                  position: "relative",
                  mx: "auto",
                  width: { xs: "min(72vw, 20rem)", md: "100%" },
                  maxWidth: "24rem",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  padding: "4px",
                  background:
                    "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
                  boxShadow: "0 30px 70px -30px rgba(198, 66, 110, 0.75)",
                  transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="Wassim Darwish"
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    display: "block",
                  }}
                />
              </Box>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={7} lg={7}>
            <Stack
              spacing={{ xs: 2, md: 2.5 }}
              textAlign={{ xs: "center", md: "left" }}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Reveal delay={60}>
                <GradientText
                  text="About me"
                  fontSize={{ xs: "0.75rem", md: "0.875rem" }}
                  fontWeight={600}
                  sx={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
                />
              </Reveal>

              <Reveal delay={120}>
                <Typography variant="h1" component="h2">
                  {MyCV.name}
                </Typography>
              </Reveal>

              <Reveal delay={180}>
                <Typography variant="h3" color="secondary.main">
                  {MyCV.tagline}
                </Typography>
              </Reveal>

              <Reveal delay={240}>
                <Typography
                  variant="body1"
                  color="secondary.main"
                  sx={{ maxWidth: "44rem", fontWeight: 300 }}
                >
                  {MyCV.summary}
                </Typography>
              </Reveal>

              <Reveal delay={300}>
                <Typography
                  variant="body1"
                  color="secondary.main"
                  sx={{ maxWidth: "44rem", fontWeight: 300 }}
                >
                  {MyCV.summary_short}
                </Typography>
              </Reveal>

              <Reveal delay={360} sx={{ width: "100%" }}>
                <Grid container spacing={2} mt={{ xs: 1, md: 2 }}>
                  {MyCV.highlights.map((highlight) => (
                    <Grid item xs={6} sm={3} key={highlight.label}>
                      <Box
                        sx={{
                          height: "100%",
                          p: { xs: 1.75, md: 2 },
                          borderRadius: "1rem",
                          border: "1px solid rgba(148, 137, 167, 0.18)",
                          background: "rgba(24, 20, 32, 0.7)",
                          backdropFilter: "blur(6px)",
                          textAlign: { xs: "center", md: "left" },
                          transition:
                            "transform 300ms ease, border-color 300ms ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            borderColor: "rgba(198, 66, 110, 0.6)",
                          },
                        }}
                      >
                        <GradientText
                          text={highlight.value}
                          fontSize={{ xs: "1.5rem", md: "1.875rem" }}
                          fontWeight={600}
                          lineHeight={1.2}
                        />
                        <Typography
                          variant="subtitle2"
                          color="secondary.main"
                          sx={{ fontFamily: "Outfit", mt: 0.5 }}
                        >
                          {highlight.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Reveal>

              <Reveal delay={420}>
                <Stack direction="row" spacing={{ xs: 0.5, md: 1 }} mt={1}>
                  {social.map((item) => (
                    <Tooltip title={item.name} key={item.name} arrow>
                      <IconButton
                        aria-label={item.name}
                        onMouseOver={() => setHoverOver(item.name)}
                        onMouseOut={() => setHoverOver("")}
                        onFocus={() => setHoverOver(item.name)}
                        onBlur={() => setHoverOver("")}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {hoverOver === item.name
                          ? item.gradientIcon
                          : item.whiteIcon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Stack>
              </Reveal>
            </Stack>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

export default Hero;
