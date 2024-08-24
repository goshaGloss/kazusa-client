export const dynamic = "force-dynamic";

import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { redirect } from "next/navigation";
import { Module, ModuleUpdateBody } from "@/generated/models";
import Editor from "@/app/components/editor/editor";

type ModulePageParams = { id: string };

async function getModules(id: string): Promise<Module[]> {
  const res = await fetch(`${process.env.BASE_URL}/module?id=${id}`);

  return res.json();
}

export default async function Page({ params }: { params: ModulePageParams }) {
  const modules = await getModules(params.id);
  const moduleData = modules[0];
  async function updateModule(formData: FormData) {
    "use server";

    const rawFormData: ModuleUpdateBody = {
      id: params.id,
      name: String(formData.get("name")),
      content: String(formData.get("content")),
      order: Number(formData.get("order")),
      durationMinutes: Number(formData.get("durationMinutes")),
    };

    const raw = await fetch(`${process.env.BASE_URL}/module`, {
      method: "PUT",
      body: JSON.stringify(rawFormData),
    });

    const res: boolean = await raw.json();

    if (res) {
      redirect("/admin/modules");
    }
  }

  return (
    <form action={updateModule} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Update Module</h2>
        <Input
          defaultValue={moduleData.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <Input type="number" name="order" placeholder="Order" />
        <Input
          defaultValue={moduleData.durationMinutes}
          type="number"
          name="durationMinutes"
          placeholder="Duration"
        />
        <Editor textareaName="content" initialValue={moduleData.content} />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
