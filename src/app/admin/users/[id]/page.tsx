export const dynamic = "force-dynamic";

import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { redirect } from "next/navigation";
import { EntityRole, User, UserUpdateBody } from "@/generated/models";

type UserPageParams = { id: string };

async function getUser(id: string): Promise<User[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/user?id=${id}&offset=0&limit=1`,
  );

  return res.json();
}

export default async function Page({ params }: { params: UserPageParams }) {
  const users = await getUser(params.id);
  const user = users[0];
  async function updateUser(formData: FormData) {
    "use server";

    const rawFormData: UserUpdateBody = {
      id: params.id,
      name: String(formData.get("name")),
      phone: String(formData.get("phone")),
      role: String(formData.get("role")) as EntityRole,
    };

    const raw = await fetch(`${process.env.BASE_URL}/user`, {
      method: "PUT",
      body: JSON.stringify(rawFormData),
    });

    const res: boolean = await raw.json();

    if (res) {
      redirect("/admin/users");
    }
  }

  return (
    <form action={updateUser} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Update User</h2>
        <Input
          defaultValue={user.name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <Input
          defaultValue={user.phone}
          name="phone"
          type="text"
          placeholder="Phone"
        />
        <select name="role" defaultValue={user.role}>
          <option key={EntityRole.AdminRole} value={EntityRole.AdminRole}>
            {EntityRole.AdminRole}
          </option>
          <option key={EntityRole.UserRole} value={EntityRole.UserRole}>
            {EntityRole.UserRole}
          </option>
        </select>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
