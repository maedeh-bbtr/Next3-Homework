import { Container, Typography } from "@mui/material";
import Form from "@/components/Form";
import ListItems from "@/components/PostsList";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/v1/posts", {
    next: { tags: ["newPost"] },
  });
  const { posts } = await res.json();

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h2">Posts</Typography>

      <Container sx={{ marginY: "100px" }}>
        <Form formTitle={"Post"} />
        <ListItems arr={posts} />
      </Container>
    </Container>
  );
}
