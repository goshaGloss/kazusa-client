export const dynamic = "force-dynamic";

import { Course } from "@/generated/models";
import Form from "./components/form";

type CoursePageParams = { id: string };

async function getCourse(id: string): Promise<Course[]> {
  const res = await fetch(`${process.env.BASE_URL}/course?id=${id}`);

  return res.json();
}

export default async function Page(props: { params: Promise<CoursePageParams> }) {
  const params = await props.params;
  const courses = await getCourse(params.id);
  const course = courses[0];

  return <Form courseData={course} />;
}
