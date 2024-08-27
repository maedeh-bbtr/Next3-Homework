import data from "../../../../data/dataUsers";

export async function GET() {
  return Response.json(await data);
}

export async function POST(req) {
  const body = await req.json();
  data.users.push({ ...body, id: data.users.length + 1 });

  return Response.json(data);
}
