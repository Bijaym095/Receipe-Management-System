import { z } from "zod";

export const recipeSchema = z.object({
    name: z.string().min(3, "Recipe name should be at least 3 characters long"),
    subname: z.string().min(3, "Subname should be at least 3 characters long"),
    description: z.string().min(10, "Description should be at least 10 characters long"),
})

export type RecipeForm = z.infer<typeof recipeSchema>;