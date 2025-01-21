"use client";
import CopyIcon from "@/svg/copy";
import React, { useRef } from "react";
import { motion } from "motion/react";
export default function CopyBtn({ randomString }: { randomString: string }) {
  const elem = useRef<HTMLSpanElement | null>(null);
  return (
    <motion.div
      className="mt-3 flex h-10 w-1/2 cursor-pointer items-center justify-center gap-4 rounded-lg bg-purple-800 p-2 font-mono font-semibold"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => {
        "use client";
        if (elem.current) {
          elem.current.innerText = "COPIED!";
          setTimeout(() => {
            if (elem.current) elem.current.innerText = "COPY!";
          }, 2000);
        }
        window.navigator.clipboard.writeText(randomString);
      }}
    >
      <CopyIcon className="size-5" />
      <span ref={elem}>COPY!</span>
    </motion.div>
  );
}
