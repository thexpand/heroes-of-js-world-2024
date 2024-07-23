import { UserInfo } from "@/app/me/server-fetch/_components/user-info";

export default function MeServerFetch() {
  return (
    <>
      <p>The data below is fetched on the server.</p>
      <UserInfo />
    </>
  );
}
