import postsData from "../../../../utils/dataPosts.json";

export async function GET() {
  return Response.json(await postsData);
}
