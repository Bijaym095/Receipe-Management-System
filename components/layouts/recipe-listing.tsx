import { getAllRecipes } from "@/services/recipe.service";
import { IRecipe } from "@/types/recipe.type";
import ReceipeCard from "./recipe-card";

export default async function RecipeListing() {
  let recipes: IRecipe[] = [];

  try {
    const data = await getAllRecipes();
    // Ensure recipes is always an array
    recipes = data ?? [];
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching recipes:", error.message);
    }
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">No recipes found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <ReceipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
