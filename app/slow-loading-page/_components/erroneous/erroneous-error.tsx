"use client";

import styles from "@/app/slow-loading-page/_components/erroneous/erroneous-component.module.css";

export const ErroneousComponentError = ({
  resetErrorBoundary: reset,
}: {
  resetErrorBoundary: (...args: any[]) => void;
}) => (
  <>
    <p className={styles.text}>
      Sorry, we could not load additional content for you.
    </p>
    <button className={styles.button} onClick={() => reset()}>
      Try again
    </button>
  </>
);
