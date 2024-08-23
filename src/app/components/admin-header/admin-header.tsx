import Link from "next/link";
import styles from "./admin-header.module.css";

export default function AdminHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.title} href="/explore">
        Logo
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin/courses">
              Courses
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin/modules">
              Modules
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
