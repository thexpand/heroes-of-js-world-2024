"use client";

import { type ChangeEventHandler, useOptimistic, useState } from "react";
import { Message } from "@/app/mutating-data/optimistic-updates/_components/message";
import { SendButton } from "@/app/mutating-data/optimistic-updates/_components/send-button";
import { sendMessage } from "@/app/mutating-data/optimistic-updates/_components/send-message";
import styles from "@/app/mutating-data/form.module.css";

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (currentMessages, newMessage) => [
    ...currentMessages,
    { message: newMessage },
  ]);

  const handleFormAction = async (data: FormData) => {
    const message = data.get("message")?.toString();

    if (!message) {
      return;
    }

    addOptimisticMessage(message);

    const deliveredMessage = await sendMessage(message);

    setMessages((currentMessages) => [...currentMessages, deliveredMessage]);
  };

  const [messageValue, setMessageValue] = useState("");

  const handleMessageValueChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setMessageValue(event.target.value);
  };

  return (
    <div>
      <form
        action={handleFormAction}
        className={styles.form}
        onSubmit={() => {
          // Re-set the input value after submitting the form
          setMessageValue("");
        }}
      >
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={messageValue}
          onChange={handleMessageValueChange}
          required
        />
        <SendButton />
      </form>
      <div className={styles.chat}>
        {optimisticMessages.toReversed().map(({ message, date }, index) => (
          <div key={index} className={!date ? styles.pending : undefined}>
            <small>{date ?? "Sending..."}</small>
            <p>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
