export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { Input, Button } from "../components";
import styles from "./index.module.css";
import {
  InternalHandlerLoginRequest,
  InternalHandlerLoginResponse,
} from "@/generated/models";
import { cookies } from "next/headers";

export default function Page() {
  async function login(formData: FormData) {
    "use server";
    const body: InternalHandlerLoginRequest = {};

    body.email = String(formData.get("email"));
    body.password = String(formData.get("password"));

    const raw = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const res: InternalHandlerLoginResponse = await raw.json();

    const token = res.ok; // lol

    if (token) {
      cookies().set("token", String(token));
    }

    redirect("/explore");
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} action={login}>
        <h2 className={styles.heading}>Login</h2>
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
