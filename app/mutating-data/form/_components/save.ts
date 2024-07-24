"use server";

import { FormState } from "@/app/mutating-data/form/_components/form-state";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z
    .string()
    .min(3)
    .email()
    .endsWith("@example.com", "Domain name not allowed"),
});

export const save = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = Object.fromEntries(formData.entries());

  const result = schema.safeParse(data);

  if (result.error) {
    return {
      errorMessage: result.error.errors
        .map((error) => error.message)
        .join("\n"),
    };
  }

  console.info("Saving data...", data);

  // Do something with the data, e.g. update the database or send a request to an API.
  // ...

  return {
    successMessage: "Saved successfully",
  };
};
