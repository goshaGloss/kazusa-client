export const dynamic = "force-dynamic";

import styles from "./index.module.css";
import Table from "@/app/components/table/table";
import Pagination from "@/app/components/pagination/pagination";
import { Module } from "@/generated/models";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { headers } from "next/headers";

async function getModules({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<Module[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/module?offset=${offset}&limit=${limit}`,
    {
      headers: new Headers(await headers()),
    },
  );

  return res.json();
}

interface IModulePageProps {
  searchParams?: Promise<{
    offset?: string;
    limit?: string;
  }>;
}

export default async function ModuleList(props: IModulePageProps) {
  const searchParams = await props.searchParams;
  const offset = Number(searchParams?.offset) || 0;
  const limit = Number(searchParams?.limit) || 20;
  const modules = await getModules({
    offset,
    limit,
  });

  const deleteModule = async (id: string) => {
    "use server";

    const raw = await fetch(`${process.env.BASE_URL}/module?id=${id}`, {
      method: "DELETE",
    });

    const ok: boolean = await raw.json();

    if (ok) {
      revalidatePath("/admin/module");
    }
  };

  const columns = ["name", "order", "durationMinutes"] as (keyof Module)[];
  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <header className={styles.courseContainerHeader}>
          <div className="spacer"></div>
          <p className={styles.courseContainerTitle}>Module List</p>
          <div className={styles.actionsWrapper}>
            <Link href="modules/create">Create</Link>
          </div>
        </header>
        <Table
          updateUrl="modules"
          onDelete={deleteModule}
          columns={columns}
          data={modules}
        />
        <Pagination />
      </div>
    </div>
  );
}
