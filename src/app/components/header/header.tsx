import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Logo</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/public">
              Main
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/explore">
              Explore
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Sign in</button>
      </div>
    </header>
  );
}
