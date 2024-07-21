import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default async function SlowLoadingPage() {
  // Simulate a slow loading page
  await new Promise((resolve) => setTimeout(resolve, 3000));

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
        <h2 className={styles.heading}>Slow Loading Page</h2>
      </div>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Open the home page of this app.</p>
        </Link>

        <Link href="/slow-loading-page" className={styles.card}>
          <h2>
            Slow Page <span>-&gt;</span>
          </h2>
          <p>Open a slow-loading page to test the loading screen.</p>
        </Link>
      </div>
    </main>
  );
}
