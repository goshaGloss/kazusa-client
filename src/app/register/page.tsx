export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { Input, Button } from "../components";
import styles from "./index.module.css";
import {
  HandlerRegisterRequest,
  HandlerRegisterResponse,
} from "@/generated/models";
import { cookies } from "next/headers";

export default function Page() {
  async function register(formData: FormData) {
    "use server";
    const body: HandlerRegisterRequest = {};

    body.name = String(formData.get("name"));
    body.email = String(formData.get("email"));
    body.password = String(formData.get("password"));
    body.passwordConfirmation = String(formData.get("repeat-password"));

    const raw = await fetch(`${process.env.BASE_URL}/register`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const res: HandlerRegisterResponse = await raw.json();

    if (res.token) {
      cookies().set("token", res.token);

      redirect("/explore");
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} action={register}>
        <h2 className={styles.heading}>Register</h2>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Input
          name="repeat-password"
          type="password"
          placeholder="Repeat password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
