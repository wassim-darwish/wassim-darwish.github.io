import { IconButton, Stack, Tooltip } from "@mui/material";
import { social } from "components/Hero";
import { useState } from "react";

export default function SocialLinksButtons() {
  const [hoverOver, setHoverOver] = useState("");

  return (
    <Stack direction="row" spacing={{ xs: 0.5, md: 1.5 }} justifyContent="center">
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
            {hoverOver === item.name ? item.gradientIcon : item.whiteIcon}
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}
