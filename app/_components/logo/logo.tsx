import Image from "next/image";
import styles from "@/app/_components/logo/logo.module.css";

export const Logo = () => (
  <Image
    className={styles.logo}
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
);
