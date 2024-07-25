"use client";

import styles from "./index.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function Pagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const handlePageChange = useCallback(
    (offset: number) => {
      if (offset) {
        params.set("offset", String(offset));
      } else {
        params.delete("offset");
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    [params, router, pathname],
  );

  const hasPrev = useMemo(() => {
    const offset = searchParams.get("offset") || 0;
    const limit = searchParams.get("limit");

    return Number(offset) > Number(limit);
  }, [searchParams]);

  const handlePrevClick = useCallback(() => {
    const offset = searchParams.get("offset");

    return handlePageChange(Number(offset) - 20);
  }, [searchParams, handlePageChange]);

  const handleNextClick = useCallback(() => {
    const offset = searchParams.get("offset");

    return handlePageChange(Number(offset) + 20);
  }, [searchParams, handlePageChange]);

  return (
    <div className={styles.container}>
      {/* Show: {offset} - {offset + limit} */}
      <button
        className={styles.control}
        onClick={handlePrevClick}
        disabled={!hasPrev}
        type="button"
      >
        {"<"}
      </button>
      <button
        className={styles.control}
        onClick={handleNextClick}
        // disabled={!hasMore}
        type="button"
      >
        {">"}
      </button>
    </div>
  );
}
