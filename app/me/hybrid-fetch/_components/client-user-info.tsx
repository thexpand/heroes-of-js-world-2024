"use client";

import { useState } from "react";
import styles from "@/app/me/hybrid-fetch/_components/client-user-info.module.css";

interface ClientUserInfoProps {
  initialData: {
    name: string;
    email: string;
    timestamp: number;
  };
}

export const ClientUserInfo = ({ initialData }: ClientUserInfoProps) => {
  const [data, setData] = useState<typeof initialData>(initialData);

  const [isRefetching, setIsRefetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const refetchData = async () => {
    try {
      setIsRefetching(true);
      const response = await fetch("/api/me");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsRefetching(false);
    }
  };

  if (isError || !data) {
    return "An error occurred. Please, reload the page.";
  }

  return (
    <>
      <div>
        <h4>Name</h4>
        <p>{data.name}</p>
      </div>
      <div>
        <h4>Email</h4>
        <p>{data.email}</p>
      </div>
      <div>
        <h4>Last fetched</h4>
        <p>{data.timestamp}</p>
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={refetchData}
        disabled={isRefetching}
      >
        {isRefetching ? "Refetching..." : "Refetch data"}
      </button>
    </>
  );
};
