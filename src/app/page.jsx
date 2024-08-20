import Posts from "@/components/Posts";
import Recipes from "@/components/Recipes";
import Users from "@/components/Users";
import getData from "@/utils/getData";

export default async function Home() {
  const { users } = await getData("https://dummyjson.com/users");
  const { posts } = await getData("https://dummyjson.com/posts");
  const { recipes } = await getData("https://dummyjson.com/recipes");
  return (
    <main>
      <Users data={users} />
      <Posts data={posts} />
      <Recipes data={recipes} />
    </main>
  );
}
