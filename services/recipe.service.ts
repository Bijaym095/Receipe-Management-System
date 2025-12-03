import { IRecipe } from "@/types/recipe.type";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// GET all recipes
export async function getAllRecipes() {
  const res = await fetch(`${API_URL}/recipes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch recipes");

  return res.json();
}

// CREATE new recipe
export async function createRecipe(recipe: Omit<IRecipe, "id">) {
  const res = await fetch(`${API_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if (!res.ok) throw new Error("Failed to create recipe");

  return res.json();
}

// GET single recipe detail
export async function getSingleRecipe(id: string) {
  const res = await fetch(`${API_URL}/recipes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch recipe by id");
  return res.json();
}
