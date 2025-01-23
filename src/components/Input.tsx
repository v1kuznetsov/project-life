import { cn } from "~/utils/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "flex min-h-12 w-full rounded-2xl bg-transparent px-3 py-2 text-sm outline outline-1 placeholder:text-[--foreground-extra-color]",
        className,
      )}
      {...props}
    />
  );
}
