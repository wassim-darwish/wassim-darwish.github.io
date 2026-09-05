import { Stack, Typography } from "@mui/material";
import { GradientText } from "components/GradientText";
import { MyCV } from "components/constants/cv";

export default function Logo() {
  return (
    <Stack alignItems="center" spacing={0.75}>
      <GradientText
        text="</Wassim>"
        fontSize={{ xs: "1.25rem", md: "1.5rem" }}
        fontWeight={600}
      />
      <Typography
        variant="body2"
        color="secondary.main"
        textAlign="center"
        sx={{ maxWidth: "28rem", fontWeight: 300 }}
      >
        {MyCV.tagline}
      </Typography>
    </Stack>
  );
}
