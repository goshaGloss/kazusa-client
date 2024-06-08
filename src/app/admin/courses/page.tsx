"use client";

import { useCallback } from "react";
import styles from "./index.module.css";
import Table from "@/app/components/table/table";
import Pagination from "@/app/components/pagination/pagination";
export default function CourseList() {
  const data = [
    {
      id: 0,
      courseId: 12,
      name: "Введение в ИИ",
      duration: "1 час",
      price: 130,
    },
    {
      id: 1,
      courseId: 12,
      name: "Введение в ИИ",
      duration: "1 час",
      price: 130,
    },
    {
      id: 2,
      courseId: 8,
      name: "Машинное обучение",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 3,
      courseId: 8,
      name: "Машинное обучение",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 4,
      courseId: 5,
      name: "Глубокое обучение",
      duration: "3 часа",
      price: 250,
    },
    {
      id: 5,
      courseId: 5,
      name: "Глубокое обучение",
      duration: "3 часа",
      price: 250,
    },
    {
      id: 6,
      courseId: 17,
      name: "Нейронные сети",
      duration: "2.5 часа",
      price: 180,
    },
    {
      id: 7,
      courseId: 17,
      name: "Нейронные сети",
      duration: "2.5 часа",
      price: 180,
    },
  ];
  const handlePageChange = useCallback((pageNumber: number) => {
    return pageNumber;
  }, []);
  const columns = Object.keys(data[0]);
  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <p className={styles.courseContainerTitle}>Course List</p>
        <Table columns={columns} data={data} />
        <Pagination
          offset={10}
          limit={10}
          hasMore={data.length > 0}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
