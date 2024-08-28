"use server";

import { CourseUpdateBody } from "@/generated/models";
import { redirect } from "next/navigation";
import { UPDATE_COURSE_SCHEMA } from "../validation/validation";

export default async function updateCourse(
  _prevState: any,
  formData: FormData,
) {
  const body: CourseUpdateBody = {
    id: "",
    title: "",
    price: 0,
    description: "",
  };

  body.id = String(formData.get("id"));
  body.title = String(formData.get("title"));
  body.price = Number(formData.get("price"));
  body.description = String(formData.get("description"));

  const validatedFields = UPDATE_COURSE_SCHEMA.safeParse(body);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const raw = await fetch(`${process.env.BASE_URL}/course`, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  const res: boolean = await raw.json();

  if (res) {
    redirect("/admin/courses");
  }
}
