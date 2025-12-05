import { db } from "@/db";
import { recipeTable } from "@/db/schema";
import { recipeSchema } from "@/definitions/recipe";
import { ErrorResponse, SuccessResponse } from "@/lib/api-response";
import { catchAsync } from "@/lib/catchAsync";
import { eq } from "drizzle-orm";

export const GET = catchAsync(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const recipeId = parseInt((await params).id);

    // Validate the recipe ID
    if (isNaN(recipeId)) {
      return Response.json(
        ErrorResponse("Invalid recipe id", [
          {
            code: "INVALID_ID",
            message: "The recipe ID provided is not a valid number.",
          },
        ]),
        { status: 400 }
      );
    }

    // Check if recipe exists
    const recipeExists = await db.query.recipeTable.findFirst({
      where: eq(recipeTable.id, recipeId),
    });

    if (!recipeExists) {
      return Response.json(
        ErrorResponse("Recipe not found", [
          {
            code: "NOT_FOUND",
            message: `Recipe with ID ${recipeId} cannot be found.`,
          },
        ]),
        { status: 404 }
      );
    }

    const data = await db
      .select()
      .from(recipeTable)
      .where(eq(recipeTable.id, recipeId));

    return Response.json(
      { data, message: "Recipe fetched successfully " },
      { status: 200 }
    );
  }
);

export const PATCH = catchAsync(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const recipeId = parseInt((await params).id);
    const body = await req.json();

    // Validate the recipe ID
    if (isNaN(recipeId)) {
      return Response.json(
        ErrorResponse("Invalid recipe id", [
          {
            code: "INVALID_ID",
            message: "The recipe ID provided is not a valid number.",
          },
        ]),
        { status: 400 }
      );
    }

    const recipeExists = await db.query.recipeTable.findFirst({
      where: eq(recipeTable.id, recipeId),
    });

    // Check if recipe exists
    if (!recipeExists) {
      return Response.json(
        ErrorResponse("Recipe not found", [
          {
            code: "NOT_FOUND",
            message: `Recipe with ID ${recipeId} cannot be found.`,
          },
        ]),
        { status: 404 }
      );
    }

    // Validate only fields being updated
    const parsedBody = recipeSchema.partial().parse(body);

    // Ensure at least one field to update
    if (Object.keys(parsedBody).length === 0) {
      return Response.json(
        ErrorResponse("No fields to update", [
          {
            code: "NO_FIELDS",
            message: "Please provide at least one field to update.",
          },
        ]),
        { status: 400 }
      );
    }

    await db
      .update(recipeTable)
      .set(parsedBody)
      .where(eq(recipeTable.id, recipeId));

    return new Response(null, { status: 204 });
  }
);

export const DELETE = catchAsync(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const recipeId = parseInt((await params).id);

    // Validate the recipe ID
    if (isNaN(recipeId)) {
      return Response.json(
        ErrorResponse("Invalid recipe id", [
          {
            code: "INVALID_ID",
            message: "The recipe ID provided is not a valid number.",
          },
        ]),
        { status: 400 }
      );
    }

    const recipeExists = await db.query.recipeTable.findFirst({
      where: eq(recipeTable.id, recipeId),
    });

    // Check if recipe exists
    if (!recipeExists) {
      return Response.json(
        ErrorResponse("Recipe not found", [
          {
            code: "NOT_FOUND",
            message: `Recipe with ID ${recipeId} cannot be found.`,
          },
        ]),
        { status: 404 }
      );
    }

    await db.delete(recipeTable).where(eq(recipeTable.id, recipeId));

    return new Response(null, { status: 204 });
  }
);
