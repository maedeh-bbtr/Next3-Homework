import data from "../../../../../data/dataRecipes";

export async function GET(req, { params }) {
  const res = await data.recipes.find((recipe) => recipe.id == params.id);

  return Response.json(res);
}
export async function PATCH(req, { params }) {
  const { name, ingredients, instructions } = await req.json();
  const recipe = await data.recipes.find((recipe) => recipe.id == params.id);
  recipe.name = name ? name : recipe.name;
  recipe.ingredients = ingredients ? ingredients : recipe.ingredients;
  recipe.instructions = instructions ? instructions : recipe.instructions;

  return Response.json(recipe);
}

export async function DELETE(req, { params }) {
  const index = await data.recipes.findIndex(
    (recipe) => recipe.id == params.id
  );
  const deleted = data.recipes[index];
  data.recipes.splice(index, 1);

  return Response.json(deleted);
}
