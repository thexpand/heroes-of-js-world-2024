import { startOfYear } from "date-fns/startOfYear";
import { addDays } from "date-fns/addDays";
import { notFound } from "next/navigation";
import { format } from "date-fns/format";
import { startOfDay } from "date-fns/startOfDay";
import { Logo } from "@/app/_components/logo/logo";
import styles from "@/app/page.module.css";

interface DayPageProps {
  params: {
    num: string;
  };
}

export default function DayPage({ params: { num } }: DayPageProps) {
  const today = new Date();

  const date = addDays(startOfYear(startOfDay(today)), Number(num) - 1);

  if (Number(num) < 1 || date.getFullYear() !== today.getFullYear()) {
    notFound();
  }

  return (
    <div className={styles.center}>
      <Logo />
      <h2
        className={styles.heading}
      >{`Day #${num} - ${format(date, "MMM d, yyyy (E)")}`}</h2>
    </div>
  );
}
