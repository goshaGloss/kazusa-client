"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Logo</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              href={pathname.includes("admin") ? "admin" : "/public"}
            >
              {pathname.includes("admin") ? "Courses" : "Main"}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              href={pathname.includes("admin") ? "/modules" : "/about"}
            >
              {pathname.includes("admin") ? "Modules" : "About"}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              href={pathname.includes("admin") ? "/users" : "/explore"}
            >
              {pathname.includes("admin") ? "Users" : "Explore"}
            </Link>
          </li>
        </ul>
      </nav>
      {pathname.includes("admin") ? null : (
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Login</button>
          <button className={styles.button}>Sign in</button>
        </div>
      )}
    </header>
  );
}
