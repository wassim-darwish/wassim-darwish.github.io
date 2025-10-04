/* eslint-disable react/jsx-props-no-spreading */
import { Box, TextField, TextFieldProps, Typography } from "@mui/material";

type TInput = TextFieldProps & {
  fieldLabel: string;
};

export default function Input({ fieldLabel, ...props }: TInput) {
  return (
    <Box>
      <Typography variant="subtitle2" mb={1}>
        {fieldLabel}
      </Typography>
      <TextField fullWidth hiddenLabel required {...props} variant="outlined" />
    </Box>
  );
}
