export const dynamic = "force-dynamic";

import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { Textarea } from "@/app/components/textarea/textarea";
import { redirect } from "next/navigation";
import { Course, CourseUpdateBody } from "@/generated/models";

type CoursePageParams = { id: string };

async function getCourse(id: string): Promise<Course[]> {
  const res = await fetch(`${process.env.BASE_URL}/course?id=${id}`);

  return res.json();
}

export default async function Page({ params }: { params: CoursePageParams }) {
  const courses = await getCourse(params.id);
  const course = courses[0];
  async function updateCourse(formData: FormData) {
    "use server";

    const rawFormData: CourseUpdateBody = {
      id: params.id,
      title: String(formData.get("title")),
      price: Number(formData.get("price")),
      description: String(formData.get("description")),
    };

    const raw = await fetch(`${process.env.BASE_URL}/course`, {
      method: "PUT",
      body: JSON.stringify(rawFormData),
    });

    const res: boolean = await raw.json();

    if (res) {
      redirect("/admin/courses");
    }
  }

  return (
    <form action={updateCourse} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Update Course</h2>
        <Input
          defaultValue={course.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <Input
          defaultValue={course.price}
          type="number"
          name="price"
          placeholder="Price"
        />
        <Textarea
          defaultValue={course.description}
          name="description"
          placeholder="Description"
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
