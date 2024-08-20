import getData from "@/utils/getData";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import Cards from "@/components/Card";

export default async function page() {
  const { users } = await getData("https://dummyjson.com/users");
  return (
    <Container justifyContent="center">
      <Typography variant="h2">Users</Typography>
      <Container sx={{ marginY: "40px" }}>
        <Stack
          direction="row"
          spacing={3}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {users.map((el) => (
            <Cards
              title={el.username}
              body={`${el.gender} - age: ${el.age}`}
              route={`/users/${el.id}`}
            />
          ))}
        </Stack>
      </Container>
    </Container>
  );
}
