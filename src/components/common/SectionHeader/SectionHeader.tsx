import { Typography, Stack } from "@mui/material";

export type Variant =
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "overline";

export type TextAlign = "inherit" | "right" | "left" | "center" | "justify";
export type AlignItems = "center" | "flex-start";

export interface Props {
  subtitle: {
    text: string;
    textAlign?: TextAlign;
    variant?: Variant;
  };
  title: {
    text: string;
    textAlign?: TextAlign;
    variant?: Variant;
  };
  content: {
    text: string;
    textAlign?: TextAlign;
    variant?: Variant;
  };
  alignItems?: AlignItems;
}

function SectionHeader({ alignItems, subtitle, title, content }: Props) {
  return (
    <Stack spacing={1.5} alignItems={alignItems}>
      <Typography variant={title.variant} textAlign={title.textAlign}>
        {title.text}
      </Typography>
      <Typography variant={subtitle.variant} textAlign={subtitle.textAlign}>
        {subtitle.text}
      </Typography>

      <Typography
        variant={content.variant}
        textAlign={content.textAlign}
        lineHeight={2}
        whiteSpace="pre-wrap"
        maxWidth="80%"
      >
        {content.text}
      </Typography>
    </Stack>
  );
}

SectionHeader.defaultProps = {
  alignItems: "flex-start",
};
export default SectionHeader;
