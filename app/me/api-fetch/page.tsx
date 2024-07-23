import { UserInfo } from "@/app/me/api-fetch/_components/user-info";

export default function MeApiFetch() {
  return (
    <>
      <p>The data below is fetched on the client, after hydration.</p>
      <UserInfo />
    </>
  );
}
