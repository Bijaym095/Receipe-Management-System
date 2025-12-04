import { ZodError } from "zod";
import { ErrorResponse } from "./api-response";

// Generic catchAsync for handlers with any parameters
export function catchAsync<T extends any[]>(fn: (...args: T) => Promise<Response>) {
  return async (...args: T) => {
    try {
      return await fn(...args);
    } catch (error) {
      if (error instanceof ZodError) {
        // Convert Zod issues to structured {code, message} array
        const formattedErrors = error.issues.map((issue) => ({
          code: issue.code,
          message: issue.message ?? "Invalid value",
        }));

        return new Response(
          JSON.stringify(ErrorResponse("Validation failed", formattedErrors)),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      } else if (error instanceof Error) {
        return new Response(
          JSON.stringify(
            ErrorResponse(error.message, [
              { code: "SERVER_ERROR", message: error.message },
            ])
          ),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        return new Response(
          JSON.stringify(ErrorResponse("Unknown error", null)),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }
  };
}
