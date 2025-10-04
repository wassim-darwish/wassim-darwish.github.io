import { Grid, IconButton } from "@mui/material";
import { social } from "components/Hero";
import { useState } from "react";

export default function SocialLinksButtons() {
  const [hoverOver, setHoverOver] = useState("");

  return (
    <Grid container columnGap={{ xs: 0.5, md: 3 }} item justifyContent="center">
      <Grid
        item
        order={{ xs: 7, md: 6 }}
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
    </Grid>
  );
}
