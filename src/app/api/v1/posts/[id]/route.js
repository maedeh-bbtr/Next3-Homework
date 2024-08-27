import data from "../../../../../data/dataPosts";

export async function GET(req, { params }) {
  const res = await data.posts.find((post) => post.id == params.id);

  return Response.json(res);
}

export async function PATCH(req, { params }) {
  const { title, body } = await req.json();
  const post = await data.posts.find((post) => post.id == params.id);
  post.title = title ? title : post.title;
  post.body = body ? body : post.body;

  return Response.json(post);
}

export async function DELETE(req, { params }) {
  const newData = await data.posts.filter((post) => post.id != params.id);

  return Response.json(newData);
}
