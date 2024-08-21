import userData from "../../../../utils/dataUsers.json";

export async function GET() {
  return Response.json(await userData);
}
