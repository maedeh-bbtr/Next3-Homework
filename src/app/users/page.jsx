import getData from "@/utils/getData";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";

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
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {el.role}
                </Typography>
                <Typography variant="h5" component="div">
                  {el.firstName} {el.lastName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  gender: {el.gender} - age: {el.age}
                </Typography>
                <Typography variant="body2">
                  {el.email}
                  <br />
                  {el.phone}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">More</Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </Container>
  );
}
