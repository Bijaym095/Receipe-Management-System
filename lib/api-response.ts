class ApiResponse {
  status: "success" | "error";
  data: unknown | null;
  message: string;
  meta?: Record<string, any> | null;
  errors?: { code: string; message: string }[] | null;
  links?: Record<string, string> | null;

  constructor(
    status: "success" | "error",
    data: unknown | null,
    message: string,
    meta: Record<string, any> | null = null,
    errors: { code: string; message: string }[] | null = null,
    links: Record<string, string> | null = null
  ) {
    this.status = status;
    this.data = data;
    this.message = message;
    this.meta = meta;
    this.errors = errors;
    this.links = links;
  }
}

export function SuccessResponse(
  data: unknown,
  message: string,
  meta?: Record<string, any>,
  links?: Record<string, string>
) {
  return new ApiResponse("success", data, message, meta, null, links);
}

export function ErrorResponse(
  message: string,
  errors: { code: string; message: string }[] | null
) {
  return new ApiResponse("error", null, message, null, errors, null);
}
