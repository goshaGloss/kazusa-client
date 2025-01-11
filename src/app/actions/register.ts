"use server";

import {
  HandlerRegisterRequest,
  HandlerRegisterResponse,
} from "@/generated/models";
import { cookies } from "next/headers";
import { REGISTER_SCHEMA } from "../validation/validation";
import { redirect } from "next/navigation";

export async function register(_prevState: any, formData: FormData) {
  const validatedFields = REGISTER_SCHEMA.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const body: HandlerRegisterRequest = {};

  body.name =
    String(formData.get("name")) + " " + String(formData.get("lastname"));
  body.email = String(formData.get("email"));
  body.password = String(formData.get("password"));
  body.passwordConfirmation = String(formData.get("repeat-password"));

  const raw = await fetch(`${process.env.BASE_URL}/register`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const res: HandlerRegisterResponse = await raw.json();

  if (res.token) {
    (await cookies()).set("token", res.token);

    redirect("/explore");
  }
}
