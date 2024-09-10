import { Module } from "@/generated/models";
import styles from "./course-syllabus.module.css";
import Link from "next/link";

type TSyllabusItemProps = {
  isFirst: boolean;
} & Pick<Module, "name" | "durationMinutes" | "isCompleted" | "id">;

export default function SyllabusItem({
  id,
  name,
  durationMinutes,
  isCompleted,
  isFirst,
}: TSyllabusItemProps) {
  return (
    <div className={styles.courseSyllabusItem}>
      {isFirst || isCompleted ? (
        <Link
          className={styles.courseSyllabusItemTitle}
          href={`/modules/${id || ""}`}
        >
          {name}
        </Link>
      ) : (
        <p className={styles.courseSyllabusItemTitle}>{name}</p>
      )}
      <p className={styles.courseSyllabusItemMinutes}>{durationMinutes} min.</p>
    </div>
  );
}
