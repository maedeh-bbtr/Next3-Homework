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
  const recipe = await getData(
    `http://localhost:3000/api/v1/recipes/${params.id}`
  );

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
            instruction: {recipe.instructions.map((instruction) => instruction)}
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
