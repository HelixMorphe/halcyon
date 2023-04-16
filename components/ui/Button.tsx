import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors  disabled:opacity-50  data-[state=open]:bg-brand-100 ",
  {
    variants: {
      variant: {
        default: "bg-brand-900 text-white hover:bg-brand-700 ",
        destructive: "bg-red-500 text-white hover:bg-red-600 ",
        outline: "bg-transparent border border-brand-200 hover:bg-brand-100 ",
        subtle: "bg-brand-100 text-brand-900 hover:bg-brand-200 ",
        ghost:
          "bg-transparent hover:bg-brand-100   data-[state=open]:bg-transparent ",
        link: "bg-transparent underline-offset-4 hover:underline text-brand-900  hover:bg-transparent ",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
