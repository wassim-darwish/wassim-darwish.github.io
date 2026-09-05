import { Typography, TypographyProps } from "@mui/material";

export type GradientTextProps = {
  text: string;
  bgGradient?: string;
} & TypographyProps;

export const GradientText = ({
  fontSize = "3.125rem",
  fontWeight = "500",
  fontFamily = "Unbounded",
  text = "",
  lineHeight = "inherit",
  bgGradient = "linear-gradient(to left, #642B73, #C6426E)",
  sx,
  ...rest
}: GradientTextProps) => {
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
        // Keep gradient text selectable/legible if background-clip is unsupported.
        "@supports not (background-clip: text)": {
          WebkitTextFillColor: "currentcolor",
        },
        ...sx,
      }}
      {...rest}
    >
      {text}
    </Typography>
  );
};

export default GradientText;
