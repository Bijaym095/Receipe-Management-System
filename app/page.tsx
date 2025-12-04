import RecipeListing from "@/components/layouts/recipe-listing";
import { getAllRecipes } from "@/services/recipe.service";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home - Recipe Management System",
};

export default function Home() {
  const recipes = getAllRecipes();

  return (
    <section className="container my-12 lg:my-16 xl:my-20 2xl:my-24">
      <header className="mb-6 2xl:mb-9 text-center">
        <h1 className="font-semibold text-3xl lg:text-5xl">Recipes</h1>
      </header>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <RecipeListing recipes={recipes} />
      </Suspense>
    </section>
  );
}
