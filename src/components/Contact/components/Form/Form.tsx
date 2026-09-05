/* eslint-disable no-console */
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Input from "../Input/Input";
import { useFormData } from "./hooks";
import { theme } from "utils/theme";

export default function Form() {
  const {
    openSnackbar,
    messageSuccess,
    sendingMessage,
    values,
    errors,
    disabled,
    handleClose,
    onSubmitHandler,
    onChangeHandler,
  } = useFormData();

  return (
    <>
      <Box
        component="form"
        onSubmit={onSubmitHandler}
        sx={{
          width: "100%",
          p: { xs: 2.5, sm: 3, md: 4 },
          borderRadius: "1.25rem",
          border: "1px solid rgba(148, 137, 167, 0.16)",
          backgroundColor: "rgba(24, 20, 32, 0.72)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Grid container spacing={2.5}>
          <Grid item xs={12} sm={6}>
            <Input
              value={values.name}
              onChange={onChangeHandler}
              id="name"
              name="name"
              type="text"
              fieldLabel="Name"
              placeholder="Your name"
              helperText={errors.name}
              error={!!errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              value={values.email}
              onChange={onChangeHandler}
              id="email"
              name="email"
              type="email"
              fieldLabel="Email address"
              placeholder="you@company.com"
              helperText={errors.email}
              error={!!errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              value={values.message}
              onChange={onChangeHandler}
              id="message"
              name="message"
              type="text"
              fieldLabel="Message"
              placeholder="Tell me about your project..."
              helperText={errors.message}
              error={!!errors.message}
              multiline
              minRows={4}
              maxRows={8}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={disabled}
              endIcon={
                sendingMessage ? (
                  <CircularProgress size={16} thickness={4} color="inherit" />
                ) : (
                  <SendIcon
                    sx={{ fontSize: 16, transform: "rotate(-30deg)" }}
                  />
                )
              }
              sx={{
                textTransform: "none",
                color: "#fff",
                width: { xs: "100%", sm: "auto" },
                "&.Mui-disabled": {
                  background: "rgba(148, 137, 167, 0.18)",
                  color: "rgba(255,255,255,0.45)",
                  boxShadow: "none",
                },
              }}
            >
              {sendingMessage ? "Sending..." : "Send message"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={messageSuccess ? "success" : "error"}
          variant="filled"
          sx={{
            width: "100%",
            color: messageSuccess ? theme.palette.primary.dark : "common.white",
          }}
        >
          {messageSuccess
            ? "Your message has been sent — I'll get back to you shortly."
            : "Something went wrong. Please try again or email me directly."}
        </Alert>
      </Snackbar>
    </>
  );
}
