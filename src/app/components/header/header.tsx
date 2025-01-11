import Link from "next/link";
import styles from "./header.module.css";
import { getUser } from "@/app/utils/auth";
import { Button } from "../button";
import { cookies } from "next/headers";
import {} from "next/cache";
import Image from "next/image";

export default function Header() {
  const creds = getUser();

  const logout = async () => {
    "use server";
    (await cookies()).delete("token");
  };

  return (
    <header className={styles.header}>
      <Link className={styles.title} href="/explore">
        <Image
          src="/logo.png"
          width="150"
          height="50"
          style={{ objectFit: "cover" }}
          alt="Logo"
        />
      </Link>
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
          {creds && creds.role === "admin" && (
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/admin">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div>
        {creds ? (
          <>
            <p>{creds.name}</p>
            <form action={logout}>
              <Button type="submit">Logout</Button>
            </form>
          </>
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
