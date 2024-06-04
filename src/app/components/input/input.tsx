import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={styles.input} />;
}
