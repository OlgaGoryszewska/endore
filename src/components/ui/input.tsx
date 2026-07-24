import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-ink-muted/70 transition-colors duration-150 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
