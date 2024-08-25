import data from "../../../../../data/dataRecipes";

export async function GET(req, { params }) {
  const res = await data.recipes.find((recipe) => recipe.id == params.id);
  return Response.json(res);
}
