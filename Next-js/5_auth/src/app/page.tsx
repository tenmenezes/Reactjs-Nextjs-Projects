import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col bg-zinc-50 font-sans dark:bg-black">
      <Link href="/client">Página com client component</Link>
      <Link href="/server">Página com server component</Link>
      <Link href="/proxy">Página com proxy</Link>
    </div>
  );
}
