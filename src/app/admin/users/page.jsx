import { Container, Typography } from "@mui/material";
import Form from "@/components/Form";
import ListItems from "@/components/UsersList";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/v1/users", {
    next: { tags: ["newUser"] },
  });
  const { users } = await res.json();

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h2">Users</Typography>

      <Container sx={{ marginY: "100px" }}>
        <Form formTitle={"User"} />
        <ListItems arr={users} />
      </Container>
    </Container>
  );
}
