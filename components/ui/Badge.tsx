import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border border-[var(--brand-primary)]/20",
        emerald:
          "bg-[var(--brand-emerald-light)] text-[var(--brand-emerald)] border border-[var(--brand-emerald)]/25",
        amber:
          "bg-[var(--accent-amber-light)] text-[var(--accent-amber)] border border-[var(--accent-amber)]/25",
        rose:
          "bg-[var(--accent-rose-light)] text-[var(--accent-rose)] border border-[var(--accent-rose)]/25",
        cyan:
          "bg-[var(--accent-cyan-light)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/25",
        outline:
          "text-[var(--foreground-muted)] border border-[var(--border-custom)] bg-white",
        dark:
          "bg-[var(--surface-dark)] text-white border border-[var(--surface-dark-border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "emerald" && "bg-[var(--brand-emerald)]",
            variant === "amber" && "bg-[var(--accent-amber)]",
            variant === "rose" && "bg-[var(--accent-rose)]",
            variant === "cyan" && "bg-[var(--accent-cyan)]",
            (!variant || variant === "default") && "bg-[var(--brand-primary)]"
          )}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
export default Badge;
