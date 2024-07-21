import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Settings() {
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
        <h2 className={styles.heading}>Dashboard / Settings</h2>
      </div>
    </main>
  );
}
