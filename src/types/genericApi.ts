export interface RateLimit {
  status: "ERROR";
  code: "TOO_MANY_REQUESTS";
  message: "Too many requests from this IP, please try again later.";
}

export type ValidationErrorItem = {
  type?: string; // optional, not always present
  value: string;
  msg: string;
  path: string;
  location: "body" | "query" | "params" | "headers" | "cookies";
};

export type ValidationErrors = ValidationErrorItem[];

export type ApiError =
  | { type: "VALIDATION_ERROR"; details: unknown }
  | { type: "AUTH_ERROR"; message?: string }
  | { type: "CONFLICT_ERROR"; message: string }
  | { type: "INTERNAL_ERROR"; message?: string };
