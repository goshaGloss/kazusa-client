import { Module } from "@/generated/models";
import styles from "./course-syllabus.module.css";
import SyllabusItem from "../course-syllabus/syllabus-item";

type CourseSyllabusProps = {
  syllabus: Module[];
  isInteractive: boolean;
};

export default function CourseSyllabus({
  syllabus,
  isInteractive,
}: CourseSyllabusProps) {
  return (
    <div className={styles.courseSyllabusWrapper}>
      <div className={styles.courseSyllabus}>
        {syllabus.map((syllabusItem, index) => (
          <SyllabusItem
            key={index}
            id={syllabusItem.id}
            name={syllabusItem.name}
            durationMinutes={syllabusItem.durationMinutes}
            isCompleted={syllabusItem.isCompleted}
            isFirst={index === 0}
            isInteractive={isInteractive}
          />
        ))}
      </div>
    </div>
  );
}
