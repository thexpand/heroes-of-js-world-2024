import Image from "next/image";
import styles from "@/app/page.module.css";

export default async function SlowLoadingPage() {
  // Simulate a slow loading page
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
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
  );
}
