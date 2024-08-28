import { NewCourse } from "@/generated/models";
import { redirect } from "next/navigation";

export async function createCourse(formData: FormData) {
  "use server";
  const body: NewCourse = {};

  body.title = String(formData.get("tirle"));
  body.price = Number(formData.get("price"));
  body.description = String(formData.get("description"));

  const validatedFields = LOGIN_SCHEMA.safeParse(body);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const raw = await fetch(`${process.env.BASE_URL}/course`, {
    method: "POST",
    body: JSON.stringify(rawFormData),
  });

  const res: boolean = await raw.json();

  if (res) {
    redirect("/admin/courses");
  }
}
