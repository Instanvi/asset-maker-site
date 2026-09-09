"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] shadow-xs hover:shadow-[var(--shadow-glow)] active:scale-[0.99]",
        secondary:
          "bg-[var(--surface-raised)] text-[var(--foreground)] hover:bg-[var(--surface-muted)] border border-[var(--border-custom)] active:scale-[0.99]",
        emerald:
          "bg-[var(--brand-emerald)] text-white hover:bg-[var(--brand-emerald-hover)] shadow-xs hover:shadow-[var(--shadow-emerald-glow)] active:scale-[0.99]",
        outline:
          "bg-white text-[var(--foreground)] border border-[var(--border-custom)] hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] hover:text-[var(--brand-primary)] active:scale-[0.99]",
        ghost:
          "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-raised)]",
        dark:
          "bg-[var(--surface-dark)] text-white hover:bg-[var(--surface-dark-card)] shadow-xs active:scale-[0.99]",
        link: "text-[var(--brand-primary)] underline-offset-4 hover:underline p-0 h-auto font-medium",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm rounded-lg",
        sm: "h-8.5 px-3 text-xs rounded-md",
        lg: "h-11 px-6 text-sm rounded-lg font-bold",
        xl: "h-12 px-7 text-base rounded-lg font-bold tracking-tight",
        icon: "h-9 w-9 p-0 rounded-lg",
        "icon-sm": "h-7.5 w-7.5 p-0 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, target, rel, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
