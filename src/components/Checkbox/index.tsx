import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const checkboxStyles = cva([
  "peer",
  "h-4",
  "w-4",
  "shrink-0",
  "rounded-sm",
  "border",
  "border-secondary-400",
  "ring-offset-background",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "data-[state=checked]:bg-primary",
  "data-[state=checked]:text-primary-foreground",
]);

type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles> & {
    label: string;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, disabled, label, ...props }, ref) => {
    return (
      <label htmlFor="checkbox" className="flex items-center space-x-2">
        <input
          id="checkbox"
          ref={ref}
          type="checkbox"
          name="Default"
          checked={checked}
          disabled={disabled}
          className={cn(checkboxStyles({ className }))}
          {...props}
        />
        <span>{label}</span>
      </label>
    );
  }
);
