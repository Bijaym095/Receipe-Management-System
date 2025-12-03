import RecipeSingleContent from "@/components/layouts/recipe-single-content";
import RecipeSingleHeader from "@/components/layouts/recipe-single-header";
import { getSingleRecipe } from "@/services/recipe.service";
import { IRecipe } from "@/types/recipe.type";

async function RecipePostPage({
  params,
}: {
  params: Promise<{ recipe: string }>;
}) {
  let recipeInfo = {} as IRecipe;

  try {
    const { recipe: id } = await params;
    const { data } = await getSingleRecipe(id);
    recipeInfo = data[0];
  } catch (error) {
    console.error("Error fetching recipe:", (error as Error).message);
  }

  return (
    <div className="container my-12 lg:my-16 xl:my-20 2xl:my-24 bg-background min-h-screen">
      <div>
        <RecipeSingleHeader
          label={recipeInfo?.subname}
          title={recipeInfo?.name}
        />

        <div className="mt-8">
          <RecipeSingleContent
            content={recipeInfo?.description}
            coverImage="https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09"
          />
        </div>
      </div>
    </div>
  );
}

export default RecipePostPage;
