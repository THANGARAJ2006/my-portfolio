"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiBook } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const timeline = [
  { icon: FaGraduationCap, title: "B.E. Electronics & Communication Engineering", org: "Dhaanish Ahmed College of Engineering", detail: "CGPA: 8.5", period: "2022 - 2026" },
  { icon: FiAward, title: "AutoCAD Internship", org: "New Technology Career Solution", detail: "Professional training in 2D & 3D CAD drafting", period: "2024" },
  { icon: FiBook, title: "Smart India Hackathon", org: "Participant", detail: "National-level hackathon competition", period: "2023" },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-[0.3em] uppercase mb-3">My journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Education & <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="w-full rounded-full"
              style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.1))" }}
            />
          </div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row md:text-right" : "md:flex-row-reverse md:text-left"} flex-row text-left`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 mt-2 bg-white" style={{ boxShadow: "0 0 15px rgba(255,255,255,0.4)" }} />
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 glow-on-hover relative overflow-hidden group">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon size={18} className="text-white/50" />
                        <span className="text-xs text-white/25 font-mono">{item.period}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/40 mb-2">{item.org}</p>
                      <p className="text-sm font-medium text-white/60">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}