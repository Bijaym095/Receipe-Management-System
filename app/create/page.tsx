import CreateRecipeForm from "@/components/layouts/create-receipe-form";

function CreateRecipe() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <CreateRecipeForm />
      </div>
    </div>
  );
}

export default CreateRecipe;
