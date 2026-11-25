import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-paper border border-ink hover:bg-accent hover:border-accent transition-colors",
  outline:
    "bg-transparent text-ink border border-line-strong hover:border-ink transition-colors",
  ghost: "bg-transparent text-ink-soft border border-transparent hover:text-ink transition-colors",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-3 text-sm",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[2px] tracking-wide transition-colors disabled:opacity-50 disabled:pointer-events-none";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  ...rest
}: ButtonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
