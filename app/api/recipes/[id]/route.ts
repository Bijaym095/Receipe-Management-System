import { db } from "@/db";
import { recipes } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

// GET recipe detail
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  if (isNaN(id)) {
    return Response.json({ message: "Invalid recipe id" }, { status: 400 });
  }

  try {
    const data = await db.select().from(recipes).where(eq(recipes.id, id));

    if (data.length === 0) {
      return Response.json({ message: "Recipe not found" }, { status: 404 });
    } 

    return Response.json({ message: "Recipe fetched successfully", data });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching recipe details:", error.message);
    }
  }
}

// UPDATE recipe detail
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  const body = await request.json();
  console.log("body", body)
  if (isNaN(id)) {
    return Response.json({ message: "Invalid recipe id" }, { status: 400 });
  }

  try {
    const data = await db.update(recipes).set({...body, updatedAt: sql`NOW()`}).where(eq(recipes.id, id))

    if (data.length === 0) {
      return Response.json({ message: "Recipe not found" }, { status: 404 });
    }

    return Response.json({ message: "Recipe updated successfully", data });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating recipe details:", error.message);
    }
  }
}

// DELETE recipe detail
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  if (isNaN(id)) {
    return new Response("Invalid recipe ID", { status: 400 });
  }
  try {
    const data = await db.delete(recipes).where(eq(recipes.id, id));

    if (data.length === 0) {
      return Response.json({ message: "Recipes not found" }, { status: 404 });
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error deleting recipe details:", error.message);
    }
  }
}
