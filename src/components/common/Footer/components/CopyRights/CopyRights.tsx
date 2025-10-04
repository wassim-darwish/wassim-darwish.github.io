import { Grid, Typography } from "@mui/material";

export default function CopyRights() {
  return (
    <Grid item xs={12} mb={2} textAlign="center">
      <Typography
        variant="subtitle1"
        fontSize={{ xs: "0.7rem" }}
        alignSelf="center"
        color="grey.500"
      >
        © {new Date().getFullYear()},Wassim Darwish all rights reserved
      </Typography>
    </Grid>
  );
}
