import { CourseSyllabusType } from "@/app/courses/[id]/components/course-syllabus/course-syllabus";
import styles from "./course-syllabus.module.css";

export default function SyllabusItem({ title, min }: CourseSyllabusType) {
  return (
    <div className={styles.courseSyllabusItem}>
      <p className={styles.courseSyllabusItemTitle}>{title}</p>
      <p className={styles.courseSyllabusItemMinutes}>{min} min.</p>
    </div>
  );
}
