// material-ui
import { createTheme } from "@mui/material";
// colors
const darkGray = "rgba(18, 15, 23, 1)"; // #120F17
const lightGray = "rgba(148, 137, 167, 1)"; // #9489a7
const mediumGray = "rgba(101, 96, 109, 1)"; // #65606D
const successGreen = "rgba(11, 187, 113, 1)"; // #0BBB71
const successLightGreen = "rgba(22, 249, 154, 1)"; // #16F99A
const errorRed = "rgba(255, 53, 53, 1)"; // #FF3535
const errorLightRed = "rgba(255, 112, 112, 1)"; // #FF7070

const surface = "#181420";
const surfaceBorder = "rgba(148, 137, 167, 0.14)";

export const accentGradient =
  "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)";

/**
 * Fluid type scale. clamp() keeps headings readable on a 320px phone and stops
 * them from ballooning on ultra-wide displays, which raw `vw` sizing could not.
 */
const fluid = (min, preferred, max) => `clamp(${min}, ${preferred}, ${max})`;

export let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: darkGray,
      paper: surface,
    },
    primary: {
      main: darkGray,
    },
    secondary: {
      main: lightGray,
    },
    tertiary: {
      main: mediumGray,
    },
    success: {
      main: successGreen,
      light: successLightGreen,
    },
    error: {
      main: errorRed,
      light: errorLightRed,
    },
  },
  typography: {
    fontFamily: "'Unbounded', 'Helvetica', 'Arial', sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: fluid("2.25rem", "6vw", "4.5rem"),
      fontWeight: 500,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: fluid("1.875rem", "4.5vw", "3.5rem"),
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontSize: fluid("1.25rem", "2.6vw", "2rem"),
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: fluid("1.125rem", "2vw", "1.625rem"),
      fontWeight: 500,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: fluid("1rem", "1.6vw", "1.375rem"),
      fontWeight: 400,
      fontFamily: "Outfit",
      lineHeight: 1.4,
    },
    h6: {
      fontSize: fluid("0.875rem", "1.1vw", "1.0625rem"),
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.75rem",
      [theme.breakpoints.up("xl")]: {
        fontSize: "0.9375rem",
      },
    },
    body1: {
      fontFamily: "Outfit",
      fontSize: fluid("0.9375rem", "1.05vw", "1.0625rem"),
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: "Outfit",
      fontSize: fluid("0.875rem", "1vw", "1rem"),
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: "antialiased",
        },
        body: {
          backgroundColor: darkGray,
          overflowX: "hidden",
        },
        // Guard against a stray wide child forcing a horizontal scrollbar.
        "#root": {
          overflowX: "clip",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          color: theme.palette.common.white,
          boxShadow: "none",
          backgroundImage: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("xl")]: {
            maxWidth: "84rem",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surface,
          backgroundImage: "none",
          border: `1px solid ${surfaceBorder}`,
          borderRadius: "1rem",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: "transparent",
          transition: "transform 200ms ease",
          "&:hover": {
            transform: "translateY(-2px)",
            backgroundImage: "linear-gradient(to left, #642B73, #C6426E)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition:
            "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease",
        },
        contained: {
          borderRadius: "0.75rem",
          background: accentGradient,
          color: theme.palette.common.white,
          fontFamily: "Unbounded",
          fontSize: "0.875rem",
          padding: "0.75rem 1.75rem",
          textTransform: "capitalize",
          fontWeight: 500,
          boxShadow: "0 10px 30px -14px rgba(198, 66, 110, 0.9)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 16px 36px -14px rgba(198, 66, 110, 1)",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "0.8125rem",
            padding: "0.625rem 1.375rem",
          },
        },
        outlined: {
          borderRadius: "0.75rem",
          borderColor: "rgba(255,255,255,0.35)",
          color: theme.palette.common.white,
          fontFamily: "Unbounded",
          textTransform: "capitalize",
          fontWeight: 500,
          "&:hover": {
            borderColor: "#fff",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
        text: {
          borderRadius: "0.8125rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          fontFamily: "Unbounded",
          padding: "1rem 3rem",
          textTransform: "capitalize",
          fontWeight: 500,
          "&:hover": {
            transform: "translateY(-2px)",
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          background: "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
          borderRadius: "0.4375rem",
          padding: 0,
          color: "transparent",
          margin: 0,
          "&.Mui-checked": {
            background:
              "linear-gradient(224deg, #642B73 8.64%, #C6426E 105.77%)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit",
          background: "#1A171F",
          borderColor: "transparent",
          borderRadius: "0.75rem",
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.main,
            },
          },
        },
        input: {
          paddingRight: "0.75rem",
          fontFamily: "Outfit",
          "&::placeholder": {
            fontSize: "0.9375rem",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "0.9375rem",
          fontFamily: "Unbounded",
          color: theme.palette.common.white,
          textDecoration: "none",
          transition: "color 200ms ease",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
  },
});
