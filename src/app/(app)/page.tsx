"use client";

import { ArrowUpDown, Grip, Percent } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "~/components/Link";

export default function Home() {
  if (localStorage.getItem("name") && localStorage.getItem("birthday")) {
    redirect("/yearsgrid");
  }
  return (
    <div className="grid items-center justify-center">
      <div className="window-colors grid w-[28rem] grid-cols-1 gap-4 rounded-2xl p-4 text-xl">
        <p className="mb-4 grid justify-center text-center text-4xl font-bold">
          Welcome to Life!
        </p>
        <p className="grid grid-cols-[auto,1fr] items-center gap-2 text-[--foreground-extra-color]">
          <Grip className="size-8" />
          See your time left visualized in dots
        </p>
        <p className="grid grid-cols-[auto,1fr] items-center gap-2 text-[--foreground-extra-color]">
          <ArrowUpDown className="size-8 rotate-90" />
          Tab on period of time to switch views
        </p>
        <p className="grid grid-cols-[auto,1fr] items-center gap-2 text-[--foreground-extra-color]">
          <Percent className="size-8" />
          Tap on remaining time to see it as percentage
        </p>
        <Link
          className="button-colors min-h-12 content-center rounded-2xl text-center"
          href={"/createProfile"}
        >
          Get Started!
        </Link>
      </div>
    </div>
  );
}
