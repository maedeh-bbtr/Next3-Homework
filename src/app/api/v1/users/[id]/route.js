import data from "../../../../../data/dataUsers";

export async function GET(req, { params }) {
  const res = await data.users.find((user) => user.id == params.id);
  return Response.json(res);
}
