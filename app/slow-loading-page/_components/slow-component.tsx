import styles from "@/app/page.module.css";

export const SlowComponent = async () => {
  // Simulate a slow loading component
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <h3 className={styles.heading}>Slow Component Loaded Successfully!</h3>
  );
};
