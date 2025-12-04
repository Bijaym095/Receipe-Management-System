"use client";

import { IRecipe } from "@/types/recipe.type";
import { use } from "react";
import RecipeCard from "./recipe-card";

interface RecipeListingProps {
  recipes: Promise<IRecipe[]>;
}

export default function RecipeListing({ recipes }: RecipeListingProps) {
  const recipesListing = use(recipes);

  if (recipesListing.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">No recipes found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipesListing.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
