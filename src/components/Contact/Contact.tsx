import { Grid, Stack, Typography, Link } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import contactImg from "../../assets/contact-img.svg";
import { Form } from "./components";
import Image from "components/common/Image/image";
import Section from "components/common/Section";
import Reveal from "components/common/Reveal";
import { MyCV } from "components/constants/cv";

const details = [
  {
    icon: <MailOutlineIcon fontSize="small" sx={{ color: "#C6426E" }} />,
    label: MyCV.personal_info.email,
    href: `mailto:${MyCV.personal_info.email}`,
  },
  {
    icon: <PhoneIphoneIcon fontSize="small" sx={{ color: "#C6426E" }} />,
    label: MyCV.personal_info.phone,
    href: `tel:${MyCV.personal_info.phone}`,
  },
  {
    icon: <PlaceOutlinedIcon fontSize="small" sx={{ color: "#C6426E" }} />,
    label: MyCV.personal_info.location,
  },
];

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something"
      subtitle="Open to full-stack, frontend leadership, and Web3 engineering work. Send a message and I'll get back to you."
    >
      <Grid
        container
        rowSpacing={{ xs: 4, md: 6 }}
        columnSpacing={{ xs: 0, sm: 3, md: 5 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={5}>
          <Reveal direction="right">
            <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
              <Image
                loading="lazy"
                effect="opacity"
                alt="Illustration of someone sending a message"
                height="auto"
                src={contactImg}
                width="100%"
                threshold={100}
                delayTime={300}
              />
              <Stack spacing={1.25} width="100%">
                {details.map((detail) => (
                  <Stack
                    key={detail.label}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    {detail.icon}
                    {detail.href ? (
                      <Link
                        href={detail.href}
                        sx={{
                          fontFamily: "Outfit",
                          fontSize: "0.9375rem",
                          color: "secondary.main",
                          "&:hover": { color: "#fff" },
                        }}
                      >
                        {detail.label}
                      </Link>
                    ) : (
                      <Typography
                        variant="body2"
                        color="secondary.main"
                        sx={{ fontFamily: "Outfit" }}
                      >
                        {detail.label}
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Reveal>
        </Grid>
        <Grid item xs={12} md={6}>
          <Reveal direction="left" delay={100}>
            <Form />
          </Reveal>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Contact;
