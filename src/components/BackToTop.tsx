"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-[998] w-12 h-12 rounded-full glass flex items-center justify-center text-neon-blue hover:border-neon-blue/30 transition-all duration-300"
      style={{
        boxShadow: visible ? "0 0 20px rgba(0,212,255,0.2)" : "none",
      }}
    >
      <FiArrowUp size={18} />
    </motion.button>
  );
}
