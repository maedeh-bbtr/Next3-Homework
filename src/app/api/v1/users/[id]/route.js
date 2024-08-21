import userData from "../../../../utils/dataUsers.json";

export async function GET(req, { params }) {
  const res = userData.find((user) => user.id === params.id);
  return Response.json(res);
}
