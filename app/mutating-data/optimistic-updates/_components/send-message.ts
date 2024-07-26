"use server";

import { format } from "date-fns/format";

export const sendMessage = async (message: string) => {
  console.info("Storing sent message...", message);

  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    message,
    date: format(new Date(), "dd.MM.yyyy, HH:mm:ss"),
  };
};
