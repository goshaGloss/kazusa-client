export const dynamic = "force-dynamic";

import styles from "./index.module.css";
import Table from "@/app/components/table/table";
import Pagination from "@/app/components/pagination/pagination";
import { Course } from "@/generated/models";
import { revalidatePath } from "next/cache";

async function getCourses({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<Course[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/course?offset=${offset}&limit=${limit}`,
  );

  return res.json();
}

interface ICoursePageProps {
  searchParams?: {
    offset?: string;
    limit?: string;
  };
}

export default async function CourseList({ searchParams }: ICoursePageProps) {
  const offset = Number(searchParams?.offset) || 0;
  const limit = Number(searchParams?.limit) || 20;
  const courses = await getCourses({
    offset,
    limit,
  });

  const deleteCourse = async (id: string) => {
    "use server";

    const raw = await fetch(`${process.env.BASE_URL}/course?id=${id}`, {
      method: "DELETE",
    });

    const ok: boolean = await raw.json();

    if (ok) {
      revalidatePath("/admin/course");
    }
  };

  const columns = Object.keys(courses[0] || {}) as (keyof Course)[];
  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <p className={styles.courseContainerTitle}>Course List</p>
        <Table
          updateUrl="courses"
          onDelete={deleteCourse}
          columns={columns}
          data={courses}
        />
        <Pagination />
      </div>
    </div>
  );
}
