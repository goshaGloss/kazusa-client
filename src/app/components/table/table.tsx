"use client";

import styles from "./table.module.css";
import Image from "next/image";

type TableProps = {
  columns: string[];
  data: Record<string, any>[];
};

export default function Table({ columns, data }: TableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeading}>
        <tr>
          {columns.map((column) => {
            return (
              <th key={column} className={styles.columnHeading} id="tr">
                {column}
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
                <button className={styles.tableAction}>
                  <Image
                    alt="add"
                    src="/circle-plus.svg"
                    objectFit="cover"
                    width={14}
                    height={14}
                  />
                </button>
                <button className={styles.tableAction}>
                  <Image
                    alt="add"
                    src="/trash.svg"
                    objectFit="cover"
                    width={14}
                    height={14}
                  />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
