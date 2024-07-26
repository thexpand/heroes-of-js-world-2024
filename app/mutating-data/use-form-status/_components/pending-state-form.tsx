"use client";

import { save } from "@/app/mutating-data/use-form-status/_components/save";
import { SubmitButton } from "@/app/mutating-data/use-form-status/_components/submit-button";
import styles from "@/app/mutating-data/form.module.css";

export const PendingStateForm = () => {
  return (
    <>
      <p>
        Demonstration of the <code>useFormStatus</code> hook.
      </p>
      <form action={save} className={styles.form}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <SubmitButton />
      </form>
    </>
  );
};
