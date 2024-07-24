"use client";

import styles from "@/app/mutating-data/form.module.css";

interface ClientProps {
  update: (data: FormData) => void;
}

export const Client = ({ update }: ClientProps) => {
  return (
    <>
      <p>
        This is a client component that receives a server action to update data.
      </p>
      <form action={update} className={styles.form}>
        <input type="text" name="name" placeholder="Name" />
        <button type="submit">Update</button>
      </form>
    </>
  );
};
