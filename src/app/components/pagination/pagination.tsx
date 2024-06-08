"use client";

import { useCallback, useMemo } from "react";
import styles from "./index.module.css";

interface IPaginationProps {
  offset: number;
  limit: number;
  hasMore: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (offset: number) => void;
}

export default function Pagination({
  offset,
  limit,
  hasMore,
  onChange,
}: IPaginationProps) {
  const hasPrev = useMemo(() => offset > limit, [offset, limit]);

  const handlePrevClick = useCallback(
    () => onChange(offset - limit),
    [offset, limit, onChange],
  );

  const handleNextClick = useCallback(
    () => onChange(offset + limit),
    [offset, limit, onChange],
  );

  return (
    <div className={styles.container}>
      Show: {offset} - {offset + limit}
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
        disabled={!hasMore}
        type="button"
      >
        {">"}
      </button>
    </div>
  );
}
