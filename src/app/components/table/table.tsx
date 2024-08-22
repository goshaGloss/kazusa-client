import Link from "next/link";
import styles from "./table.module.css";
import Image from "next/image";

interface ITableProps<T> {
  columns: Array<keyof T>;
  data: T[];
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: string) => void;
  updateUrl: string;
}

export default function Table<T extends { id: string }>({
  columns,
  data,
  onDelete,
  updateUrl,
}: ITableProps<T>) {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeading}>
        <tr>
          {columns.map((column) => {
            return (
              <th key={String(column)} className={styles.columnHeading} id="tr">
                {String(column)}
              </th>
            );
          })}
          <th id="tr" className={styles.columnHeading}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((cellData, index) => (
          <tr className={styles.tableRow} key={index}>
            {columns.map((column, columnIndex) => (
              <td className={styles.tableCell} key={columnIndex}>
                {JSON.stringify(cellData[column])}
              </td>
            ))}
            <td className={styles.tableCell}>
              <div className={styles.tableActions}>
                <Link
                  href={`${updateUrl}/${cellData.id}`}
                  className={styles.tableAction}
                  type="submit"
                >
                  <Image
                    alt="add"
                    src="/circle-plus.svg"
                    objectFit="cover"
                    width={14}
                    height={14}
                  />
                </Link>
                <form action={onDelete?.bind(null, cellData.id)}>
                  <button className={styles.tableAction}>
                    <Image
                      alt="add"
                      src="/trash.svg"
                      objectFit="cover"
                      width={14}
                      height={14}
                    />
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
