import {
  Grid,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import heroWaves from "../assets/wave.png";
import { useRef, useState } from "react";
import { profileImage } from "images";
import LinkedinIcon from "./icons/LinkedinIcon";
import LinkedinIconGradient from "./icons/LinkedinGradientIcon";
import GmailIcon from "./icons/GmailIcon";
import GmailIconGradient from "./icons/GmailIconGradient";
import WhatsappIcon from "./icons/WhatsappIcon";
import WhatsappIconGradient from "./icons/WhatsappIconGradient";
import GithubIcon from "./icons/GithubIcon";
import GithubIconGradient from "./icons/GithubIconGradient";
import ScrollIcon from "./icons/ScrollIcon";
import { theme } from "utils/theme";
import useOnScreen from "hooks/useOnScreen";
import { MyCV } from "./constants/cv";

export const social = [
  {
    name: "Gmail",
    href: "mailto:wassimdarwish89@gmail.com?",
    whiteIcon: <GmailIcon sx={{ fontSize: "2.25rem" }} />,
    gradientIcon: <GmailIconGradient sx={{ fontSize: "2.25rem" }} />,
  },

  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=00963997048181&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%3A",
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

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const mobileSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ minHeight: "100vh", mt: 20 }} ref={ref} id="#about">
      <Grid container justifyContent="center">
        <Grid item>
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
      </Grid>

      <Zoom in={isVisible} mountOnEnter timeout={1200}>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          rowGap="1rem"
          mb={{ md: "9%", xl: "8%" }}
          mt={{ xs: "7vw" }}
        >
          <Grid item order={2} mb="0.25rem">
            <Typography
              variant="h1"
              textAlign="center"
              fontSize={{ xs: "8vw", md: "6vw" }}
            >
              {MyCV.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={10}
            md={12}
            order={3}
            textAlign="center"
            px={{ xs: "2%", md: "5%" }}
          >
            <Typography variant="h3" fontSize={{ xs: "1rem", md: "2vw" }}>
              Transforming Ideas into Innovative Digital Solutions
            </Typography>
          </Grid>
          <Grid item xs={10} md={8} lg={7} xl={6} order={4}>
            <Typography
              variant="h6"
              color="secondary.main"
              fontWeight={300}
              textAlign="center"
            >
              {MyCV.summary}
            </Typography>
          </Grid>
          <Grid item order={5} mt={{ xs: "1.25rem", md: "2.5rem" }}>
            <img
              loading="lazy"
              width={mobileSize ? "300px" : "400px"}
              height={mobileSize ? "300px" : "400px"}
              title="personal img"
              alt="my img"
              style={{
                objectFit: "cover",
                borderRadius: 200,
                // position: "absolute",
                boxShadow: "1px 3px 3px #333",
              }}
              src={profileImage}
            />
          </Grid>
          <Grid
            item
            order={{ xs: 7, md: 6 }}
            mt={{ xs: "-20vw", md: "2rem" }}
            mb={{ xs: "12vw", sm: "10vw", md: "-1vw", xl: 0 }}
          >
            {social.map((item) => (
              <IconButton
                key={item.name}
                onMouseOver={() => setHoverOver(item.name)}
                onMouseOut={() => setHoverOver("")}
                href={item.href}
                target="_blank"
                rel="nofollow noindex"
              >
                {hoverOver === item.name ? item.gradientIcon : item.whiteIcon}
              </IconButton>
            ))}
          </Grid>
          <Grid
            order={{ xs: 6, md: 7 }}
            item
            xs={12}
            sx={{ marginTop: { xs: "-25vw", md: "-47.5vw" } }}
          >
            <Box
              sx={{
                background: `transparent url('${heroWaves}') no-repeat`,
                backgroundSize: "100%",
                objectFit: "contain",
                backgroundOrigin: "",
                height: { xs: "100vw", md: "90vw" },
                width: "100vw",
                maxWidth: "100%",
                zIndex: -999,
                position: "relative",
              }}
            />
          </Grid>
        </Grid>
      </Zoom>
      {/* </Slide> */}
    </Box>
  );
};

export default Hero;
