"use client";

import Image from "next/image";
import styles from "./course-page.module.css";
import CourseSyllabus from "@/app/courses/[id]/components/course-syllabus/course-syllabus";
import Button from "@/app/components/button/button";

type CoursePageParams = { id: string };

export default function CoursePage({ params }: { params: CoursePageParams }) {
  "use client";

  const course = {
    title: "Intro to Generative AI",
    description:
      "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.\n" +
      "With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!\n" +
      "Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!\n" +
      "This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!\n" +
      "We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.",
    price: 320,
    hours: 33,
    syllabus: [
      { title: "Course overview", min: 16 },
      { title: "Project setup", min: 16 },
      { title: "Basic operations", min: 16 },
      { title: "Methods and operators", min: 16 },
      { title: "Packages", min: 16 },
    ],
    image: "/course-placeholder.png",
  };
  return (
    <div className={styles.coursePage}>
      <div className={styles.courseContent}>
        <div className={styles.coursePageLeft}>
          <p className={styles.courseTitle}>{course.title}</p>
          <p className={styles.courseDescription}>{course.description}</p>
          <CourseSyllabus syllabus={course.syllabus} />
        </div>
        <div className={styles.coursePageRight}>
          <div className={styles.coursePageImage}>
            <Image
              alt={`course-image-${params.id}`}
              src={course.image}
              objectFit="cover"
              fill
            />
          </div>
          <div className={styles.courseInfo}>
            <p className={styles.courseInfoText}>Price: {course.price}</p>
            <p className={styles.courseInfoText}>Duration: {course.hours}</p>
            <Button
              text="Get started"
              handleClick={() => {
                console.log("u r started!");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
