"use client";

import styles from "./button.module.css";

type ButtonProps = {
  handleClick: () => void;
  text: string;
};

export default function Button({ text, handleClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}
