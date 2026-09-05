import { Box, Container, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { GradientText } from "components/GradientText";
import Reveal from "components/common/Reveal";

export interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: ReactNode;
  children: ReactNode;
  /** Center the heading block. Defaults to true. */
  centered?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | false;
  /** Extra sx applied to the outer <section>. */
  sx?: object;
}

/**
 * Consistent section shell: responsive vertical rhythm, a fluid max-width
 * container, and a scroll-margin so anchor links land below the fixed navbar.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  centered = true,
  maxWidth = "lg",
  sx,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: "100%",
        py: { xs: 7, sm: 9, md: 12 },
        scrollMarginTop: { xs: "5rem", md: "6rem" },
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth} sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        {(eyebrow || title || subtitle) && (
          <Reveal>
            <Stack
              spacing={{ xs: 1.5, md: 2 }}
              alignItems={centered ? "center" : "flex-start"}
              textAlign={centered ? "center" : "left"}
              mb={{ xs: 5, md: 8 }}
            >
              {eyebrow && (
                <GradientText
                  text={eyebrow}
                  fontSize={{ xs: "0.75rem", md: "0.875rem" }}
                  fontWeight={600}
                  sx={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
                />
              )}
              {title && (
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                      lg: "3.5rem",
                    },
                    lineHeight: 1.15,
                    fontWeight: 500,
                  }}
                >
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography
                  variant="body1"
                  color="secondary.main"
                  sx={{
                    maxWidth: "46rem",
                    fontFamily: "Outfit",
                    fontSize: { xs: "0.95rem", md: "1.0625rem" },
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Stack>
          </Reveal>
        )}
        {children}
      </Container>
    </Box>
  );
}

export default Section;
