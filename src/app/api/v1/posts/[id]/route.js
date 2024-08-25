import data from "../../../../../data/dataPosts";

export async function GET(req, { params }) {
  const res = await data.posts.find((post) => post.id == params.id);
  return Response.json(res);
}
