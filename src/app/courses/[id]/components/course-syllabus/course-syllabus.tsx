import styles from "./course-syllabus.module.css";
import SyllabusItem from "@/app/courses/[id]/components/course-syllabus/syllabus-item";

export type CourseSyllabusType = {
  title: string;
  min: number;
};

type CourseSyllabusProps = {
  syllabus: CourseSyllabusType[];
};

export default function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  return (
    <div className={styles.courseSyllabusWrapper}>
      <div className={styles.courseSyllabus}>
        {syllabus.map((syllabusItem, index) => (
          <SyllabusItem
            key={index}
            title={syllabusItem.title}
            min={syllabusItem.min}
          />
        ))}
      </div>
    </div>
  );
}
