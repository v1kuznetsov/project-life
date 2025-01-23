import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <LoaderCircle className="size-36 animate-spin" />
    </div>
  );
}
