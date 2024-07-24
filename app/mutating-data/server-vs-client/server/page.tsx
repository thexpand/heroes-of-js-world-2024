import { Client } from "@/app/mutating-data/server-vs-client/server/_components/client";

export default function MutatingDataServerVsClient() {
  async function update(data: FormData) {
    "use server";

    console.info("Saving data...", Object.fromEntries(data.entries()));

    // Do something with the data, e.g. update the database or send a request to an API.
    // ...
  }

  return <Client update={update} />;
}
