import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type EmailSendStatus =
  | "not_sent_yet"
  | "sending"
  | "sent_with_error"
  | "sent_successfully";

export const useForm = () => {
  const [success, setSuccess] = useState<EmailSendStatus>("not_sent_yet");
  const form: any = useRef(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSuccess("sending");
    emailjs
      .sendForm("service_o0qhwsg", "inbound", form.current, "mtchOQeCcpiCya_vD")
      .then((result: any) => {
        if (result.status === 200) {
          setSuccess("sent_successfully");
        }
      })
      .then((error: any) => {
        if (error !== undefined) {
          setSuccess("sent_with_error");
        }
      });
  };

  return {
    form,
    success,
    sendEmail,
  };
};
