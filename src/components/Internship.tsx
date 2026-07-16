"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Internship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Where I&apos;ve Worked</p>
          <h2 className="section-heading gradient-text">Experience</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden group"
          >
            {/* Neon border animation */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, #00d4ff, transparent, #7b2ff7, transparent)",
                  padding: "1px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                  <FiBriefcase className="text-neon-blue" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-poppins font-semibold text-white">
                    AutoCAD Intern
                  </h3>
                  <p className="text-sm font-sora text-neon-blue mt-1">
                    New Technology Career Solution
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/40 font-inter">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} /> Duration: 1 Month
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} /> Remote
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Gained hands-on experience with AutoCAD software for 2D drafting and 3D modeling",
                  "Completed practical assignments involving circuit board layouts and mechanical drawings",
                  "Developed proficiency in creating technical drawings and engineering documentation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 flex-shrink-0" />
                    <p className="text-sm text-white/50 font-inter leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
