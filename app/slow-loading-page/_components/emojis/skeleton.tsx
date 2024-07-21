import styles from "@/app/slow-loading-page/_components/emojis/emojis.module.css";

export const EmojisSkeleton = () => (
  <div className={styles.grid}>
    <div>..</div>
    <div>..</div>
    <div>..</div>
  </div>
);
