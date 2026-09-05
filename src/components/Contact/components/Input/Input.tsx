/* eslint-disable react/jsx-props-no-spreading */
import { Box, TextField, TextFieldProps, Typography } from "@mui/material";

type TInput = TextFieldProps & {
  fieldLabel: string;
};

export default function Input({ fieldLabel, ...props }: TInput) {
  return (
    <Box width="100%">
      <Typography
        variant="subtitle2"
        component="label"
        htmlFor={props.id}
        color="secondary.main"
        sx={{ display: "block", mb: 1, fontFamily: "Outfit" }}
      >
        {fieldLabel}
      </Typography>
      <TextField
        fullWidth
        hiddenLabel
        required
        size="medium"
        {...props}
        variant="outlined"
      />
    </Box>
  );
}
