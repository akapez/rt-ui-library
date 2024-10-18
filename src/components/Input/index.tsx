import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva([
  "h-10",
  "w-full",
  "border",
  "border-secondary-400",
  "bg-background",
  "px-3",
  "py-2",
  "text-sm",
  "rounded-md",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500",
  "focus:border-transparent",
  "placeholder:text-secondary-400",
  "placeholder:text-sm",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);
