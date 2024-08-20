import getData from "@/utils/getData";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import Cards from "@/components/Card";

export default async function page() {
  const { recipes } = await getData("https://dummyjson.com/recipes");
  return (
    <Container justifyContent="center">
      <Typography variant="h2">Recipes</Typography>
      <Container sx={{ marginY: "40px" }}>
        <Stack
          direction="row"
          spacing={3}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {recipes.map((el) => (
            <Cards
              title={el.name}
              body={`tags: ${el.tags[0]} - ${el.tags[1]}`}
              route={`/recipes/${el.id}`}
            />
          ))}
        </Stack>
      </Container>
    </Container>
  );
}
