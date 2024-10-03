import getData from "@/utils/getData";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Users",
  description: "this is users page",
};

const Cards = dynamic(() => import("@/components/Card"), {
  loading: () => <p>Loading...</p>,
});

export default async function page() {
  const { users } = await getData("http://localhost:3000/api/v1/users");
  return (
    <Container sx={{ justifyContent: "center" }}>
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
              key={el.id}
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
