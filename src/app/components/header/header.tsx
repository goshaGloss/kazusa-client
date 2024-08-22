import Link from "next/link";
import styles from "./header.module.css";
import { getUser } from "@/app/utils/auth";

export default function Header() {
  const creds = getUser();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Logo</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/explore">
              Explore
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {creds ? (
          creds.name
        ) : (
          <>
            <Link href="/login" className={styles.link}>
              Login
            </Link>
            <Link href="/register" className={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
