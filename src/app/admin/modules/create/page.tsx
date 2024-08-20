export const dynamic = "force-dynamic";

import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { Course } from "@/generated/models";
import Editor from "@/app/components/editor/editor";
import { redirect } from "next/navigation";

async function getCourses(): Promise<Course[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/course?offset=${0}&limit=${20}`,
  );

  return res.json();
}

export default async function Page() {
  const courses = await getCourses();

  async function createModule(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      courseId: formData.get("courseId"),
      content: formData.get("content"),
      durationMinutes: Number(formData.get("durationMinutes")),
    };

    const raw = await fetch(`${process.env.BASE_URL}/module`, {
      method: "POST",
      body: JSON.stringify(rawFormData),
    });

    const res: boolean = await raw.json();

    if (res) {
      redirect("/admin/modules");
    }
  }

  return (
    <form action={createModule} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Create Module</h2>
        <Input type="text" name="name" placeholder="Name" />
        <select name="courseId" defaultValue={courses && courses[0].id}>
          {courses &&
            courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
        </select>
        <Input
          type="durationMinutes"
          name="durationMinutes"
          placeholder="Duration"
        />
        <Editor textareaName="content" />
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
