"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const words = ["AI-NATIVE", "PRODUCT", "BUILDER"];

export default function Hero({ className }: { className?: string }) {
  return (
    <div
      id="top"
      className={cn(
        "relative flex min-h-[460px] flex-col justify-between rounded-[10px] bg-ink-raised p-7 sm:min-h-[560px] sm:p-9",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-sans text-xs uppercase tracking-[0.2em] text-muted"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-acid" />
        AI-Assisted Software Engineer
      </motion.span>

      <div>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight text-paper">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className={cn(
                  "block",
                  word === "BUILDER" &&
                    "underline decoration-paper/50 decoration-[6px] underline-offset-[8px]"
                )}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-sm font-sans text-base leading-relaxed text-muted sm:text-lg"
        >
          I turn ideas into working software using AI-native development
          workflows.
        </motion.p>
      </div>
    </div>
  );
}
