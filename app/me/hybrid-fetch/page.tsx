import { Suspense } from "react";
import { HybridUserInfo } from "@/app/me/hybrid-fetch/_components/hybrid-user-info";

export default function MeHybridFetch() {
  return (
    <>
      <p>
        The data below is fetched initially on the server and streamed to the
        client.
        <br />
        <br />
        The data is then passed to the client component and can be re-fetched on
        the client on demand.
      </p>
      <Suspense fallback="Loading...">
        <HybridUserInfo />
      </Suspense>
    </>
  );
}
