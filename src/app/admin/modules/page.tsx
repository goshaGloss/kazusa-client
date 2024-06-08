"use client";

import { useCallback } from "react";
import styles from "./index.module.css";
import Table from "@/app/components/table/table";
import Pagination from "@/app/components/pagination/pagination";
export default function CourseList() {
  const data = Array(8).fill({
    id: 0,
    courseId: 12,
    name: "Введение в ИИ",
    slug: "lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum",
  });
  const columns = Object.keys(data[0]);
  const handlePageChange = useCallback((pageNumber: number) => {
    return pageNumber;
  }, []);
  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <p className={styles.courseContainerTitle}>Module List</p>
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
