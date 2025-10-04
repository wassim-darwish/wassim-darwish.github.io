/* eslint-disable no-console */
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Input from "../Input/Input";
import { useFormData } from "./hooks";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import { contactText } from "./constants";
import { theme } from "utils/theme";

export default function Form() {
  const {
    openSnackbar,
    messageSuccess,
    sendingMessage,
    values,
    errors,
    handleClose,
    onSubmitHandler,
    onChangeHandler,
  } = useFormData();

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Grid container flexDirection="column" rowGap={4}>
          <Grid item xs={12}>
            <Stack width={{ md: "35vw" }}>
              <SectionHeader
                title={contactText.title}
                subtitle={contactText.subtitle}
                content={contactText.content}
              />
            </Stack>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              container
              item
              xs={12}
              justifyContent="space-between"
              my={2}
              rowGap={2}
            >
              <Grid item xs={12} sm={5.8}>
                <Input
                  value={values.name}
                  onChange={onChangeHandler}
                  id="name"
                  name="name"
                  type="text"
                  fieldLabel="Name"
                  placeholder="Type your name.."
                  size="medium"
                  helperText={errors.name}
                  error={!!errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={5.8}>
                <Input
                  value={values.email}
                  onChange={onChangeHandler}
                  id="email"
                  name="email"
                  type="email"
                  fieldLabel="Email address"
                  placeholder="Type your your email.."
                  helperText={errors.email}
                  error={!!errors.email}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Input
                value={values.message}
                onChange={onChangeHandler}
                id="message"
                name="message"
                type="text"
                fieldLabel="Message"
                placeholder="Type your message.."
                helperText={errors.message}
                error={!!errors.message}
                multiline
                minRows={3}
                maxRows={6}
              />
            </Grid>
          </Grid>

          <Grid item maxWidth="170px">
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{ textTransform: "none", color: "#fff" }}
            >
              <Typography
                noWrap
                variant="subtitle2"
                mr={1}
                color="inherit"
                sx={{ cursor: "inherit" }}
              >
                Send Message
              </Typography>
              {sendingMessage ? (
                <CircularProgress size={20} thickness={2} />
              ) : (
                <SendIcon
                  sx={{
                    fontSize: "16px",
                    mt: -1,
                    transform: "rotate(-30deg)",
                    color: "#fff",
                  }}
                />
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
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
            ? "Message had been sent successfully."
            : "Something went wrong, and we are working on."}
        </Alert>
      </Snackbar>
    </>
  );
}
