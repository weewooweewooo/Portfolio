"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 mt-3 text-white flex justify-center items-center">
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <Link
            href="/"
            className="opacity-60 hover:opacity-100 hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="opacity-60 hover:opacity-100 hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="opacity-60 hover:opacity-100 hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
