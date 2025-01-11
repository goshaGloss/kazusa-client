export const dynamic = "force-dynamic";

import { User } from "@/generated/models";
import styles from "./index.module.css";
import Table from "@/app/components/table/table";
import { revalidatePath } from "next/cache";
import Pagination from "@/app/components/pagination/pagination";

async function getUsers({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<User[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/user?offset=${offset}&limit=${limit}`,
  );

  return res.json();
}

interface IUserPageProps {
  searchParams?: Promise<{
    offset?: string;
    limit?: string;
  }>;
}

export default async function UserList(props: IUserPageProps) {
  const searchParams = await props.searchParams;
  const offset = Number(searchParams?.offset) || 0;
  const limit = Number(searchParams?.limit) || 20;
  const users = await getUsers({
    offset,
    limit,
  });

  const deleteUser = async (id: string) => {
    "use server";

    const raw = await fetch(`${process.env.BASE_URL}/user?id=${id}`, {
      method: "DELETE",
    });

    const ok: boolean = await raw.json();

    if (ok) {
      revalidatePath("/admin/users");
    }
  };

  const columns = ["name", "email", "phone", "role"] as (keyof User)[];

  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <p className={styles.courseContainerTitle}>Users List</p>
        <Table
          updateUrl="users"
          onDelete={deleteUser}
          columns={columns}
          data={users}
        />
        <Pagination />
      </div>
    </div>
  );
}
