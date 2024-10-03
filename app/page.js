import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link href="/login">Login</Link>
      </header>
      <main>
        <h1>Next Js</h1>
        <p>🔥 Let&apos;s get started! 🔥</p>
      </main>
    </>
  );
}
