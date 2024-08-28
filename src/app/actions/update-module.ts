"use server";

import { ModuleUpdateBody } from "@/generated/models";
import { redirect } from "next/navigation";
import { UPDATE_MODULE_SCHEMA } from "../validation/validation";

export default async function updateModule(
  _prevState: any,
  formData: FormData,
) {
  const body: ModuleUpdateBody = {
    id: "",
    name: "",
    content: "",
    order: 0,
    durationMinutes: 0,
  };

  body.id = String(formData.get("id"));
  body.name = String(formData.get("name"));
  body.content = String(formData.get("content"));
  body.order = Number(formData.get("order"));
  body.durationMinutes = Number(formData.get("durationMinutes"));

  const validatedFields = UPDATE_MODULE_SCHEMA.safeParse(body);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const raw = await fetch(`${process.env.BASE_URL}/module`, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  const res: boolean = await raw.json();

  if (res) {
    redirect("/admin/modules");
  }
}
