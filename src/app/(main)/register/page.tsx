"use client";

import { useActionState } from "react";
import { Input, Button } from "@/app/components";
import styles from "./index.module.css";
import { register } from "@/app/actions";
import { findError } from "@/app/utils/findError";

export default function Page() {
  const [state, formAction] = useActionState(register, { errors: [] });

  const nameError = findError(state?.errors, "name");
  const lastnameError = findError(state?.errors, "lastname");
  const emailError = findError(state?.errors, "email");
  const passwordError = findError(state?.errors, "password");
  const passwordConfirmError = findError(state?.errors, "passwordConfirmation");

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} action={formAction}>
        <h2 className={styles.heading}>Register</h2>
        <div>
          <Input name="name" type="text" placeholder="Name" />
          {nameError && nameError.length > 0 ? (
            <p className={styles.errorText}>
              {nameError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input name="lastname" type="text" placeholder="Lastname" />
          {lastnameError && lastnameError.length > 0 ? (
            <p className={styles.errorText}>
              {lastnameError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input name="email" type="text" placeholder="Email" />
          {emailError && emailError.length > 0 ? (
            <p className={styles.errorText}>
              {emailError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input name="password" type="password" placeholder="Password" />
          {passwordError && passwordError.length > 0 ? (
            <p className={styles.errorText}>
              {passwordError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input
            name="repeat-password"
            type="password"
            placeholder="Repeat password"
          />
          {passwordConfirmError && passwordConfirmError.length > 0 ? (
            <p className={styles.errorText}>
              {passwordConfirmError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
