import { forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./index.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Textarea = forwardRef(function TextArea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref,
) {
  return (
    <textarea
      ref={ref}
      {...props}
      className={`${styles.textarea} ${inter.className}`}
    />
  );
});
