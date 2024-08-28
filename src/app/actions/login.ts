"use server";
import { HandlerLoginRequest, HandlerLoginResponse } from "@/generated/models";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LOGIN_SCHEMA } from "../validation/validation";

export async function login(_prevState: any, formData: FormData) {
  const body: HandlerLoginRequest = {};

  body.email = String(formData.get("email"));
  body.password = String(formData.get("password"));

  const validatedFields = LOGIN_SCHEMA.safeParse(body);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.issues,
    };
  }

  const raw = await fetch(`${process.env.BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const res: HandlerLoginResponse = await raw.json();

  if (res?.token) {
    cookies().set("token", String(res.token));
    redirect("/explore");
  }
}
