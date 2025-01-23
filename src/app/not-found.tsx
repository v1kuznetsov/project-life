"use client";

import { FileX2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="grid items-center justify-center">
      <div className="grid grid-cols-[auto,1fr] items-center justify-center gap-4 text-8xl font-bold">
        <FileX2 className="size-36" />
        <p>Page Not Found</p>
      </div>
    </div>
  );
}
