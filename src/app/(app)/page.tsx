import { ArrowUpDown, Grid3x3 } from "lucide-react";
import Link from "~/components/Link";

export default function Home() {
  // throw new Error("Something went wrong");
  return (
    <div className="window-colors grid w-fit grid-cols-1 gap-4 rounded-2xl p-4 text-xl">
      <p className="my-4 grid justify-center text-4xl font-bold">
        Welcome to Life!
      </p>
      <p className="grid grid-cols-[auto,1fr] items-center gap-2 text-[--foreground-extra-color]">
        <Grid3x3 className="size-8" />
        See your time left visualized in dots
      </p>
      <p className="grid grid-cols-[auto,1fr] items-center gap-2 text-[--foreground-extra-color]">
        <ArrowUpDown className="size-8 rotate-90" />
        Tab on period of time to switch views
      </p>
      <Link
        className="button-colors min-h-12 content-center rounded-2xl text-center"
        href={"/"}
      >
        Get Started!
      </Link>
    </div>
  );
}
