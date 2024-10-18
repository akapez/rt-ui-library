import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disable:courser-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
        secondary: "text-black",
        destructive: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: ["primary", "secondary"],
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "solid",
        colorscheme: "secondary",
        className: "bg-secondary-300 hover:bg-secondary-400",
      },
      {
        variant: "solid",
        colorscheme: "destructive",
        className: "bg-destructive-500 hover:bg-destructive-600",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "outline",
        colorscheme: "secondary",
        className:
          "text-secondary-600 border-secondary-400 bg-transparent hover:bg-secondary-100",
      },
      {
        variant: "outline",
        colorscheme: "destructive",
        className:
          "text-destructive-500 border-destructive-500 bg-transparent hover:bg-destructive-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "secondary",
        className: "text-secondary-600 bg-transparent hover:bg-secondary-100",
      },
      {
        variant: "ghost",
        colorscheme: "destructive",
        className:
          "text-destructive-500 bg-transparent hover:bg-destructive-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, colorscheme, className })
        )}
        {...props}
      />
    );
  }
);
