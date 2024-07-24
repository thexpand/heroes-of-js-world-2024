"use client";

import { useFormState } from "react-dom";
import { save } from "@/app/mutating-data/form/_components/save";
import { SubmitButton } from "@/app/mutating-data/form/_components/submit-button";
import { FormState } from "@/app/mutating-data/form/_components/form-state";
import styles from "@/app/mutating-data/form.module.css";

export const Form = () => {
  const [{ successMessage, errorMessage }, action] = useFormState<
    FormState,
    FormData
  >(save, {});

  return (
    <>
      <p>
        Demonstration of the <code>useFormStatus</code> and{" "}
        <code>useFormState</code> hooks.
      </p>
      <form action={action} className={styles.form}>
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
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </>
  );
};
