import getData from "@/utils/getData";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import Cards from "@/components/Card";

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
            <Cards
              title={el.title}
              body={`tags: ${el.tags[0]} - ${el.tags[1]} - ${el.tags[2]}`}
              route={`/posts/${el.id}`}
            />
          ))}
        </Stack>
      </Container>
    </Container>
  );
}
