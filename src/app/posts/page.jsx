import getData from "@/utils/getData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";

export default async function page() {
  const { posts } = await getData("https://dummyjson.com/posts");
  return (
    <Container justifyContent="center">
      <Typography variant="h2">Posts</Typography>
      <Container sx={{ marginY: "40px" }}>
        <Stack
          direction="row"
          spacing={3}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {posts.map((el) => (
            <Card sx={{ maxWidth: 927 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {el.title}
                </Typography>
                <Typography variant="body2">{el.body}</Typography>
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
