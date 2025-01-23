"use client";

import { CircleX } from "lucide-react";

export default function Error() {
  return (
    <div className="grid items-center justify-center">
      <div className="grid grid-cols-[auto,1fr] items-center justify-center gap-4 text-8xl font-bold">
        <CircleX className="size-36" />
        <p>Something went wrong</p>
      </div>
    </div>
  );
}
