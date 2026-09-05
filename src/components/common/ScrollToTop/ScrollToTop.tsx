import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrollTrigger } from "@mui/material";

function ScrollToTop() {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 400 });

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        size="small"
        aria-label="Back to top"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { xs: "1.25rem", md: "2rem" },
          left: { xs: "1.25rem", md: "2rem" },
          zIndex: 1200,
          color: "#fff",
          background: "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)",
          boxShadow: "0 12px 30px -14px rgba(198, 66, 110, 0.9)",
          "&:hover": {
            background:
              "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)",
            transform: "translateY(-3px)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
