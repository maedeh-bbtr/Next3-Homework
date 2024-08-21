import postsData from "../../../../utils/dataPosts.json";

export async function GET(req, { params }) {
  const res = postsData.find((post) => post.id === params.id);
  return Response.json(res);
}
