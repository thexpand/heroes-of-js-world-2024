"use client";

import { update } from "@/app/mutating-data/server-vs-client/client/_components/update";
import styles from "@/app/mutating-data/form.module.css";

export const Client = () => {
  return (
    <>
      <p>
        This is a client component that imports a server action and uses it
        directly.
      </p>
      <form action={update} className={styles.form}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </>
  );
};
