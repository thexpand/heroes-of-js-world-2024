import { type ReactNode } from "react";
import { type Metadata } from "next";
import Image from "next/image";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    absolute: "Dashboard",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h2 className={styles.heading}>Dashboard</h2>
      </div>
      {children}
    </main>
  );
}
