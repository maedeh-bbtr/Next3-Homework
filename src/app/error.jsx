"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
export default function error({ error, reset }) {
  return (
    <Container>
      <Stack alignItems="center">
        <Typography variant="h3">You got an error</Typography>
        <Button variant="contained" onClick={() => reset()}>
          Reset
        </Button>
      </Stack>
    </Container>
  );
}
