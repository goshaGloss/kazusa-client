import { Module } from "@/generated/models";
import styles from "./course-syllabus.module.css";
import SyllabusItem from "@/app/courses/[id]/components/course-syllabus/syllabus-item";

type CourseSyllabusProps = {
  syllabus: Module[];
};

export default function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  return (
    <div className={styles.courseSyllabusWrapper}>
      <div className={styles.courseSyllabus}>
        {syllabus.map((syllabusItem, index) => (
          <SyllabusItem
            key={index}
            title={syllabusItem.name}
            min={syllabusItem.durationMinutes}
          />
        ))}
      </div>
    </div>
  );
}
