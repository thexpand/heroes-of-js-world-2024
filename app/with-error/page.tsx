import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

export default function PageWithError() {
  if (process.env.PRODUCE_ERROR === "true") {
    throw new Error("This page produces an error");
  }

  return (
    <div className={styles.center}>
      <Logo />
      <p className={styles.heading}>
        This page won’t render and will produce an error when the{" "}
        <code>PRODUCE_ERROR</code> environment variable is set to{" "}
        <code>&quot;true&quot;</code>
      </p>
    </div>
  );
}
