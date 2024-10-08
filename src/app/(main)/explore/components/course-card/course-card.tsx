import Link from "next/link";
import styles from "./course-card.module.css";
import Image from "next/image";
import { Course } from "@/generated/models";

type CourseCardProps = Pick<
  Course,
  "id" | "title" | "description" | "price" | "coverUrl"
>;

export default function CourseCard({
  title,
  description,
  id,
  coverUrl,
}: CourseCardProps) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseImage}>
        <Image
          alt={`course-image-${id}`}
          src={coverUrl}
          objectFit="cover"
          fill
        />
      </div>
      <div className={styles.courseContent}>
        <p className={styles.courseTitle}>{title}</p>
        <p className={styles.courseDescription}>{description}</p>
        <Link className={styles.courseLink} href={`courses/${id}`}>
          Learn more
        </Link>
      </div>
    </div>
  );
}
