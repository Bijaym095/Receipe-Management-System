import { db } from "@/db";
import { recipeTable } from "@/db/schema";
import { recipeSchema } from "@/definitions/recipe";
import { SuccessResponse } from "@/lib/api-response";
import { catchAsync } from "@/lib/catchAsync";
import { eq } from "drizzle-orm";
import { ZodError } from "zod";
import { ZodIssueCode } from "zod/v3";

export const GET = catchAsync(async () => {
  const data = await db.select().from(recipeTable);

  return Response.json(SuccessResponse(data, "Receipe fetched successfully!"), {
    status: 200,
  });
});

export const POST = catchAsync(async (request: Request) => {
  const body = await request.json();

  const parsedBody = recipeSchema.parse(body);

  const recipeExists = await db.query.recipeTable.findFirst({
    where: eq(recipeTable.name, body.name),
  });

  if (recipeExists) {
    throw new ZodError([
      {
        code: ZodIssueCode.custom,
        message: "Receipe already exists. Please enter a new recipe name",
        path: ["name"],
      },
    ]);
  }

  const data = await db.insert(recipeTable).values(parsedBody);

  return Response.json(SuccessResponse(data, "Added recipe successfully"), {
    status: 201,
  });
});
