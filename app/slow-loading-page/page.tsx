import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";
import { Suspense } from "react";
import { SlowComponent } from "@/app/slow-loading-page/slow-component";

export default async function SlowLoadingPage() {
  return (
    <div className={styles.center}>
      <Logo />
      <Suspense
        fallback={
          <h3 className={styles.heading}>Loading content for you...</h3>
        }
      >
        <SlowComponent />
      </Suspense>
    </div>
  );
}
