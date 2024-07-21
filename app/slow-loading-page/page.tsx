import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

export default async function SlowLoadingPage() {
  // Simulate a slow loading page
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className={styles.center}>
      <Logo />
      <h2 className={styles.heading}>Slow Loading Page</h2>
    </div>
  );
}
