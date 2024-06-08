import { TextareaHTMLAttributes } from "react";
import styles from "./index.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={`${styles.textarea} ${inter.className}`} />
  );
}
