import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}
