"use server";

import { NewActivity } from "@/generated/models";

export async function createActivity(payload: NewActivity) {
  const res = await fetch(`${process.env.BASE_URL}/activity`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return res.json();
}
