import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { Textarea } from "@/app/components/textarea/textarea";
import { BASE_URL } from "@/common/contants";

export default function Page() {
  async function createCourse(formData: FormData) {
    "use server";

    const rawFormData = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
    };

    const res = await fetch(`${BASE_URL}/course`, {
      method: "POST",
      body: JSON.stringify(rawFormData),
    });

    return res.json();
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
