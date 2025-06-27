import type { ApiError } from "@/types/genericApi";

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    typeof (error as any).type === "string"
  );
};
