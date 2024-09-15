export const dynamic = "force-dynamic";

import styles from "./explore.module.css";
import Banner from "./components/banner";
import CourseCard from "./components/course-card/course-card";
import { Course } from "@/generated/models";
import Pagination from "@/app/components/pagination/pagination";
import { Suspense } from "react";

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

interface IExplorePageProps {
  searchParams?: {
    offset?: string;
    limit?: string;
  };
}

export default async function ExplorePage({ searchParams }: IExplorePageProps) {
  const offset = Number(searchParams?.offset) || 0;
  const limit = Number(searchParams?.limit) || 20;
  const courses = await getCourses({
    offset,
    limit,
  });

  return (
    <>
      <div className={styles.explore}>
        <Banner />
        <Suspense key={offset + limit} fallback={"Loading..."}>
          <div className={styles.courseGrid}>
            {courses?.map(({ id, title, description, price, coverUrl }) => (
              <CourseCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                coverUrl={coverUrl}
              />
            ))}
          </div>
        </Suspense>
        <Pagination />
      </div>
    </>
  );
}
