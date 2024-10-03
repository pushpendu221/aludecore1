"use client";
import { useRouter } from "next/navigation";
export default function Account() {
  const router = useRouter();
  function signOutEventHandler() {
    localStorage.clear();
    router.push("/");
  }
  return (
    <>
      <button onClick={signOutEventHandler}>Sign Out</button>
      Account page
    </>
  );
}
