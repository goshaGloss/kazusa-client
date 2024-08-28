import { forwardRef, InputHTMLAttributes, Ref } from "react";
import styles from "./index.module.css";

export const Input = forwardRef(function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>,
) {
  return <input ref={ref} className={styles.input} {...props} />;
});
