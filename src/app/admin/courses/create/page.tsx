export const dynamic = "force-dynamic";

import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { Textarea } from "@/app/components/textarea/textarea";
import { redirect } from "next/navigation";

export default function Page() {
  async function createCourse(formData: FormData) {
    "use server";

    const rawFormData = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
    };

    const raw = await fetch(`${process.env.BASE_URL}/course`, {
      method: "POST",
      body: JSON.stringify(rawFormData),
    });

    const res: boolean = await raw.json();

    if (res) {
      redirect("/admin/courses");
    }
  }

  return (
    <form action={createCourse} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Create Course</h2>
        <Input type="text" name="title" placeholder="Title" />
        <Input type="number" name="price" placeholder="Price" />
        <Textarea name="description" placeholder="Description" />
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
