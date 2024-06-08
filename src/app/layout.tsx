"use client";

import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Header from "@/app/components/header/header";
import styles from "./page.module.css";
import "./base.css";
import Footer from "@/app/components/footer/footer";
import { usePathname } from "next/navigation";
import AdminHeader from "./components/admin-header/admin-header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          {pathname.includes("admin") ? <AdminHeader /> : <Header />}
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
