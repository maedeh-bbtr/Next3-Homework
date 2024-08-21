import recipesData from "../../../../utils/dataRecipes.json";

export async function GET(req, { params }) {
  const res = recipesData.find((recipe) => recipe.id === params.id);
  return Response.json(res);
}
