export const dynamic = "force-dynamic";

import { Module } from "@/generated/models";
import styles from "./module-page.module.css";
import Link from "next/link";
import { headers } from "next/headers";
import { createActivity } from "@/app/actions/create-activity";
import { getUser } from "@/app/utils/auth";

type ModulePageParams = {
  params: {
    id: string;
  };
};

async function getModule(id: string): Promise<Module[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/module?id=${encodeURIComponent(id)}`,
    {
      headers: new Headers(headers()),
    },
  );

  return res.json();
}

async function getModules(courseId: string): Promise<Module[]> {
  const res = await fetch(
    `${process.env.BASE_URL}/module?course_id=${encodeURIComponent(courseId)}`,
    {
      headers: new Headers(headers()),
    },
  );

  return res.json();
}

export default async function ModulePage({ params }: ModulePageParams) {
  const currentUser = getUser();

  const modulesData = await getModule(params.id);
  const moduleData = modulesData[0];

  const courseModules = await getModules(moduleData.courseId);

  if (currentUser) {
    await createActivity({
      userId: currentUser.userId,
      courseId: moduleData.courseId,
      moduleId: moduleData.id,
    });
  }

  const foundModuleIndex = courseModules.findIndex(
    (mdl) => mdl.id === moduleData.id,
  );

  const prevIndex = foundModuleIndex - 1;
  const nextIndex = foundModuleIndex + 1;

  const prevId = prevIndex >= 0 ? courseModules[prevIndex]?.id : null;
  const nextId =
    nextIndex <= courseModules.length ? courseModules[nextIndex]?.id : null;

  return (
    <div className={styles.modulePage}>
      <div className={styles.moduleContent}>
        <div dangerouslySetInnerHTML={{ __html: moduleData.content }} />
        <div className={styles.moduleControls}>
          {prevId ? (
            <Link href={`/modules/${prevId || ""}`}>prev</Link>
          ) : (
            <div />
          )}
          {nextId ? (
            <Link href={`/modules/${nextId || ""}`}>next</Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
