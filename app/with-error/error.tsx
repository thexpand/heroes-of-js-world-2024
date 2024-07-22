"use client";

import { useEffect } from "react";
import styles from "@/app/page.module.css";
import { Logo } from "@/app/_components/logo/logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={`${styles.center} ${styles.errorPage}`}>
      <Logo />
      <h2 className={styles.heading}>Something went wrong!</h2>
      <button className={styles.button} onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
