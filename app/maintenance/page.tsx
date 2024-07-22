import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

export default function Maintenance() {
  return (
    <div className={styles.center}>
      <Logo />
      <h2 className={styles.heading}>
        Sorry, we’re upgrading our app right now. Check back soon!
      </h2>
    </div>
  );
}
