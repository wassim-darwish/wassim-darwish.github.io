import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HeaderImg } from "assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { GradientText } from "components/GradientText";
import Image from "../Image/image";
import Reveal from "components/common/Reveal";
import { MyCV } from "components/constants/cv";

const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const HOLD_AFTER_WORD = 1400;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(TYPING_SPEED);

  const toRotate = useMemo(
    () => [
      "Full-Stack Developer",
      "Frontend Team Lead",
      "Web3 Engineer",
      "Mobile App Developer",
    ],
    [],
  );

  // Respect the OS "reduce motion" setting: show a static role instead of typing.
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  ).current;

  const tick = useCallback(() => {
    const fullText = toRotate[loopNum % toRotate.length];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(HOLD_AFTER_WORD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(TYPING_SPEED);
    } else {
      setDelta(isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }
  }, [isDeleting, loopNum, text.length, toRotate]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(toRotate[0]);
      return;
    }
    const ticker = setTimeout(tick, delta);
    return () => clearTimeout(ticker);
  }, [delta, tick, prefersReducedMotion, toRotate]);

  return (
    <Box
      component="section"
      id="banner"
      sx={{
        width: "100%",
        pt: { xs: 4, md: 6 },
        pb: { xs: 6, md: 10 },
        scrollMarginTop: { xs: "5rem", md: "6rem" },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        <Grid
          container
          rowSpacing={{ xs: 4, md: 6 }}
          columnSpacing={{ xs: 0, sm: 3, md: 5 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6} xl={6} order={{ xs: 2, md: 1 }}>
            <Stack
              spacing={{ xs: 2, md: 2.5 }}
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Reveal>
                <Typography
                  variant="h5"
                  color="secondary.main"
                  sx={{ letterSpacing: "0.04em" }}
                >
                  Welcome to my portfolio
                </Typography>
              </Reveal>

              <Reveal delay={80}>
                <GradientText
                  text="Hey, I'm Wassim"
                  component="h1"
                  fontSize={{
                    xs: "2.25rem",
                    sm: "3rem",
                    md: "3.25rem",
                    lg: "4rem",
                  }}
                  fontWeight={600}
                  lineHeight={1.1}
                />
              </Reveal>

              <Reveal delay={140}>
                <Typography
                  variant="h3"
                  component="p"
                  sx={{
                    minHeight: { xs: "4.5rem", md: "5rem" },
                    // Block, not flex: the caret must follow the last character
                    // even when the role name wraps to a second line.
                    display: "block",
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}
                >
                  {text}
                  <Box
                    component="span"
                    aria-hidden
                    sx={{
                      display: "inline-block",
                      verticalAlign: "text-bottom",
                      width: "3px",
                      height: "0.9em",
                      ml: "0.25rem",
                      backgroundColor: "#C6426E",
                      animation: "blink 1s step-end infinite",
                      "@keyframes blink": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0 },
                      },
                    }}
                  />
                </Typography>
              </Reveal>

              <Reveal delay={200}>
                <Typography
                  variant="body1"
                  color="secondary.main"
                  sx={{ maxWidth: "34rem", fontWeight: 300 }}
                >
                  {MyCV.summary}
                </Typography>
              </Reveal>

              <Reveal delay={260}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  pt={{ xs: 1, md: 2 }}
                  width="100%"
                  alignItems="center"
                >
                  <Button
                    href="#contact"
                    variant="contained"
                    endIcon={<ArrowRightCircle size={18} />}
                    fullWidth={false}
                    sx={{ width: { xs: "100%", sm: "auto" } }}
                  >
                    Let's connect
                  </Button>
                  <Button
                    href="#projects"
                    variant="outlined"
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      px: 2.5,
                      py: 1.25,
                    }}
                  >
                    View my work
                  </Button>
                </Stack>
              </Reveal>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} xl={5} order={{ xs: 1, md: 2 }}>
            <Reveal direction="left" scale={0.92} delay={120}>
              <Box
                sx={{
                  textAlign: "center",
                  animation: "float 6s ease-in-out infinite",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-14px)" },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                  },
                }}
              >
                <Image
                  loading="lazy"
                  effect="opacity"
                  alt="Illustration of a developer at work"
                  height="auto"
                  src={HeaderImg}
                  width="100%"
                  threshold={100}
                  delayTime={300}
                />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
