import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    absolute: "Dashboard",
  },
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className={styles.center}>
        <Logo />
        <h2 className={styles.heading}>My Account</h2>
        <h3 className={styles.heading}>Hello stranger!</h3>
      </div>
      {children}
    </>
  );
}
