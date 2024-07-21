import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

export default function NotFound() {
  return (
    <div className={`${styles.center} ${styles.notFound}`}>
      <Logo />
      <h2 className={styles.heading}>404 - Page Not Found</h2>
    </div>
  );
}
