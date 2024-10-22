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

export const CREATE_COURSE_SCHEMA = z.object({
  cover: z.instanceof(File, { message: "Cover is required" }),
  title: z.string({ message: "Title is required" }).min(1, "Title is required"),
  price: z.number({ message: "Price is required" }).min(1),
  description: z
    .string({ message: "Description is required" })
    .min(1, "Description is required"),
});

export const UPDATE_COURSE_SCHEMA = z.object({
  id: z.string({ message: "Id is required" }).min(1, "Id is required"),
  title: z.string({ message: "Title is required" }).min(1, "Title is required"),
  price: z.number({ message: "Price is required" }).min(1, "Price is required"),
  description: z
    .string({ message: "Description is required" })
    .min(1, "Description is required"),
});

export const CREATE_MODULE_SCHEMA = z.object({
  content: z
    .string({ message: "Content is required" })
    .min(1, "Content is required"),
  courseId: z
    .string({ message: "Course is required" })
    .min(1, "Course is required"),
  durationMinutes: z
    .number({ message: "Duration of the course is required" })
    .min(1, "Duration of the course is required"),
  name: z.string({ message: "Name is required" }).min(1, "Name is required"),
  order: z
    .number({ message: "Duration of the course is required" })
    .min(1, "Duration of the course is required"),
});

export const UPDATE_MODULE_SCHEMA = z.object({
  id: z.string({ message: "id is required" }),
  content: z
    .string({ message: "Content is required" })
    .min(1, "Content is required"),
  durationMinutes: z
    .number({ message: "Duration of the course is required" })
    .min(1, "Duration of the course is required"),
  name: z.string({ message: "Name is required" }).min(1, "Name is required"),
  order: z
    .number({ message: "Duration of the course is required" })
    .min(1, "Duration of the course is required"),
});
