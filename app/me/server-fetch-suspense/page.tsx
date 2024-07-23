import { UserInfo } from "@/app/me/server-fetch/_components/user-info";
import { Suspense } from "react";

export default function MeServerFetchSuspense() {
  return (
    <>
      <p>The data below is fetched on the server and streamed to the client.</p>
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </>
  );
}
