import { Box, BoxProps, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useRef } from "react";
import useOnScreen from "hooks/useOnScreen";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, string> = {
  up: "translate3d(0, 2.5rem, 0)",
  down: "translate3d(0, -2.5rem, 0)",
  left: "translate3d(2.5rem, 0, 0)",
  right: "translate3d(-2.5rem, 0, 0)",
  none: "translate3d(0, 0, 0)",
};

export interface RevealProps extends Omit<BoxProps, "children"> {
  children: ReactNode;
  /** Direction the content travels in from. */
  direction?: Direction;
  /** Stagger, in milliseconds. */
  delay?: number;
  duration?: number;
  scale?: number;
}

/**
 * Scroll-triggered entrance animation. Uses transform/opacity only so it stays
 * on the compositor, and collapses to a no-op when the user prefers reduced motion.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  scale = 1,
  sx,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const theme = useTheme();
  const stacked = useMediaQuery(theme.breakpoints.down("md"));

  // Sideways travel only reads well in a side-by-side layout. Once columns
  // stack it just pushes content past the viewport edge, so fall back to "up".
  const effectiveDirection =
    stacked && (direction === "left" || direction === "right")
      ? "up"
      : direction;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0) scale(1)"
          : `${offsets[effectiveDirection]} scale(${scale})`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Reveal;
