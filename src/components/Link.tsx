import { cn } from "~/utils/cn";
import NextLink from "next/link";

type Props = React.ComponentPropsWithoutRef<typeof NextLink>;

export default function Link({ className, ...props }: Props) {
  return <NextLink className={cn("font-medium", className)} {...props} />;
}
