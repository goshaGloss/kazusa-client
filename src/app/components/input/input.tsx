import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./index.module.css";

export const Input = forwardRef(function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref,
) {
  return <input ref={ref} {...props} className={styles.input} />;
});
