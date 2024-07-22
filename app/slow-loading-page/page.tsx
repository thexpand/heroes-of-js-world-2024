import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";
import { Suspense } from "react";
import { SlowComponent } from "@/app/slow-loading-page/_components/slow-component";
import { EmojisSkeleton } from "@/app/slow-loading-page/_components/emojis/skeleton";
import { Emojis } from "@/app/slow-loading-page/_components/emojis/emojis";
import { ErroneousComponentSkeleton } from "@/app/slow-loading-page/_components/erroneous/skeleton";
import { ErroneousComponent } from "@/app/slow-loading-page/_components/erroneous/erroneous-component";
import { ErrorBoundary } from "react-error-boundary";
import { ErroneousComponentError } from "@/app/slow-loading-page/_components/erroneous/erroneous-error";

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
      <Suspense fallback={<EmojisSkeleton />}>
        <Emojis />
      </Suspense>
      <ErrorBoundary fallbackRender={ErroneousComponentError}>
        <Suspense fallback={<ErroneousComponentSkeleton />}>
          <ErroneousComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
