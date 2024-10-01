"use client";
export default function Account() {
  function signOutEventHandler() {
    localStorage.clear();
  }
  return (
    <>
      <button onClick={signOutEventHandler}>Sign Out</button>
      Account page
    </>
  );
}
