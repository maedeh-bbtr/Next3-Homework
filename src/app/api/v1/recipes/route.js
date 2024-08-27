import data from "../../../../data/dataRecipes";

export async function GET() {
  return Response.json(await data);
}

export async function POST(req) {
  const body = await req.json();
  data.recipes.push({ ...body, id: data.recipes.length + 1 });

  return Response.json(data);
}
