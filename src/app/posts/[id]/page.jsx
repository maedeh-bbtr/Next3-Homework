import { Container, Stack, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import getData from "@/utils/getData";

export default async function page({ params }) {
  const { posts } = await getData("https://dummyjson.com/posts");
  const id = params.id;
  const post = posts.find((item) => item.id == id);
  return (
    <Container sx={{ marginTop: 10 }}>
      {post ? (
        <Stack spacing={2}>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="h5">{post.body}</Typography>
          <Typography>
            tags: {post.tags[0]} -{post.tags[1]} - {post.tags[2]}{" "}
          </Typography>
          <Typography>
            likes: {post.reactions.likes} - dislikes: {post.reactions.dislikes}
          </Typography>
        </Stack>
      ) : (
        notFound()
      )}
    </Container>
  );
}
