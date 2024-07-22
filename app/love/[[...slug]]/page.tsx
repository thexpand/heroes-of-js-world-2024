import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

interface LovePageProps {
  params: {
    slug?: string[];
  };
}

export default function LovePage({ params: { slug } }: LovePageProps) {
  const verb = slug?.[0] === "next.js" ? "adore" : "love";

  const target =
    slug
      ?.map(
        (segment) => `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`,
      )
      ?.join(" ") ?? "Heroes of JS World";

  return (
    <div className={styles.center}>
      <Logo />
      <h2 className={styles.heading}>{`I ${verb} ${target}`}</h2>
    </div>
  );
}
