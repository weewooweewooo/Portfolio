import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-6xl font-bold">Hi, I&apos;m Sean Lee</h1>
        <p className="mt-4 text-lg opacity-60">
          You only live once, make it count.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/projects"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            My Projects
          </Link>
          <Link
            href="https://github.com/weewooweewooo"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            <FaGithub className="mr-2" />
            <p>Github</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
