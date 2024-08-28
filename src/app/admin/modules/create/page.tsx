"use server";

import Form from "./components/form";
import { Course } from "@/generated/models";

async function getCourses(): Promise<Course[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/course?offset=${0}&limit=${20}`,
  );

  return res.json();
}

export default async function Page() {
  const courses = await getCourses();

  return <Form courses={courses} />;
}
