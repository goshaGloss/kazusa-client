import { Inter } from "next/font/google";
import { ReactNode } from "react";
import styles from "./page.module.css";
import "@/app/base.css";
import AdminHeader from "@/app/components/admin-header/admin-header";
import Footer from "@/app/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <AdminHeader />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
