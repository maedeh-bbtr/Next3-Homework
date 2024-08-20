import Posts from "@/components/Posts";
import Recipes from "@/components/Recipes";
import Users from "@/components/Users";
import getData from "@/utils/getData";
import { Suspense } from "react";

export default async function Home() {
  const { users } = await getData("https://dummyjson.com/users");
  const { posts } = await getData("https://dummyjson.com/posts");
  const { recipes } = await getData("https://dummyjson.com/recipes");
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <Users data={users} />
      </Suspense>
      <Suspense fallback={<p>Loading posts...</p>}>
        <Posts data={posts} />
      </Suspense>
      <Suspense fallback={<p>Loading recipes...</p>}>
        <Recipes data={recipes} />
      </Suspense>
    </main>
  );
}
