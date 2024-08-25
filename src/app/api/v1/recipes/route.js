import data from "../../../../data/dataRecipes";

export async function GET() {
  return Response.json(await data);
}
