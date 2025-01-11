"use client";

import { useActionState } from "react";
import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { Textarea } from "@/app/components/textarea/textarea";
import { createCourse } from "@/app/actions/create-course";
import { findError } from "@/app/utils/findError";

export default function Page() {
  const [state, formAction] = useActionState(createCourse, { errors: [] });

  const titleError = findError(state?.errors, "title");
  const priceError = findError(state?.errors, "price");
  const descError = findError(state?.errors, "description");
  const coverError = findError(state?.errors, "cover");

  return (
    <form action={formAction} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Create Course</h2>
        <div>
          <Input
            type="file"
            name="cover"
            placeholder="Cover"
            accept=".jpg,.jpeg,.png"
          />
          {coverError && coverError.length > 0 ? (
            <p className={styles.errorText}>
              {coverError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input type="text" name="title" placeholder="Title" />
          {titleError && titleError.length > 0 ? (
            <p className={styles.errorText}>
              {titleError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input type="number" name="price" placeholder="Price" />
          {priceError && priceError.length > 0 ? (
            <p className={styles.errorText}>
              {priceError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Textarea
            name="description"
            placeholder="Description"
            style={{ flexGrow: 1 }}
          />
          {descError && descError.length > 0 ? (
            <p className={styles.errorText}>
              {descError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input
            type="file"
            name="attachments"
            placeholder="Attachments"
            multiple
          />
        </div>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
