import data from "../../../../data/dataPosts";

export async function GET() {
  return Response.json(await data);
}
