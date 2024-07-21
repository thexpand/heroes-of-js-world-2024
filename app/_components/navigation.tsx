"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/_components/navigation.module.css";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className={styles.grid}>
      <Link href="/" className={styles.card} aria-current={pathname === "/" ? 'page' : undefined}>
        <h2>
          Home <span>-&gt;</span>
        </h2>
        <p>Open the home page</p>
      </Link>

      <Link
        href="/slow-loading-page"
        className={styles.card}
        aria-current={pathname === "/slow-loading-page" ? 'page' : undefined}
      >
        <h2>
          Slow Page <span>-&gt;</span>
        </h2>
        <p>Open a slow-loading page to test the loading screen</p>
      </Link>

      <Link
        href="/dashboard"
        className={styles.card}
        aria-current={pathname === "/dashboard" ? 'page' : undefined}
      >
        <h2>
          Dashboard <span>-&gt;</span>
        </h2>
        <p>Go to the dashboard’s home page</p>
      </Link>

      <Link
        href="/dashboard/settings"
        className={styles.card}
        aria-current={pathname === "/dashboard/settings" ? 'page' : undefined}
      >
        <h2>
          Settings <span>-&gt;</span>
        </h2>
        <p>Go to the dashboard’s settings page</p>
      </Link>
    </div>
  );
};
