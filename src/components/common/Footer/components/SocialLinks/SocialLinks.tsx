import { Grid } from "@mui/material";
import { SocialLinksButtons } from "./components";

export default function SocialLinks() {
  return (
    <Grid container rowGap={{ xs: 1, md: 2 }} justifyContent="center">
      <SocialLinksButtons />
    </Grid>
  );
}
