"use client";

import { Input, Button } from "@/app/components";
import styles from "./index.module.css";
import { login } from "@/app/actions/login";
import { findError } from "@/app/utils/findError";
import { useFormState } from "react-dom";

export default function Page() {
  const [state, formAction] = useFormState(login, { errors: [] });

  const emailError = findError(state?.errors, "email");
  const passwordError = findError(state?.errors, "password");

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} action={formAction}>
        <h2 className={styles.heading}>Login</h2>
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
