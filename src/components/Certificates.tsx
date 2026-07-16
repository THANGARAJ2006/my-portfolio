"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";

const certificates = [
  { title: "AutoCAD Internship", org: "New Technology Career Solution", icon: FiAward },
  { title: "Naan Mudhalvan", org: "Skill Development Program", icon: FiCheckCircle },
  { title: "Kodacy Online Internship", org: "Kodacy Technologies", icon: FiAward },
  { title: "Tech Hunt Workshop", org: "Technical Workshop", icon: FiCheckCircle },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-[0.3em] uppercase mb-3">Achievements</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Certificates & <span className="gradient-text">Events</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group glow-on-hover shine-effect relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 animate-float bg-white/5 group-hover:bg-white/10" style={{ animationDelay: `${i * 0.5}s` }}>
                  <cert.icon size={24} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{cert.title}</h3>
                <p className="text-white/30 text-xs">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}