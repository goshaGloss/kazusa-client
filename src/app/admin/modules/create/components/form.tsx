"use client";

import { Button, Input } from "@/app/components";
import Editor from "@/app/components/editor/editor";
import { findError } from "@/app/utils/findError";
import { Course } from "@/generated/models";
import styles from "./index.module.css";
import { createModule } from "@/app/actions/create-module";
import { useFormState } from "react-dom";

interface IFormProps {
  courses: Course[];
}

export default function Form({ courses }: IFormProps) {
  const [state, formAction] = useFormState(createModule, { errors: [] });

  const nameError = findError(state?.errors, "name");
  const contentError = findError(state?.errors, "content");
  const courseError = findError(state?.errors, "courseId");
  const durationError = findError(state?.errors, "durationMinutes");
  const orderError = findError(state?.errors, "order");

  return (
    <form action={formAction} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Create Module</h2>
        <div>
          <Input type="text" name="name" placeholder="Name" />
          {nameError && nameError.length > 0 ? (
            <p className={styles.errorText}>
              {nameError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <select name="courseId" defaultValue={courses && courses[0].id}>
            {courses &&
              courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            {courseError && courseError.length > 0 ? (
              <p className={styles.errorText}>
                {courseError.map((err) => err.message).join(", ")}
              </p>
            ) : null}
          </select>
        </div>
        <div>
          <Input type="number" name="order" placeholder="Order" />

          {orderError && orderError.length > 0 ? (
            <p className={styles.errorText}>
              {orderError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input type="number" name="durationMinutes" placeholder="Duration" />
          {durationError && durationError.length > 0 ? (
            <p className={styles.errorText}>
              {durationError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Editor textareaName="content" />
          {contentError && contentError.length > 0 ? (
            <p className={styles.errorText}>
              {contentError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
