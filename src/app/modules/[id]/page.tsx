import { Module } from "@/generated/models";
import styles from "./module-page.module.css";
import { BASE_URL } from "@/common/contants";

type ModulePageParams = {
  params: {
    id: string;
  };
};

async function getModule(id: string): Promise<Module[]> {
  const res = await fetch(`${BASE_URL}/module?id=${encodeURIComponent(id)}`);

  return res.json();
}

export default async function ModulePage({ params }: ModulePageParams) {
  const modules = await getModule(params.id);
  const moduleData = modules[0];

  return (
    <div className={styles.modulePage}>
      <div
        className={styles.moduleContent}
        dangerouslySetInnerHTML={{ __html: moduleData.content }}
      />
    </div>
  );
}
