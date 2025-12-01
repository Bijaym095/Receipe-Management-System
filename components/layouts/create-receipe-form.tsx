"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createRecipe } from "@/services/recipe.service";
import { IRecipe } from "@/types/recipe.type";
import { RecipeForm, recipeSchema } from "@/definitions/recipe";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateRecipeForm() {
  const form = useForm<RecipeForm>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      name: "",
      subname: "",
      description: "",
    },
  });

  async function onSubmit(
    data: Omit<IRecipe, "id" | "createdAt" | "updatedAt">
  ) {
    try {
      await createRecipe(data);
      form.reset();
      toast.success("Receipe created successfully!");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toast.error("Failed to create recipe");
      }
    }
  }

  return (
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
            <Form {...form}>
              <form
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
                <Button type="submit" className="mt-2 w-full">
                  Create Recipe
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
