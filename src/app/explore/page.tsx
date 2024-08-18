import styles from "./explore.module.css";
import Banner from "@/app/explore/components/banner";
import CourseCard from "@/app/explore/components/course-card/course-card";
import { BASE_URL } from "@/common/contants";
import { Course } from "@/generated/models";
import Pagination from "../components/pagination/pagination";
import { Suspense } from "react";

async function getCourses({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<Course[]> {
  const res = await fetch(`${BASE_URL}/course?offset=${offset}&limit=${limit}`);

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
            {courses?.map(({ id, title, description, price }) => (
              <CourseCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                image=""
              />
            ))}
          </div>
        </Suspense>
        <Pagination />
      </div>
    </>
  );
}
