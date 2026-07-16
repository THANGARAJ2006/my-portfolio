"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function GravityWord({ word, delay, inView }: { word: string; delay: number; inView: boolean }) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -60, opacity: 0, rotate: -15 }}
          animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: delay + i * 0.04,
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function GravityText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-2">
          <GravityWord word={word} delay={delay + i * 0.05} inView={inView} />
        </span>
      ))}
    </div>
  );
}
