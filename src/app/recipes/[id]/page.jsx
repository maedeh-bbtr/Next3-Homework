import { Container, Stack, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import getData from "@/utils/getData";

export async function generateMetadata({ params }) {
  return {
    title: `recipes - ${params.id}`,
    description: `recipes - ${params.name}`,
  };
}

export default async function page({ params }) {
  const { recipes } = await getData("https://dummyjson.com/recipes");
  const id = params.id;
  const recipe = recipes.find((item) => item.id == id);
  return (
    <Container sx={{ marginTop: 10 }}>
      {recipe ? (
        <Stack spacing={2}>
          <Typography variant="h3">{recipe.name}</Typography>
          <Typography variant="h5">
            ingredients:
            {recipe.ingredients.map((ingredient) => ingredient)}
          </Typography>
          <Typography variant="h4">
            instruction: {recipe.instructions[0]}
          </Typography>
          <Typography>
            difficulty: {recipe.difficulty} - rating: {recipe.rating}
          </Typography>
        </Stack>
      ) : (
        notFound()
      )}
    </Container>
  );
}
