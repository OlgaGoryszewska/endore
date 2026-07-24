"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
  /** Use a <fieldset>/<legend> instead of <label htmlFor> — for groups like radios. */
  as?: "div" | "fieldset";
}

export function FormField({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
  as = "div",
}: FormFieldProps) {
  const Wrapper = as === "fieldset" ? "fieldset" : "div";

  return (
    <Wrapper className={cn("grid gap-2", className)}>
      <div className="flex w-full items-baseline justify-between gap-2">
        {as === "fieldset" ? (
          <legend className="text-sm font-medium leading-none text-foreground">
            {label}
            {required && (
              <span className="ml-1 text-accent" aria-hidden="true">
                *
              </span>
            )}
          </legend>
        ) : (
          <Label htmlFor={id}>
            {label}
            {required && (
              <span className="ml-1 text-accent" aria-hidden="true">
                *
              </span>
            )}
          </Label>
        )}
        {!required && (
          <span className="text-xs font-medium text-ink-muted">Optional</span>
        )}
      </div>

      {children}

      {hint && !error && (
        <p className="text-xs leading-relaxed text-ink-muted">{hint}</p>
      )}

      <AnimatePresence mode="wait" initial={false}>
        {error && (
          <motion.p
            key="error"
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center gap-1.5 overflow-hidden text-xs font-medium text-danger"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
