import Image from "next/image";
import { Button } from "@/app/components";
import styles from "./course-page.module.css";
import CourseSyllabus from "@/app/courses/[id]/components/course-syllabus/course-syllabus";
import { BASE_URL } from "@/common/contants";
import { Course } from "@/generated/models";

type CoursePageParams = { id: string };

async function getCourse(id: string): Promise<Course[]> {
  const res = await fetch(`${BASE_URL}/course?id=${id}&offset=0&limit=1`);

  return res.json();
}

export default async function CoursePage({
  params,
}: {
  params: CoursePageParams;
}) {
  const courses = await getCourse(params.id);
  const course = courses[0];

  return (
    <div className={styles.coursePage}>
      <div className={styles.courseContent}>
        <div className={styles.coursePageLeft}>
          <p className={styles.courseTitle}>{course.title}</p>
          <p className={styles.courseDescription}>{course.description}</p>
          <CourseSyllabus syllabus={[]} />
        </div>
        <div className={styles.coursePageRight}>
          <div className={styles.coursePageImage}>
            <Image
              alt={`course-image-${params.id}`}
              src={""}
              objectFit="cover"
              fill
            />
          </div>
          <div className={styles.courseInfo}>
            <p className={styles.courseInfoText}>Price: {course.price}</p>
            <p className={styles.courseInfoText}>Duration: 10h</p>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
