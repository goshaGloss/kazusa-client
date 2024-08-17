
import { Module } from "@/generated/models";
import styles from "./course-syllabus.module.css";

export default function SyllabusItem({ name, durationMinutes }:Pick<Module, 'name' | 'durationMinutes'>) {
  return (
    <div className={styles.courseSyllabusItem}>
      <p className={styles.courseSyllabusItemTitle}>{name}</p>
      <p className={styles.courseSyllabusItemMinutes}>{durationMinutes} min.</p>
    </div>
  );
}
