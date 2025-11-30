import { IRecipe } from "@/types/recipe";
import React from "react";
import ReceipeCard from "./recipe-card";

async function getRecipes(): Promise<IRecipe[]> {
  const data = await fetch("http://localhost:3000/api/recipes");
  const response = await data.json();
  return response;
}

async function RecipeListing() {
  const recipes = await getRecipes();

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <React.Fragment key={recipe.id}>
            <ReceipeCard {...recipe} />
          </React.Fragment>
        ))}
      </div>
  );
}

export default RecipeListing;
