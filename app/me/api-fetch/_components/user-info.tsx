"use client";

import { useEffect, useState } from "react";
import styles from "@/app/me/api-fetch/_components/user-info.module.css";

export const UserInfo = () => {
  const [data, setData] = useState<{ name: string; email: string } | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/me");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  if (isError || !data) {
    return "An error occurred. Please, reload the page.";
  }

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
