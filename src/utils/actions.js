"use server";

import { revalidateTag } from "next/cache";

export async function addPost(post) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "POST",
    body: JSON.stringify({ title: post }),
  });
  revalidateTag("newPost");
}

export async function addRecipe(recipe) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "POST",
    body: JSON.stringify({ name: recipe }),
  });
  revalidateTag("newRecipe");
}

export async function addUser(user) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    body: JSON.stringify({ username: user }),
  });
  revalidateTag("newUser");
}

export async function editPost(id, post) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: post }),
  });
  revalidateTag("newPost");
}

export async function editRecipe(id, recipe) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ name: recipe }),
  });
  revalidateTag("newRecipe");
}

export async function editUser(id, user) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ username: user }),
  });
  revalidateTag("newUser");
}

export async function deletePost(id) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, { method: "DELETE" });

  revalidateTag("newPost");
}

export async function deleteRecipe(id) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "DELETE",
  });

  revalidateTag("newRecipe");
}

export async function deleteUser(id) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, { method: "DELETE" });

  revalidateTag("newUser");
}
