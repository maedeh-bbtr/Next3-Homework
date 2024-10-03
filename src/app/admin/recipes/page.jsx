import { Container, Typography } from "@mui/material";
import Form from "@/components/Form";
import ListItems from "@/components/RecipesList";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/v1/recipes", {
    next: { tags: ["newRecipe"] },
  });
  const { recipes } = await res.json();

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h2">Recipes</Typography>

      <Container sx={{ marginY: "100px" }}>
        <Form formTitle={"Recipe"} />
        <ListItems arr={recipes} />
      </Container>
    </Container>
  );
}
