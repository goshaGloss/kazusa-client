"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";
import { useFormStatus } from "react-dom";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <button
      className={styles.button}
      data-loading={pending}
      disabled={pending || props.disabled}
    >
      <p>{props.children}</p>
    </button>
  );
}
