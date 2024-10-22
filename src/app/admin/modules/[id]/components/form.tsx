"use client";

import { Button, Input } from "@/app/components";
import Editor from "@/app/components/editor/editor";
import { findError } from "@/app/utils/findError";
import styles from "./index.module.css";
import { useFormState } from "react-dom";
import { Module } from "@/generated/models";
import updateModule from "@/app/actions/update-module";

interface IFormProps {
  moduleData: Module;
}

export default function Form({ moduleData }: IFormProps) {
  const [state, formAction] = useFormState(updateModule, { errors: [] });

  const nameError = findError(state?.errors, "name");
  const contentError = findError(state?.errors, "content");
  const durationError = findError(state?.errors, "durationMinutes");
  const orderError = findError(state?.errors, "order");

  return (
    <form action={formAction} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Update Module</h2>
        <Input
          type="text"
          name="id"
          placeholder="Id"
          defaultValue={moduleData.id}
          style={{ visibility: "hidden" }}
        />
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={moduleData.name}
          />
          {nameError && nameError.length > 0 ? (
            <p className={styles.errorText}>
              {nameError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input
            type="number"
            name="order"
            placeholder="Order"
            defaultValue={moduleData.order}
          />

          {orderError && orderError.length > 0 ? (
            <p className={styles.errorText}>
              {orderError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Input
            type="number"
            name="durationMinutes"
            placeholder="Duration"
            defaultValue={moduleData.durationMinutes}
          />
          {durationError && durationError.length > 0 ? (
            <p className={styles.errorText}>
              {durationError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <div>
          <Editor textareaName="content" initialValue={moduleData.content} />
          {contentError && contentError.length > 0 ? (
            <p className={styles.errorText}>
              {contentError.map((err) => err.message).join(", ")}
            </p>
          ) : null}
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
