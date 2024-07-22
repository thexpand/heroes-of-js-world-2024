import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Maintenance() {
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
      <h2 className={styles.heading}>
        Sorry, we’re upgrading our app right now. Check back soon!
      </h2>
    </div>
  );
}
