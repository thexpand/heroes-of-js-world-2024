"use client";

import { save } from "@/app/mutating-data/form/_components/save";
import { SubmitButton } from "@/app/mutating-data/form/_components/submit-button";
import styles from "@/app/mutating-data/form.module.css";

export const Form = () => {
  return (
    <>
      <p>
        Demonstration of the <code>useFormStatus</code> and{" "}
        <code>useFormState</code> hooks.
      </p>
      <form action={save} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          minLength={3}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          minLength={5}
        />
        <SubmitButton />
      </form>
    </>
  );
};
