import { Grid } from "@mui/material";
import { CopyRights, Logo, SocialLinks } from "./components";
import { footerBackground } from "assets";

function Footer() {
  return (
    <Grid
      py={7}
      width="100wh"
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `transparent url(${footerBackground}) no-repeat center`,
        backgroundSize: "cover",
      }}
      rowGap={4}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <SocialLinks />
      </Grid>
      <Grid item xs={12}>
        <CopyRights />
      </Grid>
    </Grid>
  );
}
export default Footer;
