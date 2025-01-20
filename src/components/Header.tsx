import Link from "./Link";

export function Header() {
  return (
    <header className="grid w-full grid-cols-2 grid-rows-1 text-4xl">
      <Link
        href={"/"}
        className="grid w-fit grid-rows-1 gap-2 justify-self-start"
      >
        Home
      </Link>
      <Link
        href={"/"}
        className="grid w-fit grid-rows-1 gap-2 justify-self-start"
      >
        Work
      </Link>
    </header>
  );
}
