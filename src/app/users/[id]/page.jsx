import { Container, Stack, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import getData from "@/utils/getData";

export async function generateMetadata({ params }) {
  return {
    title: `user - ${params.id}`,
    description: `user - ${params.username}`,
  };
}

export default async function page({ params }) {
  const user = await getData(`http://localhost:3000/api/v1/users/${params.id}`);

  return (
    <Container sx={{ marginTop: 10 }}>
      {user ? (
        <Stack spacing={2}>
          <Typography variant="h2">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography color="text.secondary" variant="h4">
            gender: {user.gender} - age: {user.age}
          </Typography>
          <Typography>
            address: {user.address.country} - {user.address.state} -
            {user.address.city} - {user.address.address}
          </Typography>
          <Typography>university: {user.university}</Typography>
          <Typography>
            role in {user.company.name} {user.company.department} department:
            {user.company.title}
          </Typography>
        </Stack>
      ) : (
        notFound()
      )}
    </Container>
  );
}
