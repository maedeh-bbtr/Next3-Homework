import data from "../../../../../data/dataUsers";

export async function GET(req, { params }) {
  const res = await data.users.find((user) => user.id == params.id);

  return Response.json(res);
}
export async function PATCH(req, { params }) {
  const { firstName, lastName, gender, age } = await req.json();
  const user = await data.users.find((user) => user.id == params.id);
  user.firstName = firstName ? firstName : user.firstName;
  user.lastName = lastName ? lastName : user.lastName;
  user.gender = gender ? gender : user.gender;
  user.age = age ? age : user.age;

  return Response.json(user);
}

export async function DELETE(req, { params }) {
  const index = await data.users.findIndex((user) => user.id == params.id);
  const deleted = data.users[index];
  data.users.splice(index, 1);

  return Response.json(deleted);
}
