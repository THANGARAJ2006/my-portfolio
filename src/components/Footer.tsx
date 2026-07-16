"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-2xl font-bold gradient-text mb-4">T.</p>
        <p className="text-white/25 text-sm mb-2">
          Designed & Built by <span className="text-white/40">Thangaraj</span>
        </p>
        <p className="text-white/15 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <FiArrowUp size={18} />
      </motion.button>
    </footer>
  );
}