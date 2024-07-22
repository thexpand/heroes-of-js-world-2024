import styles from "@/app/slow-loading-page/_components/erroneous/erroneous-component.module.css";

export const ErroneousComponent = async () => {
  // Simulate a slow loading component
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (process.env.PRODUCE_ERROR === "true") {
    throw new Error("This component produces an error");
  }

  return (
    <p className={styles.text}>
      This component won’t render and will produce an error when the{" "}
      <code>PRODUCE_ERROR</code> environment variable is set to{" "}
      <code>&quot;true&quot;</code>
    </p>
  );
};
