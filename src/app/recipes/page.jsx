import getData from "@/utils/getData";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Recipes",
  description: "this is recipes page",
};

const Cards = dynamic(() => import("@/components/Card"), {
  loading: () => <p>Loading...</p>,
});

export default async function page() {
  const { recipes } = await getData("http://localhost:3000/api/v1/recipes");
  return (
    <Container sx={{ justifyContent: "center" }}>
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
              image={el.image}
            />
          ))}
        </Stack>
      </Container>
    </Container>
  );
}
