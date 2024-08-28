import { ZodIssue } from "zod";

export const findError = (
  stateErrors: ZodIssue[] | undefined,
  path: string,
) => {
  if (!stateErrors) return;
  return stateErrors.filter(
    (err) => typeof err.path[0] === "string" && err.path[0] === path,
  );
};
