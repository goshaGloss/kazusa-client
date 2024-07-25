import { useCallback, useState } from "react";

export const DEFAULT_PAGE_SIZE = 10;

interface IPagination {
  page: number;
  offset: number;
}

export const usePagination = (
  pageSize = DEFAULT_PAGE_SIZE,
  initialPage = 0,
) => {
  const [{ page, offset }, setPagination] = useState<IPagination>(() => {
    return {
      page: initialPage,
      offset: initialPage * pageSize,
    };
  });

  const resetPage = useCallback(() => {
    setPagination({
      page: 0,
      offset: 0,
    });
  }, []);

  const goToPage = useCallback(
    (newPage: number) => {
      setPagination({
        page: newPage,
        offset: typeof newPage === "number" ? newPage * pageSize : 0,
      });
    },
    [pageSize],
  );

  return {
    page,
    offset,
    resetPage,
    goToPage,
  };
};
