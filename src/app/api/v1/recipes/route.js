import recipesData from "../../../../utils/dataRecipes.json";

export async function GET() {
  return Response.json(await recipesData);
}
