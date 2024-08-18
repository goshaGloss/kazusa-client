import styles from "./index.module.css";
import Table from "@/app/components/table/table";
import Pagination from "@/app/components/pagination/pagination";
import { Module } from "@/generated/models";

async function getModules({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<Module[]> {
  const res = await fetch(`${process.env.BASE_URL}/module?offset=${offset}&limit=${limit}`);

  return res.json();
}

interface IModulePageProps {
  searchParams?: {
    offset?: string;
    limit?: string;
  };
}

export default async function ModuleList({ searchParams }: IModulePageProps) {
  const offset = Number(searchParams?.offset) || 0;
  const limit = Number(searchParams?.limit) || 20;
  const modules = await getModules({
    offset,
    limit,
  });

  const columns = Object.keys(modules[0] || {});
  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <p className={styles.courseContainerTitle}>Module List</p>
        <Table columns={columns} data={modules} />
        <Pagination />
      </div>
    </div>
  );
}
