import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full flex items-center">
        {icon && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-[var(--foreground-subtle)]">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full h-10 px-3.5 py-2 bg-[var(--surface)] border border-[var(--border-custom)] rounded-lg text-[var(--foreground)] text-sm placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary-glow)] focus:bg-white transition-all disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3.5 flex items-center pointer-events-none text-[var(--foreground-subtle)]">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
export default Input;
