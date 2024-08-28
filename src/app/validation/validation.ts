import { z } from "zod";

export const REGISTER_SCHEMA = z
  .object({
    name: z
      .string({ message: "Username is required" })
      .min(1, { message: "Username is required" }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Email is invalid" }),
    password: z
      .string({ message: "Password is required" })
      .regex(/^(?=.*\d).{8,}$/, {
        message: "Password should contain atleas 8 characters and a number",
      }),
    passwordConfirmation: z
      .string({ message: "Password confirmation is required" })
      .regex(/^(?=.*\d).{8,}$/, {
        message: "Password should contain atleas 8 characters and a number",
      }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // path of error
  });

export const LOGIN_SCHEMA = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string({ message: "Password is required" })
    .regex(/^(?=.*\d).{8,}$/, {
      message: "Password should contain atleas 8 characters and a number",
    }),
});
