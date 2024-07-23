import styles from "@/app/me/user-info.module.css";
import { ClientUserInfo } from "@/app/me/hybrid-fetch/_components/client-user-info";

export const HybridUserInfo = async () => {
  // Fetch data from source
  // ...
  const data = {
    name: "John Doe",
    email: "john.doe@example.com",
    timestamp: Date.now(),
  };

  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className={styles.userInfo}>
      <ClientUserInfo initialData={data} />
    </div>
  );
};
