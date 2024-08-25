import data from "../../../../data/dataUsers";

export async function GET() {
  return Response.json(await data);
}
