import styles from "@/app/slow-loading-page/_components/emojis/emojis.module.css";

export const Emojis = async () => {
  // Simulate a slow loading component
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className={styles.grid}>
      <div>👍</div>
      <div>👌</div>
      <div>👏</div>
    </div>
  );
};
