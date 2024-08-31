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
  const index = await data.posts.findIndex((post) => post.id == params.id);
  const deleted = data.posts[index];
  data.posts.splice(index, 1);

  return Response.json(deleted);
}
