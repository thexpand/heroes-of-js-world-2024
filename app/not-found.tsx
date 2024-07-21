import Image from "next/image";
import styles from "@/app/page.module.css";

export default function NotFound() {
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
      <h2 className={styles.heading}>404 - Page Not Found</h2>
    </div>
  );
}
