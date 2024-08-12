import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { Textarea } from "@/app/components/textarea/textarea";
import { BASE_URL } from "@/common/contants";
import { Course } from "@/generated/models";

async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${BASE_URL}/course?offset=${0}&limit=${20}`);

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

    const res = await fetch(`${BASE_URL}/module`, {
      method: "POST",
      body: JSON.stringify(rawFormData),
    });

    return res.json();
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
        <Textarea name="content" placeholder="Content" />
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
