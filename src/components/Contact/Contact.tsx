import { Grid } from "@mui/material";
import contactImg from "../../assets/contact-img.svg";
import { Form } from "./components";
import Image from "components/common/Image/image";
import MotionWrap from "components/common/MotionWrap/MotionWrap";
import ScrollIcon from "components/icons/ScrollIcon";

function Contact() {
  return (
    <Grid
      id="#contact"
      container
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={{ sm: "space-evenly" }}
      my={6}
    >
      <Grid item xs={12} textAlign="center" mb={{ xs: 0, md: 20 }}>
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

      <Grid
        item
        xs={12}
        md={5}
        textAlign="center"
        pl={{ xs: 1.5, md: 3 }}
        my={{ xs: 10, md: 0 }}
      >
        <Image
          loading="lazy"
          effect="opacity"
          alt="contact"
          height="auto"
          src={contactImg}
          width="95%"
          threshold={100}
          delayTime={300}
        />
      </Grid>
      <Grid item xs={12} md={5.5} px={2}>
        <Form />
      </Grid>
    </Grid>
  );
}

export default MotionWrap(Contact);
