import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    type: {
      default: "",
      h1: "text-5xl sm:text-7xl font-bold",
      h2: "text-4xl sm:text-6xl font-bold",
      p: "text-sm lg:text-base",
    },
    defaultVariants: {
      type: "p",
    },
  },
});
