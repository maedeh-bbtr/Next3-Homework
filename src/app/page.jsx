import Posts from "@/components/PostsList";
import Recipes from "@/components/RecipesList";
import Users from "@/components/UsersList";
import getData from "@/utils/getData";
import { Suspense } from "react";

export default async function Home() {
  const { users } = await getData("http://localhost:3000/api/v1/users");
  const { posts } = await getData("http://localhost:3000/api/v1/posts");
  const { recipes } = await getData("http://localhost:3000/api/v1/recipes");
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <Users arr={users} />
      </Suspense>
      <Suspense fallback={<p>Loading posts...</p>}>
        <Posts arr={posts} />
      </Suspense>
      <Suspense fallback={<p>Loading recipes...</p>}>
        <Recipes arr={recipes} />
      </Suspense>
    </main>
  );
}
