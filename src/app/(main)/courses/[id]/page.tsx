export const dynamic = "force-dynamic";

import Image from "next/image";
import { Button } from "@/app/components";
import styles from "./course-page.module.css";
import CourseSyllabus from "./components/course-syllabus/course-syllabus";
import { Course } from "@/generated/models";
import Link from "next/link";
import { headers } from "next/headers";
import { getUser } from "@/app/utils/auth";

type CoursePageParams = { id: string };

async function getCourse(id: string): Promise<Course[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/course?id=${id}&offset=0&limit=1`,
    {
      headers: new Headers(headers()),
      cache: "no-cache",
    },
  );

  return res.json();
}

export default async function CoursePage({
  params,
}: {
  params: CoursePageParams;
}) {
  const currentUser = getUser();

  const courses = await getCourse(params.id);
  const course = courses[0];

  const duration = Math.ceil(
    (course?.modules?.reduce((acc, mod) => acc + mod.durationMinutes, 0) ||
      60) / 60,
  );

  return (
    <div className={styles.coursePage}>
      <div className={styles.courseContent}>
        <div className={styles.coursePageLeft}>
          <p className={styles.courseTitle}>{course.title}</p>
          <p className={styles.courseDescription}>{course.description}</p>
          {course.attachmentUrls &&
          JSON.parse(course.attachmentUrls).attachment_urls
            ? JSON.parse(course.attachmentUrls).attachment_urls.map(
                (attachmentUrl: string, index: number) => {
                  const attachmentUrlTitle =
                    attachmentUrl.split("/")[
                      attachmentUrl.split("/").length - 1
                    ];
                  return (
                    <p key={index}>
                      <Link
                        className={styles.courseAttachment}
                        href={attachmentUrl}
                      >
                        {attachmentUrlTitle}
                      </Link>
                    </p>
                  );
                },
              )
            : null}
          {course?.modules?.length ? (
            <CourseSyllabus
              syllabus={course.modules || []}
              isInteractive={course.isPaid || currentUser?.role === "admin"}
            />
          ) : null}
        </div>
        <div className={styles.coursePageRight}>
          <div className={styles.coursePageImage}>
            <Image
              alt={`course-image-${params.id}`}
              src={course.coverUrl}
              objectFit="cover"
              fill
            />
          </div>
          <div className={styles.courseInfo}>
            <p className={styles.courseInfoText}>Price: {course.price}</p>
            <p className={styles.courseInfoText}>Duration: {duration}h</p>
            {course?.modules?.length &&
            (course.isPaid || currentUser?.role === "admin") ? (
              <Button>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={`/modules/${course?.modules?.[0].id || ""}`}
                >
                  Get started
                </Link>
              </Button>
            ) : currentUser?.role === "admin" ? (
              <p className={styles.courseInfoText}>No modules yet</p>
            ) : (
              <Link target="_blank" href="https://wa.me/+77776664933">
                Contact Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
