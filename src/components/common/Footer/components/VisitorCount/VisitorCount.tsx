import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Eye } from "react-bootstrap-icons";
import { TOTAL_URL } from "utils/analytics";

// GoatCounter returns the site total as a string pre-formatted with thousands
// separators ("1,234"), cached for up to four hours.
type CounterResponse = {
  count: string;
};

export default function VisitorCount() {
  const [visitors, setVisitors] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(TOTAL_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: CounterResponse) => setVisitors(data.count))
      .catch(() => {
        // Blocked, offline or counter disabled: show nothing at all rather
        // than a broken or zeroed figure.
      });

    return () => controller.abort();
  }, []);

  if (!visitors) return null;

  return (
    <Stack
      direction="row"
      spacing={0.75}
      alignItems="center"
      sx={{ color: "grey.500" }}
    >
      <Eye size={14} aria-hidden />
      <Typography
        variant="subtitle2"
        color="inherit"
        sx={{ fontFamily: "Outfit" }}
      >
        {visitors} visitors
      </Typography>
    </Stack>
  );
}
