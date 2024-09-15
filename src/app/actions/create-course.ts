"use server";

import { redirect } from "next/navigation";
import { CREATE_COURSE_SCHEMA } from "../validation/validation";

interface CreateCourseBody {
  title: string;
  price: number;
  description: string;
  cover: string | File | null;
}

export async function createCourse(_prevState: any, formData: FormData) {
  const body: CreateCourseBody = {
    title: "",
    price: 0,
    description: "",
    cover: null,
  };
  body.title = String(formData.get("title"));
  body.price = Number(formData.get("price"));
  body.description = String(formData.get("description"));
  body.cover = formData.get("cover");

  const validatedFields = CREATE_COURSE_SCHEMA.safeParse(body);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const raw = await fetch(`${process.env.BASE_URL}/course`, {
    method: "POST",
    body: formData,
  });

  const res: boolean = await raw.json();

  if (res) {
    redirect("/admin/courses");
  }
}
