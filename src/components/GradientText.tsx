import { Typography, TypographyProps } from "@mui/material";

export const GradientText = ({
  fontSize = "3.125rem",
  fontWeight = "500",
  fontFamily = "Unbounded",
  text = "",
  lineHeight = "inherit",
  bgGradient = "linear-gradient(to left, #642B73, #C6426E)",
}: { text: string; bgGradient?: string } & TypographyProps) => {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      sx={{
        backgroundImage: bgGradient,
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </Typography>
  );
};
