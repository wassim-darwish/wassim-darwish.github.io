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
// const gradientPink = "rgba(255, 139, 255, 1)"; // #FF8BFF
// const gradientBlue = "rgba(30, 157, 255, 1)"; // #1E9DFF

export let theme = createTheme({
  palette: {
    mode: "dark",
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
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "3.25vw",
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        fontSize: "7vw",
      },
    },
    h2: {
      fontSize: "2.5vw",
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        fontSize: "6vw",
      },
    },
    h3: {
      fontSize: "2vw",
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.875rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
    h4: {
      fontSize: "1.75vw",
      [theme.breakpoints.down("md")]: {
        fontSize: "4.75vw",
      },
    },
    h5: {
      fontSize: "1.85vw",
      fontWeight: 400,
      fontFamily: "Outfit",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      [theme.breakpoints.down("lg")]: {
        fontSize: "0.75rem",
      },
    },
    subtitle1: {
      fontSize: "0.875rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3vw",
      },
    },
    subtitle2: {
      fontSize: "0.75rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.75vw",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "0.9375rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#120F17",
          backgroundSize: "100%",
          overflowX: "hidden",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
      styleOverrides: {
        root: {
          color: "common.white",
          boxShadow: "none",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: "transparent",
          "&:hover": {
            backgroundImage: "linear-gradient(to left, #FF8BFF, #1E9DFF)",
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
        contained: {
          borderRadius: "0.75rem",
          background: "linear-gradient(242deg, #FF8BFF 16.55%, #1E9DFF 93.07%)",
          color: theme.palette.common.black,
          fontFamily: "Unbounded",
          fontSize: "0.9375rem",
          padding: "0.75rem 2rem",
          textTransform: "capitalize",
          fontWeight: 500,
          "&:hover": {
            transform: "scale(1.02)",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "0.875rem",
            padding: "0.75rem 2rem",
          },
        },
        text: {
          borderRadius: "0.8125rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          fontFamily: "Unbounded",
          fontSize: { lg: "0.75rem", xl: "1rem" },
          padding: "1rem 3rem",
          textTransform: "capitalize",
          fontWeight: 500,
          "&:hover": {
            transform: "scale(1.02)",
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          background: "linear-gradient(224deg, #FF8BFF 8.64%, #1E9DFF 105.77%)",
          borderRadius: "0.4375rem",
          padding: 0,
          color: "transparent",
          margin: 0,
          "&.Mui-checked": {
            background:
              "linear-gradient(224deg, #FF8BFF 8.64%, #1E9DFF 105.77%)",
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
          minHeight: { xs: "20%", md: "60%" },
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
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
  },
});
