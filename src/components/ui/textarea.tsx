import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded-xl border border-black/10 bg-background px-4 py-3 text-[15px] leading-6 text-foreground placeholder:text-ink-muted/70 transition-colors duration-150 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
