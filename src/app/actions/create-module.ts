"use server";

import { NewModule } from "@/generated/models";
import { redirect } from "next/navigation";
import { CREATE_MODULE_SCHEMA } from "../validation/validation";

export async function createModule(_prevState: any, formData: FormData) {
  const body: NewModule = {
    content: "",
    courseId: "",
    durationMinutes: 0,
    name: "",
    order: 0,
  };

  body.content = String(formData.get("content"));
  body.courseId = String(formData.get("courseId"));
  body.durationMinutes = Number(formData.get("durationMinutes"));
  body.name = String(formData.get("name"));
  body.order = Number(formData.get("order"));

  const validatedFields = CREATE_MODULE_SCHEMA.safeParse(body);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const raw = await fetch(`${process.env.BASE_URL}/module`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const res: boolean = await raw.json();

  if (res) {
    redirect("/admin/modules");
  }
}
