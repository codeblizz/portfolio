"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
      <section className="flex flex-col justify-center md:min-w-fit md:min-h-fit items-center text-center text-wrap gap-y-4 font-san border-indigo-400 p-10 rounded-2xl bg-white/30 text-black">
        <p className="text-5xl font-extrabold">Not Found</p>
        <p className="font-bold text-3xl">Could not find requested resource</p>
        <p className="text-semibold text-2xl">
          Need help further down the links below
        </p>
        <section className="mt-3 w-full h-auto flex items-center justify-center p-4 gap-x-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-3xl cursor-pointer max-h-dvh text-center bg-black px-3.5 py-2.5 text-sm font-semibold w-[45%] text-white"
          >
            {"Go back"}
          </button>
          <Link
            href={"/contact"}
            className="text-lg font-semibold h-auto text-center text-gray-900 rounded-3xl px-[0.7rem] border-2 py-[0.3rem] border-b-gray-700"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>
      </section>
    </div>
  );
}
