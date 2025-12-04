import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { RecipeForm, recipeSchema } from "@/definitions/recipe";
import { IRecipe } from "@/types/recipe.type";
import { zodResolver } from "@hookform/resolvers/zod";

interface EditRecipeFormProps {
  isEditing: boolean;
  recipe: IRecipe;
  onEditSubmit: (data: Omit<IRecipe, "id">) => void;
}

function EditRecipeForm({
  isEditing,
  recipe,
  onEditSubmit,
}: EditRecipeFormProps) {
  const form = useForm<RecipeForm>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      name: recipe.name,
      subname: recipe.subname,
      description: recipe.description,
    },
  });

  const { watch } = form;

  // Watch all form values
  const currentValues = watch();

  // Check if values are same as default
  const isSameAsDefault =
    currentValues.name === recipe.name &&
    currentValues.subname === recipe.subname &&
    currentValues.description === recipe.description;

  function onSubmit(data: RecipeForm) {
    const updatedFields: Partial<Omit<IRecipe, "id">> = {};
    if (data.name !== recipe.name) updatedFields.name = data.name;
    if (data.subname !== recipe.subname) updatedFields.subname = data.subname;
    if (data.description !== recipe.description)
      updatedFields.description = data.description;

    // Call the parent handler only if there are changes
    if (Object.keys(updatedFields).length > 0) {
      onEditSubmit(updatedFields as Omit<IRecipe, "id">);
    } else {
      console.log("No changes made");
    }
  }

  return (
    <Form {...form}>
      <form
        id={`edit-recipe-form-${recipe.id}`}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe Name</FormLabel>
              <FormControl>
                <Input placeholder="Chocolate Cake" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subname */}
        <FormField
          control={form.control}
          name="subname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subname</FormLabel>
              <FormControl>
                <Input placeholder="Dessert" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="h-[180px]"
                  placeholder="Write a short description..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button disabled={isSameAsDefault}>
          {isEditing ? "Editing..." : "Edit"}
        </Button>
      </form>
    </Form>
  );
}

export default EditRecipeForm;
