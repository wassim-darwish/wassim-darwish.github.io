import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { isEmail } from "../utils";

export const useFormData = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [messageSuccess, setMessageSuccess] = useState<boolean>(false);
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);

  const [values, setValues] = useState<{
    email?: string;
    name?: string;
    message?: string;
  }>({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    name?: string;
    message?: string;
  }>({});
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email" && !isEmail(value)) {
      setErrors({ ...errors, email: "Invalid email" });
    } else if (name === "email" && event.target.value === "") {
      setErrors({ ...errors, email: "Email is required" });
    } else if (name === "name" && event.target.value === "") {
      setErrors({ ...errors, name: "Name is required" });
    } else if (name === "message" && event.target.value === "") {
      setErrors({ ...errors, message: "Message is required" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setSendingMessage(true);
    emailjs
      .sendForm(
        "service_q66jhls",
        "template_fbd4rtj",
        e.currentTarget,
        "MEoTKGhnVlrkm0Sc1"
      )
      .then(
        () => {
          setMessageSuccess(true);
          setOpenSnackbar(true);
          setSendingMessage(false);
          setValues({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setMessageSuccess(false);
          setOpenSnackbar(true);
        }
      );
  };

  const handleClose = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
    setOpenSnackbar(false);
    setSendingMessage(false);
  };

  const disabled: boolean = useMemo(
    () =>
      sendingMessage ||
      !!errors.email ||
      !!errors.message ||
      !!errors.name ||
      !values.email ||
      !values.message ||
      !values.name,
    [errors, sendingMessage, values]
  );

  return {
    openSnackbar,
    messageSuccess,
    sendingMessage,
    values,
    errors,
    handleClose,
    onSubmitHandler,
    onChangeHandler,
    disabled,
  };
};
