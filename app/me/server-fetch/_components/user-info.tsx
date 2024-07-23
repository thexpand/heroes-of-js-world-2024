import styles from "@/app/me/user-info.module.css";

export const UserInfo = async () => {
  // Fetch data from source
  // ...
  const data = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className={styles.userInfo}>
      <div>
        <h4>Name</h4>
        <p>{data.name}</p>
      </div>
      <div>
        <h4>Email</h4>
        <p>{data.email}</p>
      </div>
    </div>
  );
};
