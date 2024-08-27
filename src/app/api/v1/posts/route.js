import data from "../../../../data/dataPosts";

export async function GET() {
  return Response.json(await data);
}

export async function POST(req) {
  const body = await req.json();
  data.posts.push({ ...body, id: data.posts.length + 1 });

  return Response.json(data);
}
