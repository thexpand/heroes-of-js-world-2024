"use server";

export const save = async (data: FormData) => {
  console.info("Saving data...", Object.fromEntries(data.entries()));

  // Do something with the data, e.g. update the database or send a request to an API.
  // ...

  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000));
};
