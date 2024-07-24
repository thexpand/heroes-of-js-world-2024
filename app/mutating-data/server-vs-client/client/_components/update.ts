"use server";

export const update = async (data: FormData) => {
  console.info("Saving data...", Object.fromEntries(data.entries()));

  // Do something with the data, e.g. update the database or send a request to an API.
  // ...
};
