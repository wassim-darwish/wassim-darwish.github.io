import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function DownloadPDF() {
  return (
    <Button
      href={require("./WassimDarwish _CV.pdf")}
      type="button"
      variant="contained"
      target="_blank"
      rel="noopener"
      startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />}
      sx={{
        whiteSpace: "nowrap",
        color: "#fff",
        // Tighten at md so logo + 7 nav links + this button still fit on a tablet.
        fontSize: { xs: "0.8125rem", md: "0.75rem", lg: "0.8125rem" },
        px: { md: 1.5, lg: 2.25 },
        py: { md: 0.875, lg: 1 },
      }}
    >
      Download CV
    </Button>
  );
}

export default DownloadPDF;
