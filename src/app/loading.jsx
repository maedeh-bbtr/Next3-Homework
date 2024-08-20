import { CircularProgress, Stack } from "@mui/material";

export default function loading() {
  return (
    <Stack alignItems="center" justifyContent="center" height="80vh">
      <CircularProgress />
    </Stack>
  );
}
