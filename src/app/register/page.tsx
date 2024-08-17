import { redirect } from "next/navigation";
import { Input, Button } from "../components";
import styles from "./index.module.css";
import {
  InternalHandlerRegisterRequest,
  InternalHandlerRegisterResponse,
} from "@/generated/models";
import { cookies } from "next/headers";

export default function Page() {
  async function register(formData: FormData) {
    "use server";
    const body: InternalHandlerRegisterRequest = {};

    body.name = String(formData.get("name"));
    body.email = String(formData.get("email"));
    body.password = String(formData.get("password"));
    body.passwordConfirmation = String(formData.get("repeat-password"));

    const raw = await fetch("/register", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const res: InternalHandlerRegisterResponse = await raw.json();

    const token = res.ok; // lol

    if (token) {
      cookies().set("token", String(token));
    }

    redirect("/explore");
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
