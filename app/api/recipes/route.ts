import { db } from "@/db";
import { recipes } from "@/db/schema";

export async function GET() {
  try {
    const getAllReceipes = await db.select().from(recipes);
    return Response.json(getAllReceipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

export async function POST(request: Request) {
  try {
    const receipeInfo = await request.json();
    await db.insert(recipes).values(receipeInfo);
    return Response.json({
      message: "Recipe added successfully",
      recipe: receipeInfo,
    });
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
}
