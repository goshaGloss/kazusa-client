import { Module } from "@/generated/models";
import styles from "./module-page.module.css";
import Link from "next/link";

type ModulePageParams = {
  params: {
    id: string;
  };
};

async function getModule(id: string): Promise<Module[]> {
  const res = await fetch(`${process.env.BASE_URL}/module?id=${encodeURIComponent(id)}`);

  return res.json();
}

async function getModules(courseId: string): Promise<Module[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/module?course_id=${encodeURIComponent(courseId)}`,
  );

  return res.json();
}

export default async function ModulePage({ params }: ModulePageParams) {
  const modulesData = await getModule(params.id);
  const moduleData = modulesData[0];

  const courseModules = await getModules(moduleData.courseId);

  const foundModuleIndex = courseModules.findIndex(
    (module) => module.id === moduleData.id,
  );

  const prevId = foundModuleIndex - 1;
  const nextId = foundModuleIndex + 1;

  const prevModuleId = prevId < 0 ? courseModules[prevId]?.id : null;
  const nextModuleId =
    nextId >= courseModules.length ? courseModules[nextId]?.id : null;

  return (
    <div className={styles.modulePage}>
      <div className={styles.moduleContent}>
        <div dangerouslySetInnerHTML={{ __html: moduleData.content }} />
        <div className={styles.moduleControls}>
          {prevModuleId ? (
            <Link href={`/modules/${prevModuleId || ""}`}>prev</Link>
          ) : (
            <div />
          )}
          {nextModuleId ? (
            <Link href={`/modules/${nextModuleId || ""}`}>next</Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
