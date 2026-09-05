import { Typography } from "@mui/material";

export default function CopyRights() {
  return (
    <Typography
      variant="subtitle2"
      textAlign="center"
      color="grey.500"
      sx={{ fontFamily: "Outfit" }}
    >
      © {new Date().getFullYear()} Wassim Darwish. All rights reserved.
    </Typography>
  );
}
