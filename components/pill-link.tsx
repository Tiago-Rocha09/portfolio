import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const styles = {
  solid:
    "bg-foreground text-background hover:opacity-80",
  outline:
    "border border-foreground bg-transparent text-foreground hover:opacity-80",
} as const;

export function PillLink({
  href,
  variant = "solid",
  className,
  children,
}: {
  href: "/" | "/engenharia-com-ia" | `https://${string}` | `#${string}`;
  variant?: keyof typeof styles;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(
    "inline-flex min-h-[52px] items-center rounded-full px-7 font-medium no-underline focus-ring",
    styles[variant],
    className,
  );

  if (href === "/" || href === "/engenharia-com-ia") {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("https://");

  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
