import { Box, Typography } from "@mui/material";

const GreenTag = ({ text = "", fontSize = "0.875rem" }) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(269deg, rgba(22, 249, 154, 0.1) 5.07%, rgba(11, 187, 113, 0.1) 95.01%)",
        borderRadius: "2.5rem",
        padding: { xs: "0.5rem 1rem", md: "0.75rem 1.75rem", lg: "1rem 2rem" },
        width: "fit-content",
      }}
    >
      <Typography
        sx={{
          fontSize: fontSize,
          fontWeight: 500,
          backgroundImage:
            "linear-gradient(269deg, #16F99A 5.07%, #0BBB71 95.01%)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default GreenTag;
