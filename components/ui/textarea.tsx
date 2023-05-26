import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { Wand } from "lucide-react";
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <textarea
          className={
            "input-shadow flex min-h-[80px] w-full rounded-md bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          }
          ref={ref}
          {...props}
        />
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-2 right-2"
        >
          <Button
            variant={"secondary"}
            size={"sm"}
            className="text-xs flex items-center justify-center gap-2 text-slate-700 bg-blue-50 hover:bg-blue-100/50"
            type="button"
          >
            <Wand size={20} />
            <p>Use AI</p>
          </Button>
        </motion.div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
