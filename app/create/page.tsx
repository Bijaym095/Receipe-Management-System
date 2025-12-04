import CreateRecipeForm from "@/components/layouts/create-recipe-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Create Recipe",
};

function CreateRecipe() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Card>
              <CardHeader>
                <CardTitle>Create a New Recipe</CardTitle>
                <CardDescription>
                  Fill in the details below to add a new recipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CreateRecipeForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;
