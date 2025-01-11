"use client";

import { useActionState } from "react";
import { Button, Input } from "@/app/components";
import { findError } from "@/app/utils/findError";
import styles from "./index.module.css";
import { Course } from "@/generated/models";
import { Textarea } from "@/app/components/textarea/textarea";
import updateCourse from "@/app/actions/update-course";

interface IFormProps {
  courseData: Course;
}

export default function Form({ courseData }: IFormProps) {
  const [state, formAction] = useActionState(updateCourse, { errors: [] });

  const titleError = findError(state?.errors, "title");
  const priceError = findError(state?.errors, "price");
  const descriptionError = findError(state?.errors, "description");

  return (
    <form action={formAction} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Update Course</h2>
        <Input
          type="text"
          name="id"
          placeholder="Id"
          defaultValue={courseData.id}
          style={{ visibility: "hidden" }}
        />
        <div>
          <Input
            type="text"
            name="title"
            placeholder="title"
            defaultValue={courseData.title}
          />
          {titleError && titleError.length > 0 ? (
            <p className={styles.errorText}>
              {titleError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input
            defaultValue={courseData.price}
            type="number"
            name="price"
            placeholder="Price"
          />
          {priceError && priceError.length > 0 ? (
            <p className={styles.errorText}>
              {priceError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Textarea
            defaultValue={courseData.description}
            name="description"
            placeholder="Description"
          />

          {descriptionError && descriptionError.length > 0 ? (
            <p className={styles.errorText}>
              {descriptionError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>

        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
