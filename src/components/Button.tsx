"use client";

import { cn } from "~/utils/cn";
import { useFormStatus } from "react-dom";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonRef?: React.RefObject<HTMLButtonElement>;
  pendingText?: string;
};

export function Button({
  pendingText,
  buttonRef,
  children,
  className,
  ...props
}: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      className={cn(
        "content-center rounded-2xl bg-[--background-light] text-[--foreground-dark]",
        className,
      )}
      disabled={pending}
      ref={buttonRef}
      {...props}
    >
      {pending ? pendingText : children}
    </button>
  );
}
