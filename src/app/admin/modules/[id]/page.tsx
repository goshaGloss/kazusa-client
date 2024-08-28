export const dynamic = "force-dynamic";
import { Course, Module } from "@/generated/models";
import Form from "./components/form";

type ModulePageParams = { id: string };

async function getModules(id: string): Promise<Module[]> {
  const res = await fetch(`${process.env.BASE_URL}/module?id=${id}`);

  return res.json();
}

async function getCourses(): Promise<Course[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/course?offset=${0}&limit=${20}`,
  );

  return res.json();
}

export default async function Page({ params }: { params: ModulePageParams }) {
  const modules = await getModules(params.id);
  const courses = await getCourses();
  const moduleData = modules[0];

  return <Form moduleData={moduleData} courses={courses} />;
}
