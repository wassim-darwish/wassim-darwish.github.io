import { Button } from "@mui/material";
import React from "react";

function DownloadPDF() {
  return (
    <Button
      href={require("./WassimDarwishCv.pdf")}
      type="button"
      variant="contained"
      target="_blank"
      sx={{ fontSize: "0.75rem", color: "white" }}
    >
      Download My CV
    </Button>
  );
}

export default DownloadPDF;
