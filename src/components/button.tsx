import { cn } from "@/lib/utlis";
import * as motion from "framer-motion/client";

interface ButtonProps {
  text: string;
  varient: "primary" | "secondary";
}

export function Button({ text, varient }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={cn(
        ` rounded-full px-6 py-2 text-sm font-semibold text-center   ${
          varient === "primary"
            ? "bg-blue-500 hover:bg-blue-700 transition-all"
            : "border border-slate-300 hover:bg-slate-100 hover:text-slate-900 transition-all"
        }`
      )}
    >
      {text}
    </motion.button>
  );
}
